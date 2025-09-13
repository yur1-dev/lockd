"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Gem, Flame, Clock } from "lucide-react";

const CTA: React.FC = () => {
  const [active, setActive] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ctaRef} className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto text-center ${
          active ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="mb-8">
          <Lock className="w-24 h-24 mx-auto text-primary animate-float" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
          READY TO GET LOCK'D UP?
        </h2>

        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          Every Ape Gets Locked. No Exceptions.
        </h3>

        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of diamond hands who are using{" "}
          <span className="text-primary font-semibold">
            30-minute lock periods
          </span>{" "}
          to eliminate paper hands and build stronger communities.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Badge
            variant="secondary"
            className="px-4 py-2 bg-primary/10 text-primary border-primary/20 flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            30min Anti-Dump Lock
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 bg-primary/10 text-primary border-primary/20 flex items-center gap-2"
          >
            <Gem className="w-4 h-4" />
            Diamond Hands Only
          </Badge>
          <Badge
            variant="secondary"
            className="px-4 py-2 bg-secondary/10 text-secondary border-secondary/20 flex items-center gap-2"
          >
            <Flame className="w-4 h-4" />
            Meme Coin Launchpad
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Main button - uniform with navbar */}
          <Button
            disabled
            className="bg-gradient-to-r from-red-700 to-red-800 text-white font-black text-xl px-12 py-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/30 cursor-not-allowed"
          >
            COMING SOON
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p className="mb-2">
            WARNING: All purchases are automatically locked for 30 minutes
          </p>
          <p>This is not financial advice. DYOR before getting LOCK'D.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
