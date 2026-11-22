import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CHIPS = [
  { label: "5만원 이하", left: 13, width: 40 },
  { label: "반려동물", left: 57, width: 34 },
  { label: "수영장", left: 95, width: 28 },
] as const;

/** Same flow as NoFilterResultsDemo: three filters match nothing → drop 수영장 → a stay shows up. */
export function NoFilterResultsThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-nfr-empty absolute top-[6px] left-[20px] h-[76px] w-[136px] rounded-md border border-dashed border-slate-300 text-center">
        <p className="absolute inset-x-0 top-[9px] text-[7.5px] font-semibold">
          조건에 맞는 숙소가 없어요
        </p>
        <p className="absolute inset-x-0 top-[21px] text-[6px] text-slate-500">
          필터를 하나 빼 보세요.
        </p>
        {CHIPS.map((chip) => (
          <span
            key={chip.label}
            className="absolute top-[34px] flex h-[12px] items-center justify-center gap-[2px] rounded-full bg-slate-100 text-[5.5px] font-medium text-slate-700"
            style={{ left: chip.left, width: chip.width }}
          >
            {chip.label}
            <span className="text-slate-400">×</span>
          </span>
        ))}
        <p className="absolute inset-x-0 top-[54px] text-[6px] font-medium text-blue-700 underline">
          필터 모두 지우기
        </p>
      </div>

      <div className="thumb-anim thumb-nfr-found absolute top-[6px] left-[20px] w-[136px] opacity-0">
        <p className="flex h-[18px] items-center justify-between rounded-md border border-slate-200 px-[8px] text-[7px]">
          바다 앞 민박<span className="text-slate-500">4만원</span>
        </p>
        <p className="mt-[5px] text-[5.5px] text-slate-500 underline">필터 다시 걸기</p>
      </div>
      <ThumbCursor motion="thumb-nfr-cursor" />
    </ThumbStage>
  );
}
