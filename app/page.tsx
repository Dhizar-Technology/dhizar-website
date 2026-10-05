import React from "react";
import { Navbar } from "@/components/Navbar";
import { LogoFlythroughLoader } from "@/components/ui/logo-flythrough-loader";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/sections/the-problem";
import { ArchitectureBento } from "@/components/sections/architecture-bento";
import { TelemetrySpecs } from "@/components/sections/telemetry-specs";
import { TeamCareers } from "@/components/TeamCareers";
import { ProjectStatusContact } from "@/components/ProjectStatusContact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#6b8cc8] text-[#0e1b33] font-sans">
      <LogoFlythroughLoader />
      <Navbar />
      <main className="bg-[#6b8cc8] text-[#0e1b33] overflow-x-clip">
        {/* Hero section */}
        <Hero />

        {/* Clean Native Flow Content Sections */}
        <TheProblem />
        <ArchitectureBento />
        <TelemetrySpecs />
        <TeamCareers />
        <ProjectStatusContact />
      </main>
      <Footer />
    </div>
  );
}
