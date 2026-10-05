import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Paradigm', href: '#paradigm' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Telemetry', href: '#specs' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* Header renders solid whenever it is scrolled OR the mobile drawer is open,
     so the drawer always sits on a readable surface. */
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        solid
          ? 'bg-[#0E1B33]/95 backdrop-blur-md border-b border-[#2a3e6b]/80 py-3 shadow-2xl'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo / Wordmark → root route */}
        <a
          href="/"
          aria-label="Dhizar — Home"
          className="flex items-center gap-2.5 group shrink-0 focus:outline-none"
        >
          <img
            src="/Dhizar.svg"
            alt="Dhizar Logo"
            className={`h-6 sm:h-7 w-auto object-contain select-none transition-all duration-300 ${solid ? 'brightness-0 invert' : ''}`}
          />
          <span className="flex flex-col">
            <span
              className={`font-display font-extrabold text-base sm:text-lg tracking-wider leading-none transition-colors group-hover:text-[#a71616] ${solid ? 'text-[#e8eef9]' : 'text-[#0e1b33]'}`}
            >
              DHIZAR
            </span>
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.22em] mt-1 font-medium transition-colors group-hover:text-[#a71616] ${solid ? 'text-[#94a3b8]' : 'text-[#1d2d4c]/70'}`}
            >
              Technology
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 text-xs sm:text-sm font-sans font-medium transition-colors ${solid ? 'text-[#94a3b8]' : 'text-[#1d2d4c]'}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors py-1 ${solid ? 'hover:text-[#e8eef9]' : 'hover:text-[#0e1b33]'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle (visible below lg) */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border shrink-0 transition-colors ${
            solid
              ? 'border-[#2a3e6b] text-[#e8eef9] hover:bg-[#162443]'
              : 'border-[#0e1b33]/20 text-[#0e1b33] hover:bg-white/60'
          }`}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation — no horizontal overflow, full-width panel */}
      {menuOpen && (
        <div id="mobile-nav" className="lg:hidden w-full overflow-hidden">
          <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="py-3 text-sm font-sans font-medium text-[#e8eef9] hover:text-white border-b border-white/10 last:border-b-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
