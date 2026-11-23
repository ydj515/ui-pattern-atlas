import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same check as TwoFactorAuthDemo: a wrong code counts the tries left, the right one signs in. */
export function TwoFactorAuthThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <div className="thumb-anim thumb-auth-tf-form absolute inset-[8px]">
          <b className="text-[8px]">2단계 인증</b>
          <p className="mt-[2px]">휴대폰으로 받은 6자리 코드를 입력해 주세요.</p>
          <p className="mt-[3px]">인증 코드</p>
          <span className="relative block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px] tracking-[2px]">
            <span
              className="thumb-anim thumb-auth-tf-bad absolute -inset-px rounded-[3px] border border-rose-500"
              style={HIDDEN}
            />
            <span className="thumb-anim thumb-auth-tf-c0 absolute left-[3px] text-slate-400">
              123456
            </span>
            <span className="thumb-anim thumb-auth-tf-c1 absolute left-[3px]" style={HIDDEN}>
              111111
            </span>
            <span className="thumb-anim thumb-auth-tf-c2 absolute left-[3px]" style={HIDDEN}>
              123456
            </span>
          </span>
          <p
            className="thumb-anim thumb-auth-tf-bad mt-[2px] h-[7px] text-[5.5px] font-medium text-rose-600"
            style={HIDDEN}
          >
            코드가 맞지 않아요. 4번 더 시도할 수 있어요
          </p>
          <span className="mt-[2px] block rounded-[3px] bg-slate-900 py-[2px] text-center font-semibold text-white">
            확인
          </span>
          <p className="mt-[3px] text-center text-[5px] text-slate-600 underline">
            휴대폰을 쓸 수 없나요? 백업 코드로 인증
          </p>
        </div>
        <p
          className="thumb-anim thumb-auth-tf-done absolute inset-[8px] grid place-items-center text-[7px] font-medium text-emerald-700"
          style={HIDDEN}
        >
          인증됐어요. 로그인할게요
        </p>
      </div>
      <ThumbCursor motion="thumb-auth-tf-cursor" />
    </ThumbStage>
  );
}
