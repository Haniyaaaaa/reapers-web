import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "./MagneticButton.jsx";

export default function Hero() {
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e) {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    setOffset({ x, y });
  }

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="hero" onMouseMove={onMove} className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(126,224,193,0.13),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(255,132,107,0.12),_transparent_45%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
        <div>
          <motion.img
            src="/brand/reapers-logo.png"
            alt="Reapers logo"
            className="mb-6 h-20 w-20 rounded-full object-cover ring-1 ring-white/15"
            {...rise(0.05)}
          />
          <motion.p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal" {...rise(0.15)}>
            Play. Connect. Create. Dominate.
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl"
            {...rise(0.28)}
          >
            Where gamers and developers <span className="gradient-text">build together</span>
          </motion.h1>
          <motion.p className="mt-5 max-w-md text-base leading-relaxed text-white/70" {...rise(0.42)}>
            Reapers is the community home for Pakistan&apos;s gaming scene — chat, events, demo feedback, expert
            sessions, and team hiring in one place.
          </motion.p>
          <motion.div className="mt-8" {...rise(0.56)}>
            <MagneticButton onClick={() => document.getElementById("download-app")?.scrollIntoView({ behavior: "smooth" })}>
              Download the App
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[320px] md:h-[520px]"
          animate={reduce ? undefined : { x: offset.x, y: offset.y }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
        >
          <div className="relative mx-auto max-w-md rotate-2 border border-white/15 bg-ocean-900/85 p-4 shadow-[18px_18px_0_rgba(255,132,107,0.16)] backdrop-blur-sm md:rotate-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-teal">Community pulse</span>
              <span className="flex items-center gap-2 font-mono text-[10px] text-white/55"><span className="h-2 w-2 rounded-full bg-accent-teal" />Live</span>
            </div>
            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="border border-white/10 bg-ocean-950/70 p-4"><p className="font-display text-3xl text-accent-teal">2.4k</p><p className="mt-1 text-xs text-white/55">players online</p></div>
              <div className="border border-white/10 bg-ocean-950/70 p-4"><p className="font-display text-3xl text-accent-coral">18</p><p className="mt-1 text-xs text-white/55">active events</p></div>
            </div>
            <div className="space-y-2">
              {["Indie devs · Lahore", "Game jam crew · Karachi", "Artists & designers · Islamabad"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white/75">
                  <span className={`h-2 w-2 rounded-full ${index === 1 ? "bg-accent-coral" : "bg-accent-teal"}`} />{item}
                </div>
              ))}
            </div>
            <p className="mt-4 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Make something worth playing.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
