import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same request as PasswordResetDemo: the confirmation reads the same whether or not the address has an account. */
export function PasswordResetThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <div className="thumb-anim thumb-auth-pr-form absolute inset-[8px]">
          <b className="text-[8px]">비밀번호 재설정</b>
          <p className="mt-[3px]">가입한 이메일을 입력하면 재설정 링크를 보내 드려요.</p>
          <p className="mt-[3px]">이메일</p>
          <span className="block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
            <span className="thumb-anim thumb-auth-pr-email-from text-slate-400">
              haneul@example.com
            </span>
            <span className="thumb-anim thumb-auth-pr-email-to absolute left-[3px]" style={HIDDEN}>
              haneul@example.com
            </span>
          </span>
          <span className="mt-[6px] block rounded-[3px] bg-slate-900 py-[2px] text-center font-semibold text-white">
            재설정 링크 받기
          </span>
        </div>
        <div className="thumb-anim thumb-auth-pr-sent absolute inset-[8px]" style={HIDDEN}>
          <b className="text-[8px]">메일을 확인해 주세요</b>
          <p className="mt-[3px]">
            haneul@example.com 주소가 가입되어 있다면 재설정 링크를 보냈어요. 링크는 30분 동안 쓸 수
            있어요.
          </p>
          <p className="mt-[4px] text-[5px] text-slate-600 underline">다른 이메일로 다시 받기</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-auth-pr-cursor" />
    </ThumbStage>
  );
}
