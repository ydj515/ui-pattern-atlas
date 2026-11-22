import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same content as HoverCardDemo: rest on @김하늘 → profile card → move into it → leave. */
export function HoverCardThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[12px] left-[12px] h-[22px] w-[152px] rounded-md border border-slate-200 bg-white px-[8px] pt-[6px] text-[7.5px]">
        <span className="font-semibold text-blue-700">@김하늘</span> 님이 시안을 수정했어요
      </p>

      <div className="thumb-anim thumb-hcard-card absolute top-[38px] left-[12px] h-[52px] w-[120px] rounded-lg border border-slate-200 bg-white shadow-md">
        <span className="absolute top-[8px] left-[8px] grid size-[18px] place-items-center rounded-full bg-amber-100 text-[8px] font-semibold text-amber-800">
          김
        </span>
        <p className="absolute top-[8px] left-[32px] text-[8px] font-semibold">김하늘</p>
        <p className="absolute top-[19px] left-[32px] text-[6.5px] text-slate-500">
          프로덕트 디자이너
        </p>
        <p className="absolute top-[35px] left-[8px] text-[6px] text-slate-600">
          디자인 시스템 팀 · 최근 활동 2시간 전
        </p>
      </div>
      <ThumbCursor motion="thumb-hcard-cursor" />
    </ThumbStage>
  );
}
