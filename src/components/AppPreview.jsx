import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SCREENS = [
  {
    id: "home",
    label: "Home",
    title: "Tonight’s scene",
    rows: ["Karachi Indie Jam — Going", "Valorant ranked lobby", "Demo: Neon Requiem 0.3"],
  },
  {
    id: "demos",
    label: "Demos",
    title: "For You",
    rows: ["Ashfall — gameplay 4.6", "Rogue Tea — art 4.8", "Signal Lost — polish 4.2"],
  },
  {
    id: "experts",
    label: "Experts",
    title: "Office hours",
    rows: ["Bilal C. — Duoshift", "Hilal K. — IGDA Pakistan", "Nimra S. — Community"],
  },
];

export default function AppPreview() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 3800);
    return () => clearInterval(t);
  }, [paused]);

  const screen = SCREENS[index];

  return (
    <section id="preview" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal">App preview</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">A feed built for makers and players.</h2>
          <p className="mt-4 max-w-md text-white/65">
            Home, demos, and experts in one focused app for Pakistan&apos;s gaming community.
          </p>
          <div className="mt-6 flex gap-2">
            {SCREENS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`blade-cut px-4 py-2 text-sm ${
                  i === index ? "bg-blade text-ocean-950" : "border border-white/15 text-white/70"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="float-idle relative h-[520px] w-[260px] rounded-[2.2rem] border border-white/20 bg-ocean-900 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] [animation:float_5s_ease-in-out_infinite]">
            <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-black/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.35 }}
                className="h-[450px] overflow-hidden rounded-[1.6rem] bg-ocean-950 p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-teal">Reapers</p>
                <h3 className="mt-2 font-display text-2xl">{screen.title}</h3>
                <div className="mt-6 space-y-3">
                  {screen.rows.map((row) => (
                    <div key={row} className="blade-cut border border-white/10 bg-ocean-900 px-3 py-3 text-sm">
                      {row}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
