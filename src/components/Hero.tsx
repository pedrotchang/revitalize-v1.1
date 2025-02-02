"use client";

import * as React from "react";
import { useState, useEffect, useRef, Suspense } from "react";
import NextLink from "next/link";

// Loading placeholder
const LoadingPlaceholder = () => (
  <div className="absolute inset-0 bg-black/90 animate-pulse" />
);

// Separate video component with responsive source handling
const VideoBackground = ({ onLoadStart }: { onLoadStart: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.preload = "auto";
      video.playbackRate = 0.8;

      const handleCanPlay = () => {
        onLoadStart();
        video.play().catch(console.error);
      };

      video.addEventListener("canplay", handleCanPlay);
      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, [onLoadStart]);

  // Change source based on screen size
  const videoSource = isMobile
    ? "/videos/landing-page.webm"
    : "/videos/landing-page.webm";

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      // poster="/videos/poster-image.jpg" // Optional: Add a poster image
    >
      <source src={videoSource} type="video/webm" />
    </video>
  );
};

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen">
      <Suspense fallback={<LoadingPlaceholder />}>
        {!isVideoLoaded && <LoadingPlaceholder />}
        <VideoBackground onLoadStart={() => setIsVideoLoaded(true)} />
      </Suspense>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <div className="text-sm uppercase tracking-wider mb-4 text-gray-300 animate-fade-in">
            Revitalize Law Offices
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6 text-white animate-fade-in delay-100">
            Protecting What
            <br />
            You Value Most
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl mb-8 text-gray-300 animate-fade-in delay-200">
            Experience, preparation, and advocacy are critical to protecting
            your properties as a landlord in Southern California
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
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
