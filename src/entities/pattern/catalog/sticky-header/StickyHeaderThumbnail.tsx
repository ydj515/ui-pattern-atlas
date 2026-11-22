import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as StickyHeaderDemo: the header stays put and gains a shadow once rows scroll under it. */
export function StickyHeaderThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <ul
          className="thumb-anim thumb-sh-list pt-[14px] text-[5.5px]"
          style={{ transform: "translateY(-60px)" }}
        >
          {Array.from({ length: 14 }, (_, index) => (
            <li
              key={index}
              className="h-[13px] border-b border-slate-100 px-[6px] leading-[13px] text-slate-700"
            >
              주문 {2026 - index}번 · 배송 완료
            </li>
          ))}
        </ul>
        <p className="absolute inset-x-0 top-0 flex h-[14px] items-center justify-between bg-white px-[6px] text-[6.5px] font-semibold">
          주문 내역<span className="text-[5px] font-normal text-slate-600 underline">필터</span>
        </p>
        <span className="thumb-anim thumb-sh-shadow absolute inset-x-0 top-[14px] h-[3px] bg-gradient-to-b from-slate-900/15 to-transparent" />
      </div>
      <ThumbCursor motion="thumb-sh-cursor" />
    </ThumbStage>
  );
}
