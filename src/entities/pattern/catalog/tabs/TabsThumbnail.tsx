import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

// Tabs are 48px wide starting at x=10; the indicator moves in 48px steps.
const TABS = [
  {
    label: "상세 정보",
    motion: "thumb-tabs-panel-a",
    body: "스테인리스 바스켓, 용량 5.5L, 최대 200℃까지 설정할 수 있어요.",
  },
  {
    label: "리뷰 128",
    motion: "thumb-tabs-panel-b",
    body: '★ 4.7 · "세척이 쉬워요", "소음이 작아요"',
  },
  {
    label: "배송/교환",
    motion: "thumb-tabs-panel-c",
    body: "오늘 오후 2시 전 주문 시 내일 도착해요. 30일 안에 무료로 교환할 수 있어요.",
  },
] as const;

/** Same tabs as TabsDemo: 리뷰 128 → 배송/교환 → 상세 정보; the panel follows. */
export function TabsThumbnail() {
  return (
    <ThumbStage>
      {TABS.map((tab, index) => (
        <span
          key={tab.label}
          className="absolute top-[8px] grid h-[16px] w-[48px] place-items-center font-medium"
          style={{ left: 10 + index * 48 }}
        >
          {tab.label}
        </span>
      ))}
      <div className="absolute inset-x-[10px] top-[25px] h-px bg-slate-200" />
      <div className="thumb-anim thumb-tabs-active absolute top-[24px] left-[10px] h-[2px] w-[48px] bg-slate-900" />

      {TABS.map((tab) => (
        <p
          key={tab.label}
          className={`thumb-anim ${tab.motion} absolute top-[36px] left-[12px] w-[152px] text-slate-600`}
        >
          {tab.body}
        </p>
      ))}
      <ThumbCursor motion="thumb-tabs-cursor" />
    </ThumbStage>
  );
}
