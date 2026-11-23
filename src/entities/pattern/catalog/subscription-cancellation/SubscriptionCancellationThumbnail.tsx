import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const REASONS = ["요금이 부담돼요", "잘 쓰지 않아요", "다른 서비스로 옮겨요"];

/** Same cancellation as SubscriptionCancellationDemo: the end date first, the reason optional, a pause beside cancel. */
export function SubscriptionCancellationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7px]">뮤직 프리미엄 구독을 해지할까요?</b>
        <p className="mt-[3px] rounded-[3px] bg-slate-100 px-[4px] py-[2px] text-slate-700">
          {"6월 30일"}까지는 지금처럼 쓸 수 있어요
        </p>
        <ul className="mt-[2px] list-disc pl-[8px] text-slate-600">
          <li>7월 1일부터 광고가 나와요</li>
          <li>저장한 곡은 그대로 남아요</li>
        </ul>
        <p className="mt-[2px] text-[5px] text-slate-500">해지하는 이유 (선택)</p>
        <p className="flex flex-wrap gap-x-[5px] text-slate-700">
          {REASONS.map((reason) => (
            <span key={reason} className="flex items-center gap-[2px]">
              <span className="relative size-[5px] rounded-full border border-slate-400">
                {reason === "잘 쓰지 않아요" ? (
                  <span
                    className="thumb-anim thumb-lr-sc-pick absolute inset-[1px] rounded-full bg-slate-900"
                    style={HIDDEN}
                  />
                ) : null}
              </span>
              {reason}
            </span>
          ))}
        </p>
        <p className="mt-[4px] grid grid-cols-2 gap-[3px] text-center">
          <span className="rounded-[3px] border border-slate-300 py-[2px]">한 달 쉬기</span>
          <span className="rounded-[3px] bg-slate-900 py-[2px] text-white">해지하기</span>
        </p>
        <div
          className="thumb-anim thumb-lr-sc-done absolute inset-0 grid content-center gap-[3px] bg-white p-[10px] text-[6.5px] text-slate-700"
          style={HIDDEN}
        >
          <p>해지했어요. 6월 30일까지 쓸 수 있고, 그 뒤로는 결제되지 않아요</p>
          <span className="text-[5.5px] font-medium underline">다시 구독하기</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-lr-sc-cursor" />
    </ThumbStage>
  );
}
