import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const VERSIONS = [
  ["오늘 14:20", "하늘 · 숙소를 바꿈", "thumb-ra-vh-r3", true],
  ["오늘 11:05", "민준 · 서울숲 추가", "thumb-ra-vh-r2", false],
  ["어제 21:40", "하늘 · 처음 만듦", "", false],
] as const;

function Badge({ motion = "" }: { readonly motion?: string }) {
  return (
    <span
      className={`${motion ? `thumb-anim ${motion} ` : ""}ml-[2px] rounded-[1.5px] bg-slate-900 px-[1.5px] text-[4.5px] text-white`}
    >
      지금 버전
    </span>
  );
}

/** Same document as VersionHistoryDemo: pick an older version, restore it as a new one on top. */
export function VersionHistoryThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">버전 기록</b>
        <div className="relative mt-[2px] h-[30px] overflow-hidden">
          <p
            className="thumb-anim thumb-ra-vh-new absolute inset-x-0 top-0 flex h-[15px] items-center gap-[3px] rounded-[3px] border border-slate-300 bg-slate-50 px-[3px]"
            style={HIDDEN}
          >
            <span className="relative size-[5px] shrink-0 rounded-full border border-slate-400">
              <span className="absolute inset-[1px] rounded-full bg-slate-900" />
            </span>
            <span>
              <span className="block">
                방금
                <Badge />
              </span>
              <span className="text-[4.5px] text-slate-500">나 · 오늘 11:05 버전으로 되돌림</span>
            </span>
          </p>
          <div className="thumb-anim thumb-ra-vh-list">
            {VERSIONS.map(([time, detail, motion, current]) => (
              <p key={time} className="relative flex h-[15px] items-center gap-[3px] px-[3px]">
                {motion ? (
                  <span
                    className={`thumb-anim ${motion} absolute inset-0 rounded-[3px] border border-slate-300 bg-slate-50`}
                    style={motion === "thumb-ra-vh-r2" ? HIDDEN : undefined}
                  />
                ) : null}
                <span className="relative size-[5px] shrink-0 rounded-full border border-slate-400">
                  {motion ? (
                    <span
                      className={`thumb-anim ${motion} absolute inset-[1px] rounded-full bg-slate-900`}
                      style={motion === "thumb-ra-vh-r2" ? HIDDEN : undefined}
                    />
                  ) : null}
                </span>
                <span className="relative">
                  <span className="block">
                    {time}
                    {current ? <Badge motion="thumb-ra-vh-badge" /> : null}
                  </span>
                  <span className="text-[4.5px] text-slate-500">{detail}</span>
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="relative mt-[3px] h-[31px] rounded-[4px] border border-slate-200 p-[3px] text-slate-700">
          <p className="thumb-anim thumb-ra-vh-b3">
            숙소: 성수동
            <br />
            일정: 서울숲, 뚝섬
          </p>
          <div className="thumb-anim thumb-ra-vh-b2 absolute inset-[3px]" style={HIDDEN}>
            <p>
              숙소: 을지로
              <br />
              일정: 서울숲, 뚝섬
            </p>
            <span className="thumb-anim thumb-ra-vh-btn mt-[1px] block rounded-[3px] bg-slate-900 py-[1px] text-center text-white">
              이 버전으로 되돌리기
            </span>
          </div>
        </div>
        <p
          className="thumb-anim thumb-ra-vh-done mt-[1px] text-[5.5px] text-slate-600"
          style={HIDDEN}
        >
          오늘 11:05 버전으로 되돌렸어요
        </p>
      </div>
      <ThumbCursor motion="thumb-ra-vh-cursor" />
    </ThumbStage>
  );
}
