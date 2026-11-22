import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as TextFieldDemo: 저장 empty → error → type 하늘 → 저장했어요. */
export function TextFieldThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[24px] text-[7px] font-medium">
        닉네임 <span className="text-[6px] font-normal text-slate-500">(필수)</span>
      </p>
      <span className="absolute top-[19px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-tf-error absolute top-[19px] left-[24px] h-[15px] w-[128px] rounded border border-rose-500 opacity-0" />
      <span className="thumb-anim thumb-tf-focus absolute top-[18px] left-[23px] h-[17px] w-[130px] rounded ring-2 ring-blue-500/30 opacity-0" />
      <p className="thumb-anim thumb-tf-ph absolute top-[22.5px] left-[30px] text-[6.5px] text-slate-400 opacity-0">
        예: 하늘
      </p>
      <p className="thumb-anim thumb-tf-typed absolute top-[22.5px] left-[30px] text-[6.5px]">
        하늘
      </p>

      <p className="thumb-anim thumb-tf-hint absolute top-[38px] left-[24px] text-[6px] text-slate-500">
        2~12자로 입력해 주세요
      </p>
      <p className="thumb-anim thumb-tf-error absolute top-[38px] left-[24px] text-[6px] text-rose-600 opacity-0">
        닉네임을 입력해 주세요
      </p>

      <span className="absolute top-[52px] left-[24px] grid h-[15px] w-[128px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
        저장
      </span>
      <p className="thumb-anim thumb-tf-saved absolute inset-x-0 top-[73px] text-center text-[6.5px] text-emerald-700">
        저장했어요
      </p>
      <ThumbCursor motion="thumb-tf-cursor" />
    </ThumbStage>
  );
}
