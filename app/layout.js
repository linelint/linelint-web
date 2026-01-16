import { Inter } from "next/font/google";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
