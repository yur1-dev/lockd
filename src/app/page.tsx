"use client";

import Navbar from "@/app/(root)/Navbar/Navbar";
import Hero from "@/app/(root)/Hero/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
