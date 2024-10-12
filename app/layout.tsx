import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`mx-auto antialiased`}>{children}</body>
    </html>
  );
}
