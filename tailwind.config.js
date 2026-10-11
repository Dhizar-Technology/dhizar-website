/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#8ea9d9",
        body: "#1d2d4c",
        navy: "#0e1b33",
        accent: {
          DEFAULT: "#a71616",
          press: "#780606",
        },
        teal: "#4cb3a6",
        slate: {
          400: '#94a3b8',
          600: '#475569',
        },
        border: {
          light: '#e2e8f0',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        sans: ['"Instrument Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '36px',
        'pill': '999px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(14,27,51,.06), 0 12px 32px rgba(14,27,51,.12)',
        'lift': '0 2px 4px rgba(14,27,51,.08), 0 24px 56px rgba(14,27,51,.18)',
        'card-hover': '0 28px 64px rgba(14,27,51,0.22)',
      },
      keyframes: {
        'dhizar-flythrough': {
          '0%': { transform: 'translate3d(0, 0, 0) scale(0.92)', opacity: '0' },
          '20%, 40%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate3d(0, 0, 0) scale(14)', opacity: '0' },
        },
      },
      animation: {
        'dhizar-flythrough': 'dhizar-flythrough 1.45s cubic-bezier(0.65, 0, 0.07, 1) forwards',
      },
    },
  },
  plugins: [],
};
