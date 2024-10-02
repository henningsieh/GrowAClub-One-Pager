import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
 
export const metadata: Metadata = {
  title: "Cannabis Association Cultivation Manager | by GrowAGram",
  description: "GrowaGram is a comprehensive SaaS platform for cannabis growing associations in Germany, supporting legal documentation and reporting requirements. Manage grows, plants, feedings, and inventories while ensuring compliance with German law. Multi-client, multilingual, and tailored to cannabis cultivation environments, GrowaGram simplifies tracking and reporting for associations.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
