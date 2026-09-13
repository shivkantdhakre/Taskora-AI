import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Users,
  Gauge,
  Star,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const aiTasks = [
  ["Design checkout UI",    "#B89B68"],
  ["Integrate payments",    "#BE4B56"],
  ["Write API tests",       "#5B8CA8"],
];

// Mini kanban columns shown inside the app preview
const boardCols = [
  ["Todo",        8],
  ["In progress", 6],
  ["Review",      4],
  ["Done",       18],
];

const stats = [
  { icon: Users,  value: "2,500+", label: "Teams shipping with AI" },
  { icon: Gauge,  value: "40%",    label: "Faster sprint planning" },
  { icon: Star,   value: "4.9",    suffix: "/5.0", label: "Average team rating" },
];

const Hero = () => (
  <section className="px-3 pb-20 pt-4 sm:px-6 sm:pb-24 sm:pt-6">
    <div className="mx-auto max-w-[88rem]">
      {/* ── Gradient hero panel ─────────────────────────────────────────── */}
      <div className="brand-gradient animate-gradient-pan relative overflow-hidden rounded-[2rem] px-6 pb-56 pt-16 text-center shadow-[var(--shadow-lift)] sm:rounded-[2.5rem] sm:pb-64 sm:pt-24">
        {/* Soft abstract geometry + animated aurora mesh ribbons */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* Aurora waves — champagne & warm gold ribbons that drift dynamically */}
          <div className="absolute inset-0 mix-blend-screen">
            <motion.div
              className="absolute left-[-15%] top-[6%] h-56 w-[70%] rounded-[50%] blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(212,180,126,0.38), transparent)",
              }}
              animate={{ x: ["-6%", "18%", "-6%"], y: [0, 32, 0], rotate: [-10, 8, -10] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[-15%] top-[22%] h-64 w-[72%] rounded-[50%] blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(184,155,104,0.30), transparent)",
              }}
              animate={{ x: ["8%", "-18%", "8%"], y: [0, -28, 0], rotate: [8, -10, 8] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/4 top-[42%] h-52 w-[58%] rounded-[50%] blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(237,227,204,0.22), transparent)",
              }}
              animate={{ x: ["-12%", "16%", "-12%"], y: [0, 22, 0], scale: [1, 1.22, 1] }}
              transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[6%] top-[2%] h-44 w-[40%] rounded-[50%] blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(143,121,84,0.32), transparent)",
              }}
              animate={{ x: ["6%", "-12%", "6%"], y: [0, 18, 0], rotate: [6, -8, 6] }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/12 blur-3xl"
            animate={{ x: [0, 26, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-16 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, -22, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl"
            animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Faint rounded-top "skyline" silhouettes behind the showcase */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-5 opacity-[0.06]">
            <div className="h-56 w-40 rounded-t-[2.5rem] bg-white" />
            <div className="h-72 w-44 rounded-t-[2.5rem] bg-white" />
            <div className="h-52 w-40 rounded-t-[2.5rem] bg-white" />
          </div>
          <div className="absolute -left-8 top-12 h-36 w-36 rotate-12 rounded-3xl border border-white/10" />
          <div className="absolute right-6 top-24 h-24 w-24 rotate-6 rounded-2xl border border-white/10" />
        </div>

        {/* Panel content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="relative z-10 mx-auto max-w-3xl text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-400" /> AI-native project management
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(36px,5.4vw,62px)] font-medium leading-[1.04] tracking-tight">
            Turn ideas into action,{" "}
            <span className="text-gradient">faster.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-lg">
            Taskora AI transforms goals into prioritized work, keeps teams aligned,
            and helps you ship with zero planning overhead.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link to="/register">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-neutral-900 shadow-[var(--shadow-soft)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Start building — it's free <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link to="/login">
              <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                Explore Taskora
              </button>
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/70">
            No credit card required · Built for modern teams
          </p>
        </motion.div>
      </div>

      {/* ── Product showcase overlapping the gradient panel ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        className="relative z-20 mx-auto -mt-48 max-w-6xl px-2 sm:-mt-52"
      >
        <div className="grid items-end gap-4 sm:grid-cols-12">
          {/* Left card — Sprint snapshot */}
          <div className="rounded-3xl border border-line bg-surface p-5 text-left shadow-[var(--shadow-lift)] sm:col-span-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-faint">
                Sprint 14
              </span>
              <span className="rounded-full border border-brand-300/40 bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
                In progress
              </span>
            </div>
            <p className="mt-3 font-display text-2xl font-semibold tabular text-ink">
              36{" "}
              <span className="text-sm font-normal text-muted">tasks active</span>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-surface-2 p-2.5">
                <p className="font-display text-base font-semibold tabular text-ink">
                  18
                </p>
                <p className="text-[10px] text-muted">Done</p>
              </div>
              <div className="rounded-xl bg-surface-2 p-2.5">
                <p className="font-display text-base font-semibold tabular text-brand-500">
                  6
                </p>
                <p className="text-[10px] text-muted">In progress</p>
              </div>
            </div>
          </div>

          {/* Center card — Polished app preview (the centerpiece) */}
          <div className="overflow-hidden rounded-3xl border border-line bg-surface text-left shadow-[var(--shadow-lift)] sm:col-span-6 sm:-translate-y-8">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-line px-4 py-3 bg-surface-2/30">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              </span>
              <span className="ml-2 text-xs font-medium text-muted">
                Taskora AI · Sprint 14
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-brand-300/40 bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold text-brand-600">
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-brand-500"
                />{" "}
                Live
              </span>
            </div>

            <div className="p-6">
              {/* Velocity header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                    Sprint velocity
                  </p>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-display text-[28px] font-semibold tabular leading-none tracking-tight text-ink">
                      87%
                    </span>
                    <span className="inline-flex items-center gap-0.5 rounded-full border border-brand-300/40 bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-600">
                      <TrendingUp className="h-3 w-3" /> +12%
                    </span>
                  </div>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <TrendingUp className="h-[18px] w-[18px]" />
                </span>
              </div>

              {/* Velocity chart with champagne stroke & gradient */}
              <svg
                viewBox="0 0 480 120"
                preserveAspectRatio="none"
                className="mt-4 h-28 w-full overflow-visible"
              >
                <defs>
                  <linearGradient id="hero-spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B89B68" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#B89B68" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,92 C52,82 78,40 120,52 C166,66 188,22 236,36 C284,50 308,18 356,28 C404,38 436,60 480,24"
                  fill="none"
                  stroke="#B89B68"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
                />
                <motion.path
                  d="M0,92 C52,82 78,40 120,52 C166,66 188,22 236,36 C284,50 308,18 356,28 C404,38 436,60 480,24 L480,120 L0,120 Z"
                  fill="url(#hero-spark)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
              </svg>

              {/* Mini board columns */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {boardCols.map(([name, count], i) => (
                  <div key={name} className="rounded-xl bg-surface-2 p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-muted">
                        {name}
                      </span>
                    </div>
                    <p className="mt-1 font-display text-lg font-semibold tabular tracking-tight text-ink">
                      {count}
                    </p>
                    <div className="mt-1.5 h-1 rounded-full bg-line">
                      <motion.div
                        className="h-1 rounded-full bg-brand-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${[40, 65, 30, 100][i]}%` }}
                        transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease: EASE }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right card — AI generated */}
          <div className="rounded-3xl border border-line bg-surface p-5 text-left shadow-[var(--shadow-lift)] sm:col-span-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink">
                AI generated
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {aiTasks.map(([title, color], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-2 rounded-xl border border-line bg-surface-2/60 px-2.5 py-2 transition-transform hover:translate-x-0.5"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="flex-1 truncate text-xs font-medium text-ink">
                    {title}
                  </span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Stats section ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mx-auto mt-20 max-w-6xl px-2 sm:mt-24"
      >
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500">
              Proven Momentum
            </span>
            <h2 className="mt-2 max-w-xl font-display text-[clamp(26px,3.6vw,40px)] font-semibold leading-[1.08] tracking-tight text-ink">
              Real results for teams that{" "}
              <span className="text-gradient">ship faster</span>
            </h2>
          </div>
          <Link to="/register">
            <button className="btn-primary inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-[var(--shadow-soft)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-4 rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                <s.icon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold tabular leading-none tracking-tight text-ink">
                  {s.value}
                  {s.suffix && (
                    <span className="text-base font-medium text-faint">
                      {s.suffix}
                    </span>
                  )}
                </p>
                <p className="mt-1.5 text-sm text-muted">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
