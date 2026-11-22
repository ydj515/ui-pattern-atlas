import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as ErrorSummaryDemo: submit empty → summary with links → jump to the field. */
export function ErrorSummaryThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-es-summary absolute top-[4px] left-[12px] h-[34px] w-[152px] rounded-md border border-rose-500 bg-rose-50 px-[6px] pt-[3px] text-rose-950">
        <p className="text-[7px] font-semibold">2개 항목을 확인해 주세요</p>
        <p className="text-[6.5px] underline">이메일 형식이 올바르지 않아요</p>
        <p className="text-[6.5px] underline">비밀번호를 8자 이상 입력해 주세요</p>
      </div>

      <p className="absolute top-[41px] left-[12px] text-[6.5px] font-medium">이메일</p>
      <span className="absolute top-[50px] left-[12px] h-[12px] w-[152px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-es-invalid absolute top-[50px] left-[12px] h-[12px] w-[152px] rounded border border-rose-500" />
      <span className="thumb-anim thumb-es-focus absolute top-[49px] left-[11px] h-[14px] w-[154px] rounded ring-2 ring-blue-400" />

      <p className="absolute top-[64px] left-[12px] text-[6.5px] font-medium">비밀번호</p>
      <span className="absolute top-[73px] left-[12px] h-[12px] w-[152px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-es-invalid absolute top-[73px] left-[12px] h-[12px] w-[152px] rounded border border-rose-500" />

      <span className="absolute top-[91px] left-[12px] grid h-[15px] w-[152px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
        가입하기
      </span>
      <ThumbCursor motion="thumb-es-cursor" />
    </ThumbStage>
  );
}
