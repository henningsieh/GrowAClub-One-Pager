import { Metadata } from "next";
import keywordsData from "@/assets/keywords.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://growaclub.de"),
  title: "GrowAClub.de | Softwarelösung für Cannabisanbauvereine",
  description:
    "Die All-in-One Softwarelösung für den legalen Betrieb eines Cannabis-Anbauvereins in Deutschland.",
  openGraph: {
    title: "GrowAClub.de | Softwarelösung für Cannabisanbauvereine",
    description:
      "Die All-in-One Cloud-Lösung für den legalen Betrieb eines Cannabis-Anbauvereins in Deutschland.",
    url: "https://growaclub.de",
    siteName: "GrowAClub",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/GrowAClub_logo.png",
        width: 490,
        height: 490,
        alt: "GrowAClub Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://growaclub.de",
  },
  keywords: keywordsData.keywords,
};

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";

const montserratFont = Montserrat({ subsets: ["latin"], weight: "400" });
const robotoFont = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`mx-auto antialiased ${robotoFont.className} ${montserratFont.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
