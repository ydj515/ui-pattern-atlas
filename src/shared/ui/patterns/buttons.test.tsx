import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ButtonDemo } from "@/entities/pattern/catalog/button/ButtonDemo";
import { CopyButtonDemo } from "@/entities/pattern/catalog/copy-button/CopyButtonDemo";
import { DisabledButtonDemo } from "@/entities/pattern/catalog/disabled-button/DisabledButtonDemo";
import { FabDemo } from "@/entities/pattern/catalog/fab/FabDemo";
import { HoldToConfirmDemo } from "@/entities/pattern/catalog/hold-to-confirm/HoldToConfirmDemo";
import { IconButtonDemo } from "@/entities/pattern/catalog/icon-button/IconButtonDemo";
import { LoadingButtonDemo } from "@/entities/pattern/catalog/loading-button/LoadingButtonDemo";
import { SplitButtonDemo } from "@/entities/pattern/catalog/split-button/SplitButtonDemo";
import { ToggleButtonDemo } from "@/entities/pattern/catalog/toggle-button/ToggleButtonDemo";

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("Button", () => {
  it("renders typed buttons for each level", async () => {
    const user = userEvent.setup();
    render(<ButtonDemo />);
    expect(screen.getByRole("button", { name: "저장" })).toHaveAttribute("type", "button");
    await user.click(screen.getByRole("button", { name: "나중에" }));
    expect(screen.getByRole("status")).toHaveTextContent("나중에 다시 물어볼게요");
  });
});

describe("IconButton", () => {
  it("names the icon and links the tooltip", async () => {
    const user = userEvent.setup();
    render(<IconButtonDemo />);
    const share = screen.getByRole("button", { name: "공유" });
    expect(share).toHaveAccessibleDescription("공유");
    await user.click(share);
    expect(screen.getByRole("status")).toHaveTextContent("링크를 복사했어요");
  });
});

describe("LoadingButton", () => {
  it("shows progress, success, then idle again; failure offers a retry", () => {
    vi.useFakeTimers();
    render(<LoadingButtonDemo />);
    fireEvent.click(screen.getByRole("button", { name: "저장" }));
    const busy = screen.getByRole("button", { name: "저장하는 중" });
    expect(busy).toHaveAttribute("aria-busy", "true");
    fireEvent.click(busy);
    act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByRole("status")).toHaveTextContent("저장했어요");
    act(() => vi.advanceTimersByTime(2000));
    expect(screen.getByRole("button", { name: "저장" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("checkbox", { name: "실패하게 하기" }));
    fireEvent.click(screen.getByRole("button", { name: "저장" }));
    act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByRole("button", { name: /다시 시도/ })).toBeInTheDocument();
  });
});

describe("DisabledButton", () => {
  it("stays focusable, explains why and works once the condition is met", async () => {
    const user = userEvent.setup();
    render(<DisabledButtonDemo />);
    const button = screen.getByRole("button", { name: "가입하기" });
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveAccessibleDescription("약관에 동의해야 가입할 수 있어요");

    await user.click(button);
    expect(screen.getByRole("alert")).toHaveTextContent("약관에 동의해야 가입할 수 있어요");
    expect(screen.getByRole("status")).toHaveTextContent("");

    await user.click(screen.getByRole("checkbox", { name: "이용약관에 동의해요" }));
    await user.click(button);
    expect(screen.getByRole("status")).toHaveTextContent("가입했어요");
  });
});

describe("ToggleButton", () => {
  it("keeps its name and toggles aria-pressed", async () => {
    const user = userEvent.setup();
    render(<ToggleButtonDemo />);
    const bold = screen.getByRole("button", { name: "굵게" });
    await user.click(bold);
    expect(bold).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("오늘 회의는 3시에 시작해요")).toHaveClass("font-bold");
    await user.click(bold);
    expect(bold).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("toolbar", { name: "글자 모양" })).toBeInTheDocument();
  });
});

describe("FAB", () => {
  it("collapses to an icon with the same name while scrolling down", async () => {
    const user = userEvent.setup();
    render(<FabDemo />);
    const list = screen.getByRole("list", { name: "받은 메일함" });
    list.scrollTop = 120;
    fireEvent.scroll(list);
    const fab = screen.getByRole("button", { name: "새 메일" });
    expect(fab).toHaveAttribute("aria-label", "새 메일");
    list.scrollTop = 60;
    fireEvent.scroll(list);
    expect(screen.getByRole("button", { name: "새 메일" })).not.toHaveAttribute("aria-label");
    await user.click(screen.getByRole("button", { name: "새 메일" }));
    expect(screen.getByRole("status")).toHaveTextContent("새 메일을 쓰고 있어요");
  });
});

describe("CopyButton", () => {
  it("copies and confirms, or says it could not", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    render(<CopyButtonDemo />);
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "복사" }));
    });
    expect(writeText).toHaveBeenCalledWith("https://atlas.example/invite/7KQ2");
    expect(screen.getByRole("status")).toHaveTextContent("복사됨");

    writeText.mockRejectedValueOnce(new Error("blocked"));
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /복사/ }));
    });
    expect(screen.getByRole("status")).toHaveTextContent("복사하지 못했어요");
  });
});

describe("SplitButton", () => {
  it("runs the main action or one from the menu with the keyboard", async () => {
    const user = userEvent.setup();
    render(<SplitButtonDemo />);
    await user.click(screen.getByRole("button", { name: "저장" }));
    expect(screen.getByRole("status")).toHaveTextContent("저장했어요");

    const toggle = screen.getByRole("button", { name: "저장 옵션" });
    await user.click(toggle);
    expect(screen.getByRole("menuitem", { name: "사본으로 저장" })).toHaveFocus();
    await user.keyboard("{ArrowDown}{Enter}");
    expect(screen.getByRole("status")).toHaveTextContent("PDF로 내보냈어요");
    expect(toggle).toHaveFocus();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});

describe("HoldToConfirm", () => {
  it("fires only after holding, and cancels on early release", () => {
    vi.useFakeTimers();
    render(<HoldToConfirmDemo />);
    const button = screen.getByRole("button", { name: "꾹 눌러 삭제" });
    expect(button).toHaveAccessibleDescription("1.5초 동안 누르고 있으면 삭제돼요");

    fireEvent.pointerDown(button);
    act(() => vi.advanceTimersByTime(800));
    fireEvent.pointerUp(button);
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    fireEvent.keyDown(button, { key: " " });
    act(() => vi.advanceTimersByTime(1500));
    expect(screen.getByRole("status")).toHaveTextContent("프로젝트를 삭제했어요");
  });
});
