import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PINS = [
  { title: "거실 식물 배치", height: 24, tone: "bg-emerald-200" },
  { title: "작은 주방 수납", height: 14, tone: "bg-amber-200" },
  { title: "침실 조명", height: 20, tone: "bg-indigo-200" },
  { title: "현관 꾸미기", height: 30, tone: "bg-rose-200" },
  { title: "책상 정리", height: 12, tone: "bg-sky-200" },
  { title: "욕실 타일", height: 18, tone: "bg-slate-200" },
] as const;

function Layout({ columns, motion }: { readonly columns: number; readonly motion: string }) {
  const width = (128 - (columns - 1) * 4) / columns;
  const perColumn = Math.ceil(PINS.length / columns);
  return (
    <div
      className={`thumb-anim ${motion} absolute top-[20px] left-[24px] flex w-[128px] gap-[4px]`}
    >
      {Array.from({ length: columns }, (_, column) => (
        <div key={column} className="flex flex-col gap-[4px]" style={{ width }}>
          {PINS.slice(column * perColumn, column * perColumn + perColumn).map((pin) => (
            <div key={pin.title} className="overflow-hidden rounded-[3px] border border-slate-200">
              <span className={`block ${pin.tone}`} style={{ height: pin.height }} />
              <p className="px-[3px] py-[1px] text-[4.5px] text-slate-700">{pin.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Same pins as MasonryGridDemo: 3열 → 2열; the cards repack like bricks. */
export function MasonryGridThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[5px] left-[112px] grid h-[10px] w-[18px] place-items-center rounded-[2px] border border-slate-300 text-[5px]">
        2열
      </span>
      <span className="thumb-anim thumb-mas-two absolute top-[5px] left-[112px] grid h-[10px] w-[18px] place-items-center rounded-[2px] bg-slate-900 text-[5px] text-white">
        2열
      </span>
      <span className="absolute top-[5px] left-[134px] grid h-[10px] w-[18px] place-items-center rounded-[2px] border border-slate-300 text-[5px]">
        3열
      </span>
      <span className="thumb-anim thumb-mas-three absolute top-[5px] left-[134px] grid h-[10px] w-[18px] place-items-center rounded-[2px] bg-slate-900 text-[5px] text-white opacity-0">
        3열
      </span>
      <Layout columns={3} motion="thumb-mas-three opacity-0" />
      <Layout columns={2} motion="thumb-mas-two" />
      <ThumbCursor motion="thumb-mas-cursor" />
    </ThumbStage>
  );
}
