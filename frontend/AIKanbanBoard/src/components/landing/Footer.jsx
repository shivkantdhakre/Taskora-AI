import { Link } from "react-router-dom";
import { Layers } from "lucide-react";
import Logo from "../ui/Logo";

const columns = [
  {
    heading: "Product",
    links: [
      ["Features",      "#features"],
      ["How it works",  "#how-it-works"],
      ["AI Workspace",  "#ai"],
    ],
  },
  {
    heading: "Get started",
    links: [
      ["Log in",          "/login"],
      ["Create account",  "/register"],
      ["Live demo",       "/login"],
    ],
  },
];

const isRoute = (href) => href.startsWith("/");

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block">
            <Logo size="md" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            The AI-native project management platform that transforms goals into
            shipped work — so your team plans less and ships more.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-faint">
              {col.heading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  {isRoute(href) ? (
                    <Link to={href} className="text-sm text-muted transition-colors hover:text-ink">
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="text-sm text-muted transition-colors hover:text-ink">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Taskora AI. All rights reserved.</span>
        <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-ink">
          <Layers className="h-4 w-4" /> Built with the PERN stack
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
