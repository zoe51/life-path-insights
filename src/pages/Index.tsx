import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import BirthdayForm from "@/components/BirthdayForm";

const Index = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid gap-16 py-16 md:grid-cols-[1.1fr_1fr] md:gap-12 md:py-28">
          <div className="animate-float-up space-y-8">
            <p className="text-xs uppercase tracking-[0.4em] text-brand">Numerology · 西方数秘术</p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl text-balance">
              输入一个生日，<br />
              看见你的<em className="not-italic text-brand">生命数字</em>。
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              源自毕达哥拉斯"万物皆数"的古老传统。把出生年月日相加，得到 1—9 或主数字 11、22、33——一个属于你的、关于性格与方向的符号。
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/origins" className="border-b border-ink/30 pb-1 text-ink transition-colors hover:border-brand hover:text-brand">
                了解算法溯源 →
              </Link>
              <Link to="/compendium" className="border-b border-transparent pb-1 text-muted-foreground transition-colors hover:border-brand hover:text-brand">
                数字图鉴
              </Link>
            </div>
          </div>

          <div className="relative">
            <DecorativeOrbit />
            <div className="relative bg-card/70 p-8 shadow-soft backdrop-blur-sm md:p-10">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Your Birthday</p>
              <h2 className="mb-8 font-display text-2xl text-ink">请输入你的出生日期</h2>
              <BirthdayForm />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-border/60 bg-background/40">
        <div className="container grid gap-10 py-20 md:grid-cols-3">
          {[
            { n: "01", t: "输入生日", d: "三个数字，无需注册。我们不在服务器存储任何信息。" },
            { n: "02", t: "拆解数字", d: "把每一位相加，直至得到 1—9 或主数字 11、22、33。" },
            { n: "03", t: "获得解读", d: "性格、课题、方向、关系——四个维度的温柔提示。" },
          ].map((s) => (
            <div key={s.n} className="space-y-3">
              <p className="font-display text-5xl text-brand">{s.n}</p>
              <h3 className="font-display text-2xl text-ink">{s.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="container py-24">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl leading-snug text-ink md:text-4xl text-balance">
            "万物皆数。数即是宇宙的语言，是灵魂得以被理解的方式。"
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            — Pythagoras · 约公元前 570—495 年
          </footer>
        </blockquote>
      </section>
    </SiteLayout>
  );
};

const DecorativeOrbit = () => (
  <div aria-hidden className="pointer-events-none absolute -inset-10 -z-0 hidden md:block">
    <div className="absolute inset-0 animate-spin-slow">
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(var(--brand) / 0.15)" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="hsl(var(--ink) / 0.08)" />
        <circle cx="200" cy="20" r="3" fill="hsl(var(--brand))" />
      </svg>
    </div>
  </div>
);

export default Index;
