import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same site as TopLoadingBarDemo: click 소식 → the bar creeps along the top → the page arrives. */
export function TopLoadingBarThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[16px] h-[80px] w-[144px] overflow-hidden rounded-md border border-slate-200">
        <span className="thumb-anim thumb-tlb-bar absolute inset-x-0 top-0 h-[2px] origin-left bg-blue-600 opacity-0" />
        <p className="absolute inset-x-0 top-[2px] flex h-[16px] gap-[2px] border-b border-slate-100 px-[6px] text-[6.5px] leading-[16px] text-slate-600">
          <span className="px-[4px]">홈</span>
          <span className="px-[4px]">소식</span>
          <span className="px-[4px]">문의</span>
        </p>
        <div className="thumb-anim thumb-tlb-home absolute top-[30px] left-[10px] opacity-0">
          <p className="text-[8px] font-semibold">홈</p>
          <p className="text-[6px] text-slate-600">새 소식 3건이 있어요</p>
        </div>
        <div className="thumb-anim thumb-tlb-news absolute top-[30px] left-[10px]">
          <p className="text-[8px] font-semibold">소식</p>
          <p className="text-[6px] text-slate-600">이번 주 업데이트를 정리했어요</p>
        </div>
      </div>
      <p className="absolute top-[94px] right-[16px] flex items-center gap-[3px] text-[5.5px] text-slate-600">
        <span className="size-[6px] rounded-[1.5px] border border-slate-400" />
        느린 네트워크
      </p>
      <ThumbCursor motion="thumb-tlb-cursor" />
    </ThumbStage>
  );
}
