'use client';

import { useRef, useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Honeypot field (should stay empty)
  const [status, setStatus] = useState('idle'); // idle, loading, error
  const [message, setMessage] = useState('');
  // eslint-disable-next-line react-hooks/purity
  const formLoadTime = useRef(Date.now()); // Track when form loaded

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          website: honeypot, // Honeypot field
          formLoadTime: formLoadTime.current, // Bot detection
        }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus('idle');
        setMessage(data.message || 'You are on the list! We will be in touch soon.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='w-full max-w-md'>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-3'>
        {/* Honeypot field - hidden from users but bots might fill it */}
        <input
          type='text'
          name='website'
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete='off'
          className='absolute opacity-0 pointer-events-none'
          aria-hidden='true'
        />

        <input
          type='email'
          required
          placeholder='Enter your work email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className='flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-300/80 focus:border-transparent transition-all disabled:opacity-50'
        />
        <button
          type='submit'
          disabled={status === 'loading'}
          className='px-6 py-3 bg-white text-black enabled:hover:bg-blue-300 font-medium rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-blue-300/80 focus:border-transparent enabled:cursor-pointer disabled:opacity-50 whitespace-nowrap'
        >
          Join Waitlist
        </button>
      </form>

      <p className={`mt-4 text-sm ${message
        ? (status === 'error' ? 'text-red-400' : 'text-emerald-400')
        : 'text-slate-400'
      }`}>
        {message || 'Join the waitlist for early access.'}
      </p>
    </div>
  );
}
