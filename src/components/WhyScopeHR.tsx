"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "8+", label: "Years Serving Ontario Employers" },
  { value: "24/7", label: "Support Availability" },
  { value: "ON & BC", label: "Coverage Area" },
  { value: "3 Types", label: "Temp, Perm & Temp-to-Perm" },
];

export default function WhyScopeHR() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Illustration + Text */}
          <ScrollReveal>
            <div>
              {/* Illustration */}
              <div className="mb-10 flex justify-center lg:justify-start">
                <Image
                  src="/illustration-why.svg"
                  alt="Team expertise and trust illustration"
                  width={500}
                  height={450}
                  className="w-full max-w-sm"
                />
              </div>

              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2563EB] bg-[#2563EB]/5 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why ScopeHR
              </h2>

              <div className="space-y-6 text-[#475569] leading-relaxed">
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

          {/* Right — Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-colors duration-300 ${
                    i === 0
                      ? "bg-[#0A1628] border-[#0A1628] text-white col-span-2 sm:col-span-1"
                      : i === 1
                      ? "bg-[#2563EB] border-[#2563EB] text-white"
                      : "bg-[#F8FAFC] border-gray-100 hover:border-[#2563EB]/20"
                  }`}
                >
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold mb-2 ${
                      i >= 2 ? "text-[#0F172A]" : ""
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      i === 0
                        ? "text-gray-400"
                        : i === 1
                        ? "text-blue-100"
                        : "text-[#64748B]"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
