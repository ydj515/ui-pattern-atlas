import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same shirt as LowStockIndicatorDemo: S 재고 있음 → M 남은 수량 3개 → L 품절. */
export function LowStockIndicatorThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b className="text-[8px]">린넨 셔츠</b>
        <p className="mt-[3px] text-[5.5px] text-slate-600">사이즈</p>
        <p className="flex gap-[3px]">
          {["S", "M", "L"].map((size, index) => (
            <span
              key={size}
              className="relative grid size-[16px] place-items-center rounded border border-slate-300"
            >
              <span
                className={`thumb-anim thumb-pls-s${index} absolute -inset-px rounded border border-slate-900`}
                style={index === 2 ? undefined : { opacity: 0 }}
              />
              {size}
            </span>
          ))}
        </p>
        <p className="relative mt-[5px] h-[9px] font-medium">
          <span
            className="thumb-anim thumb-pls-s0 absolute text-emerald-700"
            style={{ opacity: 0 }}
          >
            재고 있음
          </span>
          <span className="thumb-anim thumb-pls-s1 absolute text-amber-700" style={{ opacity: 0 }}>
            남은 수량 3개
          </span>
          <span className="thumb-anim thumb-pls-s2 absolute text-slate-500">품절</span>
        </p>
        <span className="mt-[4px] grid rounded bg-slate-900 py-[2px] text-center font-semibold text-white">
          <span className="thumb-anim thumb-pls-buy col-start-1 row-start-1" style={{ opacity: 0 }}>
            장바구니 담기
          </span>
          <span className="thumb-anim thumb-pls-s2 col-start-1 row-start-1">재입고 알림 받기</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-pls-cursor" />
    </ThumbStage>
  );
}
