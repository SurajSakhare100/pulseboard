import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PulseBoard - Client Update Portal",
  description: "The lightweight client update portal built for freelancers and small studios. It replaces scattered emails, Notion pages, and status calls with a single, branded link where clients can view real-time project progress, updates, and shared files — no logins, no friction. Freelancers stay in control, reduce inbox noise, and build trust, while clients feel consistently informed without needing to ask, “Any update?”",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script src="https://getlaunchlist.com/js/widget.js" defer>
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
