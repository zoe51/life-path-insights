import { Link, useParams, Navigate } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import NumberDetail from "@/components/NumberDetail";
import { ALL_NUMBERS, PROFILES, LifeNumber, isMaster } from "@/lib/numerology";

const NumberPage = () => {
  const { n } = useParams();
  const num = Number(n) as LifeNumber;
  if (!ALL_NUMBERS.includes(num)) return <Navigate to="/compendium" replace />;
  const p = PROFILES[num];
  return (
    <SiteLayout>
      <section className="container max-w-3xl py-16 md:py-24">
        <Link to="/compendium" className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-brand">
          ← 返回图鉴
        </Link>
        <div className="mb-12 text-center">
          {isMaster(num) && (
            <span className="mb-4 inline-block border border-brand px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-brand">
              Master Number
            </span>
          )}
          <p className="font-display text-[10rem] leading-none text-ink md:text-[14rem]">{num}</p>
          <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">{p.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground text-balance">{p.tagline}</p>
        </div>
        <NumberDetail number={num} />
      </section>
    </SiteLayout>
  );
};

export default NumberPage;