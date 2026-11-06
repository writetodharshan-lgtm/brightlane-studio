// Components adapted from reactbits.dev (Shiny Text, Spotlight Card, Magnet,
// Click Spark), rebuilt without extra libraries and themed with site tokens.
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

export function ShinyText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={"shiny-text " + className}>{children}</span>;
}

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={onMove} className={"spotlight-card " + className}>
      {children}
    </div>
  );
}

export function Magnet({ children, strength = 4, padding = 60 }: { children: ReactNode; strength?: number; padding?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      if (Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding) {
        setPos({ x: dx / strength, y: dy / strength });
      } else setPos({ x: 0, y: 0 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength, padding]);
  return (
    <div
      ref={ref}
      className="inline-block transition-transform duration-300 ease-out"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      {children}
    </div>
  );
}

/** Page-wide click sparks drawn on a fixed canvas. */
export function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d")!;
    const color = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim();
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    let sparks: { x: number; y: number; a: number; t: number }[] = [];
    let raf = 0;
    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks = sparks.filter((s) => now - s.t < 400);
      for (const s of sparks) {
        const p = (now - s.t) / 400;
        const ease = p * (2 - p);
        const d = ease * 28;
        const len = 10 * (1 - ease);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x + d * Math.cos(s.a), s.y + d * Math.sin(s.a));
        ctx.lineTo(s.x + (d + len) * Math.cos(s.a), s.y + (d + len) * Math.sin(s.a));
        ctx.stroke();
      }
      raf = sparks.length ? requestAnimationFrame(draw) : 0;
    };
    const onClick = (e: globalThis.MouseEvent) => {
      const t = performance.now();
      for (let i = 0; i < 8; i++) sparks.push({ x: e.clientX, y: e.clientY, a: (Math.PI * 2 * i) / 8, t });
      if (!raf) raf = requestAnimationFrame(draw);
    };
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[60]" />;
}
