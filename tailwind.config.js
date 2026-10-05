/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./page.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // --- Core Palette from design.md ---
        navy: {
          primary: '#1d2d4c',
          darkest: '#0e1b33',
          darker: '#162443',
          card: '#2a3e6b',
        },
        'blue-950': '#0e1b33',
        'blue-900': '#162443',
        'blue-800': '#1d2d4c',
        'blue-700': '#2a3e6b',
        'blue-600': '#3f5a93',
        'blue-400': '#6b8cc8',
        'blue-300': '#9fb7e0',
        'blue-200': '#cddaf0',
        'blue-100': '#e8eef9',

        'red-600': '#a71616',
        'red-800': '#780606',
        'red-300': '#f4b1b1',

        slate: {
          600: '#475569',
          400: '#94a3b8',
        },

        border: {
          light: '#e2e8f0',
        },

        // --- Backwards compatible aliases ---
        canvas: {
          primary: '#1d2d4c',
          DEFAULT: '#1d2d4c',
        },
        surface: {
          darkest: '#0e1b33',
          darker: '#162443',
          dark: '#2a3e6b',
          DEFAULT: '#0e1b33',
        },
        teal: {
          deep: '#2e6e8e',
          base: '#4cb3a6',
          light: '#a7e5d9',
          pale: '#e0f2f1',
          DEFAULT: '#4cb3a6',
        },
        accent: {
          darkest: '#780606',
          darker: '#a71616',
          base: '#a71616',
          light: '#f4b1b1',
          lightest: '#f8e0e0',
          DEFAULT: '#a71616',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        sans: ['"Instrument Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"Instrument Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
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
        'card': '0 12px 32px rgba(14,27,51,0.08)',
        'card-hover': '0 28px 64px rgba(14,27,51,0.22)',
        'preview': '0 20px 50px rgba(14,27,51,0.15)',
        'elevated': '0 20px 50px rgba(14,27,51,0.15)',
        'glow-red': '0 0 25px rgba(167, 22, 22, 0.45)',
        'glow-red-bright': '0 0 35px rgba(120, 6, 6, 0.65)',
        'glow-teal': '0 0 20px rgba(76, 179, 166, 0.4)',
        'glow-blue': '0 0 20px rgba(107, 140, 200, 0.35)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
