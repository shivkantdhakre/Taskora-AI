import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Plus, LayoutDashboard, CheckSquare, Calendar, Users, Settings,
  ChevronLeft, ChevronRight, HelpCircle, LogOut,
} from "lucide-react";
import { useBoards } from "../../context/BoardsContext";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../ui/Avatar";
import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";

const SectionLabel = ({ children, collapsed }) =>
  collapsed ? (
    <div className="mx-auto my-2 h-px w-6 bg-line" />
  ) : (
    <p className="px-4 pb-1.5 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">
      {children}
    </p>
  );

// Active state: thin champagne left indicator — not a colored background
const NavItem = ({ to, icon: Icon, label, collapsed }) => (
  <NavLink
    to={to}
    title={collapsed ? label : undefined}
    className={({ isActive }) =>
      cn(
        "group relative flex h-10 items-center rounded-xl text-sm font-medium transition-colors duration-150",
        collapsed ? "mx-auto w-10 justify-center" : "gap-3 px-3",
        isActive
          ? "bg-surface-2 text-ink"
          : "text-muted hover:bg-surface-2 hover:text-ink"
      )
    }
  >
    {({ isActive }) => (
      <>
        {/* Champagne 2px indicator line — the sole active accent */}
        {isActive && !collapsed && (
          <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r-full bg-brand-500" />
        )}
        <Icon className={cn("h-[18px] w-[18px] shrink-0", isActive ? "text-brand-500" : "")} />
        {!collapsed && <span className="flex-1 truncate">{label}</span>}
      </>
    )}
  </NavLink>
);

const Sidebar = ({ collapsed, onToggle, onCreateBoard, onCommand }) => {
  const { boards, loading } = useBoards();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside
      className={cn(
        "fixed inset-y-3 left-3 z-40 hidden flex-col overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-[var(--shadow-card)] backdrop-blur-xl transition-[width] duration-300 ease-[var(--ease-spring)] md:flex",
        collapsed ? "w-[68px]" : "w-[248px]"
      )}
    >
      {/* Header */}
      <div className="flex h-14 items-center justify-between px-3.5">
        <Link to="/dashboard" className="flex items-center overflow-hidden">
          <Logo size="sm" showWordmark={!collapsed} />
        </Link>
        {!collapsed && (
          <div className="flex items-center gap-1">
            <ThemeToggle size="sm" />
            <button
              onClick={onToggle}
              title="Collapse sidebar"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-faint transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {collapsed && (
        <div className="flex justify-center pb-1">
          <button
            onClick={onToggle}
            title="Expand sidebar"
            className="grid h-7 w-7 place-items-center rounded-lg text-faint transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <SectionLabel collapsed={collapsed}>Menu</SectionLabel>
      <nav className="space-y-0.5 px-2.5">
        <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" collapsed={collapsed} />
        <NavItem to="/my-tasks"  icon={CheckSquare}    label="My Tasks"   collapsed={collapsed} />
        <NavItem to="/calendar"  icon={Calendar}       label="Calendar"   collapsed={collapsed} />
        <NavItem to="/team"      icon={Users}          label="Team"       collapsed={collapsed} />
      </nav>

      {/* Boards */}
      <div className={cn("mt-2 flex h-7 items-center", collapsed ? "justify-center" : "justify-between px-3.5")}>
        {!collapsed && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">
            Boards
          </span>
        )}
        <button
          onClick={onCreateBoard}
          title="New board"
          className="rounded-md p-1 text-faint transition-colors hover:bg-surface-2 hover:text-ink"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-1 flex-1 space-y-0.5 overflow-y-auto overflow-x-hidden px-2.5 pb-2 no-scrollbar">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={cn("flex h-10 items-center gap-3", collapsed ? "justify-center" : "px-1")}>
              <div className="skeleton h-7 w-7 shrink-0 rounded-lg" />
              {!collapsed && <div className="skeleton h-3 flex-1 rounded" />}
            </div>
          ))
        ) : boards.length === 0 ? (
          !collapsed && <p className="px-3 py-2 text-xs text-faint">No boards yet</p>
        ) : (
          boards.map((b) => {
            const color = b.color || "#B89B68";
            return (
              <NavLink
                key={b.id}
                to={`/board/${b.id}`}
                title={b.title}
                className={({ isActive }) =>
                  cn(
                    "flex h-10 items-center rounded-xl text-sm transition-colors duration-150",
                    collapsed ? "mx-auto w-10 justify-center" : "gap-3 px-2",
                    isActive ? "bg-surface-2 text-ink" : "text-muted hover:bg-surface-2 hover:text-ink"
                  )
                }
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-[12px] font-bold"
                  style={{ backgroundColor: `${color}18`, color }}
                >
                  {b.title?.[0]?.toUpperCase() || "B"}
                </span>
                {!collapsed && <span className="flex-1 truncate">{b.title}</span>}
                {!collapsed && (
                  <span className="shrink-0 pr-1 text-[10px] font-medium tabular text-faint">
                    {b.task_count}
                  </span>
                )}
              </NavLink>
            );
          })
        )}
      </div>

      {/* General */}
      <SectionLabel collapsed={collapsed}>General</SectionLabel>
      <nav className="space-y-0.5 px-2.5">
        <NavItem to="/settings" icon={Settings} label="Settings" collapsed={collapsed} />
        <button
          onClick={onCommand}
          title={collapsed ? "Search & shortcuts" : undefined}
          className={cn(
            "flex h-10 w-full items-center rounded-xl text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink",
            collapsed ? "mx-auto w-10 justify-center" : "gap-3 px-3"
          )}
        >
          <HelpCircle className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span className="flex-1 truncate text-left">Help & search</span>}
        </button>
        <button
          onClick={() => { logout(); navigate("/login"); }}
          title={collapsed ? "Log out" : undefined}
          className={cn(
            "flex h-10 w-full items-center rounded-xl text-sm font-medium text-muted transition-colors hover:bg-priority-urgent/10 hover:text-priority-urgent",
            collapsed ? "mx-auto w-10 justify-center" : "gap-3 px-3"
          )}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span className="flex-1 truncate text-left">Log out</span>}
        </button>
      </nav>

      {/* AI Planner promo — compact graphite card, champagne detail */}
      {!collapsed && (
        <div className="px-2.5 pt-2.5">
          <button
            onClick={onCreateBoard}
            className="brand-gradient relative w-full overflow-hidden rounded-xl p-4 text-left"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(20rem 14rem at 90% -20%, rgba(184,155,104,0.08), transparent)" }}
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              <span className="font-display text-sm font-semibold text-white/80">AI Planner</span>
            </div>
            <p className="relative mt-1.5 text-[11px] leading-relaxed text-white/50">
              Turn a goal into a backlog in seconds.
            </p>
          </button>
        </div>
      )}

      {/* User footer */}
      <div className="mx-2.5 mt-2.5 border-t border-line" />
      <div className={cn("flex h-14 items-center", collapsed ? "justify-center px-2" : "gap-3 px-3.5")}>
        <Avatar name={user?.name} id={user?.id} src={user?.avatar_url} size="sm" className="shrink-0" />
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{user?.name}</p>
            <p className="truncate text-xs text-faint">{user?.email}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
