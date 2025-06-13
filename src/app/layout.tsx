import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "UpdateBoard - Client Update Portal",
  description: "A super simple client update portal for freelancers to share project progress, files, and notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
     
      <body>{children}
        <script src="https://getlaunchlist.com/js/widget.js" defer> </script>


      </body>
    </html>
  );
}
