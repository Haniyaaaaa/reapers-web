import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton.jsx";

const LINKS = [
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "community", label: "Community" },
  { id: "experts", label: "Experts" },
  { id: "download-app", label: "Download" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...LINKS.map((l) => l.id)];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  function go(id) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ocean-950/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <button onClick={() => go("hero")} className="flex items-center gap-3" aria-label="Reapers home">
          <img src="/brand/reapers-logo.png" alt="Reapers" className="h-11 w-11 rounded-full object-cover" />
          <span className="font-display text-lg font-bold tracking-widest">REAPERS</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative font-body text-sm ${active === link.id ? "text-white" : "text-white/60 hover:text-white"}`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-px w-full bg-blade"
                />
              )}
            </button>
          ))}
          <MagneticButton onClick={() => go("download-app")}>Download App</MagneticButton>
        </nav>

        <button
          className="md:hidden text-sm tracking-wide text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ocean-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <button key={link.id} onClick={() => go(link.id)} className="text-left text-white/80">
                {link.label}
              </button>
            ))}
            <MagneticButton onClick={() => go("download-app")}>Download App</MagneticButton>
          </div>
        </div>
      )}
    </motion.header>
  );
}
