"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    // Load theme from local storage when the component mounts
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }

    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    }
  };

  return (
    <header
      className={`fixed z-10 flex h-14 w-full items-center justify-center ${darkMode ? "bg-stone-900 bg-opacity-70" : "bg-white bg-opacity-70"} px-4 backdrop-blur-md lg:px-6`}
    >
      <div className="flex w-full max-w-6xl items-center justify-between">
        <Link
          className="flex items-center justify-center"
          href="/#top"
          //   onClick={(event) => {
          //     //event.preventDefault();
          //     window.scrollTo({ top: 0, behavior: "smooth" });
          //   }}
        >
          <Image
            src="GrowAClub_logo.png"
            alt="App Logo"
            className="h-9 w-9"
            width={36}
            height={36}
          />
          <span className="sr-only">GrowAClub</span>
        </Link>

        {/* Mobile Burger Menu */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6 text-stone-800 dark:text-stone-200" />
          ) : (
            <MenuIcon className="h-6 w-6 text-stone-800 dark:text-stone-200" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden justify-center gap-2 sm:gap-4 md:flex">
          <Link
            className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
            href="/#features"
          >
            Funktionen
          </Link>
          <Link
            className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
            href="/#benefits"
          >
            Vorteile
          </Link>
          <Link
            className="rounded-md border border-green-500 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
            href="/#guarantees"
          >
            Garantie
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="flex items-center rounded-md p-2 focus:outline-none"
        >
          {darkMode ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col items-center bg-white pb-2 dark:bg-stone-900 md:hidden">
          <Link
            className="px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
            href="/#features"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            Funktionen
          </Link>
          <Link
            className="px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
            href="/#benefits"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            Vorteile
          </Link>
          <Link
            className="px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-yellow-600 dark:text-gray-200 dark:hover:bg-stone-800"
            href="/#guarantees"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            Garantie
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
