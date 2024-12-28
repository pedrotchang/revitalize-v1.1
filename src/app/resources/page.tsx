"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { FileText, BookOpen, GraduationCap, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Resources() {
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
    <main
      className={`min-h-screen pt-24 ${isDark ? "bg-black text-gray-200" : "bg-white text-gray-800"}`}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Legal Resources
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Access our comprehensive collection of real estate law resources,
            guides, and educational materials to help you better understand your
            property rights and obligations in California.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Property Guides */}
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          >
            <FileText className="w-12 h-12 text-[#AB7132] mb-4" />
            <h2 className="text-2xl font-serif mb-4">Property Guides</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  California Property Purchase Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Commercial Lease Agreements
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Property Development Regulations
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Zoning Law Overview
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Updates */}
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100 text-gray"}`}
          >
            <BookOpen className="w-12 h-12 text-[#AB7132] mb-4" />
            <h2 className="text-2xl font-serif mb-4">Legal Updates</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  2024 California Property Law Changes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Recent Real Estate Case Law
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Environmental Regulations Update
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Property Tax Law Changes
                </a>
              </li>
            </ul>
          </div>

          {/* Educational Materials */}
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          >
            <GraduationCap className="w-12 h-12 text-[#AB7132] mb-4" />
            <h2 className="text-2xl font-serif mb-4">Educational Materials</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Property Rights Fundamentals
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Due Diligence Checklist
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Property Investment Basics
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AB7132] hover:underline">
                  Real Estate Contract Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-lg flex items-start ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
            >
              <Download className="w-6 h-6 text-[#AB7132] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2">Property Purchase Checklist</h3>
                <p className="mb-4">
                  Comprehensive guide for property buyers in California.
                </p>
                <button className="text-[#AB7132] hover:underline">
                  Download PDF
                </button>
              </div>
            </div>
            <div
              className={`p-6 rounded-lg flex items-start ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
            >
              <Download className="w-6 h-6 text-[#AB7132] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl mb-2">Property Development Guide</h3>
                <p className="mb-4">
                  Essential information for property developers.
                </p>
                <button className="text-[#AB7132] hover:underline">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className={`p-8 rounded-lg text-center ${isDark ? "bg-gray-900" : "bg-gray-100"} mb-16`}
        >
          <h2 className="text-2xl font-serif mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to receive our latest legal updates and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-[#AB7132] hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
