import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = [
  ["강남점", "412건", "1,824만원"],
  ["홍대점", "365건", "1,510만원"],
  ["부산점", "298건", "1,287만원"],
  ["대전점", "184건", "792만원"],
] as const;
const BY_NAME = [ROWS[1], ROWS[2], ROWS[3], ROWS[0]];

function Rows({
  rows,
  motion,
}: {
  readonly rows: readonly (typeof ROWS)[number][];
  readonly motion: string;
}) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-x-0 top-[14px] bg-white`}>
      {rows.map(([name, orders, sales]) => (
        <p
          key={name}
          className="flex h-[13px] items-center border-b border-slate-100 px-[6px] text-[6px] last:border-b-0"
        >
          <span className="flex-1 font-medium">{name}</span>
          <span className="w-[40px] text-right tabular-nums">{orders}</span>
          <span className="w-[50px] text-right tabular-nums">{sales}</span>
        </p>
      ))}
    </div>
  );
}

/** Same table as DataTableDemo: sort by 지점 → the rows reorder and the header shows ▼. */
export function DataTableThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[14px] h-[67px] w-[148px] overflow-hidden rounded-md border border-slate-200">
        <p className="flex h-[14px] items-center border-b border-slate-200 bg-slate-50 px-[6px] text-[5.5px] font-medium text-slate-600">
          <span className="flex-1">
            지점 <span className="thumb-anim thumb-dt-sorted text-slate-900">▼</span>
          </span>
          <span className="w-[40px] text-right">주문 수</span>
          <span className="w-[50px] text-right">매출</span>
        </p>
        <Rows rows={ROWS} motion="thumb-dt-given opacity-0" />
        <Rows rows={BY_NAME} motion="thumb-dt-sorted" />
      </div>
      <ThumbCursor motion="thumb-dt-cursor" />
    </ThumbStage>
  );
}
