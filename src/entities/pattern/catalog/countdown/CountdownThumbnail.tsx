import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TICKS = ["02:13:05", "02:13:04", "02:13:03", "00:00:03", "00:00:02", "00:00:01"];

/** Same deal as CountdownDemo: the time ticks toward a real end time, then 할인이 끝났어요 instead of restarting. */
export function CountdownThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b className="text-[8px]">무선 이어폰 타임 특가</b>
        <b className="block text-[12px]">29,000원</b>
        <div className="relative mt-[4px] h-[14px]">
          <p
            className="thumb-anim thumb-pcd-run absolute flex items-baseline gap-[3px]"
            style={{ opacity: 0 }}
          >
            남은 시간
            <span className="relative font-mono text-[9px] font-bold text-rose-600">
              {TICKS.map((tick, index) => (
                <span
                  key={tick}
                  className={`thumb-anim thumb-pcd-t${index} absolute`}
                  style={{ opacity: 0 }}
                >
                  {tick}
                </span>
              ))}
              <span className="invisible">00:00:00</span>
            </span>
          </p>
          <p className="thumb-anim thumb-pcd-end absolute font-semibold text-slate-500">
            할인이 끝났어요
          </p>
        </div>
        <span className="text-[5px] text-slate-500">오늘 23:59 종료</span>
        <span className="mt-[4px] block w-fit rounded border border-slate-200 px-[4px] text-[5.5px]">
          3초 뒤 종료로 바꾸기
        </span>
      </div>
      <ThumbCursor motion="thumb-pcd-cursor" />
    </ThumbStage>
  );
}
