import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import KanbanDemo from "../landing/KanbanDemo";
import Logo from "../ui/Logo";

const AuthAside = ({
  title = "Turn ideas into action, faster.",
  subtitle = "Taskora AI transforms goals into prioritized work and keeps your whole team moving in real time.",
}) => {
  return (
    <aside className="brand-gradient relative hidden w-1/2 overflow-hidden lg:flex">
      {/* ── Animated ambient aurora mesh waves in champagne & graphite ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute left-[-15%] top-[8%] h-72 w-[70%] rounded-[50%] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(184, 155, 104, 0.22), transparent)",
          }}
          animate={{ x: ["-6%", "16%", "-6%"], y: [0, 30, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-15%] top-[34%] h-80 w-[72%] rounded-[50%] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(202, 175, 126, 0.18), transparent)",
          }}
          animate={{ x: ["8%", "-16%", "8%"], y: [0, -26, 0], rotate: [8, -8, 8] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[6%] left-1/4 h-64 w-[55%] rounded-[50%] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(143, 121, 84, 0.16), transparent)",
          }}
          animate={{ x: ["-10%", "14%", "-10%"], y: [0, 18, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Thin champagne line at the inner edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-500/25 to-transparent" />

      {/* Brand mark with new Logo */}
      <Link
        to="/"
        className="absolute left-8 top-8 z-20 flex items-center gap-2.5 transition-opacity hover:opacity-90"
      >
        <Logo size="md" wordmarkClassName="text-white" />
      </Link>

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-8 text-white">
        {/* Live animated kanban board demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl"
        >
          <KanbanDemo className="w-full" theme="dark" />
        </motion.div>

        {/* AI indicator badge with pulsing champagne dot */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand-400"
          />
          AI is prioritizing your backlog in real time
        </motion.div>

        {/* Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-sm text-center"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white/95">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/65">{subtitle}</p>
        </motion.div>
      </div>
    </aside>
  );
};

export default AuthAside;
