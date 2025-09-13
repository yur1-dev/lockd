"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Gem,
  Rocket,
  Clock,
  Lock,
  ShieldOff,
  CheckCircle,
  Flame,
} from "lucide-react";

interface CountUpProps {
  end: number;
  duration?: number;
  start: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1500, start }) => {
  const [count, setCount] = useState(0);

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start]);

  return <span>{count}</span>;
};

const Stats: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainStats = [
    {
      icon: Gem,
      value: 1250,
      suffix: "+",
      label: "DIAMOND HANDS CREATED",
      description: "Users who've been LOCK'D",
      gradient: "from-danger to-danger/70",
    },
    {
      icon: Rocket,
      value: 89,
      suffix: "+",
      label: "MEME COINS LAUNCHED",
      description: "With built-in anti-dump",
      gradient: "from-warning to-warning/70",
    },
    {
      icon: Clock,
      value: 3420,
      suffix: "+",
      label: "30-MIN LOCKS COMPLETED",
      description: "Total lock periods served",
      gradient: "from-danger to-warning",
    },
    {
      icon: Lock,
      value: 24,
      suffix: "/7",
      label: "ALWAYS LOCK'D",
      description: "Community support",
      gradient: "from-warning to-danger",
    },
  ];

  const additionalStats = [
    {
      icon: ShieldOff,
      value: 567,
      suffix: "+",
      label: "PAPER HAND DUMPS PREVENTED",
      color: "fire-glow-text",
    },
    {
      icon: CheckCircle,
      value: 98,
      suffix: "%",
      label: "LOCK COMPLIANCE RATE",
      color: "text-warning",
    },
    {
      icon: Flame,
      value: 156,
      suffix: "+",
      label: "STRONGER COMMUNITIES BUILT",
      color: "fire-glow-text",
    },
  ];

  return (
    <section ref={statsRef} className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-orange-950/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black fire-glow-text mb-6 tracking-wider uppercase">
            LOCK'D STATS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building diamond hand communities, one lock at a time
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${
            animate ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {mainStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="brutal-card border-danger/30 hover:border-danger/60 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-2xl border border-danger/30`}
                  >
                    <IconComponent className="w-8 h-8 text-white fire-glow-text" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">
                    <CountUp end={stat.value} start={animate} />
                    <span className="text-2xl fire-glow-text">
                      {stat.suffix}
                    </span>
                  </p>
                  <p className="text-white font-semibold mb-2 tracking-wide uppercase text-sm">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ${
            animate ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {additionalStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="brutal-card border-danger/30 hover:border-danger/60 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">
                    <IconComponent className="w-8 h-8 mx-auto text-white fire-glow-text" />
                  </div>
                  <p className={`text-3xl font-bold mb-1 ${stat.color}`}>
                    <CountUp end={stat.value} start={animate} />
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-gray-400 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center p-8 brutal-card rounded-3xl border border-danger/30 bg-gradient-to-r from-red-950/20 to-orange-950/20">
          <p className="text-xl text-white">
            <span className="fire-glow-text font-bold">
              EVERY APE GETS LOCKED.
            </span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="fire-glow-text font-bold">NO EXCEPTIONS.</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="fire-glow-text font-bold">
              JUST DIAMOND HANDS.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
