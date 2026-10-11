import React from "react";

export const Footer = ({ onNavigate }) => {
  return (
    <footer
      id="site-footer"
      className="w-full bg-[#8ea9d9] border-t border-[#0e1b33]/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-8 overflow-hidden relative">
        {/* Top Grid (Brand + Navigation Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1 (md:col-span-6) */}
          <div className="md:col-span-6">
            <a
              href="#home"
              className="font-display font-extrabold text-2xl tracking-tight text-[#0e1b33] inline-block"
            >
              DHIZAR
            </a>
            <p className="text-sm text-[#1d2d4c]/80 max-w-sm mt-3 leading-relaxed">
              Occipital BCI Neural Interface — Pure intention, zero mechanical travel.
            </p>
          </div>

          {/* Col 3 (md:col-span-2) */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#0e1b33] mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="#team"
                  className="text-[#1d2d4c] hover:text-[#0e1b33] transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#1d2d4c] hover:text-[#0e1b33] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#1d2d4c] hover:text-[#0e1b33] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[#1d2d4c] hover:text-[#0e1b33] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 (md:col-span-2) */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#0e1b33] mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.("privacy")}
                  className="text-left text-[#1d2d4c] hover:text-[#0e1b33] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.("terms")}
                  className="text-left text-[#1d2d4c] hover:text-[#0e1b33] transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0e1b33]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1d2d4c]/70 gap-4">
          <p>&copy; 2026 Dhizar Technology. All rights reserved.</p>
        </div>

        {/* Background Watermark */}
        <div
          aria-hidden="true"
          className="w-full overflow-hidden select-none pointer-events-none text-center font-display font-extrabold text-[clamp(4rem,18vw,16rem)] text-[#0e1b33]/[0.06] leading-none -mb-6 mt-8"
        >
          DHIZAR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
