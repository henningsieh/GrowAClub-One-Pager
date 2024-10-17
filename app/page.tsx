"use client";

import BenefitCard from "@/components/BenefitCard";
import InfoCard from "@/components/InfoCard";
import RequireDemoButton from "@/components/RequireDemoButton";

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
// Adjust the path based on your project structure

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-14">
        <section className="w-full py-8 md:py-16 lg:py-24" id="top">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
                  CanG-konform mit
                </h2>

                <h1 className="py-2 text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
                  {/* <span className="text-green-700 dark:text-yellow-500"> */}
                  <span className="text-primary">GrowAClub</span>
                </h1>

                <p className="mx-auto text-base md:max-w-3xl md:text-lg lg:max-w-4xl lg:text-xl xl:max-w-5xl xl:text-2xl">
                  Die maßgeschneiderte Softwarelösung für Cannabisanbauvereine.
                  Optimieren Sie Ihre Dokumentations- und Berichtspflichten
                  gemäß dem Konsumcannabisgesetz (CanG).
                </p>
              </div>
              <RequireDemoButton />
            </div>
          </div>
        </section>
        <section
          className="w-full bg-zinc-100 py-14 dark:bg-zinc-800 md:py-16 lg:py-24"
          id="features"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Zentrale Funktionen
            </h2>
            <Tabs defaultValue="documentation" className="w-full">
              <div className="mx-auto max-w-4xl">
                <TabsList className="grid min-h-28 w-full grid-cols-1 bg-primary-foreground md:min-h-10 md:grid-cols-3">
                  <TabsTrigger
                    value="documentation"
                    className="w-full text-base font-bold data-[state=inactive]:text-accent-foreground"
                  >
                    Dokumentation
                  </TabsTrigger>
                  <TabsTrigger
                    value="reporting"
                    className="w-full text-base font-bold data-[state=inactive]:text-accent-foreground"
                  >
                    Berichterstattung
                  </TabsTrigger>
                  <TabsTrigger
                    value="compliance"
                    className="w-full text-base font-bold data-[state=inactive]:text-accent-foreground"
                  >
                    Sicherheit
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="mx-auto mt-6 max-w-4xl">
                <TabsContent value="documentation">
                  <Card className="bg-background">
                    <CardHeader className="p-2">
                      <CardTitle className="text-3xl text-primary">
                        <span className="flex items-center">
                          <Database className="m-2" />
                          Dokumentation
                        </span>
                      </CardTitle>
                      <CardDescription className="p-4">
                        Dokumentationspflichten von Anbauvereinigungen gemäß
                        CanG § 26 Abs. 1 i.V.m. §§ 18-20, 22
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
                                Konsumcannabisgesetz § 26
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
                  <Card className="bg-background">
                    <CardHeader className="p-2">
                      <CardTitle className="text-3xl text-primary">
                        <span className="flex items-center">
                          <ScrollText className="m-2" />
                          Berichterstattung
                        </span>
                      </CardTitle>
                      <CardDescription className="p-4">
                        Dokumentationspflichten von Anbauvereinigungen gemäß
                        CanG § 26 Abs. 2 i.V.m. § 43 und § 26 Abs. 3 i.V.m. § 13
                        Abs. 3
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
                                Konsumcannabisgesetz § 26
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
                  <Card className="bg-background">
                    <CardHeader className="p-2">
                      <CardTitle className="text-3xl text-primary">
                        <span className="flex items-center">
                          <ShieldCheck className="m-2" />
                          Sicherheit
                        </span>
                      </CardTitle>
                      <CardDescription className="p-4">
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
                                  Konsumcannabisgesetz § 26 Dokumentations- und
                                  Berichtspflichten von Anbauvereinigungen
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
              <InfoCard
                Icon={Scale}
                title="Rechtssicherheit"
                content="Eliminieren Sie Unsicherheiten im Umgang mit Behörden und Vorschriften. Gewährleisten Sie die vollständige Einhaltung des CanG für Ihren Anbauverein."
              />
              <InfoCard
                Icon={HandCoins}
                title="Kosteneffizienz"
                content="Optimieren Sie Ihre Betriebskosten und sparen Sie erhebliche Ressourcen im Vergleich zur Einrichtung und Wartung eines eigenen Dokumentations- und Archivierungssystems."
              />
              <InfoCard
                Icon={Handshake}
                title="Vertrauensvolle Partnerschaft"
                content="Profitieren Sie von einer direkten Zusammenarbeit auf Augenhöhe mit einem Softwareanbieter, der sich dem Erfolg Ihres Anbauvereins verpflichtet fühlt und stets die neuesten CanG-Anforderungen berücksichtigt."
              />
            </div>
          </div>
        </section>

        <section
          className="w-full bg-zinc-100 py-14 dark:bg-zinc-800 md:py-16 lg:py-24"
          id="guarantees"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Unsere Garantie
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
              <BenefitCard
                Icon={Shield}
                title="Datensicherheit und Datenschutz"
                content="Serverinfrastruktur ausschließlich in Europa und volle Konformität mit der DSGVO und dem CanG."
              />
              <BenefitCard
                Icon={Clock}
                title="Gesetzeskonforme Aktualisierungen"
                content="Zeitnahe Softwareanpassungen bei Änderungen der gesetzlichen Dokumentations- und Berichtspflichten und immer auf dem neuesten Stand der CanG-Anforderungen für Ihren Anbauverein."
              />
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

        <section className="w-full md:py-16 lg:py-24">
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

              <RequireDemoButton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
