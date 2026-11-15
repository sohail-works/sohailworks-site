"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Services section wala animation — data-state mount ke 150ms baad
// "active" hota hai taake .reveal / .fe-preview / .fe-target
// transitions run hon (pehle se active likha ho to animation
// play hi nahi hoti, seedha end state render hota hai).
export function VisualReveal({ children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="svc-item w-full"
      data-state={active ? "active" : undefined}
    >
      {children}
    </motion.div>
  );
}
