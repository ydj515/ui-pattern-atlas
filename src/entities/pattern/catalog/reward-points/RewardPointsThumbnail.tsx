import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same checkout as RewardPointsDemo: switch to 계좌이체 and the points to be earned update, with the condition. */
export function RewardPointsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="flex justify-between">
          <span className="text-slate-600">결제 금액</span>
          <b>39,000원</b>
        </p>
        <p className="mt-[4px] text-[5.5px] text-slate-600">결제 수단</p>
        {["카드 결제", "계좌이체"].map((label, index) => (
          <p key={label} className="mt-[2px] flex items-center gap-[3px]">
            <span className="relative size-[7px] rounded-full border border-slate-400">
              <span
                className={`thumb-anim thumb-prp-${index === 0 ? "a" : "b"} absolute inset-[1.5px] rounded-full bg-blue-600`}
                style={index === 0 ? { opacity: 0 } : undefined}
              />
            </span>
            {label}
          </p>
        ))}
        <p className="mt-[5px] grid font-semibold text-emerald-700 tabular-nums">
          <span className="thumb-anim thumb-prp-a col-start-1 row-start-1" style={{ opacity: 0 }}>
            390원 적립 예정 (1%)
          </span>
          <span className="thumb-anim thumb-prp-b col-start-1 row-start-1">
            780원 적립 예정 (2%)
          </span>
        </p>
        <p className="text-[5px] text-slate-500">
          구매 확정 다음 날 지급, 할인 금액에는 쓸 수 없어요
        </p>
      </div>
      <ThumbCursor motion="thumb-prp-cursor" />
    </ThumbStage>
  );
}
