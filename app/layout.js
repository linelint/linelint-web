import './globals.css';
import './homepage.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  metadataBase: new URL('https://linelint.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  title: 'LineLint — Vendor Compliance Intelligence',
  description: 'LineLint is AI-powered compliance intelligence for uniform and linen spend, surfacing contract violations, unauthorized fees, and hidden pricing drift.',
  applicationName: 'LineLint',
  keywords: ['invoice audit', 'linen service savings', 'uniform rental audit', 'cost recovery', 'contract compliance'],
  authors: [{ name: 'LineLint' }],
  category: 'Business Services',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon-maskable.png', color: '#020617' },
    ],
  },
  openGraph: {
    title: 'LineLint — Vendor Compliance Intelligence',
    description: 'LineLint is AI-powered compliance intelligence for uniform and linen spend, surfacing contract violations, unauthorized fees, and hidden pricing drift.',
    url: 'https://linelint.com',
    siteName: 'LineLint',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LineLint — Vendor Compliance Intelligence',
    description: 'LineLint is AI-powered compliance intelligence for uniform and linen spend, surfacing contract violations, unauthorized fees, and hidden pricing drift.',
  },
};

export const viewport = {
  themeColor: '#020617',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={'antialiased'}
      >
        {children}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LineLint',
              url: 'https://linelint.com',
              logo: 'https://linelint.com/icon.png',
              description: 'LineLint is AI-powered compliance intelligence for uniform and linen spend, surfacing contract violations, unauthorized fees, and hidden pricing drift.',
              sameAs: [
                'https://linkedin.com/company/linelint',
                'https://x.com/line_lint',
              ],
            }),
          }}
        />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </body>
    </html>
  );
}
