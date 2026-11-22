import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same checkout as SuccessScreenDemo: 39,000원 결제하기 → 결제를 마쳤어요 with the order facts and next step. */
export function SuccessScreenThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[44px] h-[108px] w-[88px] rounded-[12px] border border-slate-200 p-[6px] text-[6px]">
        <div className="thumb-anim thumb-ssc-before absolute inset-[6px]" style={{ opacity: 0 }}>
          <p className="text-[8px] font-bold">주문서</p>
          <p className="mt-[8px] flex justify-between text-slate-700">
            <span>린넨 셔츠</span>
            <span>39,000원</span>
          </p>
          <span className="mt-[10px] block rounded bg-slate-900 py-[3px] text-center font-semibold text-white">
            39,000원 결제하기
          </span>
        </div>
        <div className="thumb-anim thumb-ssc-after grid justify-items-center gap-[4px] text-center">
          <span className="grid size-[16px] place-items-center rounded-full bg-emerald-100 text-[8px] text-emerald-700">
            ✓
          </span>
          <p className="text-[8px] font-bold">결제를 마쳤어요</p>
          <div className="grid w-full gap-[1px] rounded bg-slate-50 p-[3px] text-[5.5px]">
            <p className="flex justify-between">
              <span className="text-slate-600">주문 번호</span>
              <span>2481</span>
            </p>
            <p className="flex justify-between">
              <span className="text-slate-600">결제 금액</span>
              <span>39,000원</span>
            </p>
            <p className="flex justify-between">
              <span className="text-slate-600">도착 예정</span>
              <span>11월 25일 (수)</span>
            </p>
          </div>
          <span className="block w-full rounded bg-slate-900 py-[2px] font-semibold text-white">
            주문 내역 보기
          </span>
          <span className="text-slate-600">쇼핑 계속하기</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ssc-cursor" />
    </ThumbStage>
  );
}
