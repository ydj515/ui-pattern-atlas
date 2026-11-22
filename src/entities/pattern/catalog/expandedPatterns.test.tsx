import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BottomSheetDemo } from "@/entities/pattern/catalog/bottom-sheet/BottomSheetDemo";
import { CheckboxDemo } from "@/entities/pattern/catalog/checkbox/CheckboxDemo";
import { CompromiseEffectDemo } from "@/entities/pattern/catalog/compromise-effect/CompromiseEffectDemo";
import { DecoyEffectDemo } from "@/entities/pattern/catalog/decoy-effect/DecoyEffectDemo";
import { ErrorStateDemo } from "@/entities/pattern/catalog/error-state/ErrorStateDemo";
import { LeftDigitEffectDemo } from "@/entities/pattern/catalog/left-digit-effect/LeftDigitEffectDemo";
import { PricingPlanComparisonDemo } from "@/entities/pattern/catalog/pricing-plan-comparison/PricingPlanComparisonDemo";
import { ProgressBarDemo } from "@/entities/pattern/catalog/progress-bar/ProgressBarDemo";
import { PullToRefreshDemo } from "@/entities/pattern/catalog/pull-to-refresh/PullToRefreshDemo";
import { SpinnerDemo } from "@/entities/pattern/catalog/spinner/SpinnerDemo";
import { StrikethroughPriceDemo } from "@/entities/pattern/catalog/strikethrough-price/StrikethroughPriceDemo";
import { COMPARISON_DEMOS } from "@/entities/pattern/catalog/comparisons/ComparisonDemos";

afterEach(() => vi.useRealTimers());

describe("new pattern demos", () => {
  it("recovers from the error state and moves focus into the loaded product list", async () => {
    vi.useFakeTimers();
    render(<ErrorStateDemo />);
    expect(screen.getByRole("alert")).toHaveTextContent("상품을 불러오지 못했어요");
    const retry = screen.getByRole("button", { name: "다시 시도" });
    retry.focus();
    fireEvent.click(retry);

    expect(retry).toHaveFocus();
    expect(retry).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByRole("status")).toHaveTextContent("불러오는 중…");

    await act(async () => vi.advanceTimersByTimeAsync(700));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "상품 목록" })).toHaveFocus();
    expect(screen.getByRole("list")).toHaveTextContent("무선 이어폰");
  });

  it("loads new content after a touch crosses the threshold", async () => {
    vi.useFakeTimers();
    render(<PullToRefreshDemo />);
    const list = screen.getByRole("list");
    const start = [{ clientX: 30, clientY: 20, identifier: 1 }];
    fireEvent.touchStart(list, { touches: start });
    fireEvent.touchMove(list, { touches: [{ ...start[0], clientY: 54 }] });
    expect(screen.getByText("아래로 당기기")).toBeInTheDocument();
    fireEvent.touchEnd(list);
    expect(screen.getByRole("status")).toBeEmptyDOMElement();

    fireEvent.touchStart(list, { touches: start });
    fireEvent.touchMove(list, { touches: [{ ...start[0], clientY: 91 }] });
    expect(screen.getByText("놓아서 새로고침")).toBeInTheDocument();
    fireEvent.touchEnd(list);
    expect(screen.getByRole("status")).toHaveTextContent("새 소식을 불러오는 중");
    expect(screen.getByRole("button", { name: "새로고침" })).toBeDisabled();

    await act(async () => vi.advanceTimersByTimeAsync(800));
    expect(screen.getByRole("status")).toHaveTextContent("새로고침을 완료했어요");
    expect(within(list).getAllByRole("listitem")[0]).toHaveTextContent("새 공지가 올라왔어요");
  });

  it("can retry a failed refresh via the button and ignores cancelled gestures", async () => {
    vi.useFakeTimers();
    render(<PullToRefreshDemo />);
    const button = screen.getByRole("button", { name: "새로고침" });
    const list = screen.getByRole("list");
    fireEvent.touchStart(list, { touches: [{ clientX: 30, clientY: 20, identifier: 1 }] });
    fireEvent.touchMove(list, { touches: [{ clientX: 30, clientY: 92, identifier: 1 }] });
    expect(screen.getByText("놓아서 새로고침")).toBeInTheDocument();
    fireEvent.touchCancel(list);
    expect(screen.queryByText("놓아서 새로고침")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toBeEmptyDOMElement();

    fireEvent.click(screen.getByRole("checkbox", { name: "요청 실패 재현" }));
    fireEvent.click(button);
    await act(async () => vi.advanceTimersByTimeAsync(800));
    expect(screen.getByRole("status")).toHaveTextContent("실패했어요");
    expect(screen.queryByText("새 공지가 올라왔어요")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("checkbox", { name: "요청 실패 재현" }));
    fireEvent.click(button);
    await act(async () => vi.advanceTimersByTimeAsync(800));
    expect(screen.getByText("새 공지가 올라왔어요")).toBeInTheDocument();
  });

  it("announces indeterminate loading, result, and progress separately", async () => {
    vi.useFakeTimers();
    render(
      <>
        <SpinnerDemo />
        <ProgressBarDemo />
      </>,
    );
    fireEvent.click(screen.getByRole("button", { name: "새 소식 확인" }));
    fireEvent.click(screen.getByRole("button", { name: "업로드 시작" }));
    expect(screen.getByText("소식을 확인하고 있어요")).toHaveAttribute("role", "status");
    const bar = screen.getByRole("progressbar", { name: "포트폴리오 파일" });
    expect(bar).toHaveAttribute("value", "0");
    await act(async () => vi.advanceTimersByTimeAsync(660));
    expect(bar).toHaveAttribute("value", "60");
    await act(async () => vi.advanceTimersByTimeAsync(540));
    expect(bar).toHaveAttribute("value", "100");
    expect(screen.getByText("업로드 완료")).toBeInTheDocument();
    expect(screen.getByText("새 소식이 없어요")).toBeInTheDocument();
  });

  it("shows middle and full checkbox selection", async () => {
    render(<CheckboxDemo />);
    const all = screen.getByRole("checkbox", { name: "전체 선택" });
    await userEvent.click(screen.getByRole("checkbox", { name: "공지사항" }));
    expect(all).toBePartiallyChecked();
    await userEvent.click(all);
    expect(screen.getByRole("checkbox", { name: "이벤트 소식" })).toBeChecked();
    await userEvent.click(all);
    expect(all).not.toBeChecked();
  });

  it("selects an option and supports closing the bottom sheet", async () => {
    render(<BottomSheetDemo />);
    const trigger = screen.getByRole("button", { name: "정렬 옵션" });
    await userEvent.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "정렬 기준" });
    await userEvent.click(within(dialog).getByRole("button", { name: "낮은 가격순" }));
    expect(screen.getByRole("status")).toHaveTextContent("낮은 가격순");
    expect(dialog).not.toHaveAttribute("open");
    await userEvent.click(trigger);
    dialog.dispatchEvent(new Event("cancel", { cancelable: true }));
    await waitFor(() => expect(dialog).not.toHaveAttribute("open"));
  });

  it("distinguishes recommended from selected and displays price conditions", async () => {
    render(
      <>
        <PricingPlanComparisonDemo />
        <StrikethroughPriceDemo />
      </>,
    );
    const standard = screen.getByRole("radio", { name: /스탠다드/ });
    expect(standard).not.toBeChecked();
    await userEvent.click(standard);
    expect(screen.getByText("스탠다드 선택")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "쿠폰 적용" }));
    expect(screen.getByText("19,500원")).toBeInTheDocument();
    expect(screen.getByText("첫 주문 쿠폰")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "쿠폰 적용 취소" }));
    expect(screen.queryByText("19,500원")).not.toBeInTheDocument();
  });

  it("changes the option sets without preselecting and keeps the price difference constant", async () => {
    render(
      <>
        <CompromiseEffectDemo />
        <DecoyEffectDemo />
        <LeftDigitEffectDemo />
      </>,
    );
    const addPremium = screen.getByRole("checkbox", { name: "상위 옵션 추가" });
    await userEvent.click(addPremium);
    const premium = screen.getByRole("radio", { name: /프리미엄/ });
    expect(screen.getByText("스탠다드가 중간 옵션이 됐어요")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("checkbox", { name: "추천 표시" }));
    expect(screen.getByRole("radio", { name: /스탠다드/ })).not.toBeChecked();
    await userEvent.click(premium);
    await userEvent.click(addPremium);
    expect(screen.queryByRole("radio", { name: /프리미엄/ })).not.toBeInTheDocument();

    const addPrint = screen.getByRole("checkbox", { name: "종이 전용 옵션 추가" });
    await userEvent.click(addPrint);
    await userEvent.click(screen.getByRole("radio", { name: /^종이\s*12,900원/ }));
    expect(screen.getByText("같은 가격에 포함 혜택이 달라요")).toBeInTheDocument();
    await userEvent.click(addPrint);
    expect(screen.queryByRole("radio", { name: /^종이\s*12,900원/ })).not.toBeInTheDocument();

    expect(screen.getByText(/가격 차이 100원/)).toHaveTextContent("첫 자리가 같아요");
    await userEvent.click(screen.getByRole("checkbox", { name: "첫 자리 바꾸기" }));
    expect(screen.getByText(/가격 차이 100원/)).toHaveTextContent("첫 자리가 달라요");
  });
});

describe("comparison demos", () => {
  it.each(Object.entries(COMPARISON_DEMOS))("renders both sides for %s", (_slug, { Preview }) => {
    render(<Preview />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });

  it("applies a switch immediately and submits the checkbox change later", async () => {
    const { Preview } = COMPARISON_DEMOS["switch-checkbox"]!;
    render(<Preview />);
    const instant = within(screen.getByRole("region", { name: "토글" }));
    const draft = within(screen.getByRole("region", { name: "체크박스" }));
    await userEvent.click(instant.getByRole("switch"));
    expect(instant.getByRole("status")).toHaveTextContent("수신 켜짐");
    await userEvent.click(draft.getByRole("checkbox"));
    expect(draft.getByRole("status")).toHaveTextContent("저장되지 않은 변경");
    await userEvent.click(draft.getByRole("button", { name: "설정 저장" }));
    expect(draft.getByRole("status")).toHaveTextContent("수신 켜짐");
  });

  it("offers undo in the snackbar with the same operation and message", async () => {
    const { Preview } = COMPARISON_DEMOS["toast-snackbar"]!;
    render(<Preview />);
    const toast = within(screen.getByRole("region", { name: "토스트" }));
    const snackbar = within(screen.getByRole("region", { name: "스낵바" }));
    await userEvent.click(toast.getByRole("button", { name: "알림 보관" }));
    expect(screen.queryByRole("button", { name: "되돌리기" })).not.toBeInTheDocument();
    await userEvent.click(snackbar.getByRole("button", { name: "알림 보관" }));
    await userEvent.click(screen.getByRole("button", { name: "되돌리기" }));
    expect(snackbar.getByRole("status")).toHaveTextContent("받은 알림");
    expect(toast.getByRole("status")).toHaveTextContent("보관함");
  });
});
