import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ITEMS = ["커피", "차", "주스", "케이크", "쿠키", "샌드위치"] as const;

function Layout({
  columns,
  width,
  motion,
}: {
  readonly columns: number;
  readonly width: number;
  readonly motion: string;
}) {
  return (
    <div
      className={`thumb-anim ${motion} absolute top-[24px] grid gap-[3px] rounded-md border border-slate-200 p-[3px]`}
      style={{ left: 88 - width / 2, width, gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="grid h-[17px] place-items-center rounded-[3px] bg-slate-100 text-[5.5px]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/** Same menu as ResponsiveGridDemo: narrowing the width drops columns from 3 to 2 to 1. */
export function ResponsiveGridThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[6px] left-[40px] text-[5.5px] text-slate-600">화면 폭</p>
      <span className="absolute top-[9px] left-[64px] h-[2px] w-[60px] rounded-full bg-slate-300" />
      <span
        className="thumb-anim thumb-rgrid-knob absolute top-[6px] left-[100px] size-[8px] rounded-full border-2 border-blue-600 bg-white"
        style={{ transform: "translateX(-20px)" }}
      />
      <Layout columns={3} width={120} motion="thumb-rgrid-3 opacity-0" />
      <Layout columns={2} width={84} motion="thumb-rgrid-2" />
      <Layout columns={1} width={48} motion="thumb-rgrid-1 opacity-0" />
      <ThumbCursor motion="thumb-rgrid-cursor" />
    </ThumbStage>
  );
}
