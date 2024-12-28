"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { navigationItems } from "@/lib/navigationItems";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <footer
      className={`w-full transition-colors duration-200 ${
        isDark ? "bg-black/50" : "bg-white/50"
      } backdrop-blur-sm shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <NextLink
              href="/"
              className="inline-block text-xl sm:text-2xl font-bold text-[#AB7132] mb-4"
            ></NextLink>
            <p
              className={`${isDark ? "text-gray-300" : "text-gray-600"} mt-4 pb-4`}
            >
              Dedicated to providing exceptional legal representation with
              integrity and personalized attention.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3
              className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <NextLink
                    href={item.href}
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-[#AB7132]"
                        : "text-gray-600 hover:text-[#AB7132]"
                    } transition-colors duration-200`}
                  >
                    {item.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3
              className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Contact Us
            </h3>
            <ul
              className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              <li>Email: contact@revitalize.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Wellness Street</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-8 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              © {new Date().getFullYear()} Revitalize. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <NextLink
                href="/privacy"
                className={`text-sm ${
                  isDark
                    ? "text-gray-400 hover:text-[#AB7132]"
                    : "text-gray-600 hover:text-[#AB7132]"
                } transition-colors duration-200`}
              >
                Privacy Policy
              </NextLink>
              <NextLink
                href="/terms"
                className={`text-sm ${
                  isDark
                    ? "text-gray-400 hover:text-[#AB7132]"
                    : "text-gray-600 hover:text-[#AB7132]"
                } transition-colors duration-200`}
              >
                Terms of Service
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
