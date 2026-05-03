import SiteLayout from "@/components/SiteLayout";

const timeline = [
  {
    era: "约公元前 570—495 年",
    title: "毕达哥拉斯与'万物皆数'",
    body: "古希腊数学家、哲学家毕达哥拉斯（Pythagoras）创立了一所兼具数学、哲学、宗教色彩的学派。他相信宇宙的本质可以用数字来表达——数不仅是计量工具，更是构成万物的根本秩序。这种'万物皆数'的世界观，奠定了西方数秘术最初的思想根基。后世将赋予数字以性格、能量与象征意义的传统，皆可上溯至此。",
  },
  {
    era: "中世纪 — 文艺复兴",
    title: "在隐秘中流传",
    body: "中世纪的欧洲，数秘术与基督教神秘主义、卡巴拉（Kabbalah）、炼金术互相交织。学者们用数字解读《圣经》文本，探寻字母与数字之间的隐秘对应。文艺复兴时期，海因里希·阿格里帕（Heinrich Cornelius Agrippa）在《神秘哲学三书》中系统整理了数字的象征学，使数秘术成为西方神秘学传统的重要支脉。",
  },
  {
    era: "20 世纪初",
    title: "现代生命数字体系的成型",
    body: "美国学者 L. Dow Balliett 在 20 世纪初出版了一系列关于'数字的振动'的著作，将古老的数秘传统与现代心理学语言结合。其后，Florence Campbell 在 1931 年出版的《Your Days Are Numbered》进一步系统化了出生日期与生命数字的对应方法。这套以年月日相加、保留主数字 11/22/33 的算法，成为今天我们所熟知的现代数秘术形态。",
  },
  {
    era: "当代",
    title: "作为自我探索的符号语言",
    body: "在今天，数秘术更多被视为一种心理学意义上的自我认知工具，而非预测性占卜。它提供了一套符号系统，帮助人们以另一种角度看待自己的性格倾向、关系模式与人生方向。数字本身没有命定的力量，真正的意义来自我们如何与它对话、如何在生活中验证与调整。",
  },
];

const Origins = () => (
  <SiteLayout>
    <section className="container max-w-3xl py-16 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-brand">Origins</p>
      <h1 className="font-display text-5xl text-ink md:text-6xl">算法溯源</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
        从毕达哥拉斯到现代心理学，数秘术穿越了两千五百年。它不是预言，而是一种古老的符号语言——
        关于人如何借由数字，理解自己。
      </p>

      <div className="relative mt-20">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-4" aria-hidden />
        <ol className="space-y-16">
          {timeline.map((t, i) => (
            <li key={i} className="relative pl-12 md:pl-16">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-brand bg-background font-display text-xs text-brand md:h-8 md:w-8">
                {i + 1}
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-brand">{t.era}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">{t.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 border-t border-border/60 pt-8">
        <p className="text-sm italic text-muted-foreground">
          注：本页面所述为西方数秘术（Pythagorean Numerology）传统，与中国传统命理体系（如八字、紫微斗数）属于不同的文化脉络与方法论，请勿混淆。
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default Origins;