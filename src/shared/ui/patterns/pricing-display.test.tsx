import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BundleDealDemo } from "@/entities/pattern/catalog/bundle-deal/BundleDealDemo";
import { CountdownDemo } from "@/entities/pattern/catalog/countdown/CountdownDemo";
import { CouponClaimDemo } from "@/entities/pattern/catalog/coupon-claim/CouponClaimDemo";
import { DiscountBadgeDemo } from "@/entities/pattern/catalog/discount-badge/DiscountBadgeDemo";
import { FreeShippingProgressDemo } from "@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressDemo";
import { LowStockIndicatorDemo } from "@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorDemo";
import { LowestPriceLabelDemo } from "@/entities/pattern/catalog/lowest-price-label/LowestPriceLabelDemo";
import { RewardPointsDemo } from "@/entities/pattern/catalog/reward-points/RewardPointsDemo";
import { DiscountBadge } from "@/shared/ui/patterns/discount-badge/DiscountBadge";

afterEach(() => {
  vi.useRealTimers();
});

describe("DiscountBadge", () => {
  it("recalculates from the same reference price and rounds down", async () => {
    const user = userEvent.setup();
    render(<DiscountBadgeDemo />);
    expect(screen.getByText("25%")).toBeInTheDocument();
    expect(screen.getByText("최근 30일 판매가 39,000원보다 25% 낮은 가격")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "쿠폰 적용" }));
    expect(screen.getByRole("button", { name: "쿠폰 적용 취소" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("19,500원")).toBeInTheDocument();
  });

  it("shows nothing without a verified reference price", () => {
    const { container } = render(
      <DiscountBadge referencePrice={null} price={29000} referenceLabel="최근 30일 판매가" />,
    );
    expect(container).toBeEmptyDOMElement();
  });
});

describe("Countdown", () => {
  it("counts down to a real end time and then says it ended", () => {
    vi.useFakeTimers();
    render(<CountdownDemo />);
    expect(screen.getByText("02:13:05")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByText("02:13:04")).toBeInTheDocument();
    act(() => screen.getByRole("button", { name: "3초 뒤 종료로 바꾸기" }).click());
    expect(screen.getByText("00:00:03")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole("status")).toHaveTextContent("할인이 끝났어요");
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.queryByText(/\d\d:\d\d:\d\d/)).toBeNull();
  });
});

describe("CouponClaim", () => {
  it("lists the conditions and can be claimed once", async () => {
    const user = userEvent.setup();
    render(<CouponClaimDemo />);
    const coupon = screen.getByRole("region", { name: "5,000원 할인" });
    expect(coupon).toHaveTextContent("3만 원 이상 구매 시");
    await user.click(screen.getByRole("button", { name: "쿠폰 받기" }));
    expect(screen.getByRole("button", { name: "받았어요" })).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("주문서에서 바로 쓸 수 있어요");
  });
});

describe("BundleDeal", () => {
  it("applies the bundle rate from the threshold quantity", async () => {
    const user = userEvent.setup();
    render(<BundleDealDemo />);
    expect(screen.getByRole("button", { name: "수량 빼기" })).toBeDisabled();
    expect(screen.getByText("1개 더 담으면 10% 할인")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "수량 더하기" }));
    expect(screen.getByRole("status", { name: "수량" })).toHaveTextContent("2");
    expect(screen.getByText("묶음 10% 할인 적용")).toBeInTheDocument();
    expect(screen.getByText("24,000원").tagName).toBe("S");
    expect(screen.getByText("21,600원")).toBeInTheDocument();
  });
});

describe("LowStockIndicator", () => {
  it("shows the real stock of the chosen size", async () => {
    const user = userEvent.setup();
    render(<LowStockIndicatorDemo />);
    expect(screen.getByText("재고 있음")).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "M" }));
    expect(screen.getByText("남은 수량 3개")).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "L" }));
    expect(screen.getByText("품절")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "재입고 알림 받기" })).toBeInTheDocument();
  });
});

describe("LowestPriceLabel", () => {
  it("reveals how the lowest price was checked", async () => {
    const user = userEvent.setup();
    render(<LowestPriceLabelDemo />);
    const toggle = screen.getByRole("button", { name: "기준 보기" });
    expect(screen.getByText("이 판매처 기준, 쿠폰 제외")).not.toBeVisible();
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("이 판매처 기준, 쿠폰 제외")).toBeVisible();
  });
});

describe("RewardPoints", () => {
  it("updates the points to be earned with the payment method", async () => {
    const user = userEvent.setup();
    render(<RewardPointsDemo />);
    expect(screen.getByText("390원 적립 예정 (1%)")).toBeInTheDocument();
    await user.click(screen.getByRole("radio", { name: "계좌이체" }));
    expect(screen.getByText("780원 적립 예정 (2%)")).toBeInTheDocument();
    expect(
      screen.getByText("구매 확정 다음 날 지급, 할인 금액에는 쓸 수 없어요"),
    ).toBeInTheDocument();
  });
});

describe("FreeShippingProgress", () => {
  it("closes the gap to free shipping as items are added", async () => {
    const user = userEvent.setup();
    render(<FreeShippingProgressDemo />);
    const bar = screen.getByRole("progressbar", { name: "무료배송까지" });
    expect(screen.getByText("8,000원 더 담으면 무료배송")).toBeInTheDocument();
    const [first, second] = screen.getAllByRole("button", { name: "담기" });
    await user.click(first!);
    expect(screen.getByText("3,000원 더 담으면 무료배송")).toBeInTheDocument();
    await user.click(second!);
    expect(screen.getByText("무료배송이에요")).toBeInTheDocument();
    expect(bar).toHaveAttribute("value", "30000");
    await user.click(screen.getByRole("button", { name: "처음부터" }));
    expect(screen.getByText("8,000원 더 담으면 무료배송")).toBeInTheDocument();
  });
});
