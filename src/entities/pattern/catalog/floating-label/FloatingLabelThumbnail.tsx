import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same fields as FloatingLabelDemo: focus 이메일 → the label moves up → type the address. */
export function FloatingLabelThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[16px] left-[24px] h-[24px] w-[128px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-fl-focus absolute top-[15px] left-[23px] h-[26px] w-[130px] rounded ring-2 ring-blue-500/30" />
      <p className="thumb-anim thumb-fl-label absolute top-[18px] left-[30px] origin-left text-[5.5px] text-slate-500">
        이메일
      </p>
      <p className="thumb-anim thumb-fl-focus absolute top-[18px] left-[30px] bg-white text-[5.5px] text-blue-700">
        이메일
      </p>
      <p className="thumb-anim thumb-fl-v1 absolute top-[28px] left-[30px] text-[6.5px] opacity-0">
        sky@
      </p>
      <p className="thumb-anim thumb-fl-v2 absolute top-[28px] left-[30px] text-[6.5px]">
        sky@example.com
      </p>

      <span className="absolute top-[48px] left-[24px] h-[24px] w-[128px] rounded border border-slate-300" />
      <p className="absolute top-[56px] left-[30px] text-[7px] text-slate-500">이름</p>
      <ThumbCursor motion="thumb-fl-cursor" />
    </ThumbStage>
  );
}
