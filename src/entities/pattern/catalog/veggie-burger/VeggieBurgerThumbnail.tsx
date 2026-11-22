import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same app as VeggieBurgerDemo: the two-line 메뉴 button opens the menu → 탐색. */
export function VeggieBurgerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center justify-between border-b border-slate-100 px-[6px]">
          <b className="grid">
            <span
              className="thumb-anim thumb-veg-t0 col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              홈
            </span>
            <span className="thumb-anim thumb-veg-t1 col-start-1 row-start-1">탐색</span>
          </b>
          <span className="flex items-center gap-[2px]">
            <svg viewBox="0 0 24 24" className="size-[10px] stroke-slate-800 stroke-2">
              <path d="M5 9h14M5 15h14" />
            </svg>
            메뉴
          </span>
        </p>
        <div
          className="thumb-anim thumb-veg-nav absolute inset-0 grid content-start bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="justify-self-end text-slate-600">닫기</span>
          {["홈", "탐색", "저장함"].map((item) => (
            <b key={item} className="py-[3px] text-[9px]">
              {item}
            </b>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-veg-cursor" />
    </ThumbStage>
  );
}
