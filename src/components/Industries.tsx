"use client";

import {
  Truck,
  Factory,
  HardHat,
  UtensilsCrossed,
  Warehouse,
  Cog,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const industries = [
  {
    icon: Truck,
    title: "Transportation & Freight",
    description:
      "AZ/DZ drivers, owner-operators, fleet staffing",
    color: "from-[#2563EB] to-[#1D4ED8]",
    patternColor: "#2563EB",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Assembly, machine operators, production line workers",
    color: "from-[#0891B2] to-[#0E7490]",
    patternColor: "#0891B2",
  },
  {
    icon: HardHat,
    title: "Construction & Skilled Trades",
    description:
      "Electricians, millwrights, welders, heavy equipment",
    color: "from-[#F59E0B] to-[#D97706]",
    patternColor: "#F59E0B",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Production & Processing",
    description:
      "Line workers, QA, sanitation, warehouse",
    color: "from-[#10B981] to-[#059669]",
    patternColor: "#10B981",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description:
      "Forklift, picker/packer, shipping/receiving",
    color: "from-[#8B5CF6] to-[#7C3AED]",
    patternColor: "#8B5CF6",
  },
  {
    icon: Cog,
    title: "General Industrial",
    description:
      "Labour-ready workforce for any industrial operation",
    color: "from-[#64748B] to-[#475569]",
    patternColor: "#64748B",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2563EB] bg-[#2563EB]/5 rounded-full mb-4">
              Deep Expertise
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-[#64748B]">
              Deep expertise across Ontario and BC&apos;s industrial backbone
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.title} delay={i * 0.1}>
              <div className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Large faded circle in bottom-right */}
                  <div
                    className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500"
                    style={{ backgroundColor: industry.patternColor }}
                  />
                  {/* Smaller circle top-right */}
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500"
                    style={{ backgroundColor: industry.patternColor }}
                  />
                  {/* Diagonal line pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`diag-${i}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="20" stroke={industry.patternColor} strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#diag-${i})`} />
                  </svg>
                </div>

                {/* Icon with gradient bg */}
                <div
                  className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${industry.color} text-white mb-5`}
                >
                  <industry.icon size={24} strokeWidth={1.5} />
                </div>

                <h3
                  className="relative z-10 text-lg font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {industry.title}
                </h3>
                <p className="relative z-10 text-[#64748B] text-sm leading-relaxed">
                  {industry.description}
                </p>

                {/* Top accent line on hover */}
                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${industry.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center z-10`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
