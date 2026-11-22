import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same content as TooltipDemo: hover the info icon next to 연 이자율 3.2%. */
export function TooltipThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[70px] left-[38px] flex items-baseline gap-[5px]">
        연 이자율 <strong className="text-[12px] font-semibold">3.2%</strong>
      </p>
      <div className="absolute top-[72px] left-[112px] grid size-[11px] place-items-center rounded-full border-[1.5px] border-slate-400 text-[6px] leading-none font-bold text-slate-500">
        i
      </div>

      <div className="thumb-anim thumb-tooltip-bubble absolute top-[34px] left-[44px] w-[122px] rounded-md bg-slate-900 px-[7px] py-[5px] text-[7px] text-white">
        세금 15.4%를 떼기 전 금액 기준이에요
        <span className="absolute -bottom-[3px] left-[70px] size-[6px] rotate-45 bg-slate-900" />
      </div>
      <ThumbCursor motion="thumb-tooltip-cursor" />
    </ThumbStage>
  );
}
