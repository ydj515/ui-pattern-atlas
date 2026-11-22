import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same photo as ForwardDialogDemo: 전달 → tick 하늘 and 도윤 → 2명에게 보내기 → 2명에게 보냈어요. */
export function ForwardDialogThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] flex h-[30px] w-[152px] items-end justify-between rounded-lg border border-slate-200 p-[4px] text-[6px]">
        <span className="h-[22px] w-[40px] rounded bg-gradient-to-br from-emerald-200 to-sky-300" />
        <span className="rounded border border-slate-200 px-[4px]">전달</span>
      </div>
      <p
        className="thumb-anim thumb-fw-done absolute top-[40px] left-[14px] text-[6.5px] text-emerald-700"
        style={{ opacity: 0 }}
      >
        2명에게 보냈어요
      </p>
      <div className="thumb-anim thumb-fw-dialog absolute top-[38px] left-[12px] h-[70px] w-[152px] rounded-lg bg-white p-[5px] text-[6px] shadow-xl ring-1 ring-slate-200">
        <p className="text-[7px] font-bold">사진 전달</p>
        <span className="mt-[2px] block h-[9px] rounded border border-slate-300 px-[3px] text-[5px] leading-[8px] text-slate-400">
          이름 검색
        </span>
        {["하늘", "도윤", "서연"].map((name, index) => (
          <p key={name} className="flex h-[9px] items-center gap-[3px]">
            <span className="relative size-[6px] rounded-[1px] border border-slate-400">
              {index < 2 ? (
                <span
                  className={`thumb-anim thumb-fw-c${index} absolute -inset-px rounded-[1px] bg-blue-600`}
                />
              ) : null}
            </span>
            {name}
          </p>
        ))}
        <p className="absolute right-[5px] bottom-[4px] flex gap-[3px]">
          <span className="px-[2px] text-slate-600">닫기</span>
          <span className="relative grid rounded bg-slate-300 px-[4px] font-semibold text-white">
            <span className="thumb-anim thumb-fw-c1 absolute inset-0 rounded bg-blue-600" />
            <span
              className="thumb-anim thumb-fw-n0 relative col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              0명에게 보내기
            </span>
            <span
              className="thumb-anim thumb-fw-n1 relative col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              1명에게 보내기
            </span>
            <span className="thumb-anim thumb-fw-c1 relative col-start-1 row-start-1">
              2명에게 보내기
            </span>
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-fw-cursor" />
    </ThumbStage>
  );
}
