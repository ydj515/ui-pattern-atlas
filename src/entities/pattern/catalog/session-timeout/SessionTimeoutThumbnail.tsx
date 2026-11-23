import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const TIMES = [
  ["0:03", "thumb-lr-so-t3", false],
  ["0:02", "thumb-lr-so-t2", true],
  ["0:01", "thumb-lr-so-t1", true],
  ["1:00", "thumb-lr-so-t60", true],
] as const;

/** Same warning as SessionTimeoutDemo: the time runs out, what was kept is said, one step back in. */
export function SessionTimeoutThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35] bg-slate-50">
        <div className="relative h-[58px]">
          <div className="thumb-anim thumb-lr-so-warn absolute inset-0 grid content-start gap-[3px] rounded-[6px] border border-slate-200 bg-white p-[5px] shadow-sm">
            <b className="text-[7px]">곧 자동으로 로그아웃돼요</b>
            <p className="text-slate-600">
              <span className="relative inline-grid font-semibold text-slate-900">
                {TIMES.map(([time, motion, hidden]) => (
                  <span
                    key={time}
                    className={`thumb-anim ${motion} col-start-1 row-start-1`}
                    style={hidden ? HIDDEN : undefined}
                  >
                    {time}
                  </span>
                ))}
              </span>{" "}
              뒤 로그아웃돼요. 계속 쓰려면 아래 버튼을 눌러 주세요
            </p>
            <p className="grid grid-cols-2 gap-[3px] text-center">
              <span className="rounded-[3px] border border-slate-300 py-[1px]">지금 로그아웃</span>
              <span className="rounded-[3px] bg-slate-900 py-[1px] text-white">계속 이용하기</span>
            </p>
          </div>
          <div
            className="thumb-anim thumb-lr-so-out absolute inset-0 grid content-start gap-[3px] rounded-[6px] border border-slate-200 bg-white p-[5px] shadow-sm"
            style={HIDDEN}
          >
            <b className="text-[7px]">오래 쉬어 로그아웃했어요</b>
            <p className="text-slate-600">
              쓰던 내용은 저장해 두었어요. 다시 로그인하면 이어서 쓸 수 있어요
            </p>
            <span className="rounded-[3px] bg-slate-900 py-[1px] text-center text-white">
              다시 로그인
            </span>
          </div>
        </div>
        <p
          className="thumb-anim thumb-lr-so-done mt-[4px] text-[5.5px] text-slate-600"
          style={HIDDEN}
        >
          다시 로그인했어요. 쓰던 내용을 불러왔어요
        </p>
      </div>
      <ThumbCursor motion="thumb-lr-so-cursor" />
    </ThumbStage>
  );
}
