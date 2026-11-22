import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as WelcomeScreenDemo: 환영 화면 열기 → 환영해요 → 시작하기 → 시작했어요. */
export function WelcomeScreenThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[44px] h-[104px] w-[88px] rounded-[12px] border border-slate-200 p-[6px] text-center">
        <p className="text-[5.5px] leading-[8px] text-slate-600">
          처음 방문한 사람에게 한 번 보여 줘요
        </p>
        <span className="mt-[6px] inline-block rounded bg-slate-900 px-[5px] py-[2px] text-[6px] font-semibold text-white">
          환영 화면 열기
        </span>
        <p
          className="thumb-anim thumb-ws-result mt-[6px] text-[6px] text-slate-600"
          style={{ opacity: 0 }}
        >
          시작했어요
        </p>
      </div>
      <div className="thumb-anim thumb-ws-dialog absolute inset-0 bg-slate-900/50">
        <div className="absolute top-[14px] left-[52px] grid w-[72px] justify-items-center rounded-lg bg-white p-[6px] text-center shadow-xl">
          <span className="size-[18px] rounded-[5px] bg-sky-200" />
          <p className="mt-[4px] text-[8px] font-bold">환영해요</p>
          <p className="text-[5.5px] text-slate-600">할 일을 한곳에서 정리해요</p>
          <span className="mt-[5px] block w-full rounded bg-slate-900 py-[2px] text-[6px] font-semibold text-white">
            시작하기
          </span>
          <span className="mt-[2px] text-[5.5px] text-slate-600">먼저 둘러볼게요</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ws-cursor" />
    </ThumbStage>
  );
}
