import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "测算" },
  { to: "/compendium", label: "数字图鉴" },
  { to: "/origins", label: "算法溯源" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 font-display text-lg text-ink transition-colors group-hover:border-brand group-hover:text-brand">N</span>
          <span className="font-display text-xl tracking-wide text-ink">Numen</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors ${
                  isActive || (l.to !== "/" && pathname.startsWith(l.to))
                    ? "text-brand"
                    : "text-muted-foreground hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;