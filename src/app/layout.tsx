import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOCK'D - Anti-Dump Meme Coin Launchpad",
  description:
    "Launch meme coins with built-in 30-minute anti-dump protection. Every ape gets locked. No paper hands, just diamond energy.",
  keywords:
    "LOCK'D, meme coin, anti-dump, cryptocurrency, launchpad, diamond hands, Telegram bot",
  authors: [{ name: "LOCK'D Team" }],
  creator: "LOCK'D",
  publisher: "LOCK'D",
  openGraph: {
    title: "LOCK'D - Anti-Dump Meme Coin Launchpad",
    description:
      "Launch meme coins with built-in 30-minute anti-dump protection. Every ape gets locked.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOCK'D - Anti-Dump Meme Coin Launchpad",
    description:
      "Launch meme coins with built-in 30-minute anti-dump protection. Every ape gets locked.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <div className="min-h-screen gradient-bg">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
