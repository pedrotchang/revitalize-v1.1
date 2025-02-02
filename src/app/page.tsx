import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: 'Revitalize Legal, APC - Property Law Experts',
  description: 'Dedicated to providing exceptional legal representation for property owners with integrity and personalized attention.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Footer />
      </main>
    </>
  );
}
