"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NextLink from "next/link";
import { navigationItems } from "@/lib/navigationItems";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CookieAlert from "@/components/CookieAlert";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  type MediaQueryList = {
    matches: boolean;
    addEventListener(
      type: string,
      listener: (e: { matches: boolean }) => void,
    ): void;
    removeEventListener(
      type: string,
      listener: (e: { matches: boolean }) => void,
    ): void;
  };

  useEffect(() => {
    if (typeof globalThis !== "undefined" && "matchMedia" in globalThis) {
      const darkModeQuery = (
        globalThis.matchMedia as (query: string) => MediaQueryList
      )("(prefers-color-scheme: dark)");
      setIsDark(darkModeQuery.matches);

      const updateDarkMode = (e: { matches: boolean }) => setIsDark(e.matches);
      darkModeQuery.addEventListener("change", updateDarkMode);

      return () => darkModeQuery.removeEventListener("change", updateDarkMode);
    }
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setVisible(false);
        } else {
          // Scrolling up
          setVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Filter out Home link when on home page
  const filteredNavigationItems = navigationItems.filter((item) => {
    if (pathname === "/" && item.name === "Home") {
      return false;
    }
    return true;
  });

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isDark ? "bg-black/50" : "bg-white/50"
        } backdrop-blur-md shadow-lg ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NextLink
                href="/"
                className="text-xl sm:text-2xl font-bold text-[#AB7132]"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={isDark ? "/logo.png" : "/logo-light.png"}
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <span className="hidden sm:inline">Revitalize</span>
                </div>
              </NextLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {filteredNavigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NextLink
                    key={item.name}
                    href={item.href}
                    className={`relative ${
                      isDark
                        ? "text-gray-300 hover:text-[#AB7132]"
                        : "text-gray-600 hover:text-[#AB7132]"
                    } px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 group`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#AB7132] transform transition-transform duration-200 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </NextLink>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } focus:outline-none transition-colors duration-200`}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-max-height duration-300 ease-in-out ${
              isOpen ? "max-h-96" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {filteredNavigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NextLink
                    key={item.name}
                    href={item.href}
                    className={`block ${
                      isDark
                        ? `${isActive ? "text-[#AB7132]" : "text-white"} hover:text-[#AB7132] hover:bg-black/20`
                        : `${isActive ? "text-[#AB7132]" : "text-black"} hover:text-[#AB7132] hover:bg-yellow-50`
                    } px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </NextLink>
                );
              })}
            </div>
          </div>
        </div>

        {/* Backdrop overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
      <CookieAlert />
    </>
  );
}
