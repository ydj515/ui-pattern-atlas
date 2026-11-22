import { Marquee } from "@/shared/ui/patterns/marquee/Marquee";

const PERKS = ["무료 배송", "오늘 출발", "30일 반품", "적립 5%"];

export function MarqueeDemo() {
  return (
    <section className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="bg-slate-900 px-3 py-2 text-sm text-white">
        <Marquee
          label="혜택"
          duration={12}
          pauseLabel="멈추기"
          playLabel="재생"
          items={PERKS.map((perk) => (
            <span key={perk} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1 rounded-full bg-amber-300" />
              {perk}
            </span>
          ))}
        />
      </div>
      <div className="p-4">
        <span className="block h-24 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200" />
        <p className="mt-2 text-sm font-semibold text-slate-900">린넨 셔츠</p>
      </div>
    </section>
  );
}
