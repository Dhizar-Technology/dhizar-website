"use client";

import React from "react";
import { LogoFlythroughLoader } from "@/components/ui/logo-flythrough-loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { HowItWorks } from "@/components/HowItWorks";
import { ParallelTracks } from "@/components/ParallelTracks";
import { HardwareSpecs } from "@/components/HardwareSpecs";
import { Roadmap } from "@/components/Roadmap";
import { TeamCareers } from "@/components/TeamCareers";
import { ProjectStatusContact } from "@/components/ProjectStatusContact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <LogoFlythroughLoader />
      <div className="min-h-screen bg-white dark:bg-[#080A0F] text-[#0A0D14] dark:text-[#F0F4FF] selection:bg-[#780606] selection:text-white transition-colors duration-300 font-sans">
        {/* Global Navigation */}
        <Navbar />

        {/* Hero Section (#hero) — 100% UNTOUCHED */}
        <Hero />

        {/* Global Page Container Below Hero: Midnight Blue #1D2D4C Canvas */}
        <main className="bg-[#1D2D4C] text-[#F8FAFC] overflow-x-hidden">
          {/* Section 1: Logo Story & Philosophy ("Beyond the Gamepad") */}
          <Overview />

          {/* Section 2: How It Works & SSVEP Telemetry Cockpit */}
          <HowItWorks />

          {/* Section 3: Dual Tracks (Parallel Operational Execution) */}
          <ParallelTracks />

          {/* Section 4: Technical Specifications & Benchmarks (Bento Grid) */}
          <HardwareSpecs />

          {/* Section 5: Roadmap & Milestones */}
          <Roadmap />

          {/* Section 6: Team & Partnerships */}
          <TeamCareers />

          {/* Section 7: Contact & Interactive Action */}
          <ProjectStatusContact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}