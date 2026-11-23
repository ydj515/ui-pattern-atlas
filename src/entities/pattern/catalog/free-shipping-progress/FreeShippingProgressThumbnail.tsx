import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [
  ["22,000원", "8,000원 더 담으면 무료배송", "0.733"],
  ["27,000원", "3,000원 더 담으면 무료배송", "0.9"],
  ["39,000원", "무료배송이에요", "1"],
];

/** Same cart as FreeShippingProgressDemo: 담기 twice and the gap to free shipping closes. */
export function FreeShippingProgressThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="flex justify-between">
          <span className="text-slate-600">장바구니</span>
          <b className="grid tabular-nums">
            {STEPS.map(([total], index) => (
              <span
                key={total}
                className={`thumb-anim thumb-pfs-s${index} col-start-1 row-start-1 text-right`}
                style={index === 2 ? undefined : { opacity: 0 }}
              >
                {total}
              </span>
            ))}
          </b>
        </p>
        <p className="relative mt-[4px] h-[9px] font-medium">
          {STEPS.map(([, text], index) => (
            <span
              key={text}
              className={`thumb-anim thumb-pfs-s${index} absolute ${index === 2 ? "text-emerald-700" : ""}`}
              style={index === 2 ? undefined : { opacity: 0 }}
            >
              {text}
            </span>
          ))}
        </p>
        <span className="mt-[3px] block h-[4px] overflow-hidden rounded-full bg-slate-100">
          <span className="thumb-anim thumb-pfs-bar block h-full origin-left bg-emerald-500" />
        </span>
        {[
          ["수세미", "5,000원"],
          ["행주", "12,000원"],
        ].map(([name, price]) => (
          <p key={name} className="mt-[5px] flex items-center justify-between">
            {name} {price}
            <span className="rounded border border-slate-200 px-[3px] text-[5.5px]">담기</span>
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-pfs-cursor" />
    </ThumbStage>
  );
}
