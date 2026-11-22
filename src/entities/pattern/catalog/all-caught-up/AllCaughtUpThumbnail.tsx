import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = [
  { title: "배송이 시작됐어요", motion: "thumb-acu-row1" },
  { title: "쿠폰이 곧 만료돼요", motion: "thumb-acu-row2" },
] as const;

/** Same flow as AllCaughtUpDemo: 확인 the two notifications → 모두 확인했어요. */
export function AllCaughtUpThumbnail() {
  return (
    <ThumbStage>
      {ROWS.map((row, index) => (
        <p
          key={row.title}
          className={`thumb-anim ${row.motion} absolute left-[20px] flex h-[20px] w-[136px] items-center justify-between border-b border-slate-100 bg-white px-[6px] text-[7px] opacity-0`}
          style={{ top: 8 + index * 20 }}
        >
          {row.title}
          <span className="grid h-[11px] w-[20px] place-items-center rounded border border-slate-300 text-[5.5px] font-medium text-slate-600">
            확인
          </span>
        </p>
      ))}

      <div className="thumb-anim thumb-acu-done absolute top-[8px] left-[20px] h-[76px] w-[136px] rounded-md bg-emerald-50 text-center">
        <span className="absolute top-[9px] left-[60px] grid size-[16px] place-items-center rounded-full bg-white text-[8px] font-bold text-emerald-600">
          ✓
        </span>
        <p className="absolute inset-x-0 top-[30px] text-[7.5px] font-semibold text-emerald-950">
          모두 확인했어요
        </p>
        <p className="absolute inset-x-0 top-[41px] text-[6px] text-emerald-800">
          새 알림이 오면 여기에 보여 드릴게요.
        </p>
        <p className="absolute inset-x-0 top-[54px] text-[6px] font-medium text-emerald-800 underline">
          지난 알림 보기
        </p>
      </div>
      <ThumbCursor motion="thumb-acu-cursor" />
    </ThumbStage>
  );
}
