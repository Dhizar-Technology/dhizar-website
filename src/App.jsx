import React, { useState, useEffect } from 'react';
import { LogoFlythroughLoader } from '@/components/ui/logo-flythrough-loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeamCareers } from './components/TeamCareers';
import { ProjectStatusContact } from './components/ProjectStatusContact';
import { Footer } from './components/Footer';
import AboutDhizar from './components/sections/about-dhizar';
import NeuralSignalCanvas from './components/ui/neural-signal-canvas';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';
import { FAQ } from './components/FAQ';

export function App() {
  const [currentView, setCurrentView] = useState("home");

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(window.location.pathname.slice(1) || "home");
    };
    window.addEventListener("popstate", handlePopState);
    // Initial route check
    handlePopState();
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    window.history.pushState({}, "", view === "home" ? "/" : `/${view}`);
  };

  const View = { privacy: PrivacyPolicy, terms: TermsOfService }[currentView];
  if (View) {
    return <View onBack={() => navigateTo("home")} />;
  }

  return (
    <div className="relative min-h-screen bg-[#070D18] text-white selection:bg-[#a71616] selection:text-white font-sans">
      <LogoFlythroughLoader />

      {/* PERMANENT FIXED BACKDROP (NEVER SCROLLS) */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 42%, #1D2D4C 0%, #152238 50%, #0B1320 85%, #070D18 100%)'
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#3B7BA4]/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[540px] lg:w-[660px] aspect-square pointer-events-none flex items-center justify-center opacity-50 select-none">
          <img
            src="/assets/logo.svg"
            alt=""
            className="w-full h-full object-contain"
            style={{
              filter: "brightness(2.2) contrast(1.4) drop-shadow(0 0 45px rgba(180, 215, 245, 0.45)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))",
            }}
          />
        </div>
        <div className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
          <NeuralSignalCanvas />
        </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <AboutDhizar id="about" />
        <TeamCareers id="team" />
        <ProjectStatusContact id="contact" />
        <FAQ id="faq" />
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
