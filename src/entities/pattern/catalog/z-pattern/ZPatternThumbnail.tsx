import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same page as ZPatternDemo: 시선 흐름 보기 draws the Z from 모아 to 시작하기. */
export function ZPatternThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[24px] h-[86px] w-[128px] rounded-md border border-slate-200">
        <p className="absolute top-[6px] left-[8px] text-[7px] font-bold">모아</p>
        <p className="absolute top-[7px] right-[8px] text-[5px] text-slate-600 underline">로그인</p>
        <p className="absolute inset-x-0 top-[34px] text-center text-[9px] font-bold">
          팀 일정, 한 화면에서
        </p>
        <span className="absolute bottom-[6px] left-[8px] h-[14px] w-[24px] rounded-[3px] bg-gradient-to-br from-sky-200 to-indigo-300" />
        <span className="absolute right-[8px] bottom-[6px] grid h-[13px] w-[34px] place-items-center rounded-[3px] bg-slate-900 text-[5.5px] font-semibold text-white">
          시작하기
        </span>
        <svg viewBox="0 0 128 86" className="thumb-anim thumb-zp-path absolute inset-0 size-full">
          <path
            d="M14 10 L114 10 L14 76 L114 76"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
        </svg>
        <span className="thumb-anim thumb-zp-eye absolute top-[8px] left-[12px] size-[5px] rounded-full bg-rose-500 opacity-0" />
      </div>
      <span className="absolute top-[96px] left-[90px] size-[7px] rounded-[1.5px] border border-slate-400" />
      <span className="thumb-anim thumb-zp-path absolute top-[96px] left-[90px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white">
        ✓
      </span>
      <p className="absolute top-[95px] left-[100px] text-[5.5px] text-slate-600">시선 흐름 보기</p>
      <ThumbCursor motion="thumb-zp-cursor" />
    </ThumbStage>
  );
}
