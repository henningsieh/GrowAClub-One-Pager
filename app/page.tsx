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
  Mountain,
  Moon,
  Sun,
  Scale,
  HandCoins,
} from "lucide-react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

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
          {" "}
          {/* Adjusted to justify-between */}
          <Link className="flex items-center justify-center" href="#">
            <Mountain className="h-6 w-6" />
            <span className="sr-only">GrowAClub</span>
          </Link>
          <nav className="flex justify-center gap-4 sm:gap-6">
            {" "}
            {/* Center the nav links */}
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#benefits"
            >
              Benefits
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#guarantees"
            >
              Guarantees
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
            )}{" "}
            {/* Icon for dark/light mode */}
            {/* <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span> */}
          </button>
        </div>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Simplify CanG Compliance
                  <br />
                </h1>
                <h1 className="pt-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  with{" "}
                  <span className="text-green-800 dark:text-yellow-500">
                    GrowAClub
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Streamline documentation and reporting for Cannabis
                  cultivation associations (&quot;Cannabisanbauvereine&quot;)
                  under the new Cannabis Act (&quot;CanG&quot;)
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-gray-200 py-12 dark:bg-zinc-950 md:py-24 lg:py-32"
          id="features"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Core Features
            </h2>
            <Tabs defaultValue="documentation" className="w-full">
              <div className="mx-auto max-w-4xl">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger
                    value="documentation"
                    className="w-full font-bold"
                  >
                    Documentation
                  </TabsTrigger>
                  <TabsTrigger value="reporting" className="w-full font-bold">
                    Reporting
                  </TabsTrigger>
                  <TabsTrigger value="compliance" className="w-full font-bold">
                    Compliance
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="mx-auto mt-6 max-w-4xl">
                <TabsContent value="documentation">
                  <Card className="bg-white dark:bg-zinc-900">
                    <CardHeader>
                      <CardTitle className="text-gold">
                        Detailed Documentation
                      </CardTitle>
                      <CardDescription>
                        Comprehensive tracking of cannabis and propagating
                        material
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Record member information and transactions</p>
                      <p>
                        • Track quantities of cannabis and propagating material
                      </p>
                      <p>• Document cultivation, transfer, and destruction</p>
                      <p>• Store records securely for 5 years</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reporting">
                  <Card className="bg-white dark:bg-zinc-900">
                    <CardHeader>
                      <CardTitle>Automated Reporting</CardTitle>
                      <CardDescription>
                        Effortless generation and submission of required reports
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Manual trigger for on-demand reports</p>
                      <p>• Automatic annual submission by January 31st</p>
                      <p>
                        • Detailed breakdowns by cannabis variety, THC, and CBD
                        content
                      </p>
                      <p>• Anonymized electronic transmission to authorities</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="compliance">
                  <Card className="bg-white dark:bg-zinc-900">
                    <CardHeader>
                      <CardTitle>Compliance Assurance</CardTitle>
                      <CardDescription>
                        Stay aligned with CanG regulations effortlessly
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>
                        • Built-in forms and processes aligned with Section 26
                      </p>
                      <p>• Real-time updates to reflect regulatory changes</p>
                      <p>• Guidance on proper documentation practices</p>
                      <p>• Alerts for upcoming reporting deadlines</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="benefits">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Benefits for Operators
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Scale className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Regulatory Confidence
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Eliminate uncertainty in dealing with authorities and
                  regulations, ensuring your club stays compliant.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HandCoins className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Financial savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Save valuable money and time compared to setting up and
                  maintaining your own documentation or archival storage system.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Handshake className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-xl text-green-600 dark:text-yellow-500">
                    Trusted Partnership
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Enjoy direct, eye-level cooperation with a software provider
                  committed to your success.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-gray-200 py-12 dark:bg-zinc-950 md:py-24 lg:py-32"
          id="guarantees"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Guarantees
            </h2>
            <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Shield className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-green-600 dark:text-yellow-500">
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Server infrastructure in Germany. No personal member data
                  stored in cloud storage abroad.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-yellow-500" />
                  <CardTitle className="text-center text-green-600 dark:text-yellow-500">
                    Rapid Adaptability
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Swift software updates to align with changes in statutory
                  documentation and reporting obligations.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Simplify Your Compliance?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Join GrowAClub today and experience hassle-free CanG
                  compliance for your Cannabisanbauverein.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Sign Up Now</Button>
                <Button variant="outline">Request a Demo</Button>
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
