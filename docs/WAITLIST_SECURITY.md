# Waitlist API - Security Implementation

## Overview

The waitlist API endpoint (`/api/waitlist`) implements multiple layers of security to prevent abuse, spam, and enumeration attacks. It acts as a secure proxy between your Vercel-hosted landing page and your VPS backend.

## Architecture

```
User's Browser → Vercel (/api/waitlist) → VPS (api.linelint.com/waitlist) → Database
```

## Security Features

### 1. **Rate Limiting** ✅
- **3 requests per minute per IP**
- In-memory rate limiting (upgrade to Redis/Vercel KV for multi-instance deployments)
- Returns generic success response when limit exceeded (no error leak)

### 2. **Bot Protection** ✅

#### Honeypot Fields
- Hidden form fields (`website` or `honeypot`)
- If filled, request is silently rejected
- Bot doesn't know it failed

#### Time-to-Submit Detection
- Tracks how long user takes to submit form
- Rejects submissions faster than 800ms
- Send `formLoadTime` timestamp from frontend

#### User-Agent Tracking
- Logs user agent for spam pattern analysis
- Forwarded to VPS for advanced bot detection

### 3. **Input Validation** ✅
- Email format validation
- Email normalization (trim, lowercase)
- Length checks (3-254 characters)
- Content-Type enforcement (application/json only)

### 4. **Anti-Enumeration** ✅
- **Always returns `{ ok: true }`** regardless of:
  - Email already exists
  - Validation failure
  - Rate limit hit
  - VPS error
  - Any exception
- Prevents attackers from discovering valid emails
- Logs real errors server-side only

### 5. **CORS Security** ✅
- Explicit origin whitelist
- Not using wildcard (`*`)
- Configurable via `NEXT_PUBLIC_SITE_URL`
- OPTIONS preflight handler included

### 6. **Request Verification** ✅
- Shared secret header (`X-API-Secret`)
- VPS validates requests come from your Vercel app
- Prevents direct VPS abuse

## Frontend Integration

### Basic Form Example

```javascript
'use client';

import { useState, useEffect } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [formLoadTime, setFormLoadTime] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    // Track when form loaded for bot detection
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          formLoadTime, // For bot detection
          // Honeypot field (keep hidden in form)
          website: '', // Should always be empty
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot field - hide with CSS, not display:none */}
      <input
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>

      {status === 'success' && <p>Thanks for joining! 🎉</p>}
      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}
```

### Key Frontend Requirements

1. **Include `formLoadTime`** - Timestamp when form loaded
2. **Add honeypot field** - Hidden input that should stay empty
3. **Use `Content-Type: application/json`**
4. **Client-side validation** - Show friendly errors before submission
5. **Handle generic response** - API always returns `{ ok: true }`

## Environment Variables

Create a `.env.local` file (already in `.gitignore`):

```bash
VPS_WAITLIST_ENDPOINT=https://api.linelint.com/waitlist
VPS_WAITLIST_API_SECRET=generate-a-strong-random-secret-here
NEXT_PUBLIC_SITE_URL=https://linelint.com
```

### Generate Secret

```bash
openssl rand -base64 32
```

## VPS Backend Requirements

Your VPS endpoint should:

1. **Verify `X-API-Secret` header** matches shared secret
2. **Validate origin** - Check request comes from expected source
3. **Enforce CORS** - Only allow your Vercel domains
4. **Check email uniqueness** - Use `UNIQUE` index on email column
5. **Store metadata** - IP prefix (/24), user agent, timestamp
6. **Return generic response** - `{ ok: true }` for all cases
7. **Implement database rate limiting** - Additional layer on top of Vercel
8. **Set up monitoring** - Log suspicious patterns

### Example VPS Validation

```javascript
// VPS endpoint pseudo-code
app.post('/waitlist', async (req, res) => {
  // 1. Verify secret
  if (req.headers['x-api-secret'] !== process.env.API_SECRET) {
    return res.json({ ok: true }); // Don't reveal auth failure
  }

  // 2. Validate input
  const { email, metadata } = req.body;
  
  // 3. Store in database (with UNIQUE constraint on email)
  try {
    await db.query(
      'INSERT INTO waitlist (email, ip, user_agent, created_at) VALUES (?, ?, ?, NOW()) ON DUPLICATE KEY UPDATE updated_at = NOW()',
      [email, metadata.ip, metadata.userAgent]
    );
  } catch (error) {
    console.error('DB error:', error);
  }

  // 4. Always return success
  return res.json({ ok: true });
});
```

## Upgrade Path

### For Production Scale:

1. **Replace in-memory rate limiting** with:
   - [Vercel KV](https://vercel.com/docs/storage/vercel-kv) (Redis)
   - Or [Upstash Redis](https://upstash.com/)

2. **Add Cloudflare Turnstile/reCAPTCHA**:
   - For additional bot protection
   - Verify token server-side before forwarding to VPS

3. **Use Cloudflare in front of VPS**:
   - Managed Challenge for suspicious traffic
   - WAF rules
   - Advanced DDoS protection

4. **Set up monitoring**:
   - Alert on unusual submission patterns
   - Track rate limit violations
   - Monitor VPS response times

## Testing

### Test Rate Limiting

```bash
# Should succeed first 3 times, then silently reject
for i in {1..5}; do
  curl -X POST https://linelint.com/api/waitlist \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com","formLoadTime":'$(date +%s000)'}'
  echo ""
done
```

### Test Honeypot

```bash
# Should silently reject
curl -X POST https://linelint.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","website":"filled-by-bot"}'
```

### Test Bot Detection

```bash
# Should reject (formLoadTime too recent)
curl -X POST https://linelint.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","formLoadTime":'$(date +%s000)'}'
```

## Security Checklist

- [x] Rate limiting (3/min per IP)
- [x] Honeypot field
- [x] Time-to-submit detection
- [x] Input validation & normalization
- [x] Anti-enumeration (generic responses)
- [x] CORS restrictions
- [x] Shared secret verification
- [x] Request timeout (5s)
- [x] Content-Type enforcement
- [x] Error logging (server-side only)
- [ ] Cloudflare/Turnstile (add if spam appears)
- [ ] Vercel KV for rate limiting (for multi-instance)
- [ ] Database-level rate limiting on VPS

## Notes

- **All security measures are "silent"** - bots get success responses
- **Legitimate users always see success** - even if validation fails
- **Real errors logged server-side** - for monitoring
- **VPS is single source of truth** - Vercel is just a secure proxy
