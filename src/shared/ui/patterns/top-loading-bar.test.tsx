import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { TopLoadingBarDemo } from "@/entities/pattern/catalog/top-loading-bar/TopLoadingBarDemo";

afterEach(() => {
  vi.useRealTimers();
});

describe("TopLoadingBar", () => {
  it("shows after a short delay, keeps the page, then finishes and hides", () => {
    vi.useFakeTimers();
    render(<TopLoadingBarDemo />);
    const bar = screen.getByRole("progressbar", { hidden: true });
    expect(bar).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(screen.getByRole("link", { name: "소식" }));
    act(() => vi.advanceTimersByTime(100));
    expect(bar).toHaveAttribute("aria-hidden", "true");
    act(() => vi.advanceTimersByTime(100));
    expect(screen.getByRole("progressbar", { name: "페이지 불러오는 중" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "홈" })).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByRole("heading", { name: "소식" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(400));
    expect(bar).toHaveAttribute("aria-hidden", "true");
  });
});
