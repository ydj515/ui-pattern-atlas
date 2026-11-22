import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same as MotionSafeDemo: 알림 보내기 slides the card in; with 동작 줄이기 it only fades in. */
export function MotionSafeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[8px] h-[46px] w-[160px] overflow-hidden rounded-lg bg-slate-100">
        <p
          className="thumb-anim thumb-msafe-card1 absolute top-[10px] left-[8px] w-[144px] rounded-md bg-white px-[6px] py-[5px] shadow"
          style={{ opacity: 0 }}
        >
          새 메시지가 왔어요
        </p>
        <p className="thumb-anim thumb-msafe-card2 absolute top-[10px] left-[8px] w-[144px] rounded-md bg-white px-[6px] py-[5px] shadow">
          새 메시지가 왔어요
        </p>
      </div>
      <p className="absolute top-[60px] left-[10px] flex items-center gap-[4px] text-[7px] text-slate-700">
        <span className="relative size-[8px] rounded-[2px] border border-slate-400">
          <span className="thumb-anim thumb-msafe-check absolute inset-0 grid place-items-center bg-blue-600 text-[6px] leading-none text-white">
            ✓
          </span>
        </span>
        동작 줄이기
      </p>
      <span className="absolute top-[58px] left-[108px] grid h-[14px] w-[58px] place-items-center rounded bg-slate-900 text-[7px] text-white">
        알림 보내기
      </span>
      <p
        className="thumb-anim thumb-msafe-t1 absolute top-[82px] left-[10px] text-[7px] text-slate-600"
        style={{ opacity: 0 }}
      >
        옆에서 밀려 들어와요
      </p>
      <p className="thumb-anim thumb-msafe-t2 absolute top-[82px] left-[10px] text-[7px] text-slate-600">
        제자리에서 나타나요
      </p>
      <ThumbCursor motion="thumb-msafe-cursor" />
    </ThumbStage>
  );
}
