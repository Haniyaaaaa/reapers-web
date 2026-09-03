import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton.jsx";

export default function Waitlist() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit({ email }) {
    await new Promise((r) => setTimeout(r, 500));
    const existing = JSON.parse(localStorage.getItem("reapers-waitlist") || "[]");
    existing.push({ email, at: new Date().toISOString() });
    localStorage.setItem("reapers-waitlist", JSON.stringify(existing));
    setDone(true);
  }

  return (
    <section id="download-app" className="relative overflow-hidden px-5 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(126,224,193,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-teal">Reapers app</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Your gaming community, in your pocket.</h2>
        <p className="mt-4 text-white/65">The app is getting ready. Download it when the first build drops, or leave your email for launch updates.</p>
        <a href="mailto:reapers.support@gmail.com" className="mt-3 inline-block text-sm text-accent-teal hover:text-white">
          reapers.support@gmail.com
        </a>

        <a
          href="/downloads/reapers-app.apk"
          download
          className="blade-cut mt-8 inline-flex bg-blade px-6 py-3 font-display text-sm font-semibold tracking-wide text-ocean-950 shadow-[0_0_32px_rgba(126,224,193,0.25)] transition-shadow hover:shadow-[0_0_42px_rgba(255,132,107,0.3)]"
        >
          Download the App
        </a>

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="ok"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blade text-2xl text-ocean-950">
                ✓
              </div>
              <p className="mt-4 font-display text-xl">You’re on the list.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1 text-left">
                <input
                  type="email"
                  placeholder="you@studio.dev"
                  className="blade-cut w-full border border-white/15 bg-ocean-900/80 px-4 py-3 outline-none ring-accent-teal focus:ring-2"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <MagneticButton type="submit" className="sm:self-start">
                {isSubmitting ? "Sending…" : "Get launch updates"}
              </MagneticButton>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
