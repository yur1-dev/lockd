"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Image from Next.js
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-red-500/30 shadow-2xl shadow-red-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            {/* ✅ Replace lock icon with logo.png */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center animate-pulse shadow-red-500/30 overflow-hidden">
              <Image
                src="/logo.png"
                alt="LOCK'D Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-3xl font-black text-red-700 tracking-wider">
              LOCK&apos;D
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-red-400 transition-all duration-300 font-bold text-lg relative group uppercase tracking-wide"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-white hover:text-orange-400 transition-all duration-300 font-bold text-lg relative group uppercase tracking-wide"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a
              href="https://t.me/lockd_community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-all duration-300 font-bold text-lg relative group uppercase tracking-wide"
            >
              Community
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* <Button
              asChild
              className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-black text-xl px-12 py-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
            >
              <Link href="/dashboard">ENTER APP</Link>
            </Button> */}
            <Button
              disabled
              className="bg-gray-700 text-gray-300 font-black text-xl px-12 py-6 rounded-2xl border border-gray-500/30 shadow-lg cursor-not-allowed"
            >
              COMING SOON
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-xl bg-black/50 border border-red-500/30 backdrop-blur transition-all duration-300 hover:bg-red-500/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border border-red-500/30 shadow-2xl shadow-red-500/20 rounded-b-2xl">
            <div className="px-6 py-8 space-y-6">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-white hover:text-red-400 transition-all duration-300 font-bold text-lg py-3 border-b border-red-500/30 uppercase tracking-wide"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-white hover:text-orange-400 transition-all duration-300 font-bold text-lg py-3 border-b border-orange-500/30 uppercase tracking-wide"
              >
                How It Works
              </button>
              <a
                href="https://t.me/lockd_community"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-yellow-400 transition-all duration-300 font-bold text-lg py-3 border-b border-yellow-500/30 uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-black text-xl px-12 py-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://t.me/lockd_official_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GET LOCK&apos;D
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
