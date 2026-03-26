"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to trigger CSS animations after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Geometric Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle top right */}
        <div className="animate-float-slow absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#2563EB]/10" />
        <div className="animate-float absolute top-20 -right-16 w-64 h-64 rounded-full border border-[#0891B2]/8" />

        {/* Accent shapes */}
        <div
          className="absolute top-1/4 left-[8%] w-20 h-20 border border-[#2563EB]/15 rounded-lg"
          style={{ animation: "spin 60s linear infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-[12%] w-32 h-32 border border-[#0891B2]/10 rounded-xl"
          style={{ animation: "spin 80s linear infinite reverse" }}
        />

        {/* Glowing dots */}
        <div className="animate-pulse-glow absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-[#2563EB]/40" />
        <div className="animate-pulse-glow absolute top-[60%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#0891B2]/40" style={{ animationDelay: "1s" }} />
        <div className="animate-pulse-glow absolute top-[45%] left-[70%] w-2 h-2 rounded-full bg-[#F59E0B]/30" style={{ animationDelay: "2s" }} />
        <div className="animate-pulse-glow absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#2563EB]/30" style={{ animationDelay: "3s" }} />

        {/* Gradient orbs */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0891B2]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div
              className={`transition-all duration-[800ms] ease-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-sm font-medium text-[#2563EB]">
                  Ontario&apos;s Trusted HR Firm
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Talent Is
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0891B2] bg-clip-text text-transparent">
                  Finding Yours
                </span>
              </h1>
            </div>

            <p
              className={`mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed transition-all duration-[800ms] ease-out delay-150 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Ontario&apos;s trusted HR firm for logistics, transportation, manufacturing,
              and skilled trades. We deliver the right people for the right
              job&nbsp;&mdash;&nbsp;fast.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row items-start gap-4 transition-all duration-[800ms] ease-out delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                I Need Workers
              </a>
              <Link
                href="/apply"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                I Need a Job
              </Link>
            </div>
          </div>

          {/* Right - Illustration */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-[1000ms] ease-out delay-200 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <Image
              src="/illustration-hero.svg"
              alt="Workers, logistics, and warehousing illustration"
              width={600}
              height={500}
              className="w-full max-w-lg xl:max-w-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
