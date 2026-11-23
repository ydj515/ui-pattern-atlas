import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as PreCheckedOptInDemo: 다크 패턴 → 바른 방법. */
export function PreCheckedOptInThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-pre-checked-opt-in-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-pre-checked-opt-in-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-pre-checked-opt-in-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[7px]">회원가입</b>
          <span className="mt-[5px] flex items-center gap-[3px]">
            <span className="size-[7px] rounded-[1px] bg-blue-600" />
            [필수] 이용약관 동의
          </span>
          <span className="mt-[3px] flex items-center gap-[3px]">
            <span className="size-[7px] rounded-[1px] bg-blue-600" />
            마케팅 문자 받기
          </span>
        </div>
        <div className="thumb-anim thumb-dk-pre-checked-opt-in-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[7px]">회원가입</b>
          <span className="mt-[5px] flex items-center gap-[3px]">
            <span className="size-[7px] rounded-[1px] border border-slate-400" />
            [필수] 이용약관 동의
          </span>
          <span className="mt-[3px] flex items-center gap-[3px]">
            <span className="size-[7px] rounded-[1px] border border-slate-400" />
            [선택] 마케팅 문자 받기
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-pre-checked-opt-in-cursor" />
    </ThumbStage>
  );
}
