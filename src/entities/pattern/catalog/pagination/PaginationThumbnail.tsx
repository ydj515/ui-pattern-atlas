import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

// Each item is 16px wide with a 2px gap, starting at x=8 (keyframes rely on this).
const PAGE_ITEMS = ["‹", "1", "…", "4", "5", "6", "…", "20", "›"] as const;
const PAGE_SIZE = 3;
// Pages shown by the loop, in order: 5 → 6 → 4 → 5.
const PAGE_LAYERS = [
  { page: 5, motion: "thumb-page-5" },
  { page: 6, motion: "thumb-page-6" },
  { page: 4, motion: "thumb-page-4" },
] as const;

function orderLabel(page: number, index: number) {
  return `주문 #${String((page - 1) * PAGE_SIZE + 1 + index).padStart(4, "0")}`;
}

/** Same list as PaginationDemo: next page → page 4 → page 5, and the orders change with it. */
export function PaginationThumbnail() {
  return (
    <ThumbStage>
      {PAGE_LAYERS.map(({ page, motion }) => (
        <ul
          key={page}
          className={`thumb-anim ${motion} absolute top-[8px] left-[10px] w-[156px] divide-y divide-slate-100 rounded-md border border-slate-200`}
        >
          {Array.from({ length: PAGE_SIZE }, (_, index) => (
            <li key={index} className="flex h-[16px] items-center px-[7px]">
              {orderLabel(page, index)}
            </li>
          ))}
        </ul>
      ))}

      <div className="thumb-anim thumb-page-active absolute top-[82px] left-0 size-[16px] rounded bg-slate-900" />
      <div className="absolute top-[82px] left-[8px] flex gap-[2px]">
        {PAGE_ITEMS.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="relative grid size-[16px] place-items-center text-[7px] font-semibold text-white mix-blend-difference"
          >
            {item}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-page-cursor" />
    </ThumbStage>
  );
}
