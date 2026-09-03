const LINKS = [
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "community", label: "Community" },
  { id: "experts", label: "Experts" },
  { id: "download-app", label: "Download" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/brand/reapers-logo.png" alt="Reapers" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-display tracking-widest">REAPERS</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              Play. Connect. Create. Dominate.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-white/60">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex gap-4 text-sm text-white/50">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/houseofthereapers?igsi=MWN2NWdseXc5NzE4cA=="
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a href="mailto:reapers.support@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl font-mono text-[11px] text-white/35">
        © {new Date().getFullYear()} Reapers. All rights reserved.
      </p>
    </footer>
  );
}
