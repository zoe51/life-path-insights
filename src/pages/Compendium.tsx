import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import { ALL_NUMBERS, PROFILES, isMaster } from "@/lib/numerology";

const Compendium = () => (
  <SiteLayout>
    <section className="container py-16 md:py-24">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-brand">Compendium</p>
        <h1 className="font-display text-5xl text-ink md:text-6xl">数字图鉴</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          十二种生命数字，十二种被宇宙编码的可能性。点击任一数字，进入它的详细解读。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border/60 sm:grid-cols-3 md:grid-cols-4">
        {ALL_NUMBERS.map((n) => {
          const p = PROFILES[n];
          return (
            <Link
              key={n}
              to={`/number/${n}`}
              className="group relative bg-background p-6 transition-colors hover:bg-card"
            >
              {isMaster(n) && (
                <span className="absolute right-3 top-3 text-[9px] uppercase tracking-[0.25em] text-brand">Master</span>
              )}
              <p className="font-display text-7xl text-ink transition-colors group-hover:text-brand">{n}</p>
              <p className="mt-4 font-display text-xl text-ink">{p.title}</p>
              <p className="mt-2 text-xs text-muted-foreground">{p.keywords.join(" · ")}</p>
            </Link>
          );
        })}
      </div>
    </section>
  </SiteLayout>
);

export default Compendium;