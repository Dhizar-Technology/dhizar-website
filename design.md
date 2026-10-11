# Dhizar Technology — System Architecture & Design Specification

## 1. System Abstract
Dhizar is a high-precision, non-invasive Brain-Computer Interface (BCI) gaming peripheral designed to translate occipital neural potentials and visual focus intention directly into sub-millisecond digital inputs. This repository contains the official web platform, interactive neural telemetry visualization engine, and developer evaluation portal.

---

## 2. Technical Stack & Dependencies
- **Core Framework:** React 18 (SPA Architecture)
- **Tooling & Bundler:** Vite 5.x (ESM, Fast HMR)
- **Styling Paradigm:** Tailwind CSS + PostCSS (Fluid Utility-First Architecture)
- **Visualization Subsystem:** HTML5 Canvas 2D API (Deterministic Procedural Dendritic Simulation)
- **SEO & Search Indexing:** Schema.org `FAQPage` JSON-LD Structured Data
- **Deployment Platform:** Edge Static CDN (Vercel / Cloudflare Pages)

---

## 3. Visual & Aesthetic Design System
The visual language reflects **Oceanic Neural Biomimicry**, balancing high-tech hardware precision with biological neural behavior.

### 3.1 Color Palette
| Token Name | Hex Code | Visual Application |
| :--- | :--- | :--- |
| **Abyss Void** | `#070D18` | Base background viewport anchor |
| **Sub-Ocean Deep** | `#101C2E` / `#152238` | Middle radial gradient falloff |
| **Oceanic Pulse** | `#1D2D4C` | Central atmospheric radial glow |
| **Electric Cyan** | `#58D3F7` / `#66D4FF` | Synaptic signal pulses, halos, and active interactive borders |
| **Pure Signal** | `#FFFFFF` | Core action-potential points & primary typography |
| **Muted Slate** | `rgb(203 213 225)` | Secondary body and technical descriptor text |

### 3.2 Atmospheric Backdrop & Emblem Watermark
- Multi-stop radial gradient background pinned globally (`#070D18` to `#1D2D4C`).
- Centered low-opacity brand watermark emblem fixed to the viewport background behind interaction layers.
- Frosted glassmorphism surfaces (`backdrop-blur-md`, `bg-white/[0.03]`, `border-white/10`).

---

## 4. Engineering Architecture: Neural Signal Canvas (`NeuralSignalCanvas`)

### 4.1 Deterministic Procedural Arborization
To maintain consistent framing across browser reloads, random procedural generation is locked via a deterministic Linear Congruential PRNG (`seed = 42`):
- **Clusters:** 4-5 peripheral neural clusters positioned strategically to leave central typography clear.
- **Recursive Branching:** Multi-depth branching (`depth: 4-5`) with recursive Bézier control point calculations.
- **Micro-Sway Dynamics:** Subtle sinusoidal time desynchronization applied per branch depth to simulate organic neural fluid drift.

### 4.2 Constrained Action-Potential Pulses
Signal dots (action potentials) do not drift freely. They are strictly bound to branch vector geometry:
- **Trajectory Interpolation:** Quadratic Bézier curve traversal `B(t) = (1-t)² P0 + 2(1-t)t P1 + t² P2` along parent-to-child paths.
- **Kinematics:** Calibrated cinematic speed (`0.003` to `0.007` progression steps) and throttled spawn intervals (~450ms) to ensure minimal, elegant visual density.
- **Rendering Composition:** Layered high-contrast white core (`r: 2.5px`) with soft radial cyan glow aura (`r: 5.5px`, `shadowBlur: 14px`).

---

## 5. Responsive Layout & Typography Specs
Desktop views are locked to single-viewport snap configurations, with seamless mobile-first responsive scaling below `768px`:
- **Fluid Clamp Typography:**
  - Hero Primary: `clamp(2.00rem, 8.0vw, 4.50rem)`
  - Section Headings: `clamp(1.65rem, 6.5vw, 3.25rem)`
  - Subheaders & Leads: `clamp(0.90rem, 3.8vw, 1.15rem)`
  - Technical Body: `clamp(0.875rem, 3.5vw, 1.05rem)`
- **Mobile Viewport Adapters:** Dynamic viewport handling (`min-h-[100dvh]`) to prevent mobile navigation bar clipping and horizontal gutter leakage.

---

## 6. Information Architecture & Component Registry
```
src/
├── App.jsx                                # Root shell, view routing, and backdrop orchestration
├── index.css                              # Tailwind directives and core typography rules
├── components/
│   ├── Navbar.jsx                         # Floating frosted pill navigation & accessible drawer
│   ├── Hero.jsx                           # Primary value proposition & direct CTA
│   ├── AboutDhizar.jsx                    # Occipital BCI technology & latency explanation
│   ├── TeamCareers.jsx                    # Core engineering team & active recruitment
│   ├── ProjectStatusContact.jsx           # Interactive hardware dev-kit application portal
│   ├── FAQ.jsx                            # SEO/AEO/GEO optimized accordion with JSON-LD schema
│   ├── Footer.jsx                         # Brand metadata, high-contrast navigation, and legal links
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx              # Standalone local-first EEG telemetry privacy disclosure
│   │   └── TermsOfService.jsx             # Standalone non-medical peripheral disclaimer & terms
│   └── ui/
│       ├── neural-signal-canvas.tsx       # Deterministic procedural neural animation engine
│       ├── logo-flythrough-loader.tsx     # Vector brand asset loader
│       ├── social-flip-button.tsx         # Accessible interactive social buttons
│       └── team-reveal-grid.tsx           # Technical profile card interactive grid
```

---

## 7. Regulatory Disclosures & Privacy Mandate
1. **Consumer Peripheral Classification:** Dhizar is engineered strictly for gaming, XR, and interactive digital interfaces. It is explicitly not a medical or diagnostic device.
2. **Local-First Telemetry Architecture:** Raw microvolt brainwave waveforms (EEG) are processed locally on-device. No continuous raw bio-potential feeds are ingested into remote cloud infrastructure.
