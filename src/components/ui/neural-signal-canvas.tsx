"use client";

import React, { useEffect, useRef } from "react";

interface BranchData {
  length: number;
  angle: number;
  width: number;
  depth: number;
  children: BranchData[];
}

interface PulseData {
  branchIndex: number;
  path: number[];
  progress: number;
  speed: number;
  maxProgress: number;
}

interface NeuronData {
  x: number;
  y: number;
  radius: number;
  branches: BranchData[];
  pulses: PulseData[];
}

export const NeuralSignalCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let pulseTimer = 0;
    let lastTime = performance.now();
    const neurons: NeuronData[] = [];

    // Deterministic PRNG seeded for permanent consistent structure
    let seed = 42;
    function seededRandom() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    const buildBranch = (length: number, angle: number, width: number, depth: number): BranchData => {
      const children: BranchData[] = [];
      if (depth > 0) {
        const subBranches = depth > 2 ? 2 + (depth % 2) : 2;
        for (let i = 0; i < subBranches; i++) {
          const spreadAngle = (Math.PI / 4) * (i === 0 ? -1 : 1) + (seededRandom() * 0.2 - 0.1);
          children.push(
            buildBranch(
              length * (0.65 + seededRandom() * 0.15),
              angle + spreadAngle,
              Math.max(0.8, width * 0.65),
              depth - 1
            )
          );
        }
      }
      return { length, angle, width, depth, children };
    };

    const generatePulsePath = (branch: BranchData): number[] => {
      const path: number[] = [];
      let current = branch;
      while (current.children.length > 0) {
        const nextIdx = Math.floor(Math.random() * current.children.length);
        path.push(nextIdx);
        current = current.children[nextIdx];
      }
      return path;
    };

    const initNodes = () => {
      seed = 42;
      neurons.length = 0;

      const numClusters = Math.floor(seededRandom() * 3) + 3; // 3 to 5 clusters

      for (let i = 0; i < numClusters; i++) {
        let x: number, y: number;
        if (i === 0) { x = width * 0.1; y = height * 0.1; }
        else if (i === 1) { x = width * 0.9; y = height * 0.1; }
        else if (i === 2) { x = width * 0.9; y = height * 0.9; }
        else if (i === 3) { x = width * 0.1; y = height * 0.9; }
        else { x = seededRandom() * width; y = seededRandom() * height; }

        x += (seededRandom() - 0.5) * 150;
        y += (seededRandom() - 0.5) * 150;

        const branches: BranchData[] = [];
        const numBranches = Math.floor(seededRandom() * 3) + 5;

        for (let j = 0; j < numBranches; j++) {
          const angle = (Math.PI * 2 / numBranches) * j + (seededRandom() * 0.5 - 0.25);
          const length = 100 + seededRandom() * 60;
          const branchWidth = 3 + seededRandom() * 2;
          const depth = 4 + Math.floor(seededRandom() * 2);
          branches.push(buildBranch(length, angle, branchWidth, depth));
        }

        const pulses: PulseData[] = [];
        // Seed initial pool of active pulses so dots traverse immediately
        const initialCount = 5;
        for (let k = 0; k < initialCount; k++) {
          if (branches.length === 0) continue;
          const bIdx = Math.floor(Math.random() * branches.length);
          const pPath = generatePulsePath(branches[bIdx]);
          pulses.push({
            branchIndex: bIdx,
            path: pPath,
            progress: Math.random() * (pPath.length + 1),
            speed: 0.003 + Math.random() * 0.004,
            maxProgress: pPath.length + 1,
          });
        }

        neurons.push({ x, y, radius: 10 + seededRandom() * 5, branches, pulses });
      }
    };

    const drawBranch = (
      branch: BranchData,
      startX: number,
      startY: number,
      time: number,
      activePulses: { progress: number; path: number[]; currentDepth: number }[]
    ) => {
      const phase = branch.depth + (startX * 0.001);
      const sway = Math.sin(time * 0.001 + phase) * 0.05;
      const endX = startX + branch.length * Math.cos(branch.angle + sway);
      const endY = startY + branch.length * Math.sin(branch.angle + sway);

      const cpX = (startX + endX) / 2 + Math.sin(time * 0.0015 + phase) * 8;
      const cpY = (startY + endY) / 2 + Math.cos(time * 0.0015 + phase) * 8;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(cpX, cpY, endX, endY);
      ctx.strokeStyle = `rgba(77, 150, 200, ${0.12 + branch.depth * 0.05})`;
      ctx.lineWidth = branch.width;
      ctx.lineCap = "round";
      ctx.stroke();

      // Render pulses strictly on this branch segment's bezier curve
      activePulses.forEach(p => {
        if (Math.floor(p.progress) === p.currentDepth) {
          const t = p.progress % 1;
          const px = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * cpX + t * t * endX;
          const py = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * cpY + t * t * endY;

          ctx.save();
          ctx.shadowBlur = 14;
          ctx.shadowColor = "#66D4FF";
          ctx.beginPath();
          ctx.arc(px, py, 2.6, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();

          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.arc(px, py, 5.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(100, 210, 255, 0.4)";
          ctx.fill();
          ctx.restore();
        }
      });

      // Recursive sub-branches: pass pulses matching the hierarchical child index
      branch.children.forEach((child, index) => {
        const childPulses = activePulses
          .filter(p => p.path[p.currentDepth] === index)
          .map(p => ({ ...p, currentDepth: p.currentDepth + 1 }));

        drawBranch(child, endX, endY, time, childPulses);
      });
    };

    function draw(currentTime: number = 0) {
      // Safe delta calculation
      const dt = Math.min(32, Math.max(16, currentTime - lastTime));
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmospheric radial background
      const grad = ctx.createRadialGradient(
        width * 0.5, height * 0.45, 0,
        width * 0.5, height * 0.45, width * 0.8
      );
      grad.addColorStop(0, "#1D2D4C");
      grad.addColorStop(0.45, "#101C2E");
      grad.addColorStop(1, "#0B1320");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Vignette Mask
      const vignette = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.min(width, height) * 0.5
      );
      vignette.addColorStop(0, "rgba(29, 45, 76, 0.7)");
      vignette.addColorStop(0.5, "rgba(29, 45, 76, 0.2)");
      vignette.addColorStop(1, "rgba(29, 45, 76, 0)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // 3. Spawning active pulses along hierarchical branch paths (reduced density)
      pulseTimer += dt;
      if (pulseTimer > 450) {
        if (neurons.length > 0) {
          const neuron = neurons[Math.floor(Math.random() * neurons.length)];
          if (neuron.branches.length > 0) {
            const branchIndex = Math.floor(Math.random() * neuron.branches.length);
            const branch = neuron.branches[branchIndex];
            const path = generatePulsePath(branch);

            neuron.pulses.push({
              branchIndex,
              path,
              progress: 0,
              speed: 0.003 + Math.random() * 0.004,
              maxProgress: path.length + 1,
            });

            if (neuron.pulses.length > 3) {
              neuron.pulses.shift(); // keep only a small handful active
            }
          }
        }
        pulseTimer = 0;
      }

      ctx.lineJoin = "round";

      // 4. Draw Neurons, Branches & strictly constrained traveling pulses
      neurons.forEach(neuron => {
        // Draw branches and render traveling pulse dots along branch curves
        neuron.branches.forEach((branch, index) => {
          const branchPulses = neuron.pulses
            .filter(p => p.branchIndex === index)
            .map(p => ({ progress: p.progress, path: p.path, currentDepth: 0 }));

          drawBranch(branch, neuron.x, neuron.y, currentTime, branchPulses);
        });

        // Update pulses along their branch paths
        for (let i = neuron.pulses.length - 1; i >= 0; i--) {
          const p = neuron.pulses[i];
          p.progress += p.speed * (dt / 16);
          if (p.progress >= p.maxProgress) {
            neuron.pulses.splice(i, 1);
          }
        }

        // Soma nucleus with breathing glow
        const pulseGlow = Math.sin(currentTime * 0.003 + neuron.x) * 0.2 + 0.8;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.radius * 2 * pulseGlow, 0, Math.PI * 2);
        const somaGrad = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, neuron.radius * 2 * pulseGlow
        );
        somaGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        somaGrad.addColorStop(0.25, "rgba(100, 200, 255, 0.75)");
        somaGrad.addColorStop(0.65, "rgba(60, 140, 210, 0.25)");
        somaGrad.addColorStop(1, "rgba(77, 150, 200, 0)");
        ctx.fillStyle = somaGrad;
        ctx.fill();
      });

      // Unconditional 60 FPS loop
      animId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initNodes();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ display: "block" }}
    />
  );
};

export default NeuralSignalCanvas;
