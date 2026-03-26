"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
        // Fallback: open mailto
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const company = formData.get("company");
        const message = formData.get("message");
        window.location.href = `mailto:contact@scopeHR.ca?subject=Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ACompany: ${company}%0A%0A${message}`;
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:contact@scopeHR.ca?subject=Website Inquiry`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0891B2]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#F59E0B] bg-[#F59E0B]/10 rounded-full mb-4">
              Get Started
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s Talk
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Whether you need one driver or a full crew, we&apos;re ready.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="space-y-6">
                <a
                  href="tel:18666198290"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Toll Free</p>
                    <p className="text-white font-semibold">1 (866) 619-8290</p>
                  </div>
                </a>

                <a
                  href="tel:9052748515"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Local</p>
                    <p className="text-white font-semibold">(905) 274-8515</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@scopeHR.ca"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0891B2]/10 text-[#0891B2] group-hover:bg-[#0891B2] group-hover:text-white transition-all duration-200">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-semibold">contact@scopeHR.ca</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="text-white font-semibold">
                      50 Corstate Ave, Vaughan, ON
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.842!2d-79.548!3d43.785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ef0a0a7a0a1%3A0x1234567890abcdef!2s50+Corstate+Ave%2C+Vaughan%2C+ON!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ScopeHR Office Location"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500/10 text-green-400 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message Sent
                  </h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. Our team will get back to you within
                    1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors outline-none"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors outline-none"
                        placeholder="(416) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors outline-none"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5">
                      What do you need?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors outline-none resize-none"
                      placeholder="Tell us about your staffing needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Get In Touch
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
