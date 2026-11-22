import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same app as HamburgerDemo: ☰ opens the menu → 주문 내역. */
export function HamburgerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center gap-[5px] border-b border-slate-100 px-[5px]">
          <svg viewBox="0 0 24 24" className="size-[10px] stroke-slate-800 stroke-2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <b className="grid">
            <span
              className="thumb-anim thumb-ham-t0 col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              홈
            </span>
            <span className="thumb-anim thumb-ham-t1 col-start-1 row-start-1">주문 내역</span>
          </b>
        </p>
        <p className="p-[6px] text-slate-600">동네가게 오늘의 추천</p>
        <div
          className="thumb-anim thumb-ham-drawer absolute inset-0 bg-slate-900/30"
          style={{ opacity: 0 }}
        >
          <div className="h-full w-[70px] bg-white p-[3px] shadow-xl">
            {["홈", "주문 내역", "찜 목록", "설정"].map((item) => (
              <p key={item} className="rounded px-[4px] py-[3px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ham-cursor" />
    </ThumbStage>
  );
}
