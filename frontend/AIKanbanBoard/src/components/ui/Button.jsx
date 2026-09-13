import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

const variants = {
  // Polarity switch: graphite on ivory (light) / ivory on graphite (dark)
  // Handled by the .btn-primary CSS class in index.css
  primary:
    "btn-primary",
  secondary:
    "bg-surface hover:bg-surface-2 text-ink border border-line shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)]",
  ghost: "hover:bg-surface-2 text-muted hover:text-ink",
  danger:
    "bg-priority-urgent text-white hover:brightness-[1.06]",
  // Outline: on hover, the border warms to champagne
  outline:
    "border border-line bg-surface hover:border-brand-400 hover:bg-surface-2 text-ink shadow-[var(--shadow-card)]",
  // Soft: subtle champagne background for secondary accent actions
  soft: "bg-brand-50 text-brand-700 hover:bg-brand-100",
};

const sizes = {
  sm:     "h-8 px-3.5 text-xs gap-1.5",
  md:     "h-10 px-5 text-sm gap-2",
  lg:     "h-12 px-7 text-[15px] gap-2",
  icon:   "h-10 w-10",
  iconSm: "h-8 w-8",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}) => (
  <button
    className={cn(
      "inline-flex select-none items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-200 ease-[var(--ease-spring)] focus-ring disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
      variants[variant],
      sizes[size],
      className
    )}
    disabled={disabled || loading}
    {...props}
  >
    {loading && <Loader2 className="h-4 w-4 animate-spin" />}
    {children}
  </button>
);

export default Button;
