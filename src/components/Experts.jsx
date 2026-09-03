import { motion } from "framer-motion";

const EXPERTS = [
  { name: "Bilal Cheema", role: "Developing Duoshift", tag: "Game Development", initials: "BC" },
  { name: "Hilal Khan", role: "Ex-Chair, IGDA Pakistan", tag: "Game Dev Veteran", initials: "HK" },
  { name: "Waqas Shafique", role: "Creator of Liminal Core", tag: "Game Creator", initials: "WS" },
  { name: "Ali Rasheed", role: "Creator of Alien Market Simulator", tag: "Game Creator", initials: "AR" },
  { name: "Nimra Sardar", role: "Board Member, IGDA Pakistan", tag: "Community Lead", initials: "NS" },
];

export default function Experts() {
  return (
    <section id="experts" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal">Experts</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold md:text-5xl">
          10–15 minutes with someone who has shipped.
        </h2>
        <p className="mt-4 max-w-xl text-white/65">
          Book a short office-hours slot for feedback on your demo, pitch, or production plan. Verified mentors only.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {EXPERTS.map((e, i) => (
            <motion.article
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="blade-cut border border-white/10 bg-ocean-900 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center bg-blade font-display text-ocean-950">
                  {e.initials}
                </div>
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-teal" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl">{e.name}</h3>
              <p className="text-sm text-white/60">{e.role}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-accent-purple">{e.tag}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
