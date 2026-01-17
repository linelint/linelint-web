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
  title: 'LineLint - Stop Overpaying Your Uniform & Linen Vendors',
  description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
  openGraph: {
    title: 'LineLint - Stop Overpaying Your Uniform & Linen Vendors',
    description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
    url: 'https://linelint.com',
    siteName: 'LineLint',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/linelint-opengraph.png',
        width: 1200,
        height: 630,
        alt: 'LineLint Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'LineLint - Stop Overpaying Your Uniform & Linen Vendors',
    description: 'LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.',
    images: ['/linelint-opengraph.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <body
        className={'antialiased'}
      >
        <Header />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </body>
    </html>
  );
}
