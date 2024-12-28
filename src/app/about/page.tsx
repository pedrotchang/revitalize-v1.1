"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Building2, Users, Scale, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
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
            About Revitalize Legal
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            With decades of combined experience in California real estate law,
            our firm provides sophisticated legal solutions for property matters
            throughout Los Angeles and beyond.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          >
            <Building2 className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-serif mb-2">Property Expertise</h3>
            <p>
              Deep understanding of California real estate law and property
              regulations.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          >
            <Users className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-serif mb-2">Client-Focused</h3>
            <p>
              Dedicated to understanding and achieving our clients&lsquo
              property goals.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          >
            <Scale className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-serif mb-2">Ethical Practice</h3>
            <p>
              Committed to the highest standards of legal ethics and
              professional integrity.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          >
            <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-serif mb-2">Proven Results</h3>
            <p>
              Track record of successful outcomes in complex property matters.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Commitment</h2>
            <p className="mb-4">
              At Revitalize Legal, we understand that real estate matters
              require both legal expertise and practical business acumen. Our
              attorneys combine deep legal knowledge with strategic thinking to
              protect your property interests and investments.
            </p>
            <p>
              Whether you&aposre dealing with property acquisitions, development
              projects, lease agreements, or property disputes, our team
              provides the sophisticated counsel you need to navigate
              California&aposs complex real estate landscape.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Specialized focus on California real estate law</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Comprehensive property transaction support</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Strategic approach to property dispute resolution</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Detailed knowledge of local property regulations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className={`text-center p-12 rounded-lg ${isDark ? "bg-gray-900" : "bg-gray-100"} mb-16`}
        >
          <h2 className="text-3xl font-serif mb-4">
            Ready to Protect Your Property Interests?
          </h2>
          <p className="mb-6">
            Schedule a consultation with our experienced real estate attorneys.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
