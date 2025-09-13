"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Clock, Gem, Rocket } from "lucide-react";

type Drop = {
  id: number;
  left: string;
  duration: number;
  delay: string;
};

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    setAnimate(true);

    // Generate random drops on the client only to avoid SSR hydration mismatches
    const newDrops: Drop[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 1,
      delay: `-${Math.random() * 3}s`,
    }));

    setDrops(newDrops);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {drops.map((drop) => (
            <div
              key={drop.id}
              className="absolute w-px h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent"
              style={{
                left: drop.left,
                animation: `money-rain ${drop.duration}s linear infinite`,
                animationDelay: drop.delay,
              }}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes money-rain {
            0% {
              transform: translateY(-100vh);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `}</style>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div
            className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent" />
          <div className="absolute left-2/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div
          className={`space-y-12 ${animate ? "animate-fadeIn" : "opacity-0"}`}
        >
          <Badge className="px-6 py-3 text-sm font-bold bg-black/50 border border-red-500/50 text-red-400 backdrop-blur-lg">
            <Lock className="w-4 h-4 mr-2" />
            ANTI-DUMP PROTOCOL ACTIVE
          </Badge>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-wider">
              LOCK'D
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              BUY IT. LOCK IT. WATCH IT UNLOCK.
            </h2>
          </div>

          <div className="bg-black/50 border border-red-500/30 backdrop-blur-lg p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Launch meme coins with{" "}
              <span className="text-red-500 font-bold text-xl md:text-2xl">
                30-minute anti-dump locks
              </span>
              . Every ape gets locked. No instant dumps. Just pure{" "}
              <span className="text-white font-bold">diamond hands energy</span>
              .
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="bg-black/50 border border-red-500/30 backdrop-blur-lg px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
              <Clock className="w-6 h-6 text-red-500 inline mr-3" />
              <span className="font-bold text-white">
                30min Lock Protection
              </span>
            </div>
            <div className="bg-black/50 border border-orange-500/30 backdrop-blur-lg px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
              <Gem className="w-6 h-6 text-orange-500 inline mr-3" />
              <span className="font-bold text-white">Diamond Hands Only</span>
            </div>
            <div className="bg-black/50 border border-yellow-500/30 backdrop-blur-lg px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
              <Rocket className="w-6 h-6 text-yellow-500 inline mr-3" />
              <span className="font-bold text-white">Meme Coin Launchpad</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-black text-xl px-12 py-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://t.me/lockd_official_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lock className="w-5 h-5 mr-2" />
                CREATE NOW
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-red-500/50 text-white font-black text-xl px-12 py-6 rounded-2xl hover:bg-red-500/20 transition-all duration-300 backdrop-blur-lg hover:scale-105"
            >
              <a
                href="https://raydium.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY NOW
              </a>
            </Button>
          </div>

          <div className="mt-16 bg-black/50 border border-red-500/30 backdrop-blur-lg p-8 rounded-3xl max-w-3xl mx-auto hover:scale-[1.02] transition-all duration-300">
            <div className="text-center">
              <p className="text-red-500 font-black text-lg mb-4 flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                LOCK'D BRUTAL MECHANICS
                <Lock className="w-5 h-5" />
              </p>
              <div className="text-lg text-white space-y-2">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-red-500/20 rounded-full font-bold border border-red-500/50 hover:scale-105 transition-all duration-300">
                    BUY
                  </span>
                  <span className="text-red-500 font-bold">→</span>
                  <span className="px-4 py-2 bg-orange-500/20 rounded-full font-bold border border-orange-500/50 hover:scale-105 transition-all duration-300">
                    30MIN LOCKUP
                  </span>
                  <span className="text-orange-500 font-bold">→</span>
                  <span className="px-4 py-2 bg-yellow-500/20 rounded-full font-bold border border-yellow-500/50 hover:scale-105 transition-all duration-300">
                    DASHBOARD
                  </span>
                  <span className="text-yellow-500 font-bold">→</span>
                  <span className="px-4 py-2 bg-red-500/20 rounded-full font-bold border border-red-500/50 hover:scale-105 transition-all duration-300">
                    UNLOCK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
