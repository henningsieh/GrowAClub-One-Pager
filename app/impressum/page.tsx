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

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

export default function Imprint() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-14">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
          <Card className="bg-white dark:bg-stone-900">
            <CardHeader>
              <h1 className="text-3xl font-bold text-green-700 dark:text-yellow-500">
                Impressum
              </h1>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <section>
                <p className="text-lg">
                  Benjamin Klein
                  <br />
                  Benjamin Klein -{" "}
                  <a
                    href="https://webkult.de/"
                    className="text-green-600 hover:underline dark:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    webkult.de <ExternalLink className="inline-block h-4 w-4" />
                  </a>
                  <br />
                  Kleine Dorfstraße 5<br />
                  38312 Börßum
                </p>
              </section>

              <Separator className="my-6" />

              <section>
                <h2 className="mb-2 text-2xl font-semibold text-green-600 dark:text-yellow-500">
                  Kontakt
                </h2>
                <p>
                  Telefon: +49 151 546 172 46
                  <br />
                  E-Mail: support@growagram.com
                </p>
              </section>

              <Separator className="my-6" />

              <section>
                <h2 className="mb-2 text-2xl font-semibold text-green-600 dark:text-yellow-500">
                  Angaben zur Berufs­haftpflicht­versicherung
                </h2>
                <p>
                  <strong>Name und Sitz des Versicherers:</strong>
                  <br />
                  VHV Allgemeine Versicherung AG
                  <br />
                  VHV-Platz 1<br />
                  30177 Hannover
                </p>
              </section>

              <Separator className="my-6" />

              <section>
                <h2 className="mb-2 text-2xl font-semibold text-green-600 dark:text-yellow-500">
                  Redaktionell verantwortlich
                </h2>
                <p>
                  Benjamin Klein
                  <br />
                  Benjamin Klein -{" "}
                  <a
                    href="https://webkult.de/"
                    className="text-green-600 hover:underline dark:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    webkult.de <ExternalLink className="inline-block h-4 w-4" />
                  </a>
                  <br />
                  Kleine Dorfstraße 5<br />
                  38312 Börßum
                </p>
              </section>

              <Separator className="my-6" />

              <section>
                <h2 className="mb-2 text-2xl font-semibold text-green-600 dark:text-yellow-500">
                  EU-Streitschlichtung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    className="mt-1 block text-green-600 hover:underline dark:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr/{" "}
                    <ExternalLink className="inline-block h-4 w-4" />
                  </a>
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <Separator className="my-6" />

              <section>
                <h2 className="mb-2 text-2xl font-semibold text-green-600 dark:text-yellow-500">
                  Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <Separator className="my-6" />

              <section>
                <h2 className="mb-2 text-2xl font-semibold text-green-600 dark:text-yellow-500">
                  Zentrale Kontaktstelle nach dem Digital Services Act - DSA
                  (Verordnung (EU) 2022/265)
                </h2>
                <p>
                  Unsere zentrale Kontaktstelle für Nutzer und Behörden nach
                  Art. 11, 12 DSA erreichen Sie wie folgt:
                </p>
                <p className="mt-2">
                  E-Mail: support@growagram.com
                  <br />
                  Telefon: +49 151 546 172 46
                </p>
                <p className="mt-2">
                  Die für den Kontakt zur Verfügung stehenden Sprachen sind:
                  Deutsch, Englisch
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
