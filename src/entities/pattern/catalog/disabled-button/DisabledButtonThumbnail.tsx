import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as DisabledButtonDemo: press 가입하기 → the reason stands out → agree → 가입했어요. */
export function DisabledButtonThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[18px] left-[24px] size-[7px] rounded-[1.5px] border border-slate-400" />
      <span className="thumb-anim thumb-dbtn-on absolute top-[18px] left-[24px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white">
        ✓
      </span>
      <p className="absolute top-[17px] left-[35px] text-[7px]">이용약관에 동의해요</p>
      <span className="absolute top-[34px] left-[24px] grid h-[16px] w-[128px] place-items-center rounded-[4px] bg-slate-200 text-[7px] font-semibold text-slate-500">
        가입하기
      </span>
      <span className="thumb-anim thumb-dbtn-on absolute top-[34px] left-[24px] grid h-[16px] w-[128px] place-items-center rounded-[4px] bg-slate-900 text-[7px] font-semibold text-white">
        가입하기
      </span>
      <p className="thumb-anim thumb-dbtn-reason absolute top-[55px] left-[24px] text-[6px] text-slate-500 opacity-0">
        약관에 동의해야 가입할 수 있어요
      </p>
      <p className="thumb-anim thumb-dbtn-nudge absolute top-[55px] left-[24px] text-[6px] font-medium text-rose-600 opacity-0">
        약관에 동의해야 가입할 수 있어요
      </p>
      <p className="thumb-anim thumb-dbtn-done absolute inset-x-0 top-[74px] text-center text-[6.5px] text-emerald-700">
        가입했어요
      </p>
      <ThumbCursor motion="thumb-dbtn-cursor" />
    </ThumbStage>
  );
}
