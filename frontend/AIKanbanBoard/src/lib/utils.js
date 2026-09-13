import { formatDistanceToNow, format, isPast, isToday, isTomorrow } from "date-fns";

/** Tiny classnames joiner (no extra deps). */
export const cn = (...args) => args.flat().filter(Boolean).join(" ");

export const PRIORITIES = [
  { value: "low",    label: "Low",    color: "var(--color-priority-low)" },
  { value: "medium", label: "Medium", color: "var(--color-priority-medium)" },
  { value: "high",   label: "High",   color: "var(--color-priority-high)" },
  { value: "urgent", label: "Urgent", color: "var(--color-priority-urgent)" },
];

export const priorityMeta = (value) =>
  PRIORITIES.find((p) => p.value === value) || PRIORITIES[1];

// Restrained editorial column accents — no neon, no violet, no pink.
// Champagne-first, then muted tonal variants.
const COLUMN_ACCENTS = [
  { dot: "#B89B68", soft: "rgba(184,155,104,0.09)", ring: "rgba(184,155,104,0.22)" }, // champagne
  { dot: "#6B8CA8", soft: "rgba(107,140,168,0.09)", ring: "rgba(107,140,168,0.22)" }, // muted slate
  { dot: "#A87B62", soft: "rgba(168,123,98,0.09)",  ring: "rgba(168,123,98,0.22)"  }, // terracotta
  { dot: "#7B9E7B", soft: "rgba(123,158,123,0.09)", ring: "rgba(123,158,123,0.22)" }, // muted sage
  { dot: "#9E9262", soft: "rgba(158,146,98,0.09)",  ring: "rgba(158,146,98,0.22)"  }, // warm gold
  { dot: "#8A7B9E", soft: "rgba(138,123,158,0.09)", ring: "rgba(138,123,158,0.22)" }, // muted mauve
];

export const columnAccent = (index = 0) =>
  COLUMN_ACCENTS[((index % COLUMN_ACCENTS.length) + COLUMN_ACCENTS.length) % COLUMN_ACCENTS.length];

export const initials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("") || "?";

/** Deterministic avatar color — warm, editorial, no neon. */
export const colorFromId = (id = "") => {
  const palette = [
    "#8F7954", // warm champagne
    "#5B7A8B", // muted slate
    "#8B5E4A", // terracotta
    "#5A7A5A", // muted sage
    "#7A6B8B", // muted mauve
    "#8B7A4A", // warm gold
    "#6B8B7A", // muted teal-sage
  ];
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
};

export const relativeTime = (date) => {
  if (!date) return "";
  try {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  } catch {
    return "";
  }
};

export const formatDueDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  if (isToday(d))    return { label: "Today",    overdue: false };
  if (isTomorrow(d)) return { label: "Tomorrow", overdue: false };
  return { label: format(d, "MMM d"), overdue: isPast(d) };
};
