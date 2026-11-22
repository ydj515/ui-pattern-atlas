import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same people as AvatarDemo: the photo fails to load → 김하늘 falls back to her initial. */
export function AvatarThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[26px] left-[56px] grid size-[24px] place-items-center overflow-hidden rounded-full bg-amber-100 text-[10px] font-semibold text-amber-800">
        김
        <svg
          viewBox="0 0 40 40"
          className="thumb-anim thumb-av-photo absolute inset-0 size-full opacity-0"
        >
          <rect width="40" height="40" fill="#bfdbfe" />
          <circle cx="20" cy="16" r="7" fill="#fcd9b6" />
          <path d="M8 40c1-9 6-13 12-13s11 4 12 13Z" fill="#2563eb" />
        </svg>
      </span>
      <span className="absolute top-[30px] left-[86px] grid size-[20px] place-items-center rounded-full bg-sky-100 text-[8px] font-semibold text-sky-800">
        이
      </span>
      <span className="absolute top-[34px] left-[112px] grid size-[16px] place-items-center rounded-full bg-emerald-100 text-[6.5px] font-semibold text-emerald-800">
        박
      </span>
      <span className="absolute top-[66px] left-[52px] grid h-[14px] w-[72px] place-items-center rounded-[3px] border border-slate-300 text-[6px]">
        <span className="thumb-anim thumb-av-photo opacity-0">사진 불러오기 실패</span>
        <span className="thumb-anim thumb-av-fallback absolute">사진 되돌리기</span>
      </span>
      <ThumbCursor motion="thumb-av-cursor" />
    </ThumbStage>
  );
}
