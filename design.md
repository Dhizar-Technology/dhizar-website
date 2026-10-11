# Dhizar — Production Design System & Technical Architecture

## 1. Brand & Aesthetic Paradigm
Dhizar is the world's first occipital BCI (Brain-Computer Interface) neural game controller that translates human intent directly into low-latency digital inputs.

The visual system embodies **Deep Oceanic Neural Precision**:
- **Atmospheric Palette:** Multi-stop radial gradients drifting from `#070D18` (deep abyss) through `#101C2E` and `#152238` to `#1D2D4C` (deep ocean glow).
- **Glassmorphism & Accents:** High-translucency frosted glass surfaces (`bg-white/[0.03]`, `border-white/10`, `backdrop-blur-md`), elevated with electric cyan halos (`#58D3F7`, `#66D4FF`) and high-contrast ivory typography.
- **Watermark Layer:** Centered, subtle brand emblem watermark integrated behind content.

---

## 2. Interactive Neural Canvas Engine (`NeuralSignalCanvas`)
- **Deterministic Arborization:** Uses a seeded PRNG (`seed = 42`) to lock procedural geometry, cluster locations, and branching angles permanently across page reloads and window resizes.
- **Recursive Dendritic Trees:** Organic branching structures simulating occipital neural pathways with subtle sinusoidal micro-sway.
- **Constrained Signal Pulses (Action Potentials):**
  - High-contrast electric white cores (`#FFFFFF`) with vivid cyan radiant glow halos (`#66D4FF`).
  - Pulses travel strictly along the quadratic Bézier curves of the neural branch vectors.
  - Calibrated, cinematic velocity (`speed: ~0.003 - 0.007`) and balanced spawn interval (~450ms) to ensure minimal, elegant visual density.
- **Performance & Safety:** Zero Temporal Dead Zone (TDZ) issues, safe delta timing, and unblocked 60 FPS `requestAnimationFrame` loop.

---

## 3. Responsive Typography & Layout
- **Fluid Clamp Typography:** Scalable font scaling using CSS `clamp()` to ensure zero layout clipping and balanced presentation across mobile, tablet, and desktop:
  - Hero Display: `text-[clamp(2rem,8vw,4.5rem)]`
  - Subheadings: `text-[clamp(0.9rem,3.8vw,1.15rem)]`
  - Section Headings: `text-[clamp(1.65rem,6.5vw,3.25rem)]`
- **Viewport Layout:** Single-viewport height desktop sections adapting gracefully to vertical flow on mobile screens (`min-h-[100dvh]`).

---

## 4. Component Structure & Page Flow
- **Header / Navigation (`Navbar.jsx`):** Floating oceanic frosted pill bar with accessible mobile menu drawer and desktop anchors (`Home`, `About`, `Team`, `Contact`, `FAQ`).
- **Hero Section (`Hero.jsx`):** Core value proposition, responsive CTA, and native smooth scrolling to content sections.
- **About Section (`AboutDhizar.jsx`):** Hardware architecture, zero mechanical travel concept, and occipital sensor clarity.
- **Team Section (`TeamCareers.jsx`):** Core engineering leadership and research team display with interactive reveal cards.
- **Contact & Developer Access (`ProjectStatusContact.jsx`):** Interactive hardware developer kit application portal and team contact channels.
- **FAQ Section (`FAQ.jsx`):**
  - Accessible accordion addressing latency, hardware safety, local-first privacy, and game engine integration.
  - Structured Data: Schema.org `FAQPage` JSON-LD embedded for rich snippets across Google Search, AEO (Perplexity/ChatGPT), and Generative Search Engines (GEO).
- **Footer (`Footer.jsx`):** Brand marks, navigation anchors, and legal navigation with dark high-contrast typography.
- **Dedicated Legal Pages (`PrivacyPolicy.jsx`, `TermsOfService.jsx`):**
  - Standalone views covering local-first zero-cloud EEG waveform isolation, non-medical device disclaimers, and hardware telemetry ethics.
  - History-aware seamless routing with one-click back-to-home navigation.

---

## 5. Technology Stack
- **Framework:** React 18 + Vite (Clean modern SPA)
- **Styling:** Tailwind CSS + PostCSS
- **Rendering:** Canvas 2D API (Neural Canvas)
- **Icons & Assets:** Optimized SVGs
- **Deployment Target:** Production Static / Edge CDN (Vercel / Netlify)
