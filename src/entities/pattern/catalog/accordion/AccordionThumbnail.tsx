import type { ReactNode } from "react";

import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

function Header({ children }: { readonly children: ReactNode }) {
  return (
    <>
      <span className="font-medium">{children}</span>
      <span className="text-[7px] text-slate-400">▾</span>
    </>
  );
}

/** Same FAQ as AccordionDemo: open 배송지 question (refund closes) → reopen the refund answer. */
export function AccordionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-x-0 top-[4px] flex h-[18px] items-center justify-between px-[10px]">
        <Header>환불은 언제 처리되나요?</Header>
      </div>
      <p className="thumb-anim thumb-accordion-panel1 absolute top-[22px] left-[10px] w-[156px] text-[7px] text-slate-600">
        반품 상품이 도착한 날부터 영업일 기준 3일 안에 결제 수단으로 환불돼요.
      </p>
      <p className="thumb-anim thumb-accordion-panel2 absolute top-[42px] left-[10px] w-[156px] text-[7px] text-slate-600">
        상품 준비 중 단계까지는 주문 상세에서 직접 바꿀 수 있어요.
      </p>
      <div className="thumb-anim thumb-accordion-row2 absolute inset-x-0 top-[22px] flex h-[18px] items-center justify-between border-t border-slate-200 bg-white px-[10px]">
        <Header>배송지를 바꿀 수 있나요?</Header>
      </div>
      <div className="absolute inset-x-0 top-[66px] flex h-[18px] items-center justify-between border-y border-slate-200 bg-white px-[10px]">
        <Header>현금영수증은 어떻게 받나요?</Header>
      </div>
      <ThumbCursor motion="thumb-accordion-cursor" />
    </ThumbStage>
  );
}
