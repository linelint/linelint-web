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
  title: "LineLint | Automating Vendor Invoice Audits",
  description: "Continuous spend monitoring and contract compliance for vendor invoices. Catch overcharges and missed credits automatically.",
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
