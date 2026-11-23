import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same form as LoginFormDemo: email and password, 로그인 → one message that does not say which field was wrong. */
export function LoginFormThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">로그인</b>
        <p className="mt-[3px]">이메일</p>
        <span className="relative block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
          <span
            className="thumb-anim thumb-auth-lf-bad absolute -inset-px rounded-[3px] border border-rose-500"
            style={HIDDEN}
          />
          <span className="thumb-anim thumb-auth-lf-email" style={HIDDEN}>
            haneul@example.com
          </span>
        </span>
        <p className="mt-[3px]">비밀번호</p>
        <span className="relative flex h-[11px] justify-between rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
          <span
            className="thumb-anim thumb-auth-lf-bad absolute -inset-px rounded-[3px] border border-rose-500"
            style={HIDDEN}
          />
          <span className="thumb-anim thumb-auth-lf-pw" style={HIDDEN}>
            ••••••
          </span>
          <span className="text-slate-600">보기</span>
        </span>
        <p
          className="thumb-anim thumb-auth-lf-bad mt-[2px] h-[7px] text-[5.5px] font-medium text-rose-600"
          style={HIDDEN}
        >
          이메일 또는 비밀번호가 맞지 않아요
        </p>
        <span className="mt-[2px] block rounded-[3px] bg-slate-900 py-[2px] text-center font-semibold text-white">
          로그인
        </span>
        <p className="mt-[3px] text-center text-[5px] text-slate-600 underline">
          비밀번호를 잊었나요?
        </p>
      </div>
      <ThumbCursor motion="thumb-auth-lf-cursor" />
    </ThumbStage>
  );
}
