import React, { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Team", href: "#team", id: "team" },
  { label: "Contact", href: "#contact", id: "contact" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const sectionIds = ["home", "about", "team", "contact", "faq"];
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      {/* Floating Pill Top Navigation Bar */}
      <header
        id="site-header"
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-6xl h-14 sm:h-16 px-4 sm:px-8 rounded-full bg-[#070D18]/92 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-300">

          {/* Left: Original Dhizar Brand Logo + Technology Subtext */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFFFFF] rounded-lg"
            aria-label="Dhizar Technology Home"
          >
            {/* Original Dhizar SVG Mark */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#FFFFFF] shrink-0">
              <img src="/assets/logo.svg" className="w-full h-full object-contain" alt="Dhizar" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-[#FFFFFF] leading-none">
                DHIZAR
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#A9B7C6] block mt-0.5">
                TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Center: Clean Text Navigation Links (Desktop) */}
          <nav aria-label="Navigation menu" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    className={`relative py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm ${activeSection === item.id
                        ? "text-[#FFFFFF]"
                        : "text-[#8C9CAE] hover:text-[#FFFFFF]"
                      }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-white rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Clean and Uncluttered */}
          <div className="flex items-center">
            {/* Mobile Menu Toggle Button */}
            <button
              ref={toggleRef}
              id="nav-toggle"
              onClick={() => setIsOpen(true)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg text-[#FFFFFF] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              aria-label="Open menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] bg-[#070D18]/95 backdrop-blur-xl lg:hidden transition-transform duration-300 ease-out border-l border-[#415A77]/30 sm:rounded-l-2xl overflow-x-hidden ${isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-4">
          <div className="flex h-16 items-center justify-between border-b border-[#415A77]/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-[#FFFFFF]">
                <img src="/assets/logo.svg" className="w-full h-full object-contain" alt="Dhizar" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-[#FFFFFF]">
                DHIZAR
              </span>
            </div>
            <button
              ref={closeBtnRef}
              id="drawer-close"
              onClick={handleClose}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-lg text-[#FFFFFF] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <ul className="mt-8 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    className={`block py-3 font-display text-3xl font-bold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm ${activeSection === item.id
                        ? "text-[#FFFFFF]"
                        : "text-[#8C9CAE] hover:text-[#FFFFFF]"
                      }`}
                    href={item.href}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
