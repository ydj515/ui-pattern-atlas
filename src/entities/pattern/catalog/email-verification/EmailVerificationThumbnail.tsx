import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const WAIT = [30, 29, 28];

/** Same screen as EmailVerificationDemo: 메일 다시 보내기 → sent, then a counted cooldown before the next one. */
export function EmailVerificationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[8px]">메일함을 확인해 주세요</b>
        <p className="mt-[3px]">haneul@example.com 주소로 인증 메일을 보냈어요.</p>
        <p className="mt-[2px] text-[5px] text-slate-500">
          몇 분이 지나도 없으면 스팸함도 확인해 주세요.
        </p>
        <span className="relative mt-[4px] grid h-[12px] rounded-[3px] border border-slate-300 text-center leading-[11px] font-medium">
          <span className="thumb-anim thumb-auth-ev-ready col-start-1 row-start-1">
            메일 다시 보내기
          </span>
          {WAIT.map((seconds, index) => (
            <span
              key={seconds}
              className={`thumb-anim thumb-auth-ev-w${index} col-start-1 row-start-1 text-slate-400`}
              style={HIDDEN}
            >
              {seconds}초 뒤에 다시 보낼 수 있어요
            </span>
          ))}
        </span>
        <p
          className="thumb-anim thumb-auth-ev-sent mt-[3px] text-[5.5px] text-emerald-700"
          style={HIDDEN}
        >
          메일을 다시 보냈어요
        </p>
        <p className="absolute inset-x-0 bottom-[6px] text-center text-[5px] text-slate-600 underline">
          이메일 주소 바꾸기
        </p>
      </div>
      <ThumbCursor motion="thumb-auth-ev-cursor" />
    </ThumbStage>
  );
}
