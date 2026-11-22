import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BlurUpImageDemo } from "@/entities/pattern/catalog/blur-up-image/BlurUpImageDemo";
import { DelayedSpinnerDemo } from "@/entities/pattern/catalog/delayed-spinner/DelayedSpinnerDemo";
import { LoadingOverlayDemo } from "@/entities/pattern/catalog/loading-overlay/LoadingOverlayDemo";
import { OptimisticUiDemo } from "@/entities/pattern/catalog/optimistic-ui/OptimisticUiDemo";
import { ProgressRingDemo } from "@/entities/pattern/catalog/progress-ring/ProgressRingDemo";
import { ProgressRing } from "@/shared/ui/patterns/progress-ring/ProgressRing";

afterEach(() => {
  vi.useRealTimers();
});

describe("ProgressRing", () => {
  it("is a named progressbar with a clamped value", () => {
    render(<ProgressRing value={140} label="사진 백업" />);
    const ring = screen.getByRole("progressbar", { name: "사진 백업" });
    expect(ring).toHaveAttribute("aria-valuenow", "100");
  });

  it("fills up and says when the backup is done", () => {
    vi.useFakeTimers();
    render(<ProgressRingDemo />);

    fireEvent.click(screen.getByRole("button", { name: "백업 시작" }));
    act(() => vi.advanceTimersByTime(750));
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "30");
    expect(screen.getByRole("status")).toHaveTextContent("사진 120장 백업 중");

    act(() => vi.advanceTimersByTime(2000));
    expect(screen.getByRole("status")).toHaveTextContent("백업 완료");
  });
});

describe("OptimisticUi", () => {
  it("shows the like before the server answers, then confirms it", async () => {
    vi.useFakeTimers();
    render(<OptimisticUiDemo />);
    const like = screen.getByRole("button", { name: /좋아요/ });

    fireEvent.click(like);
    expect(like).toHaveAttribute("aria-pressed", "true");
    expect(like).toHaveTextContent("13");
    expect(screen.getByText("서버에 저장된 값: 12")).toBeInTheDocument();

    await act(() => vi.advanceTimersByTimeAsync(1000));
    expect(screen.getByText("서버에 저장된 값: 13")).toBeInTheDocument();
    expect(like).toHaveAttribute("aria-pressed", "true");
  });

  it("rolls back and explains when the request fails", async () => {
    vi.useFakeTimers();
    render(<OptimisticUiDemo />);
    const like = screen.getByRole("button", { name: /좋아요/ });

    fireEvent.click(screen.getByRole("checkbox", { name: "다음 요청 실패시키기" }));
    fireEvent.click(like);
    expect(like).toHaveTextContent("13");

    await act(() => vi.advanceTimersByTimeAsync(1000));
    expect(like).toHaveAttribute("aria-pressed", "false");
    expect(like).toHaveTextContent("12");
    expect(screen.getByRole("status")).toHaveTextContent("좋아요를 반영하지 못했어요");
  });
});

describe("DelayedSpinner", () => {
  it("never shows a spinner for a fast answer", () => {
    vi.useFakeTimers();
    render(<DelayedSpinnerDemo />);

    fireEvent.click(screen.getByRole("button", { name: /빠른 응답/ }));
    act(() => vi.advanceTimersByTime(200));
    expect(screen.queryByText("불러오는 중")).not.toBeInTheDocument();
    expect(screen.getByText("주문 내역을 불러왔어요 (0.2초)")).toBeInTheDocument();
  });

  it("shows the spinner after the delay and keeps it for the minimum time", () => {
    vi.useFakeTimers();
    render(<DelayedSpinnerDemo />);

    fireEvent.click(screen.getByRole("button", { name: /느린 응답/ }));
    act(() => vi.advanceTimersByTime(399));
    expect(screen.queryByText("불러오는 중")).not.toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByRole("status")).toHaveTextContent("불러오는 중");

    act(() => vi.advanceTimersByTime(1600));
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByText("주문 내역을 불러왔어요 (2초)")).toBeInTheDocument();
  });
});

describe("LoadingOverlay", () => {
  it("makes the form inert and busy while saving", () => {
    vi.useFakeTimers();
    render(<LoadingOverlayDemo />);

    fireEvent.click(screen.getByRole("button", { name: "저장" }));
    expect(screen.getByText("저장하는 중")).toBeInTheDocument();
    expect(screen.getByText("프로필").closest("[inert]")).not.toBeNull();
    expect(screen.getByText("프로필").closest("[aria-busy]")).toHaveAttribute("aria-busy", "true");

    act(() => vi.advanceTimersByTime(1500));
    expect(screen.getByText("프로필").closest("[inert]")).toBeNull();
    expect(screen.getByText("저장했어요")).toBeInTheDocument();
  });
});

describe("BlurUpImage", () => {
  it("keeps the preview decorative and reveals the photo once it loads", () => {
    vi.useFakeTimers();
    const { container } = render(<BlurUpImageDemo />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(container.querySelector('img[aria-hidden="true"]')).toHaveAttribute("alt", "");

    act(() => vi.advanceTimersByTime(1500));
    const photo = screen.getByRole("img", { name: "해 질 무렵 산 아래로 펼쳐진 동해 바다" });
    expect(photo).toHaveClass("opacity-0");
    fireEvent.load(photo);
    expect(photo).toHaveClass("opacity-100");

    fireEvent.click(screen.getByRole("button", { name: "다시 불러오기" }));
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
