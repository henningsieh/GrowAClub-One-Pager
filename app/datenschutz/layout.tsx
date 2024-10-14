import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Datenschutzerklärung - GrowAClub.de | Softwarelösung für Cannabisanbauvereine",
  description:
    "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf GrowAClub.de",
  openGraph: {
    title:
      "Datenschutzerklärung - GrowAClub.de | Softwarelösung für Cannabisanbauvereine",
    description:
      "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf GrowAClub.de",
    url: "https://growaclub.de/datenschutz",
    siteName: "GrowAClub",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://growaclub.de/datenschutz",
  },
  keywords: ["Datenschutzerklärung", "Datenschutz"],
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
