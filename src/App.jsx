import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LogoFlythroughLoader } from '@/components/ui/logo-flythrough-loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/sections/the-problem';
import { ArchitectureBento } from './components/sections/architecture-bento';
import { TelemetrySpecs } from './components/sections/telemetry-specs';
import { TeamCareers } from './components/TeamCareers';
import { ProjectStatusContact } from './components/ProjectStatusContact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LogoFlythroughLoader />
      <div className="min-h-screen overflow-x-hidden bg-[#6b8cc8] text-[#0e1b33] selection:bg-[#a71616] selection:text-white transition-colors duration-300 font-sans">
        {/* Global Sticky Navigation */}
        <Navbar />

        <main className="bg-[#6b8cc8] text-[#0e1b33] overflow-x-clip">
          {/* 1. Hero Section (Canvas + One-line + CTA) */}
          <Hero />

          {/* Clean Native Flow Content Sections */}
          <TheProblem />
          <ArchitectureBento />
          <TelemetrySpecs />
          <TeamCareers />
          <ProjectStatusContact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
