import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same buttons as SplitButtonDemo: open the arrow → PDF로 내보내기 → PDF로 내보냈어요. */
export function SplitButtonThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[20px] left-[52px] grid h-[16px] w-[40px] place-items-center rounded-l-[4px] bg-slate-900 text-[7px] font-semibold text-white">
        저장
      </span>
      <span className="absolute top-[20px] left-[92px] grid h-[16px] w-[16px] place-items-center rounded-r-[4px] border-l border-white/20 bg-slate-900 text-[6px] text-white">
        ▾
      </span>
      <ul className="thumb-anim thumb-split-menu absolute top-[38px] left-[40px] w-[68px] rounded-[4px] border border-slate-200 bg-white py-[1px] text-[6px] shadow-md opacity-0">
        <li className="h-[14px] px-[6px] leading-[14px]">사본으로 저장</li>
        <li className="relative h-[14px] px-[6px] leading-[14px]">
          <span className="thumb-anim thumb-split-hover absolute inset-0 bg-slate-100" />
          <span className="relative">PDF로 내보내기</span>
        </li>
      </ul>
      <p className="thumb-anim thumb-split-done absolute inset-x-0 top-[76px] text-center text-[6.5px] text-slate-600">
        PDF로 내보냈어요
      </p>
      <ThumbCursor motion="thumb-split-cursor" />
    </ThumbStage>
  );
}
