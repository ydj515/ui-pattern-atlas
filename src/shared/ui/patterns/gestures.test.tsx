import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { DoubleTapDemo } from "@/entities/pattern/catalog/double-tap/DoubleTapDemo";
import { DragAndDropDemo } from "@/entities/pattern/catalog/drag-and-drop/DragAndDropDemo";
import { EdgeSwipeDemo } from "@/entities/pattern/catalog/edge-swipe/EdgeSwipeDemo";
import { LongPressDemo } from "@/entities/pattern/catalog/long-press/LongPressDemo";
import { MomentumScrollDemo } from "@/entities/pattern/catalog/momentum-scrolling/MomentumScrollDemo";
import { PinchToZoomDemo } from "@/entities/pattern/catalog/pinch-to-zoom/PinchToZoomDemo";
import { ScrollBounceDemo } from "@/entities/pattern/catalog/scroll-bounce/ScrollBounceDemo";
import { SlideToUnlockDemo } from "@/entities/pattern/catalog/slide-to-unlock/SlideToUnlockDemo";
import { SwipeNavigationDemo } from "@/entities/pattern/catalog/swipe-navigation/SwipeNavigationDemo";
import { SwipeToDeleteDemo } from "@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteDemo";
import { SwipeToDismissDemo } from "@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissDemo";
import { TapTargetDemo } from "@/entities/pattern/catalog/tap/TapTargetDemo";

afterEach(() => {
  vi.useRealTimers();
});

describe("SwipeToDelete", () => {
  it("deletes from the keyboard-reachable button and undoes it", async () => {
    const user = userEvent.setup();
    render(<SwipeToDeleteDemo />);
    await user.click(screen.getByRole("button", { name: "장보기 삭제" }));
    expect(screen.queryByText("장보기", { selector: "p" })).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("장보기 삭제됨");
    await user.click(screen.getByRole("button", { name: "되돌리기" }));
    const rows = screen.getAllByRole("listitem").map((row) => row.textContent);
    expect(rows[1]).toContain("장보기");
  });

  it("deletes after a long swipe", () => {
    render(<SwipeToDeleteDemo />);
    const row = screen.getByText("운동 30분").parentElement!;
    Object.defineProperty(row, "offsetWidth", { value: 200 });
    fireEvent.pointerDown(row, { clientX: 190, pointerId: 1 });
    fireEvent.pointerMove(row, { clientX: 20, pointerId: 1 });
    fireEvent.pointerUp(row, { clientX: 20, pointerId: 1 });
    expect(screen.queryByText("운동 30분", { selector: "p" })).not.toBeInTheDocument();
  });
});

describe("DragAndDrop", () => {
  it("moves a card with its move button and announces it", async () => {
    const user = userEvent.setup();
    render(<DragAndDropDemo />);
    await user.click(screen.getByRole("button", { name: "디자인 검토, 완료로 옮기기" }));
    const done = screen.getByRole("region", { name: "완료" });
    expect(within(done).getByText("디자인 검토")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("디자인 검토 → 완료");
  });

  it("accepts a dropped card", () => {
    render(<DragAndDropDemo />);
    const done = screen.getByRole("region", { name: "완료" });
    fireEvent.drop(done, { dataTransfer: { getData: () => "배포 준비" } });
    expect(within(done).getByText("배포 준비")).toBeInTheDocument();
  });
});

describe("LongPress", () => {
  it("opens the menu after holding and focuses the first action", () => {
    vi.useFakeTimers();
    render(<LongPressDemo />);
    const bubble = screen.getByRole("button", { name: "메시지, 길게 눌러 더 보기" });
    fireEvent.pointerDown(bubble, { clientX: 10, clientY: 10 });
    act(() => vi.advanceTimersByTime(500));
    expect(screen.getByRole("menuitem", { name: "답장" })).toHaveFocus();
    fireEvent.click(screen.getByRole("menuitem", { name: "고정" }));
    expect(screen.getByRole("status")).toHaveTextContent("고정 선택함");
  });

  it("cancels the hold when the finger moves and opens with Shift+F10", () => {
    vi.useFakeTimers();
    render(<LongPressDemo />);
    const bubble = screen.getByRole("button", { name: "메시지, 길게 눌러 더 보기" });
    fireEvent.pointerDown(bubble, { clientX: 10, clientY: 10 });
    fireEvent.pointerMove(bubble, { clientX: 10, clientY: 40 });
    act(() => vi.advanceTimersByTime(600));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    fireEvent.keyDown(bubble, { key: "F10", shiftKey: true });
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
});

describe("SwipeToDismiss", () => {
  it("closes on a long drag and returns focus", async () => {
    const user = userEvent.setup();
    render(<SwipeToDismissDemo />);
    await user.click(screen.getByRole("button", { name: "공유하기" }));
    const sheet = screen.getByRole("dialog", { name: "공유" });
    const handle = sheet.firstElementChild!;
    fireEvent.pointerDown(handle, { clientY: 0 });
    fireEvent.pointerMove(handle, { clientY: 30 });
    fireEvent.pointerUp(handle, { clientY: 30 });
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.pointerDown(handle, { clientY: 0 });
    fireEvent.pointerMove(handle, { clientY: 120 });
    fireEvent.pointerUp(handle, { clientY: 120 });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "공유하기" })).toHaveFocus();
  });

  it("closes with Escape", async () => {
    const user = userEvent.setup();
    render(<SwipeToDismissDemo />);
    await user.click(screen.getByRole("button", { name: "공유하기" }));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

describe("PinchToZoom", () => {
  it("zooms with buttons and resets", async () => {
    const user = userEvent.setup();
    render(<PinchToZoomDemo />);
    expect(screen.getByRole("button", { name: "축소" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "확대" }));
    expect(screen.getByRole("img", { name: "매장 위치 지도, 150%" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "원래 크기" }));
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("zooms with two pointers spreading apart", () => {
    render(<PinchToZoomDemo />);
    const map = screen.getByRole("img");
    fireEvent.pointerDown(map, { pointerId: 1, clientX: 100, clientY: 100 });
    fireEvent.pointerDown(map, { pointerId: 2, clientX: 120, clientY: 100 });
    fireEvent.pointerMove(map, { pointerId: 2, clientX: 140, clientY: 100 });
    expect(screen.getByText("200%")).toBeInTheDocument();
  });
});

describe("SwipeNavigation", () => {
  it("moves with the next button and updates the title", async () => {
    const user = userEvent.setup();
    render(<SwipeNavigationDemo />);
    expect(screen.getByRole("heading", { name: "오늘" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByRole("heading", { name: "내일" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "이전" })).toBeEnabled();
  });
});

describe("DoubleTap", () => {
  it("likes on a double tap and keeps it liked", () => {
    render(<DoubleTapDemo />);
    const photo = screen.getByRole("img", { name: "바다 사진" });
    fireEvent.pointerUp(photo);
    fireEvent.pointerUp(photo);
    const like = screen.getByRole("button", { name: /좋아요/ });
    expect(like).toHaveAttribute("aria-pressed", "true");
    expect(like).toHaveTextContent("좋아요 13");
    fireEvent.pointerUp(photo);
    fireEvent.pointerUp(photo);
    expect(like).toHaveAttribute("aria-pressed", "true");
  });
});

describe("Tap", () => {
  it("shows the hit area and closes the alert", async () => {
    const user = userEvent.setup();
    render(<TapTargetDemo />);
    await user.click(screen.getByRole("checkbox", { name: "누르는 영역 보기" }));
    const close = screen.getByRole("button", { name: "알림 닫기" });
    expect(close).toHaveClass("outline-dashed", "min-h-11", "min-w-11");
    await user.click(close);
    expect(screen.getByRole("status")).toHaveTextContent("알림을 닫았어요");
  });
});

describe("EdgeSwipe", () => {
  it("opens from the menu button and switches folder", async () => {
    const user = userEvent.setup();
    render(<EdgeSwipeDemo />);
    await user.click(screen.getByRole("button", { name: "편지함 열기" }));
    await user.click(
      within(screen.getByRole("navigation", { name: "편지함" })).getByRole("button", {
        name: "보낸 편지함",
      }),
    );
    expect(screen.getByRole("heading", { name: "보낸 편지함" })).toBeInTheDocument();
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("opens only when the drag starts at the edge", () => {
    render(<EdgeSwipeDemo />);
    const area = screen.getByRole("heading").closest("header")!.parentElement!;
    fireEvent.pointerDown(area, { clientX: 100 });
    fireEvent.pointerMove(area, { clientX: 250 });
    fireEvent.pointerUp(area, { clientX: 250 });
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    fireEvent.pointerDown(area, { clientX: 5 });
    fireEvent.pointerMove(area, { clientX: 150 });
    fireEvent.pointerUp(area, { clientX: 150 });
    expect(screen.getByRole("navigation", { name: "편지함" })).toBeInTheDocument();
  });
});

describe("MomentumScroll", () => {
  it("is a focusable scroll region with a momentum switch", async () => {
    const user = userEvent.setup();
    render(<MomentumScrollDemo />);
    const region = screen.getByRole("region", { name: "재생 목록" });
    expect(region).toHaveAttribute("tabindex", "0");
    expect(region).toHaveClass("overscroll-contain");
    await user.click(screen.getByRole("checkbox", { name: "관성 끄기" }));
    expect(screen.getByRole("checkbox", { name: "관성 끄기" })).toBeChecked();
  });
});

describe("ScrollBounce", () => {
  it("stretches past the top and springs back on release", () => {
    render(<ScrollBounceDemo />);
    const region = screen.getByRole("region", { name: "알림" });
    const content = region.firstElementChild as HTMLElement;
    fireEvent.pointerDown(region, { clientY: 0 });
    fireEvent.pointerMove(region, { clientY: 60 });
    expect(content.style.transform).toBe("translateY(20px)");
    fireEvent.pointerUp(region, { clientY: 60 });
    expect(content.style.transform).toBe("translateY(0px)");
  });
});

describe("SlideToUnlock", () => {
  it("unlocks only when the knob is slid to the end", () => {
    render(<SlideToUnlockDemo />);
    const slider = screen.getByRole("slider", { name: "잠금 해제" });
    fireEvent.pointerDown(slider, { clientX: 200 });
    fireEvent.change(slider, { target: { value: "100" } });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    fireEvent.pointerUp(slider);
    fireEvent.pointerDown(slider, { clientX: 10 });
    fireEvent.change(slider, { target: { value: "60" } });
    fireEvent.pointerUp(slider);
    expect(slider).toHaveValue("0");
    fireEvent.pointerDown(slider, { clientX: 10 });
    fireEvent.change(slider, { target: { value: "100" } });
    expect(screen.getByRole("status")).toHaveTextContent("잠금이 해제됐어요");
  });
});
