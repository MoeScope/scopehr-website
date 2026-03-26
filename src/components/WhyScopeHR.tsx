"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "8+", label: "Years Serving Ontario", accent: true },
  { value: "24/7", label: "Support Availability", accent: false },
  { value: "ON & BC", label: "Coverage Area", accent: false },
  { value: "3 Types", label: "Temp · Perm · Temp-to-Perm", accent: true },
];

export default function WhyScopeHR() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Text */}
          <ScrollReveal>
            <div>
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2563EB] bg-[#2563EB]/10 rounded-full mb-6">
                Why Choose Us
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why ScopeHR
              </h2>

              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  At ScopeHR, we use specialized techniques and expertise to
                  assist employers in recruiting effectively and efficiently. We
                  use a wide assortment of procedures and measures in order to
                  provide extraordinary personnel to our clients. Our main goal
                  and guarantee is providing the right talent for the right job.
                </p>
                <p>
                  We&apos;re not a staffing agency that throws bodies at a
                  problem. We&apos;re an HR firm that takes the time to
                  understand your operation, vet candidates thoroughly, and
                  deliver people who actually show up and perform.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Illustration + Stats */}
          <ScrollReveal delay={0.2}>
            <div>
              {/* Shield / Checkmark Illustration */}
              <div className="flex justify-center mb-10">
                <Image
                  src="/illustration-why.svg"
                  alt="Trust and reliability"
                  width={400}
                  height={360}
                  className="w-full max-w-xs"
                />
              </div>

              {/* 2x2 Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] transition-colors duration-300"
                  >
                    <div
                      className={`text-3xl sm:text-4xl font-extrabold mb-2 ${
                        stat.accent ? "text-[#2563EB]" : "text-white"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
