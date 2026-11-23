import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as JakobsLawDemo: 낯선 배치 → 익숙한 배치. */
export function JakobsLawThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-jakobs-law-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">낯선 배치</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-jakobs-law-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">익숙한 배치</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-jakobs-law-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="flex justify-between border-b border-slate-100 pb-[2px]">
            <span>장바구니</span>
            <b>동네가게</b>
          </span>
          <span className="block py-[8px] text-center text-slate-500">오늘의 추천</span>
          <span className="block rounded bg-slate-100 py-[2px] text-center">검색</span>
        </div>
        <div className="thumb-anim thumb-dk-jakobs-law-b absolute inset-0 bg-white p-[6px]">
          <span className="flex items-center gap-[3px] border-b border-slate-100 pb-[2px]">
            <b>동네가게</b>
            <span className="flex-1 rounded bg-slate-100 px-[3px] text-slate-500">검색</span>
            <span>장바구니</span>
          </span>
          <span className="block py-[8px] text-center text-slate-500">오늘의 추천</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-jakobs-law-cursor" />
    </ThumbStage>
  );
}
