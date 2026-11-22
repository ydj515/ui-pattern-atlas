import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same step as ProfileSetupDemo: type 하늘 → the avatar takes its first letter → 완료 → 하늘 님, 반가워요. */
export function ProfileSetupThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <div className="thumb-anim thumb-ps-form">
          <p className="text-[8px] font-bold">프로필을 만들어요</p>
          <p className="mt-[5px] flex items-center gap-[6px]">
            <span className="grid size-[22px] place-items-center rounded-full bg-slate-200 text-[9px] font-bold text-slate-600">
              <span
                className="thumb-anim thumb-ps-t0 col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                ?
              </span>
              <span className="thumb-anim thumb-ps-av col-start-1 row-start-1">하</span>
            </span>
            <span className="rounded border border-slate-200 px-[4px] py-[1px]">사진 선택</span>
          </p>
          <p className="mt-[5px] font-medium">닉네임</p>
          <span className="relative mt-[2px] block h-[13px] rounded border border-slate-300 px-[4px] leading-[12px]">
            <span className="thumb-anim thumb-ps-t0 absolute text-slate-400" style={{ opacity: 0 }}>
              하늘
            </span>
            <span className="thumb-anim thumb-ps-t1 absolute" style={{ opacity: 0 }}>
              하
            </span>
            <span className="thumb-anim thumb-ps-t2 absolute">하늘</span>
          </span>
          <p className="mt-[2px] flex justify-between text-[5.5px] text-slate-500">
            <span>2~12자로 정해 주세요</span>
            <span className="grid tabular-nums">
              <span
                className="thumb-anim thumb-ps-t0 col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                0/12
              </span>
              <span
                className="thumb-anim thumb-ps-t1 col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                1/12
              </span>
              <span className="thumb-anim thumb-ps-t2 col-start-1 row-start-1">2/12</span>
            </span>
          </p>
          <p className="mt-[5px] flex justify-end gap-[3px]">
            <span className="px-[3px] py-[1px] text-slate-600">나중에 하기</span>
            <span className="rounded bg-slate-900 px-[5px] py-[1px] font-semibold text-white">
              완료
            </span>
          </p>
        </div>
        <div
          className="thumb-anim thumb-ps-done absolute inset-0 grid place-content-center justify-items-center gap-[5px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[8px]">하늘 님, 반가워요</b>
          <span className="rounded border border-slate-200 px-[4px] text-[6px]">처음부터</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ps-cursor" />
    </ThumbStage>
  );
}
