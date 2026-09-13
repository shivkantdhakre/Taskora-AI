import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const aiPoints = [
  "Generate a full backlog from a one-line goal",
  "Break any task into clear subtasks instantly",
  "Auto-summarize sprint progress, blockers and risks",
];

const mockTasks = [
  { title: "Design cart & checkout UI",  tag: "High",   color: "#C4703A" },
  { title: "Integrate Stripe payments",  tag: "Urgent", color: "#BE4B56" },
  { title: "Order confirmation emails",  tag: "Medium", color: "#C49A3C" },
  { title: "Address validation",         tag: "Low",    color: "#6B8CA8" },
];

const AISpotlight = () => (
  <section id="ai" className="scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
      /* Warm graphite section — deep but not pure black */
      className="brand-gradient relative overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle warm tonal depth — no glowing blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48rem 28rem at 90% -12%, rgba(184,155,104,0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-brand-500/50" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-400">
              AI Workspace
            </p>
          </div>
          <h2 className="mt-4 font-display text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.08] tracking-tight text-white/95">
            AI that does the busywork
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/65">
            Stop staring at an empty board. Taskora AI's smart planner
            generates, prioritizes, and reports on your work so you can
            focus on what actually matters — shipping.
          </p>
          <ul className="mt-7 space-y-3.5">
            {aiPoints.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-brand-500/40 bg-brand-500/10">
                  <Check className="h-3 w-3 text-brand-400" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] text-white/80">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/register" className="mt-8 inline-block">
            <button className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15">
              Try it free <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>

        {/* Mock UI — restrained, no glow */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            {/* Input bar */}
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.07] p-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              <span className="flex-1 truncate text-sm text-white/80">
                Build an e-commerce checkout flow
              </span>
              <span className="shrink-0 rounded-lg bg-brand-500/20 px-2.5 py-1 text-xs font-semibold text-brand-300">
                Generate
              </span>
            </div>
            <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
              AI generated tasks
            </p>
            <div className="space-y-2">
              {mockTasks.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.1, ease: EASE }}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.05] px-3 py-2.5"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="flex-1 truncate text-sm text-white/80">{t.title}</span>
                  <span className="shrink-0 rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] font-medium text-white/50">
                    {t.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AISpotlight;
