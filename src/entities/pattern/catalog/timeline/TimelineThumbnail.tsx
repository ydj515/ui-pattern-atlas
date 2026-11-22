import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const EVENTS = [
  ["주문 접수", "11월 22일 09:12"],
  ["상품 준비", "11월 22일 15:40"],
  ["배송 출발", "11월 23일 08:05"],
  ["배송 완료", "11월 23일 14:20"],
] as const;

function Events({ current, motion }: { readonly current: number; readonly motion: string }) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-0`}>
      {EVENTS.map(([title, time], index) => {
        const done = index <= current;
        return (
          <div key={title} className="absolute left-[4px]" style={{ top: 6 + index * 19 }}>
            <span
              className={`absolute top-[1px] left-[1px] size-[7px] rounded-full border-[1.5px] ${index === current ? "border-blue-600 bg-blue-600" : done ? "border-blue-600 bg-white" : "border-slate-300 bg-white"}`}
            />
            <p
              className={`ml-[14px] text-[6.5px] ${index === current ? "font-semibold" : done ? "" : "text-slate-400"}`}
            >
              {title}
            </p>
            <p className="ml-[14px] text-[5px] text-slate-500">{done ? time : "예정"}</p>
          </div>
        );
      })}
    </div>
  );
}

/** Same tracking as TimelineDemo: 배송 출발 is current → 새로 고침 → 배송 완료. */
export function TimelineThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[32px] h-[104px] w-[112px] overflow-hidden rounded-md border border-slate-200">
        <div className="absolute inset-x-0 top-0 h-[82px]">
          <span className="absolute top-[8px] left-[8px] h-[60px] w-px bg-slate-200" />
          <Events current={2} motion="thumb-tl-before opacity-0" />
          <Events current={3} motion="thumb-tl-after" />
        </div>
        <span className="absolute top-[86px] left-[8px] grid h-[12px] w-[96px] place-items-center rounded-[3px] border border-slate-300 text-[5.5px] font-medium">
          새로 고침
        </span>
      </div>
      <ThumbCursor motion="thumb-tl-cursor" />
    </ThumbStage>
  );
}
