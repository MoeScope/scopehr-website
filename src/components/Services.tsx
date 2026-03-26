"use client";

import { Users, Headset, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Users,
    title: "Unrivaled Staffing Services",
    description:
      "We provide flexible staffing solutions with the most qualified talent, boosting your efficiency and profitability. Temporary, permanent, and temp-to-perm placements tailored to your operation.",
  },
  {
    icon: Headset,
    title: "24/7 Dedicated Support",
    description:
      "Our team works around the clock to maintain the highest standard of client satisfaction, delivering top-notch workforce on demand. When you need people, we answer.",
  },
  {
    icon: TrendingUp,
    title: "Financial Benefits",
    description:
      "Highly competitive rates, payroll cost-cutting initiatives, and an efficient workforce. We help our clients immediately boost profits while reducing HR overhead.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2563EB] bg-[#2563EB]/5 rounded-full mb-4">
              What Sets Us Apart
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Scope Factor
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.12}>
              <div className="group relative p-8 sm:p-10 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#2563EB]/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-xl font-bold text-[#0F172A] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#0891B2] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
