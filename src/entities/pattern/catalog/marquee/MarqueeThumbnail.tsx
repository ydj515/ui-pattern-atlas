import { ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PERKS = ["무료 배송", "오늘 출발", "30일 반품", "적립 5%"];

/** Same strip as MarqueeDemo: the perks slide sideways without a seam above the product. */
export function MarqueeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[10px] h-[98px] w-[156px] overflow-hidden rounded-lg border border-slate-200">
        <div className="flex h-[18px] items-center gap-[4px] bg-slate-900 pr-[4px] text-[7px] text-white">
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="thumb-anim thumb-mq-track flex w-max">
              {[0, 1].map((copy) => (
                <span key={copy} className="flex shrink-0 gap-[12px] pr-[12px] pl-[6px]">
                  {PERKS.map((perk) => (
                    <span key={perk} className="flex items-center gap-[4px]">
                      <span className="size-[2px] rounded-full bg-amber-300" />
                      {perk}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <span className="rounded border border-white/30 px-[3px] text-[6px]">멈추기</span>
        </div>
        <span className="mx-[8px] mt-[8px] block h-[48px] rounded-md bg-gradient-to-br from-sky-100 to-sky-200" />
        <p className="mx-[8px] mt-[4px] text-[7px] font-semibold">린넨 셔츠</p>
      </div>
    </ThumbStage>
  );
}
