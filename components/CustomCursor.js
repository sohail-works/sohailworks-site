"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  // ─── Refs: mousemove par re-render nahi, direct DOM update (fast) ───
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  // ─── Step 1: sirf mouse wale devices par enable karo ───
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduced) setEnabled(true);
  }, []);

  // ─── Step 2: cursor logic (sirf jab enabled ho) ───
  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = -100, mouseY = -100; // shuru me screen se bahar
    let ringX = mouseX, ringY = mouseY;
    let rafId;

    // ── Dot: mouse ke sath foran chipka rehta hai ──
    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }

    // ── Ring: har frame thora qareeb ata hai (trailing effect) ──
    function animate() {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    }

    // ── Links/buttons par ring bara ho jata hai ──
    function onMouseOver(e) {
      const interactive = e.target.closest("a, button");
      if (interactive) {
        ringX = mouseX;
        ringY = mouseY;
      }
      ring.classList.toggle("scale-105", !!interactive);
      ring.classList.toggle("bg-[var(--primary-light)]", !!interactive);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    rafId = requestAnimationFrame(animate);

    // ── Cleanup: listeners + animation band ──
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot: instant follow */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[var(--primary)]"
      />
      {/* Ring: smooth trailing */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-[var(--primary)]/60 transition-[scale,background-color] duration-200"
      />
    </>
  );
}
