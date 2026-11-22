import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [
  { dots: "•••", word: "약함", hint: "8자 이상으로 늘려 보세요", color: "bg-rose-500" },
  { dots: "••••••••", word: "보통", hint: "숫자나 기호를 섞어 보세요", color: "bg-amber-500" },
  {
    dots: "••••••••••",
    word: "강함",
    hint: "조금 더 길게 쓰면 더 안전해요",
    color: "bg-emerald-500",
  },
  { dots: "•••••••••••••", word: "아주 강함", hint: "", color: "bg-emerald-600" },
] as const;

/** Same field as PasswordStrengthMeterDemo: typing raises the meter from 약함 to 아주 강함. */
export function PasswordStrengthMeterThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[14px] left-[24px] text-[7px] font-medium">새 비밀번호</p>
      <span className="absolute top-[25px] left-[24px] h-[15px] w-[128px] rounded-[3px] border border-slate-300" />
      {[1, 2, 3, 4].map((bar) => (
        <span
          key={bar}
          className="absolute top-[46px] h-[3px] w-[29px] rounded-full bg-slate-200"
          style={{ left: 24 + (bar - 1) * 33 }}
        />
      ))}
      <p className="absolute top-[53px] left-[24px] text-[5.5px] text-slate-500">비밀번호 강도</p>
      {STEPS.map((step, index) => (
        <div
          key={step.word}
          className={`thumb-anim thumb-pwm-s${index} ${index === 3 ? "" : "opacity-0"}`}
        >
          <p className="absolute top-[28.5px] left-[30px] text-[6.5px] tracking-wide">
            {step.dots}
          </p>
          {Array.from({ length: index + 1 }, (_, bar) => (
            <span
              key={bar}
              className={`absolute top-[46px] h-[3px] w-[29px] rounded-full ${step.color}`}
              style={{ left: 24 + bar * 33 }}
            />
          ))}
          <p className="absolute top-[53px] right-[24px] text-[5.5px] font-medium">{step.word}</p>
          <p className="absolute top-[63px] left-[24px] text-[5.5px] text-slate-500">{step.hint}</p>
        </div>
      ))}
      <ThumbCursor motion="thumb-pwm-cursor" />
    </ThumbStage>
  );
}
