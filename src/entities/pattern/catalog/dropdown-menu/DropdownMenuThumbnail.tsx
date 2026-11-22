import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ITEMS = [
  { label: "이름 바꾸기", top: 40 },
  { label: "복제", top: 52 },
  { label: "공유", top: 64 },
] as const;

/** Same flow as DropdownMenuDemo: ⋯ on 기획서 → menu → 복제 → result message. */
export function DropdownMenuThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[12px] h-[34px] w-[152px] rounded-md border border-slate-200 bg-white">
        <p className="absolute top-[6px] left-[10px] text-[9px] font-semibold">기획서</p>
        <p className="absolute top-[19px] left-[10px] text-[7px] text-slate-500">수정 3일 전</p>
        <span className="absolute top-[7px] right-[8px] grid size-[18px] place-items-center rounded border border-slate-300 text-[9px] leading-none">
          ⋯
        </span>
      </div>

      <div className="thumb-anim thumb-menu-list absolute top-[38px] left-[84px] h-[55px] w-[72px] rounded-md border border-slate-200 bg-white shadow-md">
        <span className="thumb-anim thumb-menu-hover absolute top-[13px] left-[2px] h-[12px] w-[66px] rounded bg-slate-100" />
        {ITEMS.map((item) => (
          <span
            key={item.label}
            className="absolute left-[8px] text-[7px] leading-[12px]"
            style={{ top: item.top - 39 }}
          >
            {item.label}
          </span>
        ))}
        <span className="absolute inset-x-[6px] top-[38px] h-px bg-slate-200" />
        <span className="absolute top-[40px] left-[8px] text-[7px] leading-[12px] text-rose-600">
          삭제
        </span>
      </div>

      <p className="thumb-anim thumb-menu-status absolute inset-x-0 top-[98px] text-center text-[7px] text-slate-500">
        &apos;기획서&apos;를 복제했어요
      </p>
      <ThumbCursor motion="thumb-menu-cursor" />
    </ThumbStage>
  );
}
