import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ITEMS = [
  { title: "배송이 시작됐어요", time: "5분 전" },
  { title: "김하늘 님이 댓글을 남겼어요", time: "1시간 전" },
  { title: "쿠폰이 곧 만료돼요", time: "어제" },
] as const;

/** Same flow as NotificationCenterDemo: bell with 3 → list → 모두 읽음 → badge goes away. */
export function NotificationCenterThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[12px] h-[24px] w-[152px] rounded-md border border-slate-200">
        <p className="absolute top-[7px] left-[8px] text-[7.5px] font-semibold">내 서비스</p>
        <span className="absolute top-[3px] right-[5px] grid size-[16px] place-items-center rounded-full border border-slate-300 text-slate-700">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-[9px]">
            <path d="M10 2a5 5 0 0 0-5 5v2.6L3.7 12.2A1 1 0 0 0 4.6 14h10.8a1 1 0 0 0 .9-1.8L15 9.6V7a5 5 0 0 0-5-5Zm-2 13.5a2 2 0 0 0 4 0H8Z" />
          </svg>
        </span>
        <span className="thumb-anim thumb-nc-badge absolute top-[0px] right-[2px] grid size-[9px] place-items-center rounded-full bg-rose-600 text-[6px] font-semibold text-white">
          3
        </span>
      </div>

      <div className="thumb-anim thumb-nc-panel absolute top-[34px] left-[44px] h-[72px] w-[120px] rounded-md border border-slate-200 bg-white shadow-md">
        <p className="absolute top-[4px] left-[7px] text-[7px] font-semibold">알림</p>
        <p className="absolute top-[4.5px] right-[7px] text-[6px] text-slate-600">모두 읽음</p>
        <span className="absolute inset-x-0 top-[15px] h-px bg-slate-200" />
        {ITEMS.map((item, index) => (
          <div
            key={item.title}
            className="absolute inset-x-0 h-[18px]"
            style={{ top: 17 + index * 18 }}
          >
            <span className="thumb-anim thumb-nc-dot absolute top-[5px] left-[7px] size-[4px] rounded-full bg-blue-600" />
            <p className="absolute top-[1px] left-[15px] text-[6.5px] font-medium">{item.title}</p>
            <p className="absolute top-[9.5px] left-[15px] text-[5.5px] text-slate-400">
              {item.time}
            </p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-nc-cursor" />
    </ThumbStage>
  );
}
