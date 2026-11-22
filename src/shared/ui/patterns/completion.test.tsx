import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AchievementBadgeDemo } from "@/entities/pattern/catalog/achievement-badge/AchievementBadgeDemo";
import { TaskItemDemo } from "@/entities/pattern/catalog/completed-task-strikethrough/TaskItemDemo";
import { CompletionStampDemo } from "@/entities/pattern/catalog/completion-stamp/CompletionStampDemo";
import { ConfettiDemo } from "@/entities/pattern/catalog/confetti/ConfettiDemo";
import { ReceiptSummaryDemo } from "@/entities/pattern/catalog/receipt-summary/ReceiptSummaryDemo";
import { SendButtonDemo } from "@/entities/pattern/catalog/send-animation/SendButtonDemo";
import { StreakDemo } from "@/entities/pattern/catalog/streak/StreakDemo";
import { SuccessCheckmarkDemo } from "@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkDemo";
import { SuccessScreenDemo } from "@/entities/pattern/catalog/success-screen/SuccessScreenDemo";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("SuccessScreen", () => {
  it("moves focus to the result and lists the order facts", async () => {
    const user = userEvent.setup();
    render(<SuccessScreenDemo />);
    await user.click(screen.getByRole("button", { name: "39,000원 결제하기" }));
    expect(screen.getByRole("heading", { name: "결제를 마쳤어요" })).toHaveFocus();
    expect(screen.getByText("주문 번호").nextElementSibling).toHaveTextContent("2481");
    await user.click(screen.getByRole("button", { name: "쇼핑 계속하기" }));
    expect(screen.getByRole("heading", { name: "주문서" })).toBeInTheDocument();
  });
});

describe("SuccessCheckmark", () => {
  it("blocks a second send and shows the named check", () => {
    vi.useFakeTimers();
    render(<SuccessCheckmarkDemo />);
    act(() => screen.getByRole("button", { name: "보내기" }).click());
    expect(screen.getByRole("button", { name: "보내는 중" })).toBeDisabled();
    act(() => vi.advanceTimersByTime(800));
    expect(screen.getByRole("img", { name: "보냈어요" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("보냈어요");
  });
});

describe("Confetti", () => {
  it("bursts decorative pieces and announces the goal", async () => {
    const user = userEvent.setup();
    const animate = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "animate", {
      value: animate,
      configurable: true,
      writable: true,
    });
    const { container } = render(<ConfettiDemo />);
    await user.click(screen.getByRole("button", { name: "오늘 걷기 기록" }));
    expect(screen.getByRole("status")).toHaveTextContent("목표를 달성했어요");
    expect(screen.getByRole("progressbar", { name: "걷기 목표" })).toHaveAttribute("value", "30");
    const layer = container.querySelector('[aria-hidden="true"].pointer-events-none')!;
    expect(layer.children).toHaveLength(24);
    expect(animate).toHaveBeenCalledTimes(24);
    Reflect.deleteProperty(HTMLElement.prototype, "animate");
  });
});

describe("ReceiptSummary", () => {
  it("leads with the total and opens the lines", async () => {
    const user = userEvent.setup();
    render(<ReceiptSummaryDemo />);
    expect(screen.getByText("52,000원")).toBeInTheDocument();
    expect(screen.getByText("−5,000원")).toBeInTheDocument();
    const toggle = screen.getByRole("button", { name: /품목 3개/ });
    expect(screen.queryByText(/양말 × 2/)).not.toBeVisible();
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/양말 × 2/)).toBeVisible();
  });
});

describe("Streak", () => {
  it("records today once and reads each day as text", async () => {
    const user = userEvent.setup();
    render(<StreakDemo />);
    expect(screen.getByText("9일 연속")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "오늘 기록하기" }));
    expect(screen.getByText("10일 연속")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "오늘 기록했어요" })).toBeDisabled();
    expect(screen.getAllByText("기록함")).toHaveLength(4);
  });
});

describe("AchievementBadge", () => {
  it("shows progress while locked and announces the new badge", async () => {
    const user = userEvent.setup();
    render(<AchievementBadgeDemo />);
    expect(screen.getByText("4/5")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "후기 쓰기" }));
    expect(screen.getByText("오늘 획득")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("배지를 받았어요: 후기 다섯 개");
  });
});

describe("CompletedTaskStrikethrough", () => {
  it("keeps the state on the checkbox and counts finished tasks", async () => {
    const user = userEvent.setup();
    render(<TaskItemDemo />);
    expect(screen.getByText("완료 1/3")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "택배 보내기" }));
    expect(screen.getByRole("checkbox", { name: "택배 보내기" })).toBeChecked();
    expect(screen.getByText("완료 2/3")).toBeInTheDocument();
    expect(screen.getByText("택배 보내기").querySelector("[aria-hidden]")).toHaveClass(
      "scale-x-100",
    );
  });
});

describe("CompletionStamp", () => {
  it("stamps the card and says so in text", async () => {
    const user = userEvent.setup();
    const { container } = render(<CompletionStampDemo />);
    await user.click(screen.getByRole("button", { name: "한 잔 더" }));
    expect(screen.getByRole("status")).toHaveTextContent("미션을 끝냈어요");
    expect(container.querySelector(".-rotate-12")).toHaveTextContent("완료");
  });
});

describe("SendAnimation", () => {
  it("sends the typed message and enables send only with text", async () => {
    const user = userEvent.setup();
    render(<SendButtonDemo />);
    const send = screen.getByRole("button", { name: "보내기" });
    expect(send).toBeDisabled();
    await user.type(screen.getByRole("textbox", { name: "메시지" }), "곧 도착해요");
    await user.click(send);
    expect(screen.getByRole("list", { name: "대화" })).toHaveTextContent("곧 도착해요");
    expect(screen.getByRole("textbox", { name: "메시지" })).toHaveValue("");
  });
});
