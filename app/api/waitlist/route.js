import { NextResponse } from 'next/server';

// Simple in-memory rate limiter (use Redis/Vercel KV for production multi-instance deployments)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 requests per minute per IP

// Minimum time to submit (bot detection)
const MIN_SUBMIT_TIME_MS = 800;

// VPS endpoint - replace with your actual VPS API endpoint
const VPS_ENDPOINT = process.env.VPS_WAITLIST_ENDPOINT || 'https://app.linelint.com/api/waitlist';

function getRateLimitKey(ip) {
  return `waitlist:${ip}`;
}

function checkRateLimit(ip) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Get existing requests for this IP
  let requests = rateLimitMap.get(key) || [];

  // Filter out requests outside the current window
  requests = requests.filter(timestamp => timestamp > windowStart);

  // Check if limit exceeded
  if (requests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  // Add current request
  requests.push(now);
  rateLimitMap.set(key, requests);

  // Cleanup old entries periodically
  if (Math.random() < 0.01) { // 1% chance
    cleanupRateLimitMap();
  }

  return true;
}

function cleanupRateLimitMap() {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  for (const [key, requests] of rateLimitMap.entries()) {
    const validRequests = requests.filter(timestamp => timestamp > windowStart);

    if (validRequests.length === 0) {
      rateLimitMap.delete(key);
    } else {
      rateLimitMap.set(key, validRequests);
    }
  }
}

function getClientIP(request) {
  // Check various headers for real IP (Vercel provides x-forwarded-for)
  const forwarded = request.headers.get('x-forwarded-for');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown';
}

function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Trim and lowercase
  email = email.trim().toLowerCase();

  // Length check
  if (email.length < 3 || email.length > 254) {
    return false;
  }

  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export async function POST(request) {
  const startTime = Date.now();

  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check Content-Type
    const contentType = request.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      // Return generic success to avoid leaking info (bot/security)
      return NextResponse.json({
        ok: true,
        message: 'Thanks! We\'ll be in touch soon.'
      }, { status: 200 });
    }

    // Parse body with size limit check
    const body = await request.json();

    // Honeypot check - if 'website' field is filled, it's likely a bot
    if (body.website || body.honeypot) {
      console.log('[Security] Honeypot triggered:', { ip: clientIP });

      // Return success to not alert the bot
      return NextResponse.json({
        ok: true,
        message: 'Thanks! We\'ll be in touch soon.'
      }, { status: 200 });
    }

    // Bot detection: check minimum time to submit
    const formLoadTime = body.formLoadTime;

    if (formLoadTime) {
      const timeTaken = startTime - formLoadTime;

      if (timeTaken < MIN_SUBMIT_TIME_MS) {
        console.log('[Security] Form submitted too quickly:', { ip: clientIP, timeTaken });

        // Return success to not alert the bot
        return NextResponse.json({
          ok: true,
          message: 'Thanks! We\'ll be in touch soon.'
        }, { status: 200 });
      }
    }

    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      console.log('[Security] Rate limit exceeded:', { ip: clientIP });

      // Return generic success to avoid enumeration (bot/security)
      return NextResponse.json({
        ok: true,
        message: 'Thanks! We\'ll be in touch soon.'
      }, { status: 200 });
    }

    // Extract and validate email
    const { email } = body;

    if (!validateEmail(email)) {
      // This is a legitimate validation error, not a security concern
      return NextResponse.json({
        ok: false,
        message: 'Please enter a valid email address.'
      }, { status: 400 });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Forward to VPS
    try {
      const vpsResponse = await fetch(VPS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Optional: Add a secret header for VPS to verify request comes from your Vercel app
          'X-API-Secret': process.env.VPS_WAITLIST_API_SECRET || '',
        },
        body: JSON.stringify({
          email: normalizedEmail,
          metadata: {
            ip: clientIP,
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            timestamp: new Date().toISOString(),
          }
        }),
        // Timeout after 5 seconds
        signal: AbortSignal.timeout(5000),
      });

      // Log VPS response for debugging (don't expose to client)
      if (!vpsResponse.ok) {
        console.error('[VPS Error]', {
          status: vpsResponse.status,
          statusText: vpsResponse.statusText,
        });
      }
    } catch (vpsError) {
      // Log VPS error but don't expose to client
      console.error('[VPS Request Failed]', vpsError.message);
      // Still return success to client to prevent enumeration
    }

    // Return success response with proper message
    return NextResponse.json({
      ok: true,
      message: 'Thanks for joining! We\'ll be in touch soon.'
    }, { status: 200 });
  } catch (error) {
    console.error('[Waitlist API Error]', error);

    // Return error response for unexpected errors
    return NextResponse.json({
      ok: false,
      message: 'Something went wrong. Please try again.'
    }, { status: 500 });
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'https://linelint.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400', // 24 hours
    },
  });
}
