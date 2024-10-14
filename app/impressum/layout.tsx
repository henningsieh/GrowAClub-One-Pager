import { Metadata } from "next";
import keywordsData from "@/assets/keywords.json";

export const metadata: Metadata = {
  title: "Impressum - GrowAClub.de | Softwarelösung für Cannabisanbauvereine",
  description: "Rechtliche Informationen und Kontaktdaten für GrowAClub.de",
  openGraph: {
    title: "Impressum - GrowAClub.de | Softwarelösung für Cannabisanbauvereine",
    description: "Rechtliche Informationen und Kontaktdaten für GrowAClub.de",
    url: "https://growaclub.de/impressum",
    siteName: "GrowAClub",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://growaclub.de/impressum",
  },
  keywords: keywordsData.keywords,
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
