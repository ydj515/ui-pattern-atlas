import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const STEPS = [
  ["결제 완료", "11월 24일 09:12"],
  ["상품 준비", "11월 24일 14:30"],
  ["배송 시작", "11월 25일 08:40"],
  ["배송 완료", "11월 26일 13:05"],
];

/** Same order as OrderTrackingDemo: the next step lights up with its time; the tracking number copies in one tap. */
export function OrderTrackingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">11월 26일(수) 도착 예정</b>
        <p className="mt-[1px] flex justify-between text-[5px] text-slate-600">
          동네택배 5821 3307 4410<span className="underline">운송장 번호 복사</span>
        </p>
        <ol className="mt-[3px]">
          {STEPS.map(([label, time], index) => (
            <li key={label} className="flex h-[13px] gap-[4px]">
              <span className="relative mt-[1px] size-[5px] shrink-0 rounded-full border border-slate-300">
                {index < 2 ? (
                  <span className="absolute -inset-px rounded-full bg-blue-700" />
                ) : null}
                {index === 2 ? (
                  <span
                    className="thumb-anim thumb-co-ot-next absolute -inset-px rounded-full bg-blue-700"
                    style={HIDDEN}
                  />
                ) : null}
              </span>
              <span className="relative">
                <span className={index < 2 ? "font-medium" : "text-slate-400"}>{label}</span>
                {index === 2 ? (
                  <span
                    className="thumb-anim thumb-co-ot-next absolute top-0 left-0 font-medium"
                    style={HIDDEN}
                  >
                    {label}
                  </span>
                ) : null}
                {index < 2 ? (
                  <span className="block text-[4.5px] text-slate-500">{time}</span>
                ) : null}
                {index === 2 ? (
                  <span
                    className="thumb-anim thumb-co-ot-next block text-[4.5px] text-slate-500"
                    style={HIDDEN}
                  >
                    {time}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-[1px] flex items-center justify-between">
          <span className="rounded-[3px] border border-slate-200 px-[3px]">다음 단계 보기</span>
          <span className="thumb-anim thumb-co-ot-copied text-[5px] text-slate-600" style={HIDDEN}>
            운송장 번호를 복사했어요
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-co-ot-cursor" />
    </ThumbStage>
  );
}
