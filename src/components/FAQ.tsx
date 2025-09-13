"use client";

import type React from "react";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={itemRef}
      className={`cursor-pointer card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 ${
        inView ? "animate-fadeIn" : "opacity-0"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-foreground pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="text-primary w-5 h-5" />
            ) : (
              <ChevronDown className="text-primary w-5 h-5" />
            )}
          </div>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
        >
          <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is LOCK'D and how does it work?",
      answer:
        "LOCK'D is a meme coin launchpad with built-in anti-dump protection. Every token purchase is automatically locked for 30 minutes, preventing instant dumps and building stronger diamond-hand communities.",
    },
    {
      question: "Why are my tokens locked for 30 minutes?",
      answer:
        "The 30-minute lock prevents paper hands from instantly dumping and ruining the party. It gives your community time to build momentum and creates true diamond hand holders who believe in the project.",
    },
    {
      question: "How do I track my locked tokens?",
      answer:
        "Every user gets a personal dashboard showing all their active locks with countdown timers. You'll get release notifications when your tokens unlock, plus a complete history of all your lock periods.",
    },
    {
      question: "Can I cancel or bypass the 30-minute lock?",
      answer:
        "Nope! Every ape gets locked, no exceptions. This is the core feature that makes LOCK'D work - no backdoors, no VIP bypasses. When you buy, you're LOCK'D UP for 30 minutes. That's the deal.",
    },
    {
      question: "How do I launch my own meme coin on LOCK'D?",
      answer:
        "Simply start a conversation with @lockd_official_bot on Telegram. The bot will guide you through creating your meme coin with automatic 30-minute lock protection for all buyers.",
    },
    {
      question: "Is this available outside of Telegram?",
      answer:
        "LOCK'D is Telegram-native for maximum convenience. No external apps, no complicated interfaces - everything happens right in Telegram where the meme coin community lives.",
    },
    {
      question: "What happens after the 30 minutes are up?",
      answer:
        "Once your lock period ends, you get a release notification and can freely trade your tokens. Your personal dashboard tracks when each of your purchases unlocks with real-time countdown timers.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            LOCK'D FAQ
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about getting LOCK'D UP
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
