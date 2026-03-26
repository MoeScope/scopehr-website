"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, Menu, X } from "lucide-react";

const positionTypes = [
  "AZ Driver",
  "DZ Driver",
  "310T Mechanic",
  "Electrician",
  "Millwright",
  "Welder",
  "Forklift Operator",
  "Warehouse Worker",
  "General Labour",
  "Other",
];

const experienceLevels = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // TODO: Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID.
      // Create one free at https://formspree.io — point it to contact@scopeHR.ca
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        window.location.href = `mailto:contact@scopeHR.ca?subject=Job Application`;
      }
    } catch {
      window.location.href = `mailto:contact@scopeHR.ca?subject=Job Application`;
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#0F172A] placeholder-gray-400 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors outline-none";
  const labelClass = "block text-sm font-medium text-[#334155] mb-1.5";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-xl shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-0 shrink-0">
              <span
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Scope
              </span>
              <span
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#2563EB]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                HR
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Services
              </Link>
              <Link
                href="/#industries"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Industries
              </Link>
              <Link
                href="/#about"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Contact
              </Link>
              <span className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg">
                Apply Now
              </span>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0A1628]/98 backdrop-blur-xl border-t border-white/5 px-4 pb-6 pt-2">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-[#0A1628] via-[#0F1D32] to-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Looking for{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">
              Work?
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We place AZ/DZ drivers, mechanics, skilled tradespeople, forklift
            operators, warehouse workers, and general labourers across Ontario
            and BC. Apply below and our team will be in touch.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50 text-green-500 mx-auto mb-6">
                <CheckCircle size={36} />
              </div>
              <h2
                className="text-2xl font-bold text-[#0F172A] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Application Submitted
              </h2>
              <p className="text-[#64748B] mb-8">
                Thanks for applying! Our team will review your application and
                reach out within 1-2 business days.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
              <h2
                className="text-xl font-bold text-[#0F172A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="applyEmail" className={labelClass}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="applyEmail"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="applyPhone" className={labelClass}>
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="applyPhone"
                      name="phone"
                      required
                      className={inputClass}
                      placeholder="(416) 000-0000"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className={labelClass}>
                    City / Location
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className={inputClass}
                    placeholder="e.g. Toronto, Brampton, Vaughan"
                  />
                </div>

                {/* Position & Experience */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="position" className={labelClass}>
                      Position Type
                    </label>
                    <select
                      id="position"
                      name="position"
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a position
                      </option>
                      {positionTypes.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className={labelClass}>
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select experience
                      </option>
                      {experienceLevels.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Radio: Driver's Licence */}
                <div>
                  <span className={labelClass}>
                    Do you have a valid driver&apos;s licence?
                  </span>
                  <div className="flex items-center gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="driversLicence"
                        value="Yes"
                        className="w-4 h-4 text-[#2563EB] border-gray-300 focus:ring-[#2563EB]"
                      />
                      <span className="text-sm text-[#334155]">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="driversLicence"
                        value="No"
                        className="w-4 h-4 text-[#2563EB] border-gray-300 focus:ring-[#2563EB]"
                      />
                      <span className="text-sm text-[#334155]">No</span>
                    </label>
                  </div>
                </div>

                {/* Radio: Work Authorization */}
                <div>
                  <span className={labelClass}>
                    Are you legally authorized to work in Canada?
                  </span>
                  <div className="flex items-center gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workAuthorization"
                        value="Yes"
                        className="w-4 h-4 text-[#2563EB] border-gray-300 focus:ring-[#2563EB]"
                      />
                      <span className="text-sm text-[#334155]">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workAuthorization"
                        value="No"
                        className="w-4 h-4 text-[#2563EB] border-gray-300 focus:ring-[#2563EB]"
                      />
                      <span className="text-sm text-[#334155]">No</span>
                    </label>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className={labelClass}>
                    Resume Upload
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2563EB]/5 file:text-[#2563EB] hover:file:bg-[#2563EB]/10 file:cursor-pointer cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, DOC, or DOCX (max 10MB)
                  </p>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className={inputClass + " resize-none"}
                    placeholder="Anything else you'd like us to know..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Your information is kept confidential and only used for
                  recruitment purposes.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060E1A] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-0">
            <span
              className="text-lg font-extrabold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Scope
            </span>
            <span
              className="text-lg font-extrabold text-[#2563EB]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              HR
            </span>
          </div>
          <p className="text-xs text-gray-600">
            &copy; 2026 ScopeHR (16166326 Canada Inc.). All rights reserved.
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </footer>
    </>
  );
}
