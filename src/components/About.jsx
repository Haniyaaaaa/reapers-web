import { motion } from "framer-motion";

const STATS = [
  { k: "01", label: "Communities", value: "Chat + servers" },
  { k: "02", label: "Events", value: "Play & meetups" },
  { k: "03", label: "Demos", value: "Show + review" },
  { k: "04", label: "Mentors", value: "10–15 min sessions" },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal"
        >
          The concept
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 max-w-3xl font-display text-3xl font-bold md:text-5xl"
        >
          Reapers is a community hub and events platform, built for gamers and developers.
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.article
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="blade-cut border border-white/10 bg-ocean-900 p-5"
            >
              <p className="font-mono text-xs text-accent-purple">{s.k}</p>
              <p className="mt-3 font-display text-xl">{s.label}</p>
              <p className="mt-1 text-sm text-white/60">{s.value}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
