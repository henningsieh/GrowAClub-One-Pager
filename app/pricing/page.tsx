"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Reuse the header from LandingPage */}
      <header className="fixed z-10 flex h-14 w-full items-center justify-center bg-white bg-opacity-70 px-4 backdrop-blur-md lg:px-6">
        {/* ... existing header code ... */}
      </header>

      <main className="flex-1 pt-14">
        <section className="w-full py-14 md:py-16 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Unsere Preispläne
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Tier 1 */}
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-green-600 dark:text-yellow-500">
                    Basis
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg">€19/Monat</p>
                  <p>Ideal für kleine Anbauvereine.</p>
                  <Button className="mt-4">Jetzt abonnieren</Button>
                </CardContent>
              </Card>
              {/* Tier 2 */}
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-green-600 dark:text-yellow-500">
                    Standard
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg">€39/Monat</p>
                  <p>Für wachsende Anbauvereine.</p>
                  <Button className="mt-4">Jetzt abonnieren</Button>
                </CardContent>
              </Card>
              {/* Tier 3 */}
              <Card className="dark:bg-stone-900">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-green-600 dark:text-yellow-500">
                    Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg">€59/Monat</p>
                  <p>Für große Anbauvereine mit speziellen Anforderungen.</p>
                  <Button className="mt-4">Jetzt abonnieren</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Reuse the footer from LandingPage */}
      <footer className="w-full border-t py-6">
        {/* ... existing footer code ... */}
      </footer>
    </div>
  );
}
