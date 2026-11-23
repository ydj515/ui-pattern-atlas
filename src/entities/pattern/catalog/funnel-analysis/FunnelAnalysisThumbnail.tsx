import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = ["상품 보기", "장바구니", "주문서", "결제 완료"];
const SEGMENTS = [
  [[10000, 3200, 1900, 1400], 0, "가장 많이 빠지는 곳: 상품 보기 → 장바구니 (68% 이탈)"],
  [[6000, 2700, 900, 640], 1, "가장 많이 빠지는 곳: 장바구니 → 주문서 (67% 이탈)"],
] as const;

/** Same funnel as FunnelAnalysisDemo: 전체 drops most before 장바구니; 모바일 drops most before 주문서. */
export function FunnelAnalysisThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-ux-funnel-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">전체</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">모바일</span>
        </p>
        {SEGMENTS.map(([counts, worst, note], index) => (
          <div
            key={note}
            className={`thumb-anim thumb-ux-funnel-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[24px] text-[5.5px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            {STEPS.map((step, i) => (
              <div key={step}>
                {i > 0 ? (
                  <p
                    className={`text-[4.5px] leading-[6px] ${i - 1 === worst ? "font-semibold text-rose-700" : "text-slate-500"}`}
                  >
                    ↓ 다음 단계로 {Math.round(((counts[i] ?? 0) / (counts[i - 1] ?? 1)) * 100)}%
                  </p>
                ) : null}
                <p className="flex justify-between leading-[7px]">
                  {step}
                  <b>{(counts[i] ?? 0).toLocaleString("ko-KR")}명</b>
                </p>
                <span className="block h-[3px] rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full bg-blue-600"
                    style={{ width: `${((counts[i] ?? 0) / counts[0]) * 100}%` }}
                  />
                </span>
              </div>
            ))}
            <p className="mt-[3px] text-[5px] text-slate-600">{note}</p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-ux-funnel-cursor" />
    </ThumbStage>
  );
}
