"use client";

import {
  Truck,
  Wrench,
  Zap,
  Package,
  Warehouse,
  HardHat,
  Cog,
  Route,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const roles = [
  { icon: Truck, label: "AZ/DZ Drivers" },
  { icon: Wrench, label: "310T Mechanics" },
  { icon: Zap, label: "Skilled Trades" },
  { icon: Package, label: "Forklift Operators" },
  { icon: Warehouse, label: "Warehouse Staff" },
  { icon: HardHat, label: "General Labour" },
  { icon: Cog, label: "Manufacturing" },
  { icon: Route, label: "Logistics & Distribution" },
];

export default function Roles() {
  return (
    <section className="py-24 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0891B2]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#0891B2] bg-[#0891B2]/10 rounded-full mb-4">
              Specialized Recruitment
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Roles We Fill
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Specialized recruitment across Ontario&apos;s toughest-to-fill positions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {roles.map((role, i) => (
            <ScrollReveal key={role.label} delay={i * 0.08}>
              <div className="group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#2563EB]/20 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB]/15 to-[#0891B2]/15 text-[#3B82F6] mb-4 group-hover:from-[#2563EB]/25 group-hover:to-[#0891B2]/25 transition-all duration-300">
                  <role.icon size={26} strokeWidth={1.5} />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white/90">
                  {role.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
