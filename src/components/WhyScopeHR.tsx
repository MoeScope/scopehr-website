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
    <section id="about" className="py-20 sm:py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — Text (60%) */}
          <ScrollReveal>
            <div className="lg:col-span-3">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2563EB] bg-[#2563EB]/10 rounded-full mb-5">
                Why Choose Us
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why ScopeHR
              </h2>

              <div className="space-y-4 text-gray-400 leading-relaxed">
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

          {/* Right — Stats grid (40%) */}
          <ScrollReveal delay={0.15}>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 sm:p-6 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <div
                    className={`text-3xl sm:text-4xl font-extrabold mb-1.5 ${
                      stat.accent ? "text-[#2563EB]" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
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
