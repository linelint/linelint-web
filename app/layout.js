import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

import Header from "./components/Header";

const inter = Inter({
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  subsets: ['latin'],
});

export const metadata = {
  title: "LineLint - Stop Overpaying Your Uniform & Linen Vendors",
  description: "LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.",
  openGraph: {
    title: "LineLint - Stop Overpaying Your Uniform & Linen Vendors",
    description: "LineLint automatically catches overcharges, missed credits, and contract violations.",
    url: 'https://linelint.com',
    siteName: 'LineLint',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LineLint - Stop Overpaying Your Uniform & Linen Vendors",
    description: "LineLint automatically catches overcharges, missed credits, and contract violations.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </body>
    </html>
  );
}
