import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TEAMS = ["디자인", "개발", "마케팅", "영업", "운영"] as const;

/** Same flow as MultiSelectDemo: open 담당 팀 → check 개발 and 마케팅 → close → chips. */
export function MultiSelectThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[24px] text-[7px] font-medium">담당 팀</p>
      <span className="absolute top-[16px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      <p className="thumb-anim thumb-ms-empty absolute top-[19.5px] left-[30px] text-[6.5px] text-slate-400 opacity-0">
        팀을 고르세요
      </p>
      <p className="thumb-anim thumb-ms-one absolute top-[19.5px] left-[30px] text-[6.5px] opacity-0">
        1개 선택
      </p>
      <p className="thumb-anim thumb-ms-two absolute top-[19.5px] left-[30px] text-[6.5px]">
        2개 선택
      </p>
      <span className="absolute top-[19px] left-[141px] text-[6px] text-slate-500">▾</span>

      <div className="thumb-anim thumb-ms-chips absolute top-[36px] left-[24px] flex gap-[4px] text-[6px]">
        {["개발", "마케팅"].map((team) => (
          <span
            key={team}
            className="flex h-[12px] items-center gap-[3px] rounded-full bg-slate-100 px-[5px]"
          >
            {team}
            <span className="text-slate-500">×</span>
          </span>
        ))}
      </div>

      <ul className="thumb-anim thumb-ms-menu absolute top-[33px] left-[24px] w-[128px] rounded border border-slate-200 bg-white py-[1px] text-[6.5px] shadow-md opacity-0">
        {TEAMS.map((team) => (
          <li key={team} className="relative flex h-[12px] items-center gap-[4px] px-[6px]">
            <span className="relative size-[6px] rounded-[1.5px] border border-slate-300">
              {team === "개발" || team === "마케팅" ? (
                <span
                  className={`thumb-anim ${team === "개발" ? "thumb-ms-c1" : "thumb-ms-c2"} absolute -inset-px grid place-items-center rounded-[1.5px] bg-blue-600 text-[4.5px] text-white`}
                >
                  ✓
                </span>
              ) : null}
            </span>
            {team}
          </li>
        ))}
      </ul>
      <ThumbCursor motion="thumb-ms-cursor" />
    </ThumbStage>
  );
}
