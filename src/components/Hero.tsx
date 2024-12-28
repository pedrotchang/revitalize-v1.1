"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import NextLink from "next/link";

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

export default function Hero() {
  const [
    _isDark /* eslint-disable-line @typescript-eslint/no-unused-vars */,
    setIsDark,
  ] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Fixed type here

  // Separate useEffect for dark mode
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

  // Video useEffect with proper type
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.8;

      video.addEventListener("loadeddata", () => {
        if (video) video.playbackRate = 0.8;
      });

      video.addEventListener("play", () => {
        if (video) video.playbackRate = 0.8;
      });
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="relative h-screen">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/landing-page-compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          {/* Small header text */}
          <div className="text-sm uppercase tracking-wider mb-4 text-gray-300">
            Revitalize Law Offices
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6 text-white">
            Protecting What
            <br />
            You Value Most
          </h1>

          {/* Description text */}
          <p className="max-w-2xl text-lg sm:text-xl mb-8 text-gray-300">
            Experience, preparation, and advocacy are critical to protecting
            your properties as a landlord in Southern California{" "}
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <NextLink
              href="/contact"
              className="bg-[#AB7132] hover:bg-[#FBC000] text-white px-8 py-3 rounded-md transition-colors duration-200"
            >
              FREE CONSULTATION
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
