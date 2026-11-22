import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = [
  ["주문일", "2026년 11월 23일"],
  ["결제 수단", "카드 (일시불)"],
  ["배송지", "서울시 마포구 월드컵로 12"],
] as const;

/** Same details as DescriptionListDemo: label and value pairs; copy the 주문 번호. */
export function DescriptionListThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[20px] h-[80px] w-[136px] rounded-md border border-slate-200">
        <p className="absolute top-[6px] left-[8px] text-[7px] font-semibold">주문 정보</p>
        <p className="absolute top-[19px] right-[8px] left-[8px] flex h-[14px] items-center border-t border-slate-100 text-[6px]">
          <span className="w-[40px] text-[5.5px] text-slate-500">주문 번호</span>
          A-1021
          <span className="relative ml-[4px] h-[9px] w-[20px] rounded-[2px] border border-slate-300 text-center text-[5px] leading-[7px] text-slate-600">
            복사
            <span className="thumb-anim thumb-dl-copied absolute -inset-px rounded-[2px] border border-emerald-200 bg-emerald-50 leading-[7px] text-emerald-700">
              복사됨
            </span>
          </span>
        </p>
        {ROWS.map(([term, value], index) => (
          <p
            key={term}
            className="absolute right-[8px] left-[8px] flex h-[14px] items-center border-t border-slate-100 text-[6px]"
            style={{ top: 33 + index * 14 }}
          >
            <span className="w-[40px] text-[5.5px] text-slate-500">{term}</span>
            {value}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dl-cursor" />
    </ThumbStage>
  );
}
