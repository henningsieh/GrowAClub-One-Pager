"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Clock,
  Handshake,
  Scale,
  HandCoins,
  ExternalLink,
  ShieldCheck,
  FileText,
  Database,
  ScrollText,
} from "lucide-react";

// import { PricingTier } from "@/components/PricingTier";

import {
  inquiryEmailBody,
  inquiryEmailSubject,
  recipientAddress,
} from "@/assets/InquiryEmailBody"; // Adjust the path based on your project structure

export default function LandingPage() {
  const handleDemoRequest = () => {
    const recipient = encodeURIComponent(recipientAddress);
    const subject = encodeURIComponent(inquiryEmailSubject);
    const body = encodeURIComponent(inquiryEmailBody);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-14">
        <section className="w-full py-8 md:py-16 lg:py-24" id="top">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  CanG-konform mit
                </h2>

                <h1 className="py-2 text-6xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="text-green-700 dark:text-yellow-500">
                    GrowAClub
                  </span>
                </h1>

                <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-300 md:text-lg">
                  Die maßgeschneiderte Softwarelösung für Cannabisanbauvereine.
                  Optimieren Sie Ihre Dokumentations- und Berichtspflichten
                  gemäß dem neuen Cannabisgesetz (CanG).
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-green-700 px-8 py-4 text-lg text-white hover:bg-green-800 dark:bg-yellow-600 dark:hover:bg-yellow-500"
                  onClick={handleDemoRequest}
                >
                  Demo anfordern
                </Button>
                {/* <Link href="#pricing">
                  <Button
                    variant="outline"
                    className="border-green-700 px-8 py-4 text-lg text-green-700 hover:bg-green-100 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-stone-800" // Increased padding
                  >
                    Preise
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-gray-200 py-14 dark:bg-zinc-800 md:py-16 lg:py-24"
          id="features"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Zentrale Funktionen
            </h2>
            <Tabs defaultValue="documentation" className="w-full">
              <div className="mx-auto max-w-4xl">
                <TabsList className="grid min-h-28 w-full grid-cols-1 bg-green-700 dark:bg-yellow-700 md:min-h-10 md:grid-cols-3">
                  <TabsTrigger
                    value="documentation"
                    className="w-full text-base font-bold data-[state=inactive]:text-gray-300"
                  >
                    Dokumentation
                  </TabsTrigger>
                  <TabsTrigger
                    value="reporting"
                    className="w-full text-base font-bold data-[state=inactive]:text-gray-300"
                  >
                    Berichterstattung
                  </TabsTrigger>
                  <TabsTrigger
                    value="compliance"
                    className="w-full text-base font-bold data-[state=inactive]:text-gray-300"
                  >
                    Sicherheit
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="mx-auto mt-6 max-w-4xl">
                <TabsContent value="documentation">
                  <Card className="bg-white dark:bg-stone-950">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 dark:text-yellow-500">
                        <span className="flex items-center">
                          <Database className="mr-2" />
                          Dokumentation
                        </span>
                      </CardTitle>
                      <CardDescription className="mb-4">
                        gemäß CanG § 26 Abs. 1 i.V.m. §§ 18-20, 22
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Laufende Erfassung aller Weitergaben von Cannabis
                            und Vermehrungsmaterial
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Detaillierte Aufzeichnung von Anbau und Vernichtung
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Aktuelle Mitgliederverwaltung inkl. Protokollierung
                            der Weitergaben
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Integriertes Bestandsmanagement von Cannabis und
                            Vermehrungsmaterial
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Vollständige Dokumentation aller Transporte
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="https://www.gesetze-im-internet.de/kcang/__26.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center justify-between rounded-md bg-green-400/40 p-2 hover:bg-green-500/40 dark:bg-green-900/40 hover:dark:bg-green-800/40">
                            <div className="flex items-center space-x-2">
                              <Scale className="h-5 w-5 text-green-900 dark:text-green-200" />
                              <span className="text-sm font-medium text-green-900 dark:text-green-200">
                                CanG § 26 Dokumentations- und Berichtspflichten
                                von Anbauvereinigungen
                              </span>
                            </div>
                            <ExternalLink className="h-5 w-5 text-green-700 dark:text-green-500" />
                          </div>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reporting">
                  <Card className="bg-white dark:bg-stone-950">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 dark:text-yellow-500">
                        <span className="flex items-center">
                          <ScrollText className="mr-2" />
                          Berichterstattung
                        </span>
                      </CardTitle>
                      <CardDescription>
                        gemäß CanG § 26 Abs. 2 i.V.m. § 43 und § 26 Abs. 3
                        i.V.m. § 13 Abs. 3
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Manuelle Generierung eines Dokumentationsberichts
                            auf Aufforderung
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Automatische Generierung des jährlichen
                            Dokumentationsberichts
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Automatische Generierung des jährlichen
                            Bestandsberichts
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Elektronische und fristgerechte Übermittlung der
                            Berichte an Behörden
                          </span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="https://www.gesetze-im-internet.de/kcang/__26.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center justify-between rounded-md bg-green-400/40 p-2 hover:bg-green-500/40 dark:bg-green-900/40 hover:dark:bg-green-800/40">
                            <div className="flex items-center space-x-2">
                              <Scale className="h-5 w-5 text-green-900 dark:text-green-200" />
                              <span className="text-sm font-medium text-green-900 dark:text-green-200">
                                CanG § 26 Dokumentations- und Berichtspflichten
                                von Anbauvereinigungen
                              </span>
                            </div>
                            <ExternalLink className="h-5 w-5 text-green-700 dark:text-green-500" />
                          </div>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="compliance">
                  <Card className="bg-white dark:bg-stone-950">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 dark:text-yellow-500">
                        <span className="flex items-center">
                          <ShieldCheck className="mr-2" />
                          Sicherheit
                        </span>
                      </CardTitle>
                      <CardDescription>
                        Umfassender Schutz und Gesetzeskonformität gemäß DSGVO,
                        BSI IT-Grundschutz und CanG § 26 Abs. 2
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-none space-y-2 pl-0">
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            DSGVO-konforme Verarbeitung und Speicherung
                            sensibler Informationen
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Redundante Datensicherung in zertifizierten
                            europäischen Rechenzentren
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Automatische 5-Jahres-Archivierung gemäß
                            gesetzlicher Vorgaben
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Elektronische und fristgerechte Datenübermittlung an
                            Behörden
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Integriertes Zugriffskontrollen- und
                            Benutzerrechtemanagement
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-4xl leading-7 text-green-700 dark:text-yellow-500">
                            •
                          </span>
                          <span>
                            Einhaltung von BSI IT-Grundschutz und ISO 27001
                            Standards
                          </span>
                        </li>
                      </ul>

                      <div className="mt-4 space-y-2">
                        <div>
                          <a
                            href="https://dsgvo-gesetz.de/art-5-dsgvo/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center justify-between rounded-md bg-green-400/40 p-2 hover:bg-green-500/40 dark:bg-green-900/40 hover:dark:bg-green-800/40">
                              <div className="flex items-center space-x-2">
                                <Scale className="h-5 w-5 text-green-900 dark:text-green-200" />
                                <span className="text-sm font-medium text-green-900 dark:text-green-200">
                                  DSGVO Art. 5 - Grundsätze für die Verarbeitung
                                  personenbezogener Daten
                                </span>
                              </div>
                              <ExternalLink className="h-5 w-5 text-green-700 dark:text-green-500" />
                            </div>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.gesetze-im-internet.de/kcang/__26.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center justify-between rounded-md bg-green-400/40 p-2 hover:bg-green-500/40 dark:bg-green-900/40 hover:dark:bg-green-800/40">
                              <div className="flex items-center space-x-2">
                                <Scale className="h-5 w-5 text-green-900 dark:text-green-200" />
                                <span className="text-sm font-medium text-green-900 dark:text-green-200">
                                  CanG § 26 Dokumentations- und
                                  Berichtspflichten von Anbauvereinigungen
                                </span>
                              </div>
                              <ExternalLink className="h-5 w-5 text-green-700 dark:text-green-500" />
                            </div>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center justify-between rounded-md bg-green-400/40 p-2 hover:bg-green-500/40 dark:bg-green-900/40 hover:dark:bg-green-800/40">
                              <div className="flex items-center space-x-2">
                                <FileText className="h-5 w-5 text-green-900 dark:text-green-200" />
                                <span className="text-sm font-medium text-green-900 dark:text-green-200">
                                  BSI IT-Grundschutz - Standards für
                                  Informationssicherheit
                                </span>
                              </div>
                              <ExternalLink className="h-5 w-5 text-green-700 dark:text-green-500" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-14 md:py-16 lg:py-24" id="benefits">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Vorteile für Betreiber von Anbauvereinen
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              <Card className="dark:bg-stone-950">
                <CardHeader>
                  <Scale className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-3xl text-green-600 dark:text-yellow-500">
                    Rechtssicherheit
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Eliminieren Sie Unsicherheiten im Umgang mit Behörden und
                  Vorschriften. Gewährleisten Sie die vollständige Einhaltung
                  des CanG für Ihren Anbauverein.
                </CardContent>
              </Card>
              <Card className="dark:bg-stone-950">
                <CardHeader>
                  <HandCoins className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-3xl text-green-600 dark:text-yellow-500">
                    Kosteneffizienz
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Optimieren Sie Ihre Betriebskosten und sparen Sie erhebliche
                  Ressourcen im Vergleich zur Einrichtung und Wartung eines
                  eigenen Dokumentations- und Archivierungssystems.
                </CardContent>
              </Card>
              <Card className="dark:bg-stone-950">
                <CardHeader>
                  <Handshake className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-3xl text-green-600 dark:text-yellow-500">
                    Vertrauensvolle Partnerschaft
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Profitieren Sie von einer direkten Zusammenarbeit auf
                  Augenhöhe mit einem Softwareanbieter, der sich dem Erfolg
                  Ihres Anbauvereins verpflichtet fühlt und stets die neuesten
                  CanG-Anforderungen berücksichtigt.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="w-full bg-gray-200 py-14 dark:bg-zinc-800 md:py-16 lg:py-24"
          id="guarantees"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Unsere Garantie
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
              <Card className="dark:bg-stone-950">
                <CardHeader>
                  <Shield className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-3xl text-green-600 dark:text-yellow-500">
                    Datensicherheit und Datenschutz
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Serverinfrastruktur ausschließlich in Europa und volle
                  Konformität mit der DSGVO und dem CanG
                </CardContent>
              </Card>
              <Card className="dark:bg-stone-950">
                <CardHeader>
                  <Clock className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-3xl text-green-600 dark:text-yellow-500">
                    Gesetzeskonforme Aktualisierungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Zeitnahe Softwareanpassungen bei Änderungen der gesetzlichen
                  Dokumentations- und Berichtspflichten und immer auf dem
                  neuesten Stand der CanG-Anforderungen für Ihren Anbauverein.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* 
        <section
          className="w-full bg-gray-50 py-14 dark:bg-stone-900 md:py-16 lg:py-24"
          id="pricing"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Unsere Preispläne
            </h2>
            <div className="mb-12 w-full text-center">
              <div className="inline-block w-full">
                <div className="flex items-center justify-center space-x-2 rounded-md border-4 border-green-700 px-4 py-2 dark:border-yellow-600 dark:bg-yellow-950">
                  <Zap className="h-5 w-5 text-green-600 dark:text-yellow-500" />
                  <p className="text-lg font-bold text-green-800 dark:text-yellow-500">
                    Kostenlos für Vereine mit weniger als 25 Mitgliedern!
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8 text-center"></div>
            <div className="grid gap-6 md:grid-cols-3">
              <PricingTier
                title="Basis"
                price={"€59"}
                memberCountMin={25}
                memberCountMax={50}
              />
              <PricingTier
                title="Standard"
                price="€99"
                memberCountMin={51}
                memberCountMax={200}
                isPopular={true}
              />
              <PricingTier
                title="Premium"
                price="€299"
                memberCountMin={200}
                memberCountMax={500}
              />
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg font-semibold">
                In allen Plänen bieten wir das erste Jahr kostenlos an!
              </p>
              <p className="mt-2 text-lg font-semibold">
                Die Preise unterscheiden sich nur nach der Anzahl der erlaubten
                Mitglieder.
              </p>
              <p className="text-lg">
                Alle Pläne beinhalten sämtliche Funktionen für Dokumentation,
                Berichterstattung und Sicherheit.
              </p>
            </div>
          </div>
        </section> */}

        <section className="w-full bg-gray-200 py-14 dark:bg-zinc-800 md:py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Bereit für effiziente CanG-Konformität?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Schließen Sie sich GrowAClub an und profitieren Sie von
                  reibungsloser Gesetzeskonformität für Ihren
                  Cannabisanbauverein gemäß dem CanG.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-green-700 px-8 py-4 text-lg text-white hover:bg-green-800 dark:bg-yellow-600 dark:hover:bg-yellow-500"
                  onClick={handleDemoRequest}
                >
                  Demo anfordern
                </Button>
                {/* <Link href="#pricing">
                  <Button
                    variant="outline"
                    className="border-green-700 px-8 py-4 text-lg text-green-700 hover:bg-green-100 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-stone-800" // Increased padding
                  >
                    Preise
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
