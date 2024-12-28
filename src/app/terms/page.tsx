"use client";

import * as React from "react";
import { useState, useEffect } from "react";

export default function TermsOfService() {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-8">Terms of Service</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-serif mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">
              2. Description of Services
            </h2>
            <p className="mb-4">
              Revitalize Lega, APC provides legal services to property owners
              and landlords faced with difficult legal issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">3. Privacy Policy</h2>
            <p className="mb-4">
              Your use of the website is also governed by our Privacy Policy.
              Please review our Privacy Policy, which also governs the site and
              informs users of our data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">4. Disclaimer</h2>
            <p className="mb-4">
              The information provided on this website is for general
              informational purposes only and should not be construed as legal
              advice. Your use of this website does not create an
              attorney-client relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              All content included on this website, such as text, graphics,
              logos, images, and software, is the property of Revitalize Legal,
              APC Law Offices or its content suppliers and protected by
              copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              Revitalize Legal, APC Law Offices shall not be liable for any
              damages arising out of or in connection with the use or inability
              to use the materials on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">7. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws of California State and you irrevocably
              submit to the exclusive jurisdiction of the courts in that
              location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Please
              review these terms periodically for changes. Your continued use of
              the website after any modification constitutes your acceptance of
              the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div
              className={`mt-4 p-6 rounded ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
            >
              <p>Revitalize Legal, APC Law Offices</p>
              <p>123 Legal Street</p>
              <p>Los Angeles, CA</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: contact@revitalize.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
