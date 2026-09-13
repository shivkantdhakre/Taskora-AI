import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const EASE = [0.16, 1, 0.3, 1];

const avatars = ["AR", "MJ", "SK", "TL"];

const FinalCTA = () => (
  <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-16 text-center sm:py-20"
    >
      {/* Very subtle warm tonal wash — not a green gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(38rem 18rem at 50% -20%, rgba(184,155,104,0.07), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Thin champagne geometric lines — restrained decorative detail */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rotate-12 rounded-2xl border border-line" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rotate-6 rounded-2xl border border-line" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-brand-500/30" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500">
            Start in seconds
          </span>
          <span className="h-px w-6 bg-brand-500/30" />
        </div>

        <h2 className="mx-auto max-w-2xl font-display text-[clamp(30px,4.5vw,50px)] font-semibold leading-[1.05] tracking-tight">
          Ready to{" "}
          <span className="text-gradient">ship faster?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Join teams turning goals into shipped work with Taskora AI.
          Free to start, no credit card required.
        </p>

        <div className="mt-9 flex items-center justify-center gap-3">
          <Link to="/register">
            <Button size="lg" className="gap-2">
              Start building — it's free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline">
              Explore Taskora
            </Button>
          </Link>
        </div>

        {/* Social proof avatars */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2.5">
            {avatars.map((initials) => (
              <span
                key={initials}
                className="brand-gradient grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold text-white/80 ring-2 ring-surface"
              >
                {initials}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted">
            Loved by <span className="font-semibold text-ink">2,500+</span> teams
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
