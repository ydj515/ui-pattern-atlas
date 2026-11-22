import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const APPS = [
  ["메일", "bg-rose-200"],
  ["채팅", "bg-violet-200"],
  ["일정", "bg-sky-200"],
  ["메모", "bg-amber-200"],
  ["사진", "bg-emerald-200"],
  ["설정", "bg-slate-200"],
];

/** Same header as WaffleDemo: the nine dots switch apps → 메모. */
export function WaffleThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center gap-[5px] border-b border-slate-100 px-[5px]">
          <svg viewBox="0 0 24 24" className="size-[10px] fill-slate-700">
            {[5, 12, 19].flatMap((y) =>
              [5, 12, 19].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />),
            )}
          </svg>
          <b className="grid">
            <span
              className="thumb-anim thumb-waffle-t0 col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              메일
            </span>
            <span className="thumb-anim thumb-waffle-t1 col-start-1 row-start-1">메모</span>
          </b>
        </p>
        <div
          className="thumb-anim thumb-waffle-pop absolute top-[20px] left-[4px] grid w-[78px] grid-cols-3 gap-[2px] rounded-md bg-white p-[3px] shadow-xl ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          {APPS.map(([name, tone]) => (
            <span key={name} className="grid justify-items-center gap-[1px] text-[5px]">
              <span className={`size-[12px] rounded-full ${tone}`} />
              {name}
            </span>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-waffle-cursor" />
    </ThumbStage>
  );
}
