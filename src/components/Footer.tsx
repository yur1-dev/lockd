"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image"; // ✅ Import Image from Next.js

const Footer: React.FC = () => {
  const [active, setActive] = useState(false);
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerContentRef.current) {
      observer.observe(footerContentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    product: [
      { name: "Launch Token", href: "https://t.me/lockd_official_bot" },
      { name: "Dashboard", href: "https://t.me/lockd_official_bot" },
      { name: "Docs", href: "#" },
    ],
    community: [
      { name: "Telegram", href: "https://t.me/lockd_community" },
      { name: "X", href: "https://x.com/lockd_official" }, // updated
      { name: "Discord", href: "#" },
    ],
    features: [
      { name: "30-Min Lock", href: "#features" },
      { name: "Anti-Dump", href: "#features" },
      { name: "Meme Launchpad", href: "#features" },
    ],
    support: [
      { name: "Help Center", href: "https://t.me/lockd_support" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "https://t.me/lockd_community" },
    ],
  };

  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div
        ref={footerContentRef}
        className={`relative max-w-7xl mx-auto ${
          active ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Logo + Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 space-x-3">
            <div className="w-12 h-12 flex items-center justify-center animate-pulse-glow">
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
            </div>
            <h1 className="text-4xl font-bold text-gradient animate-blink">
              LOCK&apos;D
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            The meme coin launchpad where every ape gets locked for 30 minutes.
            <br />
            <span className="text-primary font-semibold">
              No paper hands. Just diamond energy.
            </span>
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 justify-items-center">
          <div>
            <h4 className="text-primary font-bold mb-4 text-sm uppercase tracking-wider">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-4 text-sm uppercase tracking-wider">
              COMMUNITY
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-bold mb-4 text-sm uppercase tracking-wider">
              FEATURES
            </h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-4 text-sm uppercase tracking-wider">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center space-y-8 mb-12">
          <div className="flex space-x-4">
            {/* X Logo */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 bg-transparent"
            >
              <a
                href="https://x.com/lockd_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2H21.5l-7.41 8.44L22.5 22h-6.09l-4.79-6.41L6.3 22H3l7.9-8.98L2.5 2h6.18l4.35 5.83L18.24 2Z" />
                </svg>
              </a>
            </Button>

            {/* Telegram */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 bg-transparent"
            >
              <a
                href="https://t.me/lockd_community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold animate-glow"
          >
            <a
              href="https://t.me/lockd_official_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET LOCK&apos;D NOW
            </a>
          </Button>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            &copy; {new Date().getFullYear()} LOCK&apos;D. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            WARNING: All purchases are automatically locked for 30 minutes. This
            is not financial advice. DYOR before getting LOCK&apos;D.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
