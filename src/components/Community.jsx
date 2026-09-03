const LOGOS = [
  { src: "/community/CEGA.jpg", alt: "CEGA" },
  { src: "/community/IGDA.png", alt: "IGDA Pakistan" },
  { src: "/community/PIGD.jpg", alt: "PIGD" },
  { src: "/community/pgda.png", alt: "PGDA" },
  { src: "/community/PakGameDev.png", alt: "Pakistan Game Dev" },
];

function Row({ prefix }) {
  return LOGOS.map((logo) => (
    <div
      key={`${prefix}-${logo.alt}`}
      className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center border border-white/10 bg-[#f4f0e8] px-4 shadow-[6px_6px_0_rgba(126,224,193,0.18)]"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        width="160"
        height="64"
        loading="lazy"
        className="max-h-16 max-w-full object-contain"
        onError={(event) => {
          event.currentTarget.hidden = true;
          event.currentTarget.parentElement.dataset.fallback = logo.alt;
        }}
      />
      <span className="hidden text-center font-display text-sm font-bold text-ocean-950 [parent[data-fallback]&]:block">{logo.alt}</span>
    </div>
  ));
}

export default function Community() {
  return (
    <section id="community" className="overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal">Community</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Built with Pakistan&apos;s gaming community.</h2>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="marquee-track">
          <Row prefix="a" />
          <Row prefix="b" />
        </div>
      </div>
    </section>
  );
}
