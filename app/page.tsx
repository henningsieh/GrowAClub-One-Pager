// app/page.tsx
"use client"; // This ensures the component is rendered on the client side

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sun,
  Moon,
  Sprout,
  FileText,
  ShieldCheck,
  Globe,
  Languages,
  Leaf,
  Box,
  Lightbulb,
  Fan,
  Tent,
  Camera,
  Droplet,
  Beaker,
  Clock,
  Scale,
  Users,
  Truck,
  BarChart,
  Building,
  UserPlus,
  MapPin,
  Link,
} from "lucide-react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is already enabled in localStorage or system preference
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="flex items-start text-xl font-bold">
            <Sprout className="mr-2 h-12 w-12 text-green-700 dark:text-green-600" />
            <div>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Cannabis Association Cultivation Manager
              </span>
              <span className="mt-1 block text-xs">© GrowAGram</span>
            </div>
          </h1>
          <nav className="flex items-center">
            <ul className="flex flex-col space-y-1 sm:space-x-2 sm:space-y-0 md:flex-row">
              <li className="min-w-28">
                <a
                  href="#features"
                  className="block rounded-md px-3 py-2 text-center text-sm font-bold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-green-400"
                >
                  Features
                </a>
              </li>
              <li className="min-w-28">
                <a
                  href="#benefits"
                  className="block rounded-md px-3 py-2 text-center text-sm font-bold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-green-400"
                >
                  Benefits
                </a>
              </li>
              <li className="min-w-28">
                <a
                  href="#contact"
                  className="block rounded-md px-3 py-2 text-center text-sm font-bold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-green-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 rounded-full bg-gray-200 p-2 transition duration-300 dark:bg-gray-700 md:ml-6"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </header>

      <main>
        <section className="bg-muted px-4 py-12 md:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Simplify Cannabis Cultivation Management
            </h2>
            <p className="mb-8 text-xl">
              GrowAGram: The all-in-one SaaS solution for cannabis growing
              associations in Germany
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-32 px-4 py-12 md:px-6 lg:px-8"
        >
          <div className="container mx-auto">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-green-200 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader className="border-b border-green-200 dark:border-green-800">
                  <CardTitle className="flex items-center text-xl">
                    <div className="mr-3 rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    Grow Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    Comprehensive plant management and grow tracking:
                  </p>
                  <ul className="feature-list space-y-1">
                    <li>
                      <Sprout className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Individual plant profiles with strain information
                    </li>
                    <li>
                      <Clock className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Detailed grow timelines and updates
                    </li>
                    <li>
                      <Droplet className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Feeding schedules with water, pH, and EC tracking
                    </li>
                    <li>
                      <Beaker className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Fertilizer management with precise measurements
                    </li>
                    <li>
                      <Camera className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Media uploads for visual growth documentation
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Monitor every aspect of your plants&apos; lifecycle, from
                    seed to harvest, ensuring optimal growth and compliance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader className="border-b border-green-200 dark:border-green-800">
                  <CardTitle className="flex items-center text-xl">
                    <div className="mr-3 rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    Legal Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    Comprehensive legal compliance management for German
                    cannabis growing associations:
                  </p>
                  <ul className="feature-list space-y-1">
                    <li>
                      <Scale className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Cannabis Act (CanG) compliance tracking
                    </li>
                    <li>
                      <Users className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Member registry and distribution logs
                    </li>
                    <li>
                      <BarChart className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      THC content and yield reporting
                    </li>
                    <li>
                      <Truck className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Transport documentation
                    </li>
                    <li>
                      <FileText className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Automated report generation for authorities
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Ensure compliance with §26 CanG documentation requirements
                    and streamline interactions with regulatory bodies.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader className="border-b border-green-200 dark:border-green-800">
                  <CardTitle className="flex items-center text-xl">
                    <div className="mr-3 rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    Inventory Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    Comprehensive inventory tracking for all your cultivation
                    needs:
                  </p>
                  <ul className="feature-list space-y-1">
                    <li>
                      <Box className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      General inventory items
                    </li>
                    <li>
                      <Tent className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Grow tents (with dimensions)
                    </li>
                    <li>
                      <Lightbulb className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Lighting equipment (with power specs)
                    </li>
                    <li>
                      <Fan className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Fans and ventilation
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Track quantities, specifications, and associate items with
                    specific grows or owners.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader className="border-b border-green-200 dark:border-green-800">
                  <CardTitle className="flex items-center text-xl">
                    <div className="mr-3 rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    Multi-Client Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    Robust multi-client management for cannabis growing
                    associations:
                  </p>
                  <ul className="feature-list space-y-1">
                    <li>
                      <Building className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Manage multiple growing associations
                    </li>
                    <li>
                      <UserPlus className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      User and profile management across associations
                    </li>
                    <li>
                      <MapPin className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Detailed location information for each association
                    </li>
                    <li>
                      <Link className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Custom URL support for each association
                    </li>
                    <li>
                      <Users className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Flexible member-association relationships
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Efficiently manage multiple growing associations, their
                    members, and locations from a single, unified dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200 bg-gradient-to-br from-white to-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900">
                <CardHeader className="border-b border-green-200 dark:border-green-800">
                  <CardTitle className="flex items-center text-xl">
                    <div className="mr-3 rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <Languages className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    Multi-Language
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">Language support for diverse teams:</p>
                  <ul className="feature-list space-y-1">
                    <li>
                      <Globe className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Use GrowAGram in German or English
                    </li>
                    <li>
                      <Languages className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      More languages coming soon
                    </li>
                    <li>
                      <Users className="ml-1 mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                      Support for diverse teams
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Enhance collaboration and usability with multi-language
                    support, catering to the diverse needs of your team members.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="scroll-mt-40 bg-muted px-4 py-8 md:px-6 lg:px-8"
        >
          <div className="container mx-auto">
            <h2 className="mb-8 text-center text-4xl font-bold">Benefits</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  For Growing Associations
                </h3>
                <ul className="list-inside list-disc space-y-2">
                  <li className="text-lg">
                    Ensure compliance with German cannabis laws
                  </li>
                  <li className="text-lg">
                    Streamline documentation processes
                  </li>
                  <li className="text-lg">Reduce administrative overhead</li>
                  <li className="text-lg">
                    Improve yield and quality through data-driven insights
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">For Members</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li className="text-lg">
                    Access to high-quality, legally grown cannabis
                  </li>
                  <li className="text-lg">
                    Transparency in cultivation practices
                  </li>
                  <li className="text-lg">Consistent supply management</li>
                  <li className="text-lg">
                    Educational resources on responsible use
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-12 md:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Grow with Confidence?
            </h2>
            <p className="mb-8 text-xl">
              Contact us today to learn how GrowAGram can help your cannabis
              growing association thrive.
            </p>
            <Button size="lg">Contact Us</Button>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white px-4 py-6 dark:bg-gray-800 md:px-6 lg:px-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground dark:text-gray-400">
          <p>&copy; 2023 GrowAGram. All rights reserved.</p>
          <p className="mt-2">
            GrowAGram is designed to assist cannabis growing associations in
            complying with German laws. Always consult with legal professionals
            for specific compliance requirements.
          </p>
        </div>
      </footer>
    </div>
  );
}
