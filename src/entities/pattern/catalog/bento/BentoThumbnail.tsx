import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const APPS = [
  ["메일", "bg-rose-200"],
  ["캘린더", "bg-sky-200"],
  ["드라이브", "bg-amber-200"],
  ["문서", "bg-blue-200"],
  ["사진", "bg-emerald-200"],
  ["지도", "bg-lime-200"],
];

/** Same header as BentoDemo: the nine squares open the app list → 캘린더. */
export function BentoThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center justify-between border-b border-slate-100 px-[6px]">
          <b className="grid">
            <span
              className="thumb-anim thumb-bento-t0 col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              메일
            </span>
            <span className="thumb-anim thumb-bento-t1 col-start-1 row-start-1">캘린더</span>
          </b>
          <svg viewBox="0 0 24 24" className="size-[10px] fill-slate-700">
            {[4, 10.5, 17].flatMap((y) =>
              [4, 10.5, 17].map((x) => (
                <rect key={`${x}-${y}`} x={x} y={y} width="3.5" height="3.5" rx="0.6" />
              )),
            )}
          </svg>
        </p>
        <div
          className="thumb-anim thumb-bento-pop absolute top-[20px] right-[4px] grid w-[78px] grid-cols-3 gap-[2px] rounded-md bg-white p-[3px] shadow-xl ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          {APPS.map(([name, tone]) => (
            <span key={name} className="grid justify-items-center gap-[1px] text-[5px]">
              <span className={`size-[12px] rounded-[3px] ${tone}`} />
              {name}
            </span>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-bento-cursor" />
    </ThumbStage>
  );
}
