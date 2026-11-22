import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ITEMS = [
  ["사진으로 검색", "찍은 사진과 비슷한 상품을 찾아요"],
  ["더 빠른 결제", "저장한 카드로 한 번에 결제해요"],
  ["주문 알림 묶기", "같은 날 주문은 알림 하나로 보내요"],
];

/** Same update note as WhatsNewDemo: 확인 closes it; 새 소식 opens it again. */
export function WhatsNewThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[44px] h-[108px] w-[88px] overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50">
        <p className="flex h-[16px] items-center justify-between bg-white px-[6px] text-[6.5px]">
          <b>동네가게</b>
          <span className="text-[6px] text-slate-700">새 소식</span>
        </p>
        <div className="thumb-anim thumb-wn-open absolute inset-0 bg-slate-900/40">
          <div className="absolute inset-x-[4px] bottom-[4px] rounded-lg bg-white p-[4px] text-[5px] leading-[6px]">
            <p className="flex items-baseline justify-between">
              <b className="text-[7px] leading-[9px]">새로워진 점</b>
              <span className="text-slate-500">버전 3.2</span>
            </p>
            {ITEMS.map(([title, body]) => (
              <p key={title} className="mt-[3px]">
                <b className="block text-[5.5px] leading-[7px]">{title}</b>
                <span className="text-slate-600">{body}</span>
              </p>
            ))}
            <span className="mt-[3px] block rounded bg-slate-900 py-[2px] text-center text-[6px] font-semibold text-white">
              확인
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-wn-cursor" />
    </ThumbStage>
  );
}
