"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  Moon,
  Sun,
  Scale,
  HandCoins,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute("href")?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed z-10 flex h-14 w-full items-center justify-center bg-transparent px-4 backdrop-blur-md lg:px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="flex w-full max-w-6xl items-center justify-between">
          <Link
            className="flex items-center justify-center"
            href="/"
            onClick={(event) => {
              event.preventDefault(); // Prevent default link behavior
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Added onClick to handle smooth scroll */}
            <Image
              src="GrowAClub_logo.png"
              alt="App Logo"
              className="h-8 w-8"
              width={32}
              height={32}
            />
            <span className="sr-only">GrowAClub</span>
          </Link>

          {/* Mobile Burger Menu */}
          <button
            className="flex items-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle mobile menu
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6 text-stone-800 dark:text-stone-200" /> // Show XIcon when mobileMenuOpen is true
            ) : (
              <MenuIcon className="h-6 w-6 text-stone-800 dark:text-stone-200" /> // Show MenuIcon when mobileMenuOpen is false
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden justify-center gap-2 sm:gap-4 md:flex">
            <Link
              className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
              href="#features"
            >
              Funktionen
            </Link>
            <Link
              className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
              href="#benefits"
            >
              Vorteile
            </Link>
            <Link
              className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
              href="#guarantees"
            >
              Garantie
            </Link>
          </nav>
          <button
            onClick={toggleTheme}
            className="flex items-center rounded-md p-2 focus:outline-none"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="fixed left-0 top-14 flex w-full flex-col items-center bg-white shadow-md dark:bg-stone-800 md:hidden">
          {/* Added flex and items-center */}
          <Link
            className="block border-b border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 dark:border-gray-700 dark:text-gray-200"
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
          >
            Funktionen
          </Link>
          <Link
            className="block border-b border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 dark:border-gray-700 dark:text-gray-200"
            href="#benefits"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vorteile
          </Link>
          <Link
            className="block border-b border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 dark:border-gray-700 dark:text-gray-200"
            href="#guarantees"
            onClick={() => setMobileMenuOpen(false)}
          >
            Garantie
          </Link>
        </nav>
      )}
      <main className="flex-1 pt-14">
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-2">
                <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                  CanG konform mit
                </h1>

                <h2 className="pt-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="text-green-700 dark:text-yellow-500">
                    GrowAClub
                  </span>
                </h2>

                <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-300 md:text-lg">
                  Die maßgeschneiderte Softwarelösung für Cannabisanbauvereine.
                  Optimieren Sie Ihre Dokumentations- und Berichtspflichten
                  gemäß dem neuen Cannabisgesetz (CanG).
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-700 font-bold text-white hover:bg-green-800 dark:bg-yellow-600 dark:hover:bg-yellow-500">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-100 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-stone-800"
                >
                  Learn More
                </Button>
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
                <TabsList className="grid min-h-28 w-full grid-cols-1 bg-green-800 dark:bg-yellow-800 md:min-h-12 md:grid-cols-3">
                  <TabsTrigger
                    value="documentation"
                    className="w-full text-xs font-bold sm:text-base"
                  >
                    Dokumentation
                  </TabsTrigger>
                  <TabsTrigger
                    value="reporting"
                    className="w-full text-xs font-bold sm:text-base"
                  >
                    Berichterstattung
                  </TabsTrigger>
                  <TabsTrigger
                    value="compliance"
                    className="w-full text-xs font-bold sm:text-base"
                  >
                    Rechtsvorschriften
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="mx-auto mt-6 max-w-4xl">
                <TabsContent value="documentation">
                  <Card className="bg-white dark:bg-stone-900">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 dark:text-yellow-500">
                        Permanente Dokumentation
                      </CardTitle>
                      <CardDescription>
                        Echtzeit-Erfassung aller Cannabis-Transaktionen
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Echtzeit-Erfassung aller Cannabis-Transaktionen</p>
                      <p>
                        • Detaillierte Aufzeichnung von Anbau, Weitergabe und
                        Vernichtung
                      </p>
                      <p>
                        • Präzise Mitgliederverwaltung mit Übergabeprotokollen
                      </p>
                      <p>• Intelligentes Bestandsmanagement auf Gramm-Basis</p>
                      <p>• Vollständige Transportdokumentation</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reporting">
                  <Card className="bg-white dark:bg-stone-900">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 dark:text-yellow-500">
                        Jährliche Berichterstattung
                      </CardTitle>
                      <CardDescription>
                        Automatische Generierung des Jahresberichts bis 31.
                        Januar
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        • Automatische Generierung des Jahresberichts bis 31.
                        Januar
                      </p>
                      <p>
                        • Sortenspezifische Aufschlüsselung aller
                        Cannabis-Mengen
                      </p>
                      <p>
                        • Berechnung durchschnittlicher THC- und CBD-Gehalte
                      </p>
                      <p>
                        • Übersichtliche Darstellung von Anbau, Weitergabe und
                        Vernichtung
                      </p>
                      <p>• Präzise Bestandserfassung zum Jahresende</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="compliance">
                  <Card className="bg-white dark:bg-stone-900">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700 dark:text-yellow-500">
                        Gesetzeskonformität & Datensicherheit
                      </CardTitle>
                      <CardDescription>
                        Datenschutzkonforme Speicherung aller sensiblen
                        Informationen
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        • Datenschutzkonforme Speicherung aller sensiblen
                        Informationen
                      </p>
                      <p>
                        • Redundante Datensicherung in deutschen
                        Cloud-Rechenzentren
                      </p>
                      <p>
                        • Automatische 5-Jahres-Archivierung aller relevanten
                        Daten
                      </p>
                      <p>
                        • Elektronische und fristgerechte Datenübermittlung an
                        Behörden
                      </p>
                      <p>• Zugriffskontrollen und Benutzerrechtemanagement</p>
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
              Vorteile für Betreiber von Anbauvereinigungen
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <Scale className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Rechtssicherheit
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Eliminieren Sie Unsicherheiten im Umgang mit Behörden und
                  Vorschriften. Gewährleisten Sie die vollständige Einhaltung
                  des CanG für Ihre Anbauvereinigung.
                </CardContent>
              </Card>
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <HandCoins className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Kosteneffizienz
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Sparen Sie erhebliche Ressourcen im Vergleich zur Einrichtung
                  und Wartung eines eigenen Dokumentations- und
                  Archivierungssystems. Optimieren Sie Ihre Betriebskosten.
                </CardContent>
              </Card>
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <Handshake className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Vertrauensvolle Partnerschaft
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Profitieren Sie von einer direkten Zusammenarbeit auf
                  Augenhöhe mit einem Softwareanbieter, der sich dem Erfolg
                  Ihrer Anbauvereinigung verpflichtet fühlt und stets die
                  neuesten CanG-Anforderungen berücksichtigt.
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
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <Shield className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Datensicherheit und Datenschutz
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Serverinfrastruktur ausschließlich in Deutschland. Keine
                  Speicherung personenbezogener Mitgliederdaten in ausländischen
                  Cloud-Diensten. Volle Konformität mit der DSGVO und dem CanG.
                </CardContent>
              </Card>
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <Clock className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Gesetzeskonforme Aktualisierungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Zeitnahe Softwareanpassungen bei Änderungen der gesetzlichen
                  Dokumentations- und Berichtspflichten. Stets auf dem neuesten
                  Stand der CanG-Anforderungen für Ihre Anbauvereinigung.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-14 md:py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Bereit für effiziente CanG-Konformität?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Schließen Sie sich GrowAClub an und profitieren Sie von
                  reibungsloser Gesetzeskonformität für Ihren
                  Cannabisanbauverein gemäß dem CanG.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-700 font-bold text-white hover:bg-green-800 dark:bg-yellow-600 dark:hover:bg-yellow-500">
                  Request a Demo
                </Button>{" "}
                {/* Added hover effect */}
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-100 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-stone-800"
                >
                  Learn More
                </Button>{" "}
                {/* Added hover effect */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between px-4 sm:flex-row md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 GrowAClub. All rights reserved.
          </p>
          <nav className="mt-4 flex gap-4 sm:mt-0 sm:gap-6">
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
