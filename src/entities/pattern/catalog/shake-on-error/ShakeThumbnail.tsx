import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same form as ShakeDemo: a wrong 비밀번호 → 확인 → the field shakes and turns red. */
export function ShakeThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[14px] left-[16px] font-medium">비밀번호</p>
      <div className="thumb-anim thumb-sk-field absolute top-[26px] left-[16px] h-[16px] w-[96px]">
        <span className="absolute inset-0 rounded border border-slate-300" />
        <span className="thumb-anim thumb-sk-red absolute inset-0 rounded border border-rose-500 ring-2 ring-rose-500/20" />
        <span className="thumb-anim thumb-sk-dots absolute top-[3px] left-[6px] tracking-[1px]">
          ••••
        </span>
      </div>
      <span className="absolute top-[26px] left-[118px] grid h-[16px] w-[36px] place-items-center rounded bg-slate-900 text-[7px] text-white">
        확인
      </span>
      <p className="thumb-anim thumb-sk-msg absolute top-[48px] left-[16px] text-[7px] text-rose-600">
        비밀번호가 맞지 않아요
      </p>
      <ThumbCursor motion="thumb-sk-cursor" />
    </ThumbStage>
  );
}
