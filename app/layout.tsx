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
  keywords: [
    "legaler Cannabisanbau",
    "Cannabis Social Club",
    "CSC",
    "CanG",
    "Cannabis",
    "Cannabis-Cloud-Lösung",
    "Hanfclub",
    "Hanf-Club",
    "Hanfverein",
    "Hanf-Verein",
    "Anbauverein",
    "Anbau-Verein",
    "Anbaulizenz",
    "Anbau-Lizenz",
    "Cannabisclub",
    "Cannabis-Club",
    "Cannabisgesetz",
    "Cannabis-Gesetz",
    "Cannabisreform",
    "Cannabis-Reform",
    "Cannabislegalisierung",
    "Cannabis-Legalisierung",
    "Anbauvereinigung",
    "Anbau-Vereinigung",
    "Cannabisanbaugemeinschaft",
    "Cannabis-Anbaugemeinschaft",
    "Cannabisgenossenschaft",
    "Cannabis-Genossenschaft",
    "Cannabislizenz",
    "Cannabis-Lizenz",
    "Cannabisabgabe",
    "Cannabis-Abgabe",
    "Cannabisselbstversorgung",
    "Cannabis-Selbstversorgung",
    "Cannabismitgliedschaft",
    "Cannabis-Mitgliedschaft",
    "Cannabisverein",
    "Cannabis-Verein",
    "Cannabiscommunity",
    "Cannabis-Community",
    "Cannabisschwarzmarktalternative",
    "Cannabis-Schwarzmarkt-Alternative",
    "Cannabisqualitätskontrolle",
    "Cannabis-Qualitätskontrolle",
    "Cannabisaufklärung",
    "Cannabis-Aufklärung",
    "Cannabisjugendschutz",
    "Cannabis-Jugendschutz",
    "Cannabisregulierung",
    "Cannabis-Regulierung",
    "Cannabisgesetzgebung",
    "Cannabis-Gesetzgebung",
    "Cannabisanbaudeutschland",
    "Cannabis-Anbau-Deutschland",
    "Cannabisabgabestelle",
    "Cannabis-Abgabestelle",
    "Cannabismitgliederbeitrag",
    "Cannabis-Mitgliederbeitrag",
    "Cannabisvereinmanagement",
    "Cannabis-Vereinsmanagement",
  ],
};

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

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
