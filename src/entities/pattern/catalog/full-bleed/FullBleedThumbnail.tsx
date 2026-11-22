import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same article as FullBleedDemo: the photo spans edge to edge while the text keeps its column. */
export function FullBleedThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[24px] h-[84px] w-[128px] overflow-hidden rounded-md border border-slate-200 text-[5.5px] leading-[7.5px] text-slate-700">
        <div className="absolute inset-x-[24px] top-[6px]">
          <p className="text-[7px] font-semibold text-slate-900">서울의 겨울</p>
          <p>바람이 세지만 하늘이 가장 맑은 계절이에요.</p>
        </div>
        <span className="thumb-anim thumb-fb-on absolute inset-x-0 top-[32px] h-[26px] bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200" />
        <span className="thumb-anim thumb-fb-off absolute inset-x-[24px] top-[32px] h-[26px] bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200 opacity-0" />
        <p className="absolute inset-x-[24px] top-[62px]">
          사진은 화면 끝까지 펼치고, 글은 읽기 좋은 폭을 지켜요.
        </p>
      </div>
      <span className="absolute top-[94px] left-[82px] size-[7px] rounded-[1.5px] border border-slate-400" />
      <span className="thumb-anim thumb-fb-on absolute top-[94px] left-[82px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white">
        ✓
      </span>
      <p className="absolute top-[93px] left-[92px] text-[5.5px] text-slate-600">
        사진 끝까지 펼치기
      </p>
      <ThumbCursor motion="thumb-fb-cursor" />
    </ThumbStage>
  );
}
