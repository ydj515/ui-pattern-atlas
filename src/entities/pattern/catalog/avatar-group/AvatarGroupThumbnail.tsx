import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same project as AvatarGroupDemo: add a person → 참여 6명 and +3. */
export function AvatarGroupThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[30px] left-[16px] h-[40px] w-[144px] rounded-md border border-slate-200">
        <p className="absolute top-[8px] left-[8px] text-[7px] font-semibold">디자인 시스템</p>
        <p className="thumb-anim thumb-ag-before absolute top-[20px] left-[8px] text-[5.5px] text-slate-500 opacity-0">
          참여 5명
        </p>
        <p className="thumb-anim thumb-ag-after absolute top-[20px] left-[8px] text-[5.5px] text-slate-500">
          참여 6명
        </p>
        {[
          ["김", "bg-amber-200"],
          ["이", "bg-sky-200"],
          ["박", "bg-emerald-200"],
        ].map(([initial, tone], index) => (
          <span
            key={initial}
            className={`absolute top-[12px] grid size-[16px] place-items-center rounded-full text-[6.5px] font-semibold ring-[1.5px] ring-white ${tone}`}
            style={{ left: 70 + index * 12 }}
          >
            {initial}
          </span>
        ))}
        <span className="absolute top-[12px] left-[106px] grid size-[16px] place-items-center rounded-full bg-slate-100 text-[5.5px] font-semibold text-slate-600 ring-[1.5px] ring-white">
          <span className="thumb-anim thumb-ag-before opacity-0">+2</span>
          <span className="thumb-anim thumb-ag-after absolute">+3</span>
        </span>
        <span className="absolute top-[12px] left-[126px] grid size-[16px] place-items-center rounded-full border border-dashed border-slate-300 text-[8px] text-slate-500">
          +
        </span>
      </div>
      <ThumbCursor motion="thumb-ag-cursor" />
    </ThumbStage>
  );
}
