import { ThumbStage } from "../../ui/ThumbStage";

/** Same form as InlineValidationDemo: an invalid email shows the error after leaving the field. */
export function InlineValidationThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[14px] font-semibold">이메일</p>
      <p className="absolute top-[19px] left-[14px] text-[7px] text-slate-500">
        영수증을 받을 주소를 입력해 주세요.
      </p>
      <div className="absolute top-[30px] left-[14px] h-[20px] w-[148px] overflow-hidden rounded-md border border-slate-300 bg-white">
        <span className="absolute top-[4px] left-[7px]">name@exam</span>
        <span className="thumb-anim thumb-field-cover absolute top-[2px] left-[6px] h-[14px] w-[80px] border-l border-slate-900 bg-white" />
      </div>
      <div className="thumb-anim thumb-field-error absolute top-[30px] left-[14px] h-[20px] w-[148px] rounded-md border-[1.5px] border-rose-500" />
      <p className="thumb-anim thumb-field-message absolute top-[54px] left-[14px] w-[148px] text-[7px] font-medium text-rose-600">
        이메일 형식이 올바르지 않아요. 예: name@example.com
      </p>
      <div className="absolute top-[84px] left-[14px] grid h-[18px] w-[148px] place-items-center rounded-md bg-slate-900 font-semibold text-white">
        영수증 받기
      </div>
    </ThumbStage>
  );
}
