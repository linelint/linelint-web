import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://linelint.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  title: 'LineLint - Stop Overpaying Your Uniform & Linen Vendors',
  description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
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
    title: 'LineLint - Stop Overpaying Your Uniform & Linen Vendors',
    description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
    url: 'https://linelint.com',
    siteName: 'LineLint',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LineLint - Stop Overpaying Your Uniform & Linen Vendors',
    description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
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
    <html lang='en' className={`${inter.className}`}>
      <body
        className={'antialiased'}
      >
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LineLint',
              url: 'https://linelint.com',
              logo: 'https://linelint.com/icon.png',
              description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
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
