import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as FakeScarcityDemo: 다크 패턴 → 바른 방법. */
export function FakeScarcityThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-fake-scarcity-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-fake-scarcity-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-fake-scarcity-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="block">린넨 셔츠</span>
          <b className="mt-[3px] block text-rose-600">남은 수량 1개!</b>
          <span className="block text-[5.5px] text-rose-500">지금 37명이 보고 있어요</span>
        </div>
        <div className="thumb-anim thumb-dk-fake-scarcity-b absolute inset-0 bg-white p-[6px]">
          <span className="block">린넨 셔츠</span>
          <span className="mt-[3px] block">재고 12개</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-fake-scarcity-cursor" />
    </ThumbStage>
  );
}
