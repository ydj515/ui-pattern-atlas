import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CHIPS = [
  { label: "참고", left: 51, width: 24 },
  { label: "팁", left: 79, width: 18 },
  { label: "주의", left: 101, width: 24 },
] as const;

const CALLOUTS = [
  {
    title: "참고",
    icon: "i",
    text: "링크는 30분 동안만 열 수 있어요.",
    box: "border-sky-200 bg-sky-50",
    mark: "bg-sky-600",
  },
  {
    title: "팁",
    icon: "✓",
    text: "메일이 안 보이면 스팸함을 확인해 보세요.",
    box: "border-emerald-200 bg-emerald-50",
    mark: "bg-emerald-600",
  },
  {
    title: "주의",
    icon: "!",
    text: "링크를 다른 사람과 공유하지 마세요.",
    box: "border-amber-200 bg-amber-50",
    mark: "bg-amber-500",
  },
] as const;

/** Same article as CalloutDemo: switch 참고 → 팁 → 주의 → 참고. */
export function CalloutThumbnail() {
  return (
    <ThumbStage>
      {CHIPS.map((chip, index) => (
        <span
          key={chip.label}
          className="absolute top-[6px] h-[12px] rounded-full border border-slate-300 text-center text-[6.5px] leading-[10px] font-medium text-slate-600"
          style={{ left: chip.left, width: chip.width }}
        >
          {chip.label}
          <span
            className={`thumb-anim thumb-callout-p${index + 1} ${index === 0 ? "" : "opacity-0"} absolute -inset-px rounded-full bg-slate-900 text-white`}
          >
            {chip.label}
          </span>
        </span>
      ))}

      <div className="absolute top-[24px] left-[12px] h-[82px] w-[152px] rounded-md border border-slate-200">
        <p className="absolute top-[6px] left-[8px] text-[7.5px] font-semibold">비밀번호 재설정</p>
        <p className="absolute top-[18px] left-[8px] text-[6.5px] text-slate-600">
          재설정 링크는 가입한 이메일로 보내 드려요.
        </p>
        {CALLOUTS.map((callout, index) => (
          <div
            key={callout.title}
            className={`thumb-anim thumb-callout-c${index + 1} ${index === 0 ? "" : "opacity-0"} absolute top-[33px] left-[8px] h-[42px] w-[136px] rounded-md border ${callout.box}`}
          >
            <span
              className={`absolute top-[5px] left-[5px] grid size-[9px] place-items-center rounded-full text-[6px] font-bold text-white ${callout.mark}`}
            >
              {callout.icon}
            </span>
            <p className="absolute top-[3px] left-[18px] text-[7px] font-semibold">
              {callout.title}
            </p>
            <p className="absolute top-[14px] left-[18px] w-[112px] text-[6.5px]">{callout.text}</p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-callout-cursor" />
    </ThumbStage>
  );
}
