import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-4 md:px-6 lg:px-8 border-b bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-start">
            <Sprout className="mr-2 h-16 w-16 text-green-700" />
            <div>
              <span className="text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl 2xl:text-3xl">
                Cannabis Association Cultivation Manager
              </span>
              <span className="text-sm mt-1 block">© GrowAGram</span>
            </div>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ease-in-out"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-700 hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ease-in-out"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Simplify Cannabis Cultivation Management
            </h2>
            <p className="text-xl mb-8">
              GrowAGram: The all-in-one SaaS solution for cannabis growing
              associations in Germany
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section id="features" className="py-12 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="mr-2 h-5 w-5" />
                    Grow Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive plant management and grow tracking:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li className="flex items-center">
                      <Sprout className="mr-2 h-4 w-4" />
                      Individual plant profiles with strain information
                    </li>
                    <li className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      Detailed grow timelines and updates
                    </li>
                    <li className="flex items-center">
                      <Droplet className="mr-2 h-4 w-4" />
                      Feeding schedules with water, pH, and EC tracking
                    </li>
                    <li className="flex items-center">
                      <Beaker className="mr-2 h-4 w-4" />
                      Fertilizer management with precise measurements
                    </li>
                    <li className="flex items-center">
                      <Camera className="mr-2 h-4 w-4" />
                      Media uploads for visual growth documentation
                    </li>
                  </ul>
                  <p className="mt-2">
                    Monitor every aspect of your plants&apos; lifecycle, from
                    seed to harvest, ensuring optimal growth and compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Legal Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive legal compliance management for German
                    cannabis growing associations:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li className="flex items-center">
                      <Scale className="mr-2 h-4 w-4" />
                      Cannabis Act (CanG) compliance tracking
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Member registry and distribution logs
                    </li>
                    <li className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4" />
                      THC content and yield reporting
                    </li>
                    <li className="flex items-center">
                      <Truck className="mr-2 h-4 w-4" />
                      Transport documentation
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Automated report generation for authorities
                    </li>
                  </ul>
                  <p className="mt-2">
                    Ensure compliance with §26 CanG documentation requirements
                    and streamline interactions with regulatory bodies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Inventory Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive inventory tracking for all your cultivation
                    needs:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li className="flex items-center">
                      <Box className="mr-2 h-4 w-4" />
                      General inventory items
                    </li>
                    <li className="flex items-center">
                      <Tent className="mr-2 h-4 w-4" />
                      Grow tents (with dimensions)
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Lighting equipment (with power specs)
                    </li>
                    <li className="flex items-center">
                      <Fan className="mr-2 h-4 w-4" />
                      Fans and ventilation
                    </li>
                  </ul>
                  <p className="mt-2">
                    Track quantities, specifications, and associate items with
                    specific grows or owners.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Multi-Client Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Robust multi-client management for cannabis growing
                    associations:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li className="flex items-center">
                      <Building className="mr-2 h-4 w-4" />
                      Manage multiple growing associations
                    </li>
                    <li className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4" />
                      User and profile management across associations
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Detailed location informations for each association
                    </li>
                    <li className="flex items-center">
                      <Link className="mr-2 h-4 w-4" />
                      Custom URL support for each association
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Flexible member-association relationships
                    </li>
                  </ul>
                  <p className="mt-2">
                    Efficiently manage multiple growing associations, their
                    members, and locations from a single, unified dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Languages className="mr-2 h-5 w-5" />
                    Multi-Language
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Use GrowAGram in German or English, with more languages
                    coming soon to support your diverse team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  For Growing Associations
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-xl">
                    Ensure compliance with German cannabis laws
                  </li>
                  <li className="text-xl">
                    Streamline documentation processes
                  </li>
                  <li className="text-xl">Reduce administrative overhead</li>
                  <li className="text-xl">
                    Improve yield and quality through data-driven insights
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">For Members</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-xl">
                    Access to high-quality, legally grown cannabis
                  </li>
                  <li className="text-xl">
                    Transparency in cultivation practices
                  </li>
                  <li className="text-xl">Consistent supply management</li>
                  <li className="text-xl">
                    Educational resources on responsible use
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Grow with Confidence?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to learn how GrowAGram can help your cannabis
              growing association thrive.
            </p>
            <Button size="lg">Contact Us</Button>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 lg:px-8 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
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
