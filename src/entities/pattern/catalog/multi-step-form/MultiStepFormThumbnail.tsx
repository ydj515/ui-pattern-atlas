import type { ReactNode } from "react";

import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Step({
  motion,
  number,
  title,
  next,
  children,
}: {
  readonly motion: string;
  readonly number: number;
  readonly title: string;
  readonly next: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-0`}>
      <p className="absolute top-[14px] left-[24px] text-[5.5px] text-slate-500">{number}/3단계</p>
      <p className="absolute top-[21px] left-[24px] text-[8px] font-semibold">{title}</p>
      <div className="absolute top-[36px] left-[24px] w-[128px]">{children}</div>
      {number > 1 ? (
        <span className="absolute top-[92px] left-[24px] grid h-[13px] w-[30px] place-items-center rounded border border-slate-300 text-[6px]">
          이전
        </span>
      ) : null}
      <span className="absolute top-[92px] left-[112px] grid h-[13px] w-[40px] place-items-center rounded bg-slate-900 text-[6px] font-semibold text-white">
        {next}
      </span>
    </div>
  );
}

/** Same order as MultiStepFormDemo: 배송지 → 다음 → 결제 수단 → 다음 → 확인. */
export function MultiStepFormThumbnail() {
  return (
    <ThumbStage>
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="absolute top-[6px] h-[3px] w-[40px] rounded-full bg-slate-200"
          style={{ left: 24 + index * 44 }}
        />
      ))}
      <span className="absolute top-[6px] left-[24px] h-[3px] w-[40px] rounded-full bg-blue-600" />
      <span className="thumb-anim thumb-msf-bar2 absolute top-[6px] left-[68px] h-[3px] w-[40px] rounded-full bg-blue-600" />
      <span className="thumb-anim thumb-msf-s3 absolute top-[6px] left-[112px] h-[3px] w-[40px] rounded-full bg-blue-600" />

      <Step motion="thumb-msf-s1 opacity-0" number={1} title="배송지" next="다음">
        <p className="text-[5.5px] text-slate-600">이름</p>
        <p className="mb-[4px] h-[12px] rounded border border-slate-300 px-[4px] text-[6px] leading-[10px]">
          김하늘
        </p>
        <p className="text-[5.5px] text-slate-600">주소</p>
        <p className="h-[12px] rounded border border-slate-300 px-[4px] text-[6px] leading-[10px]">
          서울시 마포구
        </p>
      </Step>
      <Step motion="thumb-msf-s2 opacity-0" number={2} title="결제 수단" next="다음">
        {["카드", "계좌이체"].map((option, index) => (
          <p key={option} className="mb-[4px] flex items-center gap-[4px] text-[6.5px]">
            <span
              className={`size-[6px] rounded-full border ${index === 0 ? "border-[2px] border-blue-600" : "border-slate-400"}`}
            />
            {option}
          </p>
        ))}
      </Step>
      <Step motion="thumb-msf-s3" number={3} title="확인" next="주문하기">
        <p className="text-[6.5px]">
          <span className="text-slate-500">배송지</span> 김하늘 · 서울시 마포구
        </p>
        <p className="mt-[3px] text-[6.5px]">
          <span className="text-slate-500">결제</span> 카드
        </p>
      </Step>
      <ThumbCursor motion="thumb-msf-cursor" />
    </ThumbStage>
  );
}
