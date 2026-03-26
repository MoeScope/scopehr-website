"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Roles from "@/components/Roles";
import Industries from "@/components/Industries";
import WhyScopeHR from "@/components/WhyScopeHR";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Roles />
        <Industries />
        <WhyScopeHR />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
