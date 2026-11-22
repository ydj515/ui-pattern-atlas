import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const OPTIONS = [
  { label: "일반 배송", description: "무료 · 2~3일 뒤 도착" },
  { label: "빠른 배송", description: "3,000원 · 내일 도착" },
  { label: "매장 픽업", description: "무료 · 오늘 픽업" },
] as const;

/** Same flow as RadioGroupDemo: pick 빠른 배송 → the total adds the fee. */
export function RadioGroupThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[24px] text-[7px] font-medium">배송 방법</p>
      {OPTIONS.map((option, index) => (
        <div
          key={option.label}
          className="absolute left-[24px] h-[20px] w-[128px]"
          style={{ top: 16 + index * 23 }}
        >
          <span className="absolute inset-0 rounded-md border border-slate-200" />
          {index < 2 ? (
            <span
              className={`thumb-anim thumb-rg-s${index + 1} absolute inset-0 rounded-md border border-blue-600 bg-blue-50 ${index === 0 ? "opacity-0" : ""}`}
            >
              <span className="absolute top-[6.5px] left-[6px] size-[7px] rounded-full border-[2.5px] border-blue-600 bg-white" />
            </span>
          ) : null}
          <span className="absolute top-[6.5px] left-[6px] size-[7px] rounded-full border border-slate-400" />
          <p className="absolute top-[2px] left-[18px] text-[7px] font-medium">{option.label}</p>
          <p className="absolute top-[11px] left-[18px] text-[5.5px] text-slate-500">
            {option.description}
          </p>
        </div>
      ))}
      <p className="thumb-anim thumb-rg-s1 absolute top-[89px] right-[24px] text-[7px] font-semibold opacity-0">
        결제 금액 20,000원
      </p>
      <p className="thumb-anim thumb-rg-s2 absolute top-[89px] right-[24px] text-[7px] font-semibold">
        결제 금액 23,000원
      </p>
      <ThumbCursor motion="thumb-rg-cursor" />
    </ThumbStage>
  );
}
