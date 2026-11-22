import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comment box as MentionInputDemo: type @하 → 하늘, 하준 → pick 하늘 → @하늘. */
export function MentionInputThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[7px]">
        <p className="font-medium">댓글</p>
        <span className="relative mt-[2px] block h-[28px] rounded border border-slate-300 px-[4px] py-[2px]">
          <span className="thumb-anim thumb-mn-t0 absolute text-slate-400" style={{ opacity: 0 }}>
            @로 사람을 불러요
          </span>
          <span className="thumb-anim thumb-mn-t1 absolute" style={{ opacity: 0 }}>
            @하
          </span>
          <span className="thumb-anim thumb-mn-t2 absolute">@하늘</span>
        </span>
        <ul
          className="thumb-anim thumb-mn-list absolute top-[52px] left-[8px] w-[64px] rounded-md bg-white p-[2px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          {["하늘", "하준"].map((name, index) => (
            <li
              key={name}
              className={`flex h-[11px] items-center gap-[3px] rounded px-[3px] ${index === 0 ? "bg-blue-50 text-blue-800" : ""}`}
            >
              <span className="grid size-[7px] place-items-center rounded-full bg-slate-200 text-[4.5px]">
                {name[0]}
              </span>
              {name}
            </li>
          ))}
        </ul>
        <span className="absolute right-[8px] bottom-[8px] rounded bg-slate-900 px-[5px] py-[1px] text-[6px] font-semibold text-white">
          등록
        </span>
      </div>
      <ThumbCursor motion="thumb-mn-cursor" />
    </ThumbStage>
  );
}
