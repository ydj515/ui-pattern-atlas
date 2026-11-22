import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same app as SplashScreenDemo: 동네가게 splash while loading → 오늘의 추천 → 앱 다시 열기. */
export function SplashScreenThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[64px] h-[108px] w-[48px] overflow-hidden rounded-[10px] border border-slate-200">
        <div className="thumb-anim thumb-ss-app absolute inset-0 grid content-start gap-[4px] bg-white p-[4px]">
          <b className="text-[6.5px]">오늘의 추천</b>
          <span className="h-[26px] rounded bg-amber-100" />
          <span className="h-[26px] rounded bg-sky-100" />
          <span className="justify-self-start rounded border border-slate-200 px-[2px] text-[5px]">
            앱 다시 열기
          </span>
        </div>
        <div
          className="thumb-anim thumb-ss-splash absolute inset-0 grid place-content-center justify-items-center gap-[6px] bg-slate-900 text-white"
          style={{ opacity: 0 }}
        >
          <span className="size-[16px] rounded-[5px] bg-amber-400" />
          <b className="text-[7px]">동네가게</b>
          <span className="thumb-anim thumb-ss-spin size-[8px] rounded-full border border-white/30 border-t-white" />
        </div>
      </div>
      <ThumbCursor motion="thumb-ss-cursor" />
    </ThumbStage>
  );
}
