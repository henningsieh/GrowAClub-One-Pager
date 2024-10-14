import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between px-4 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 GrowAClub. All rights reserved.
        </p>
        <nav className="mt-4 flex gap-4 sm:mt-0 sm:gap-6">
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="impressum"
          >
            Impressum
          </Link>
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="datenschutz"
          >
            Datenschutzerklärung
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
