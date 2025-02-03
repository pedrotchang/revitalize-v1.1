"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import NextLink from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define interface for FAQ props
interface FAQProps {
  question: string;
  answer: string;
  isDark: boolean;
}

// FAQ Component
const FAQ: React.FC<FAQProps> = ({ question, answer, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] mb-4" : "max-h-0"
        }`}
      >
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

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

  const landlordFAQs = [
    {
      question: "What is the process for evicting a tenant in California?",
      answer: "The process involves serving proper notice, filing an unlawful detainer lawsuit, attending court hearings, and coordinating with the sheriff if necessary. Each step must follow specific legal requirements.",
    },
    {
      question: "What are my rights as a landlord during an eviction?",
      answer: "Landlords are entitled to receive timely rent payments, have tenants comply with lease terms, and recover possession when violations occur. However, all actions must follow California law.",
    },
    {
      question: "What should I do if my tenant files for bankruptcy?",
      answer: "A tenant filing for bankruptcy may trigger an automatic stay, temporarily halting eviction proceedings. To continue, you may need to file a motion for relief from the automatic stay in bankruptcy court.",
    },
    {
      question: "Can I raise the rent during a tenancy?",
      answer: "In California, rent increases are subject to local rent control ordinances and state law under the Tenant Protection Act of 2019. Generally, rent increases are limited to 5% plus local inflation (capped at 10%) annually.",
    },
    {
      question: "How long do I have to return a tenant's security deposit?",
      answer: "You must return the tenant's security deposit, minus any lawful deductions, within 21 days of the tenant vacating the property. If deductions are made, an itemized statement is required.",
    },
  ];

  const tenantFAQs = [
    {
      question: "What should I do if I receive an eviction notice?",
      answer: "Review the notice carefully, understand the type and timeframe, and seek legal advice if needed. Consider communicating with your landlord about potential solutions.",
    },
    {
      question: "What are my rights as a tenant during the eviction process?",
      answer: "Tenants have the right to due process, proper notice, and the opportunity to contest the eviction in court. You can also appeal unfavorable decisions if warranted.",
    },
    {
      question: "Can my landlord evict me for reporting habitability issues?",
      answer: "No. Retaliatory evictions are illegal in California. If you report unsafe or uninhabitable conditions, your landlord cannot evict you in retaliation.",
    },
    {
      question: "Can a landlord evict me without going to court?",
      answer: "No. Self-help evictions, such as changing locks or shutting off utilities, are illegal in California. Landlords must obtain a court order to evict tenants lawfully.",
    },
    {
      question: "What should I do if my landlord fails to return my security deposit?",
      answer: "California law requires landlords to return the security deposit within 21 days of moving out. If they fail to do so, send a written demand letter and consider filing a small claims court case.",
    },
  ];

  return (
    <main
      className={`min-h-screen pt-24 ${
        isDark ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Educating You About California Eviction Laws
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Learn about and understand how to navigate landlord-tenant law.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* For Landlords */}
          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-serif mb-4">For Landlords</h2>
            <p className="text-sm mb-4">Coming soon: Detailed guides and resources for landlords.</p>
          </div>

          {/* For Tenants */}
          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-serif mb-4">For Tenants</h2>
            <p className="text-sm mb-4">Coming soon: Detailed guides and resources for tenants.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8">
            Frequently Asked Questions
          </h2>

          {/* Landlord FAQs */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif mb-4">Landlord FAQs</h3>
            <div
              className={`rounded-lg ${
                isDark ? "bg-gray-900" : "bg-gray-100"
              } p-6`}
            >
              {landlordFAQs.map((faq, index) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} isDark={isDark} />
              ))}
            </div>
          </div>

          {/* Tenant FAQs */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Tenant FAQs</h3>
            <div
              className={`rounded-lg ${
                isDark ? "bg-gray-900" : "bg-gray-100"
              } p-6`}
            >
              {tenantFAQs.map((faq, index) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <NextLink
            href="/contact"
            className="inline-block bg-[#AB7132] hover:bg-[#FBC000] text-white px-8 py-3 rounded-md transition-colors duration-200"
          >
            TALK TO AN ATTORNEY TODAY
          </NextLink>
        </div>
      </div>
      <Footer />
    </main>
  );
}
