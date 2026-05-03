import { PROFILES, isMaster, LifeNumber } from "@/lib/numerology";

const sections = [
  { key: "traits", label: "核心性格特质" },
  { key: "lessons", label: "人生课题与挑战" },
  { key: "direction", label: "适合的人生方向" },
  { key: "relations", label: "与其他数字的关系" },
] as const;

const NumberDetail = ({ number }: { number: LifeNumber }) => {
  const p = PROFILES[number];
  return (
    <div className="space-y-12">
      <section className="grid gap-2">
        {sections.map((s) => (
          <article key={s.key} className="border-t border-border/60 py-6">
            <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-brand">{s.label}</h3>
            <p className="font-display text-xl leading-relaxed text-ink text-balance">
              {p[s.key]}
            </p>
          </article>
        ))}
      </section>

      <section>
        <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-brand">幸运参考</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <LuckyCard label="幸运数字">
            <div className="flex flex-wrap gap-2">
              {p.luckyNumbers.map((n) => (
                <span key={n} className="flex h-10 w-10 items-center justify-center border border-ink/20 font-display text-lg text-ink">
                  {n}
                </span>
              ))}
            </div>
          </LuckyCard>
          <LuckyCard label="幸运颜色">
            <div className="space-y-2">
              {p.luckyColors.map((c) => (
                <div key={c.hex} className="flex items-center gap-3 text-sm">
                  <span className="h-6 w-6 border border-ink/20" style={{ backgroundColor: c.hex }} />
                  <span className="text-ink">{c.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{c.hex}</span>
                </div>
              ))}
            </div>
          </LuckyCard>
          <LuckyCard label="幸运日期">
            <p className="text-sm leading-relaxed text-ink">{p.luckyDates}</p>
          </LuckyCard>
        </div>
      </section>

      {isMaster(number) && (
        <p className="border-l-2 border-brand pl-4 text-sm italic text-muted-foreground">
          {number} 是数秘术中的"主数字"（Master Number），不再继续叠加为个位数。它意味着更高频率的潜能与课题。
        </p>
      )}
    </div>
  );
};

const LuckyCard = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border border-border/60 bg-card/50 p-5">
    <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
    {children}
  </div>
);

export default NumberDetail;