import { motion } from "framer-motion";
import {
  Users, LayoutGrid, GitBranch, FileText, Command, Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import DrawIcon from "./DrawIcon";

const EASE = [0.16, 1, 0.3, 1];

const flagship = {
  icon: Sparkles,
  title: "AI Task Generator",
  desc: "Describe a goal in one line and watch a prioritized, ready-to-refine backlog appear in seconds — powered by Taskora's AI Planner.",
};

const features = [
  { icon: GitBranch, title: "AI Task Breakdown",      desc: "Expand any complex task into clear, estimable subtasks with one click." },
  { icon: FileText,  title: "AI Sprint Summaries",    desc: "Concise progress reports highlighting what's done, pending and at risk." },
  { icon: Users,     title: "Real-Time Collaboration",desc: "See teammates' moves instantly with live presence and an activity feed." },
  { icon: LayoutGrid,title: "Drag & Drop Boards",     desc: "Smooth, fast kanban with Todo, In Progress, Review and Done." },
  { icon: Command,   title: "Command Menu",           desc: "Press ⌘K to jump anywhere, search tasks, or spin up a board instantly." },
];

const genTasks = [
  ["Set up referral rewards", "#B89B68"],
  ["Build the invite flow",   "#6B8CA8"],
  ["Track conversions",       "#C49A3C"],
];

const Features = () => (
  <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
    <SectionHeading
      eyebrow="Features"
      title="Everything you need to plan and ship"
      sub="A focused toolkit that removes busywork so your team can move from idea to done, faster."
    />

    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
      {/* Flagship tile — warm graphite, not green */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="brand-gradient group relative flex flex-col overflow-hidden rounded-2xl p-7 shadow-[var(--shadow-lift)] sm:col-span-2 lg:row-span-2"
      >
        {/* Subtle warm depth wash */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(32rem 24rem at 85% -15%, rgba(184,155,104,0.07), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-brand-500/50" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-400">
              AI Workspace
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.08]">
              <DrawIcon
                icon={flagship.icon}
                className="h-5 w-5"
                delay={0.2}
                baseClassName="text-white/30"
                traceColor="rgba(255,255,255,0.75)"
              />
            </span>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white/95">
              {flagship.title}
            </h3>
          </div>
          <p className="mt-3.5 max-w-md leading-relaxed text-white/65">{flagship.desc}</p>

          {/* Live mock */}
          <div className="mt-auto pt-8">
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.06] px-3 py-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                <span className="flex-1 truncate text-sm text-white/75">Launch a referral program</span>
                <span className="shrink-0 rounded-md bg-brand-500/20 px-2.5 py-1 text-xs font-semibold text-brand-300">Generate</span>
              </div>
              <div className="mt-3 space-y-1.5">
                {genTasks.map(([title, color], i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.1, ease: EASE }}
                    className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                    <span className="flex-1 truncate text-sm text-white/75">{title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Supporting cards — tonal separation, champagne on hover */}
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.06 + (i % 3) * 0.05, ease: EASE }}
          className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-250 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-[var(--shadow-soft)]"
        >
          <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-surface-2 ring-1 ring-inset ring-line">
            <DrawIcon icon={f.icon} className="h-[20px] w-[20px]" delay={0.08 + (i % 3) * 0.1} />
          </div>
          <h3 className="font-display text-base font-semibold tracking-tight">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;
