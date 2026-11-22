import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TASKS = [
  ["프로필 사진 올리기", "올리기"],
  ["팀원 초대하기", "초대"],
  ["첫 프로젝트 만들기", "만들기"],
  ["알림 설정하기", "설정"],
];

function Check({ done }: { readonly done: boolean }) {
  return (
    <span
      className={`grid size-[8px] shrink-0 place-items-center rounded-full border text-[5px] ${done ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300"}`}
    >
      {done ? "✓" : ""}
    </span>
  );
}

/** Same list as SetupChecklistDemo: 초대 → 팀원 초대하기 is checked off and the bar fills to 2 / 4. */
export function SetupChecklistThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[16px] h-[100px] w-[144px] rounded-lg border border-slate-200 p-[8px] text-[7px]">
        <p className="flex justify-between">
          <b>시작하기</b>
          <span className="grid text-slate-600 tabular-nums">
            <span
              className="thumb-anim thumb-sc-before col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              1 / 4
            </span>
            <span className="thumb-anim thumb-sc-after col-start-1 row-start-1">2 / 4</span>
          </span>
        </p>
        <span className="mt-[4px] block h-[3px] overflow-hidden rounded-full bg-slate-100">
          <span
            className="thumb-anim thumb-sc-fill block h-full origin-left bg-emerald-500"
            style={{ transform: "scaleX(0.5)" }}
          />
        </span>
        {TASKS.map(([label, action], index) => (
          <p key={label} className="relative mt-[4px] flex h-[14px] items-center gap-[4px]">
            {index === 1 ? (
              <>
                <span
                  className="thumb-anim thumb-sc-before flex flex-1 items-center gap-[4px]"
                  style={{ opacity: 0 }}
                >
                  <Check done={false} />
                  <span className="flex-1">{label}</span>
                  <span className="rounded border border-slate-200 px-[4px]">{action}</span>
                </span>
                <span className="thumb-anim thumb-sc-after absolute inset-0 flex items-center gap-[4px]">
                  <Check done />
                  <span className="text-slate-400 line-through">{label}</span>
                </span>
              </>
            ) : (
              <>
                <Check done={index === 0} />
                <span className={`flex-1 ${index === 0 ? "text-slate-400 line-through" : ""}`}>
                  {label}
                </span>
                {index === 0 ? null : (
                  <span className="rounded border border-slate-200 px-[4px]">{action}</span>
                )}
              </>
            )}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-sc-cursor" />
    </ThumbStage>
  );
}
