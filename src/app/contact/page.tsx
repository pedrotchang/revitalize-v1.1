"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main
      className={`min-h-screen pt-24 ${isDark ? "bg-[#000000] text-[#DFE0DF]" : "bg-white text-[#36454F]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Get in touch with our real estate legal experts. We&aposre here to
            help protect your property interests in California.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="hidden lg:block space-y-0">
            <h2 className="text-3xl font-serif mb-6">Get In Touch</h2>

            {/* Contact Cards - Now with black background */}
            <div className="p-6 rounded-lg bg-black flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#AB7132] flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1 text-[#DFE0DF]">Email</h3>
                <p className="text-[#B9A89A]">contact@revitalize.com</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-black flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#AB7132] flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1 text-[#DFE0DF]">Phone</h3>
                <p className="text-[#B9A89A]">(555) 123-4567</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-black flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#AB7132] flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1 text-[#DFE0DF]">Location</h3>
                <p className="text-[#B9A89A]">123 Legal Street</p>
                <p className="text-[#B9A89A]">Los Angeles, CA 90021</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-black flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#AB7132] flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1 text-[#DFE0DF]">
                  Business Hours
                </h3>
                <p className="text-[#B9A89A]">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-[#B9A89A]">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Keeping original styling */}
          <div>
            <h2 className="text-3xl font-serif mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-md border ${
                    isDark
                      ? "bg-[#36454F] border-[#B9A89A] text-[#DFE0DF]"
                      : "bg-white border-[#B9A89A]"
                  } focus:outline-none focus:ring-2 focus:ring-[#AB7132]`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-md border ${
                    isDark
                      ? "bg-[#36454F] border-[#B9A89A] text-[#DFE0DF]"
                      : "bg-white border-[#B9A89A]"
                  } focus:outline-none focus:ring-2 focus:ring-[#AB7132]`}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    isDark
                      ? "bg-[#36454F] border-[#B9A89A] text-[#DFE0DF]"
                      : "bg-white border-[#B9A89A]"
                  } focus:outline-none focus:ring-2 focus:ring-[#AB7132]`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-2 rounded-md border ${
                    isDark
                      ? "bg-[#36454F] border-[#B9A89A] text-[#DFE0DF]"
                      : "bg-white border-[#B9A89A]"
                  } focus:outline-none focus:ring-2 focus:ring-[#AB7132]`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#AB7132] hover:bg-[#FBC000] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </main>
  );
}
