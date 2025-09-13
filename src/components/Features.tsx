"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lock,
  Rocket,
  BarChart3,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";

const Features: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Lock,
      title: "30-MIN LOCK PROTECTION",
      description:
        "Every purchase is automatically locked for 30 minutes. No paper hands, no instant dumps. Just pure diamond energy.",
      gradient: "from-red-500 to-red-500/70",
      glowColor: "rgba(239,68,68,0.28)",
    },
    {
      icon: Rocket,
      title: "MEME COIN LAUNCHPAD",
      description:
        "Launch your meme coins with built-in anti-dump protection. Create, hype, and watch your community grow stronger.",
      gradient: "from-orange-500 to-orange-500/70",
      glowColor: "rgba(251,146,60,0.28)",
    },
    {
      icon: BarChart3,
      title: "PERSONAL DASHBOARD",
      description:
        "Track your locked tokens with countdown timers, release notifications, and your complete lock history in one place.",
      gradient: "from-red-500 to-orange-500",
      glowColor: "rgba(239,68,68,0.24)",
    },
    {
      icon: MessageSquare,
      title: "TELEGRAM NATIVE",
      description:
        "Everything happens in Telegram. No external apps, no complicated interfaces. Just pure meme coin trading convenience.",
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgba(251,146,60,0.24)",
    },
    {
      icon: Shield,
      title: "COMMUNITY SHIELD",
      description:
        "Build stronger communities by eliminating instant dumps. Every ape gets locked, creating true diamond hand holders.",
      gradient: "from-red-500 to-red-500/70",
      glowColor: "rgba(239,68,68,0.28)",
    },
    {
      icon: Zap,
      title: "QUANTUM SPEED",
      description:
        "Lightning-fast transactions with quantum-level security. Experience the future of decentralized meme coin trading.",
      gradient: "from-orange-500 to-orange-500/70",
      glowColor: "rgba(251,146,60,0.28)",
    },
  ];

  return (
    <section
      id="features"
      ref={featuresRef}
      className="py-32 px-4 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black fire-glow-text mb-8 tracking-wider uppercase">
            LOCK&apos;D FEATURES
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 mx-auto mb-8 rounded-full shadow-lg" />

          <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Revolutionary{" "}
            <span className="fire-glow-text font-bold">
              ANTI-DUMP TECHNOLOGY
            </span>{" "}
            that transforms how meme coins are launched and traded
          </p>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${
            animate ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group brutal-card hover:scale-105 transition-all duration-500 border-red-500/30 hover:border-red-500/60"
                style={{
                  animationDelay: `${index * 0.12}s`,
                  boxShadow: `0 8px 30px ${feature.glowColor}`,
                }}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl animate-pulse relative border border-red-500/20`}
                    style={{
                      boxShadow: `0 0 20px ${feature.glowColor}`,
                      animationDelay: `${index * 0.16}s`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white fire-glow-text" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 group-hover:fire-glow-text transition-all duration-500 tracking-wide uppercase">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-all duration-300">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
