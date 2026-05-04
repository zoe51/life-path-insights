const SiteFooter = () => (
  <footer className="mt-24 border-t border-border/60 py-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
      <p className="font-display text-base tracking-widest text-ink">LIFENO · 万物皆数</p>
      <p>© {new Date().getFullYear()} LifeNo — 一个关于数字与自我的轻量探索。</p>
    </div>
  </footer>
);

export default SiteFooter;