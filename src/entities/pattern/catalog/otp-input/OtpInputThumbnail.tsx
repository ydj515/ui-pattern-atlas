import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as OtpInputDemo: the digits fill box by box → 인증됐어요. */
export function OtpInputThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute inset-x-0 top-[10px] text-center text-[6.5px] text-slate-700">
        문자로 받은 6자리 코드를 입력해 주세요
      </p>
      {"123456".split("").map((digit, index) => (
        <span
          key={digit}
          className="absolute top-[26px] grid h-[22px] w-[18px] place-items-center rounded border border-slate-300 text-[9px] font-semibold"
          style={{ left: 24 + index * 22 }}
        >
          <span className={`thumb-anim thumb-otp-d${index + 1}`}>{digit}</span>
        </span>
      ))}
      <span className="thumb-anim thumb-otp-ring absolute top-[25px] left-[23px] h-[24px] w-[20px] rounded ring-2 ring-blue-500/40 opacity-0" />
      <p className="thumb-anim thumb-otp-ok absolute inset-x-0 top-[56px] text-center text-[7px] text-emerald-700">
        인증됐어요
      </p>
      <p className="absolute inset-x-0 top-[82px] text-center text-[6px] text-slate-400">
        예시 코드: 123456
      </p>
      <ThumbCursor motion="thumb-otp-cursor" />
    </ThumbStage>
  );
}
