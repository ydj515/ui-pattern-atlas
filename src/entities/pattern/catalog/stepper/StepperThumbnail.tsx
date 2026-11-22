import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = ["장바구니", "배송", "결제", "완료"] as const;
const GUIDE = [
  "담은 상품을 확인해요",
  "받는 곳을 입력해요",
  "결제 수단을 골라요",
  "주문을 마쳤어요",
] as const;

function Steps({ current, motion }: { readonly current: number; readonly motion: string }) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-0 bg-white`}>
      {STEPS.map((step, index) => {
        const done = index < current;
        const active = index === current;
        return (
          <div key={step}>
            {index > 0 ? (
              <span
                className={`absolute top-[27.5px] h-[1.5px] w-[24px] ${index <= current ? "bg-blue-600" : "bg-slate-200"}`}
                style={{ left: 24 + index * 36 - 30 }}
              />
            ) : null}
            <span
              className={`absolute top-[22px] grid size-[12px] place-items-center rounded-full border-[1.5px] text-[6px] font-semibold ${
                done
                  ? "border-blue-600 bg-blue-600 text-white"
                  : active
                    ? "border-blue-600 text-blue-700"
                    : "border-slate-300 text-slate-400"
              }`}
              style={{ left: 24 + index * 36 }}
            >
              {done ? "✓" : index + 1}
            </span>
            <span
              className={`absolute top-[37px] w-[36px] text-center text-[5.5px] ${active ? "font-semibold" : done ? "text-slate-700" : "text-slate-400"}`}
              style={{ left: 12 + index * 36 }}
            >
              {step}
            </span>
          </div>
        );
      })}
      <p className="absolute inset-x-0 top-[54px] text-center text-[6.5px] text-slate-700">
        {GUIDE[current]}
      </p>
    </div>
  );
}

/** Same flow as StepperDemo: 배송 is current → 다음 → 결제; 배송 turns into a check. */
export function StepperThumbnail() {
  return (
    <ThumbStage>
      <Steps current={1} motion="thumb-stp-s1 opacity-0" />
      <Steps current={2} motion="thumb-stp-s2" />
      <span className="absolute top-[74px] left-[24px] grid h-[13px] w-[26px] place-items-center rounded-[3px] border border-slate-300 text-[6px]">
        이전
      </span>
      <span className="absolute top-[74px] left-[126px] grid h-[13px] w-[26px] place-items-center rounded-[3px] bg-slate-900 text-[6px] font-semibold text-white">
        다음
      </span>
      <ThumbCursor motion="thumb-stp-cursor" />
    </ThumbStage>
  );
}
