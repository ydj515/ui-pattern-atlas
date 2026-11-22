import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SLIDES = [
  ["지출을 한곳에", "카드와 계좌 내역을 자동으로 모아요", "rounded-[8px] bg-emerald-200"],
  ["예산 알림", "정한 금액을 넘기 전에 알려 드려요", "rounded-full bg-amber-200"],
  ["함께 쓰는 가계부", "가족과 같은 가계부를 나눠 써요", "rounded-[8px] bg-sky-200"],
];

/** Same intro as OnboardingCarouselDemo: 다음 → 다음 → 시작하기 → 가계부를 시작했어요. */
export function OnboardingCarouselThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[44px] h-[108px] w-[88px] overflow-hidden rounded-[12px] border border-slate-200 text-center">
        <span className="absolute top-[4px] right-[6px] text-[5.5px] text-slate-500">건너뛰기</span>
        {SLIDES.map(([title, body, art], index) => (
          <div
            key={title}
            className={`thumb-anim thumb-oc-s${index} absolute inset-x-[6px] top-[16px] grid justify-items-center`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            <span className={`size-[28px] ${art}`} />
            <p className="mt-[6px] text-[8px] font-bold">{title}</p>
            <p className="mt-[2px] text-[5.5px] leading-[8px] text-slate-600">{body}</p>
          </div>
        ))}
        {[0, 1, 2].map((active) => (
          <span
            key={active}
            className={`thumb-anim thumb-oc-s${active} absolute bottom-[10px] left-[8px] flex gap-[2px]`}
            style={active === 0 ? undefined : { opacity: 0 }}
          >
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`h-[3px] rounded-full ${dot === active ? "w-[8px] bg-slate-900" : "w-[3px] bg-slate-300"}`}
              />
            ))}
          </span>
        ))}
        <span className="absolute right-[6px] bottom-[6px] grid h-[11px] w-[30px] rounded bg-slate-900 text-[6px] font-semibold text-white">
          <span className="thumb-anim thumb-oc-next col-start-1 row-start-1 place-self-center">
            다음
          </span>
          <span
            className="thumb-anim thumb-oc-start col-start-1 row-start-1 place-self-center"
            style={{ opacity: 0 }}
          >
            시작하기
          </span>
        </span>
        <div
          className="thumb-anim thumb-oc-done absolute inset-0 grid place-content-center justify-items-center gap-[6px] bg-white"
          style={{ opacity: 0 }}
        >
          <p className="text-[7.5px] font-bold">가계부를 시작했어요</p>
          <span className="rounded border border-slate-200 px-[5px] py-[1px] text-[6px]">
            처음부터
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-oc-cursor" />
    </ThumbStage>
  );
}
