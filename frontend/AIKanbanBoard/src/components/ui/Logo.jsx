import { cn } from "../../lib/utils";

export const Logo = ({
  size = "md",
  showWordmark = true,
  className = "",
  iconClassName = "",
  wordmarkClassName = "",
}) => {
  const sizeMap = {
    xs: { box: "h-6 w-6 rounded-lg", text: "text-xs font-semibold" },
    sm: { box: "h-8 w-8 rounded-xl", text: "text-sm font-semibold" },
    md: { box: "h-9 w-9 rounded-xl", text: "text-base font-bold" },
    lg: { box: "h-11 w-11 rounded-2xl", text: "text-xl font-bold" },
    xl: { box: "h-14 w-14 rounded-2xl", text: "text-2xl font-bold" },
  };
  const s = sizeMap[size] || sizeMap.md;

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <div
        className={cn(
          "relative grid place-items-center overflow-hidden border border-line bg-surface shadow-[var(--shadow-card)] transition-transform duration-200 hover:scale-[1.04]",
          s.box,
          iconClassName
        )}
      >
        <img
          src="/logo.svg"
          alt="Taskora AI"
          className="h-full w-full object-contain p-1"
          loading="eager"
        />
      </div>
      {showWordmark && (
        <span className={cn("font-display tracking-tight text-ink", s.text, wordmarkClassName)}>
          Taskora AI
        </span>
      )}
    </div>
  );
};

export default Logo;
