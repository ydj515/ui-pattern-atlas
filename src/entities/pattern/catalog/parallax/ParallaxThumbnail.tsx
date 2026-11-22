import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same page as ParallaxDemo: the text scrolls up while the 여름 캠핑 hills move at half speed. */
export function ParallaxThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[24px] h-[104px] w-[128px] overflow-hidden rounded-lg border border-slate-200">
        <div
          className="thumb-anim thumb-px-bg absolute inset-x-0 top-0 h-[64px] overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100"
          style={{ transform: "translateY(-18px)" }}
        >
          <span className="absolute top-[10px] right-[14px] size-[12px] rounded-full bg-amber-200" />
          <span className="absolute -bottom-[16px] -left-[10px] h-[44px] w-[80px] rotate-12 rounded-[40%] bg-emerald-500" />
          <span className="absolute -right-[16px] -bottom-[20px] h-[50px] w-[86px] -rotate-12 rounded-[40%] bg-emerald-600" />
        </div>
        <div
          className="thumb-anim thumb-px-content absolute inset-x-0 top-[64px] grid gap-[4px] bg-white p-[6px] text-[6px] leading-[8px] text-slate-700"
          style={{ transform: "translateY(-36px)" }}
        >
          <b className="text-[9px] leading-[11px] text-slate-900">여름 캠핑</b>
          <p>계곡 옆 자리를 미리 예약하면 한낮에도 시원해요.</p>
          <p>밤에는 기온이 떨어지니 얇은 겉옷을 챙기세요.</p>
          <p>쓰레기는 모두 되가져가 주세요.</p>
          <p>장작은 관리소에서 살 수 있어요.</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-px-cursor" />
    </ThumbStage>
  );
}
