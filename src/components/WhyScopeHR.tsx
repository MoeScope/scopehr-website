"use client";

import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "8+", label: "Years Serving Ontario", accent: true },
  { value: "24/7", label: "Support Availability", accent: false },
  { value: "ON & BC", label: "Coverage Area", accent: false },
  { value: "3 Types", label: "Temp · Perm · Temp-to-Perm", accent: true },
];

export default function WhyScopeHR() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2563EB] bg-[#2563EB]/10 rounded-full mb-5">
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why ScopeHR
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Text */}
          <ScrollReveal>
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
          </ScrollReveal>

          {/* Right — Stats with shield watermark behind */}
          <ScrollReveal>
            <div className="relative">
              {/* Shield watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 30 320 310" fill="none" className="w-48 h-48 opacity-[0.07]">
                  <path d="M200 40 L310 85 L310 190 C310 260 260 310 200 335 C140 310 90 260 90 190 L90 85 Z" stroke="#3B82F6" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
                  <path d="M200 60 L295 100 L295 185 C295 248 250 292 200 315 C150 292 105 248 105 185 L105 100 Z" fill="#2563EB" opacity="0.5"/>
                  <path d="M155 185 L185 215 L250 145" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>

              {/* 2x2 Stats Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] transition-colors duration-300 backdrop-blur-sm"
                  >
                    <div
                      className={`text-3xl sm:text-4xl font-extrabold mb-1.5 ${
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
