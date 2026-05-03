import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import NumberDetail from "@/components/NumberDetail";
import { Button } from "@/components/ui/button";
import { calculateLifePath, calculationSteps, isMaster, PROFILES } from "@/lib/numerology";
import { toast } from "sonner";

const Result = () => {
  const [params] = useSearchParams();
  const y = Number(params.get("y"));
  const m = Number(params.get("m"));
  const d = Number(params.get("d"));
  const valid = y >= 1900 && y <= 2099 && m >= 1 && m <= 12 && d >= 1 && d <= 31;

  const number = useMemo(() => (valid ? calculateLifePath(y, m, d) : null), [valid, y, m, d]);
  const steps = useMemo(() => (valid ? calculationSteps(y, m, d) : []), [valid, y, m, d]);

  const [revealed, setRevealed] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!number) return;
    setRevealed(false);
    setTick(0);
    const start = Date.now();
    const id = setInterval(() => {
      setTick(Math.floor(Math.random() * 99));
      if (Date.now() - start > 1400) {
        clearInterval(id);
        setRevealed(true);
      }
    }, 70);
    return () => clearInterval(id);
  }, [number]);

  if (!valid || !number) {
    return (
      <SiteLayout>
        <div className="container py-32 text-center">
          <p className="font-display text-2xl text-ink">日期无效</p>
          <Link to="/" className="mt-4 inline-block text-sm text-brand">← 返回测算</Link>
        </div>
      </SiteLayout>
    );
  }

  const profile = PROFILES[number];

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("链接已复制");
  };

  return (
    <SiteLayout>
      {/* Hero number */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.4em] text-brand">Your Life Path Number</p>
            <p className="mb-8 text-sm text-muted-foreground">{y} 年 {m} 月 {d} 日</p>

            <div className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
              <div className="absolute inset-0 animate-breathe rounded-full border border-brand/30" />
              <div className="absolute inset-6 rounded-full border border-ink/10" />
              <span
                key={revealed ? "r" : tick}
                className={`font-display text-[8rem] leading-none text-ink transition-all duration-500 md:text-[10rem] ${
                  revealed ? "animate-float-up text-brand" : "opacity-60"
                }`}
              >
                {revealed ? number : tick}
              </span>
            </div>

            {revealed && (
              <div className="mt-10 animate-float-up space-y-4">
                {isMaster(number) && (
                  <span className="inline-block border border-brand px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-brand">
                    Master Number
                  </span>
                )}
                <h1 className="font-display text-5xl text-ink md:text-6xl">{profile.title}</h1>
                <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
                  {profile.tagline}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {profile.keywords.map((k) => (
                    <span key={k} className="border border-ink/20 px-3 py-1 text-xs text-ink">{k}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {revealed && (
        <>
          {/* Calc */}
          <section className="container py-12">
            <div className="mx-auto max-w-2xl border border-border/60 bg-card/50 p-6 text-center">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">计算过程</p>
              <div className="space-y-1 font-display text-lg text-ink">
                {steps.map((s, i) => (
                  <p key={i}>{i === 0 ? s : `→ ${s}`}</p>
                ))}
                <p className="pt-2 text-brand">= {number}{isMaster(number) ? "（主数字，停止拆分）" : ""}</p>
              </div>
            </div>
          </section>

          {/* Detail */}
          <section className="container max-w-3xl py-8">
            <NumberDetail number={number} />
          </section>

          {/* Share */}
          <section className="container max-w-3xl py-12">
            <div className="flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl text-ink">把这份解读带走</p>
                <p className="text-sm text-muted-foreground">复制链接分享，或在数字图鉴中探索其他数字。</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={copyLink} variant="outline" className="rounded-none border-ink/30">复制链接</Button>
                <Link to="/compendium">
                  <Button className="rounded-none bg-ink text-cream hover:bg-brand">数字图鉴</Button>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </SiteLayout>
  );
};

export default Result;