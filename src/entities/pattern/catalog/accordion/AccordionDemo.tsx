import { Accordion } from "@/shared/ui/patterns/accordion/Accordion";

export function AccordionDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion
        defaultOpenIds={["refund"]}
        items={[
          {
            id: "refund",
            title: "환불은 언제 처리되나요?",
            content: "반품 상품이 도착한 날부터 영업일 기준 3일 안에 결제 수단으로 환불돼요.",
          },
          {
            id: "change-address",
            title: "배송지를 바꿀 수 있나요?",
            content: "상품 준비 중 단계까지는 주문 상세에서 직접 바꿀 수 있어요.",
          },
          {
            id: "receipt",
            title: "현금영수증은 어떻게 받나요?",
            content: "결제 단계에서 신청하거나, 결제 후 7일 안에 주문 상세에서 신청할 수 있어요.",
          },
        ]}
      />
    </div>
  );
}
