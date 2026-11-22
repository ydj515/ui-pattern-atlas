import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [
  ["결제 완료", "09:12"],
  ["상품 준비", "10:40"],
  ["배송 출발", "13:05"],
  ["배송 중", "지금"],
];

/** Same order card as ExpandCardDemo: tap it and it grows to show the delivery steps. */
export function ExpandCardThumbnail() {
  return (
    <ThumbStage>
      <span className="thumb-anim thumb-ec-bg absolute top-[8px] left-[16px] h-[84px] w-[144px] origin-top rounded-[8px] border border-slate-300 bg-white shadow-md" />
      <div className="absolute top-[8px] left-[16px] flex h-[30px] w-[144px] items-center px-[8px]">
        <p className="flex-1">
          <b className="block">주문 #2481</b>
          <span className="block text-[6.5px] text-slate-600">배송 중 · 오늘 도착 예정</span>
        </p>
        <span
          className="thumb-anim thumb-ec-chev text-slate-500"
          style={{ transform: "rotate(180deg)" }}
        >
          ▾
        </span>
      </div>
      <ol className="thumb-anim thumb-ec-details absolute top-[40px] left-[24px] grid w-[128px] gap-[2px] border-t border-slate-100 pt-[4px] text-[6.5px]">
        {STEPS.map(([label, time], index) => (
          <li key={label} className="flex items-center gap-[4px]">
            <span
              className={`size-[4px] rounded-full ${index === 3 ? "bg-blue-600" : "bg-slate-300"}`}
            />
            <span className="flex-1">{label}</span>
            <span className="text-slate-500">{time}</span>
          </li>
        ))}
      </ol>
      <ThumbCursor motion="thumb-ec-cursor" />
    </ThumbStage>
  );
}
