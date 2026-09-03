import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Chatrooms & Communities",
    desc: "Join Pakistan’s gaming groups or spin up your own rooms and DMs.",
    icon: "</>",
  },
  {
    title: "Events",
    desc: "Discover watch parties, jams, tournaments, and local meetups.",
    icon: "EVT",
  },
  {
    title: "Demo Showcase",
    desc: "Upload short gameplay clips and get structured community feedback.",
    icon: "PLAY",
  },
  {
    title: "Expert Sessions",
    desc: "Book 10–15 minute office hours with verified industry mentors.",
    icon: "10m",
  },
  {
    title: "Team Hiring",
    desc: "Post roles, share a demo, and find the next teammate for your game.",
    icon: "TEAM",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal">Features</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Everything the scene needs, in one app.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="blade-cut group border border-white/10 bg-ocean-900 p-6"
            >
              <span className="inline-block font-mono text-xs text-accent-teal transition group-hover:drop-shadow-[0_0_12px_#17B3A3]">
                {f.icon}
              </span>
              <h3 className="mt-4 font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
