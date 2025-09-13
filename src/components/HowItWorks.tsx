"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Lock,
  Gem,
  MessageSquare,
  Zap,
  ShieldCheck,
} from "lucide-react";

const HowItWorks: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Launch Your Meme Coin",
      description: "Start @lockd_official_bot on Telegram",
      subtitle: "Create with Built-in Anti-Dump Protection",
      icon: Rocket,
      buttonText: "LAUNCH NOW",
      link: "https://t.me/lockd_official_bot",
      features: ["Instant Launch", "Built-in Lock"],
      featureIcons: [Zap, Lock],
    },
    {
      title: "Buyers Get LOCK'D",
      description: "Every purchase = 30min automatic lock",
      subtitle: "No Paper Hands, No Instant Dumps",
      icon: Lock,
      buttonText: "GET LOCK'D",
      link: "https://t.me/lockd_official_bot",
      features: ["30min Lock", "No Dumps"],
      featureIcons: [Lock, ShieldCheck],
    },
    {
      title: "Track & Release",
      description: "Personal dashboard with countdown timers",
      subtitle: "Diamond Hands Community Building",
      icon: Gem,
      buttonText: "ENTER X",
      link: "https://t.me/lockd_community",
      features: ["Dashboard", "Diamond Hands"],
      featureIcons: [MessageSquare, Gem],
    },
  ];

  // Reusable classes to keep buttons identical across sections
  const primaryBtn =
    "bg-gradient-to-r from-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-black text-lg px-10 py-4 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105";

  const secondaryOutlineBtn =
    "bg-transparent border-2 border-red-500/50 text-white font-black text-lg px-10 py-4 rounded-2xl hover:bg-red-500/20 transition-all duration-300 backdrop-blur-lg hover:scale-105";

  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How LOCK'D Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Launch meme coins with automatic 30-minute anti-dump protection in
            three simple steps
          </p>
        </div>

        <div
          ref={containerRef}
          className={`space-y-20 ${animate ? "animate-fadeIn" : "opacity-0"}`}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2 text-center lg:text-left">
                  <Badge className="mb-4 bg-black/50 text-red-400 border border-red-500/30 px-4 py-2">
                    STEP {index + 1}
                  </Badge>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-xl text-gray-300 mb-2">
                    {step.description}
                  </p>

                  <p className="text-red-400 font-semibold mb-6">
                    {step.subtitle}
                  </p>

                  <Button asChild size="lg" className={primaryBtn}>
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {step.buttonText}
                    </a>
                  </Button>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                    {step.features.map((feature, featureIndex) => {
                      const FeatureIcon = step.featureIcons[featureIndex];
                      return (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="border-red-500/20 text-white bg-black/20 flex items-center gap-2 px-3 py-1"
                        >
                          <FeatureIcon className="w-4 h-4" />
                          <span className="text-sm">{feature}</span>
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative">
                    <div
                      className="w-80 h-80 rounded-3xl border border-red-500/20 flex items-center justify-center animate-float bg-gradient-to-br from-black/30 to-transparent shadow-lg"
                      style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.6)" }}
                    >
                      <IconComponent className="w-32 h-32 text-red-400" />
                    </div>

                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-full animate-pulse" />
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center p-8 bg-black/40 rounded-3xl border border-red-500/20 shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Diamond Hand Communities?
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Every ape gets locked. No exceptions. Start building stronger meme
            coin communities today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className={primaryBtn}>
              <a
                href="https://t.me/lockd_official_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET LOCK'D NOW
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className={secondaryOutlineBtn}
            >
              <a
                href="https://t.me/lockd_community"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enter X
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
