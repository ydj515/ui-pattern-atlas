import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Rule({ label }: { readonly label: string }) {
  return (
    <span className="grid">
      <span className="thumb-anim thumb-auth-sf-rule-from col-start-1 row-start-1 text-slate-500">
        · {label}
      </span>
      <span
        className="thumb-anim thumb-auth-sf-rule-to col-start-1 row-start-1 text-emerald-700"
        style={HIDDEN}
      >
        ✓ {label}
      </span>
    </span>
  );
}

/** Same form as SignupFormDemo: a taken email is caught on leaving the field; the rules tick off while typing. */
export function SignupFormThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">회원가입</b>
        <p className="mt-[2px]">이메일</p>
        <span className="relative block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
          <span
            className="thumb-anim thumb-auth-sf-taken absolute -inset-px rounded-[3px] border border-rose-500"
            style={HIDDEN}
          />
          <span className="thumb-anim thumb-auth-sf-email" style={HIDDEN}>
            haneul@example.com
          </span>
        </span>
        <p
          className="thumb-anim thumb-auth-sf-taken h-[7px] text-[5.5px] text-rose-600"
          style={HIDDEN}
        >
          이미 가입된 이메일이에요
        </p>
        <p>비밀번호</p>
        <span className="block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
          <span className="thumb-anim thumb-auth-sf-pw" style={HIDDEN}>
            •••••••••
          </span>
        </span>
        <p className="mt-[2px] grid gap-[1px] text-[5.5px]">
          <Rule label="8자 이상" />
          <Rule label="숫자 포함" />
        </p>
        <span className="mt-[3px] block rounded-[3px] bg-slate-900 py-[2px] text-center font-semibold text-white">
          가입하기
        </span>
      </div>
      <ThumbCursor motion="thumb-auth-sf-cursor" />
    </ThumbStage>
  );
}
