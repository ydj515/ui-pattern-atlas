import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same plan card as AnimatedHighlightDemo: a marker sweeps behind 첫 달은 무료. */
export function AnimatedHighlightThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[10px] h-[70px] w-[156px] rounded-lg border border-slate-200 p-[8px]">
        <p className="text-[8px] font-bold">프리미엄 요금제</p>
        <p className="mt-[5px] text-[9px] leading-[14px] text-slate-800">
          가입하면{" "}
          <mark className="relative bg-transparent px-[1px] text-inherit">
            <span className="thumb-anim thumb-ah-mark absolute inset-0 origin-left bg-amber-200" />
            <span className="relative">첫 달은 무료</span>
          </mark>
          예요. 언제든 해지할 수 있어요.
        </p>
      </div>
      <span className="absolute top-[86px] left-[10px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-ah-cursor" />
    </ThumbStage>
  );
}
