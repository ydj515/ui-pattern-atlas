import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AddressFormDemo } from "@/entities/pattern/catalog/address-form/AddressFormDemo";
import { CartDemo } from "@/entities/pattern/catalog/cart/CartDemo";
import { CheckoutSummaryDemo } from "@/entities/pattern/catalog/checkout-summary/CheckoutSummaryDemo";
import { OrderCancellationDemo } from "@/entities/pattern/catalog/order-cancellation/OrderCancellationDemo";
import { OrderTrackingDemo } from "@/entities/pattern/catalog/order-tracking/OrderTrackingDemo";
import { PaymentMethodDemo } from "@/entities/pattern/catalog/payment-method/PaymentMethodDemo";

describe("Cart", () => {
  it("counts only the selected lines", async () => {
    const user = userEvent.setup();
    render(<CartDemo />);
    expect(screen.getByText("92,000원")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "캔버스 백" }));
    expect(screen.getByText("63,000원")).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: /전체 선택/ })).toHaveProperty(
      "indeterminate",
      true,
    );
    await user.click(screen.getByRole("button", { name: "주방 행주 수량 늘리기" }));
    expect(screen.getByText("75,000원")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "2개 상품 주문하기" }));
    expect(screen.getByText("2개 상품을 주문서로 옮겨요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "린넨 셔츠 빼기" }));
    expect(screen.queryByText("린넨 셔츠")).toBeNull();
  });
});

describe("CheckoutSummary", () => {
  it("lists every amount and waits for the agreement", async () => {
    const user = userEvent.setup();
    render(<CheckoutSummaryDemo />);
    const pay = screen.getByRole("button", { name: "87,000원 결제하기" });
    expect(pay).toBeDisabled();
    await user.click(screen.getByRole("checkbox", { name: /결제에 동의해요/ }));
    await user.click(pay);
    expect(screen.getByRole("status")).toHaveTextContent("87,000원 결제를 진행해요");
    await user.click(screen.getByRole("checkbox", { name: "5,000원 쿠폰 쓰기" }));
    expect(screen.getByRole("button", { name: "92,000원 결제하기" })).toBeInTheDocument();
  });
});

describe("AddressForm", () => {
  it("searches, picks and moves to the detail field", async () => {
    const user = userEvent.setup();
    render(<AddressFormDemo />);
    await user.type(screen.getByLabelText("주소 검색"), "숲속");
    await user.click(screen.getByRole("button", { name: "검색" }));
    expect(screen.getByText(/찾는 주소가 없어요/)).toBeInTheDocument();
    await user.clear(screen.getByLabelText("주소 검색"));
    await user.type(screen.getByLabelText("주소 검색"), "서울숲");
    await user.click(screen.getByRole("button", { name: "검색" }));
    await user.click(screen.getByRole("button", { name: /뚝섬로 273/ }));
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.getByLabelText("상세 주소")).toHaveFocus();
    await user.type(screen.getByLabelText("상세 주소"), "101동 1203호");
    await user.click(screen.getByRole("button", { name: "배송지 저장" }));
    expect(screen.getByText(/배송지를 저장했어요/)).toHaveTextContent("뚝섬로 273 (서울숲) 101동 1203호");
  });
});

describe("PaymentMethod", () => {
  it("shows instalments only for the card", async () => {
    const user = userEvent.setup();
    render(<PaymentMethodDemo />);
    expect(screen.queryByLabelText("할부")).toBeNull();
    await user.click(screen.getByRole("radio", { name: "신용·체크카드" }));
    await user.selectOptions(screen.getByLabelText("할부"), "3개월");
    expect(screen.getByRole("status")).toHaveTextContent("신용·체크카드 · 3개월로 결제해요");
  });
});

describe("OrderTracking", () => {
  it("marks the current step and adds its time", async () => {
    const user = userEvent.setup();
    render(<OrderTrackingDemo />);
    const steps = () => within(screen.getByRole("list")).getAllByRole("listitem");
    expect(steps()[1]).toHaveAttribute("aria-current", "step");
    await user.click(screen.getByRole("button", { name: "다음 단계 보기" }));
    expect(steps()[2]).toHaveAttribute("aria-current", "step");
    expect(steps()[2]).toHaveTextContent("11월 25일 08:40");
  });
});

describe("OrderCancellation", () => {
  it("works out the refund before submitting", async () => {
    const user = userEvent.setup();
    render(<OrderCancellationDemo />);
    await user.click(screen.getByRole("checkbox", { name: /린넨 셔츠/ }));
    expect(screen.getByText("환불 예정 금액").nextElementSibling).toHaveTextContent("39,000원");
    await user.click(screen.getByRole("checkbox", { name: /캔버스 백/ }));
    expect(screen.getByText("환불 예정 금액").nextElementSibling).toHaveTextContent("63,000원");
    const submit = screen.getByRole("button", { name: "2개 상품 취소하기" });
    expect(submit).toBeDisabled();
    await user.selectOptions(screen.getByLabelText("취소 사유"), "단순 변심");
    await user.click(submit);
    expect(screen.getByRole("status")).toHaveTextContent("63,000원을 환불해 드려요");
  });
});
