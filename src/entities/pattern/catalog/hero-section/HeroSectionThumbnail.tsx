import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same hero as HeroSectionDemo: headline, one sentence, 무료로 시작하기 → 무료로 시작했어요. */
export function HeroSectionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[10px] h-[76px] w-[156px] rounded-md border border-slate-200">
        <p className="absolute top-[8px] left-[8px] w-[80px] text-[8px] leading-[10px] font-bold">
          회의록은 회의가 끝나기 전에
        </p>
        <p className="absolute top-[31px] left-[8px] w-[82px] text-[4.5px] leading-[6.5px] text-slate-600">
          말하는 동안 요점과 할 일을 정리해 드려요. 팀 전체가 같은 기록을 봐요.
        </p>
        <span className="absolute top-[52px] left-[8px] grid h-[13px] w-[44px] place-items-center rounded-[3px] bg-slate-900 text-[5px] font-semibold text-white">
          무료로 시작하기
        </span>
        <span className="absolute top-[55px] left-[56px] text-[5px] text-slate-700 underline">
          1분 소개 보기
        </span>
        <span className="absolute top-[12px] left-[98px] h-[46px] w-[50px] rounded-[5px] bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200" />
      </div>
      <p className="thumb-anim thumb-hero-done absolute inset-x-0 top-[92px] text-center text-[6px] text-slate-600">
        무료로 시작했어요
      </p>
      <ThumbCursor motion="thumb-hero-cursor" />
    </ThumbStage>
  );
}
