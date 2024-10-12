import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google"; // Import the Montserrat font
import { Roboto } from "next/font/google"; // Import the Roboto font

const montserratFont = Montserrat({ subsets: ["latin"], weight: "400" }); // Load the Montserrat font
const robotoFont = Roboto({ subsets: ["latin"], weight: "400" }); // Load the Roboto font

export const metadata: Metadata = {
  title: "GrowAClub | by Growers.land",
  description:
    "Die All-in-One Cloud-Lösung für den legalen Betrieb eines Cannabis-Anbauvereins in Deutschland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`mx-auto antialiased ${robotoFont.className} ${montserratFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
