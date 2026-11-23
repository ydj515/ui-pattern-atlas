import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as ZeigarnikDemo: 진행률 없음 → 남은 일 보이기. */
export function ZeigarnikThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-zeigarnik-effect-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">진행률 없음</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-zeigarnik-effect-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">남은 일 보이기</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-zeigarnik-effect-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[8px]">내 프로필</b>
          <span className="block text-slate-500">하늘</span>
        </div>
        <div className="thumb-anim thumb-dk-zeigarnik-effect-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[8px]">내 프로필</b>
          <span className="block text-slate-500">하늘</span>
          <span className="mt-[5px] block text-[5.5px]">
            프로필 80% 완성 · 남은 일: 사진 올리기
          </span>
          <span className="mt-[2px] block h-[3px] overflow-hidden rounded-full bg-slate-100">
            <span className="block h-full w-4/5 bg-emerald-500" />
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-zeigarnik-effect-cursor" />
    </ThumbStage>
  );
}
