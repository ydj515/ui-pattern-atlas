import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Accordion } from "./accordion/Accordion";
import { AlertBanner } from "./alert-banner/AlertBanner";
import { Breadcrumb } from "./breadcrumb/Breadcrumb";
import { TextField } from "./inline-validation/TextField";
import { ModalDialog } from "./modal-dialog/ModalDialog";
import { Popover } from "./popover/Popover";
import { Switch } from "./switch/Switch";
import { Tabs } from "./tabs/Tabs";
import { ToastProvider, useToast } from "./toast/Toast";
import { Tooltip } from "./tooltip/Tooltip";

afterEach(() => {
  vi.useRealTimers();
});

describe("ModalDialog", () => {
  function Harness() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          open
        </button>
        <ModalDialog
          open={open}
          onClose={() => setOpen(false)}
          title="삭제할까요?"
          description="복구할 수 없어요."
        >
          <button type="button" onClick={() => setOpen(false)}>
            취소
          </button>
        </ModalDialog>
      </>
    );
  }

  it("opens with an accessible name and description, and closes on cancel", async () => {
    render(<Harness />);
    await userEvent.click(screen.getByRole("button", { name: "open" }));
    const dialog = screen.getByRole("dialog", { name: "삭제할까요?" });
    expect(dialog).toHaveAccessibleDescription("복구할 수 없어요.");
    expect(dialog).toHaveAttribute("open");

    await userEvent.click(screen.getByRole("button", { name: "취소" }));
    expect(dialog).not.toHaveAttribute("open");
  });

  it("asks the parent to close on Escape", async () => {
    const onClose = vi.fn();
    render(<ModalDialog open onClose={onClose} title="제목" />);
    const dialog = screen.getByRole("dialog");
    dialog.dispatchEvent(new Event("cancel", { cancelable: true }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Tabs", () => {
  const items = [
    { id: "a", label: "첫째", content: "A 내용" },
    { id: "b", label: "둘째", content: "B 내용" },
    { id: "c", label: "셋째", content: "C 내용" },
  ];

  it("moves selection and focus with arrow, Home and End keys", async () => {
    const onTabChange = vi.fn();
    render(<Tabs label="예시" items={items} onTabChange={onTabChange} />);
    const first = screen.getByRole("tab", { name: "첫째" });
    expect(first).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("A 내용");

    first.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "둘째" })).toHaveFocus();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("B 내용");

    await userEvent.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "셋째" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    expect(first).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    expect(screen.getByRole("tab", { name: "셋째" })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    expect(first).toHaveFocus();
    expect(onTabChange).toHaveBeenLastCalledWith("a");
  });

  it("keeps only the selected tab in the tab sequence", () => {
    render(<Tabs label="예시" items={items} defaultTabId="b" />);
    expect(screen.getByRole("tab", { name: "둘째" })).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("tab", { name: "첫째" })).toHaveAttribute("tabindex", "-1");
  });
});

describe("Accordion", () => {
  const items = [
    { id: "one", title: "질문 1", content: "답변 1" },
    { id: "two", title: "질문 2", content: "답변 2" },
  ];

  it("opens one section at a time by default", async () => {
    render(<Accordion items={items} defaultOpenIds={["one"]} />);
    const first = screen.getByRole("button", { name: "질문 1" });
    const second = screen.getByRole("button", { name: "질문 2" });
    expect(first).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("region", { name: "질문 2" })).toBeVisible();

    await userEvent.click(second);
    expect(second).toHaveAttribute("aria-expanded", "false");
  });

  it("can keep several sections open", async () => {
    render(<Accordion items={items} allowMultiple headingLevel={2} />);
    await userEvent.click(screen.getByRole("button", { name: "질문 1" }));
    await userEvent.click(screen.getByRole("button", { name: "질문 2" }));
    expect(screen.getAllByRole("region")).toHaveLength(2);
    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(2);
  });
});

describe("Switch", () => {
  it("toggles through its label and exposes the checked state", async () => {
    const onCheckedChange = vi.fn();
    render(
      <Switch
        label="푸시 알림"
        description="설명"
        checked={false}
        onCheckedChange={onCheckedChange}
      />,
    );
    const control = screen.getByRole("switch", { name: "푸시 알림" });
    expect(control).toHaveAttribute("aria-checked", "false");
    expect(control).toHaveAccessibleDescription("설명");
    await userEvent.click(screen.getByText("푸시 알림"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", async () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="혜택" checked onCheckedChange={onCheckedChange} disabled />);
    await userEvent.click(screen.getByRole("switch", { name: "혜택" }));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });
});

describe("TextField", () => {
  it("links the hint and error and marks the input invalid", () => {
    render(<TextField label="이메일" description="힌트" error="형식이 올바르지 않아요" />);
    const input = screen.getByRole("textbox", { name: "이메일" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    // The decorative "!" is aria-hidden, so only the words are announced.
    expect(input).toHaveAccessibleDescription("힌트 형식이 올바르지 않아요");
  });

  it("is valid without an error", () => {
    render(<TextField label="이름" />);
    expect(screen.getByRole("textbox", { name: "이름" })).not.toHaveAttribute("aria-invalid");
  });
});

describe("Popover", () => {
  it("opens, moves focus in, and returns focus on Escape", async () => {
    render(
      <Popover trigger="도움말" title="요금 안내">
        내용
      </Popover>,
    );
    const trigger = screen.getByRole("button", { name: "도움말" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "요금 안내" })).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveFocus();
  });

  it("closes on pointer down outside", async () => {
    render(
      <div>
        <p>바깥</p>
        <Popover trigger="도움말" title="요금 안내">
          내용
        </Popover>
      </div>,
    );
    await userEvent.click(screen.getByRole("button", { name: "도움말" }));
    await userEvent.click(screen.getByText("바깥"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

describe("Tooltip", () => {
  it("describes its trigger, shows on focus and hides on Escape", async () => {
    render(
      <Tooltip content="세금 전 금액이에요">
        {(props) => (
          <button type="button" aria-label="안내" {...props}>
            i
          </button>
        )}
      </Tooltip>,
    );
    const trigger = screen.getByRole("button", { name: "안내" });
    expect(trigger).toHaveAccessibleDescription("세금 전 금액이에요");
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    await userEvent.tab();
    expect(await screen.findByRole("tooltip")).toBeVisible();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});

describe("Toast", () => {
  function Trigger({ withAction }: { readonly withAction?: () => void }) {
    const showToast = useToast();
    return (
      <button
        type="button"
        onClick={() =>
          showToast(
            "저장했어요",
            withAction ? { action: { label: "되돌리기", onAction: withAction } } : undefined,
          )
        }
      >
        save
      </button>
    );
  }

  it("announces a message in the live region and dismisses it after the duration", () => {
    vi.useFakeTimers();
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    );
    act(() => screen.getByRole("button", { name: "save" }).click());
    const region = screen.getByRole("region", { name: "Notifications" });
    expect(region).toHaveAttribute("aria-live", "polite");
    expect(region).toHaveTextContent("저장했어요");

    act(() => vi.advanceTimersByTime(4000));
    expect(region).not.toHaveTextContent("저장했어요");
  });

  it("runs the action and dismisses the toast", async () => {
    const onUndo = vi.fn();
    render(
      <ToastProvider>
        <Trigger withAction={onUndo} />
      </ToastProvider>,
    );
    await userEvent.click(screen.getByRole("button", { name: "save" }));
    await userEvent.click(screen.getByRole("button", { name: "되돌리기" }));
    expect(onUndo).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("저장했어요")).not.toBeInTheDocument();
  });

  it("throws a helpful error outside the provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Trigger />)).toThrow("useToast must be used within a ToastProvider");
  });
});

describe("AlertBanner", () => {
  it("uses role=alert for errors and offers a dismiss button", async () => {
    const onDismiss = vi.fn();
    render(
      <AlertBanner tone="error" title="결제 실패" onDismiss={onDismiss} dismissLabel="닫기" />,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("결제 실패");
    await userEvent.click(screen.getByRole("button", { name: "닫기" }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("uses role=status for non-error tones", () => {
    render(<AlertBanner title="안내" />);
    expect(screen.getByRole("status")).toHaveTextContent("안내");
  });
});

describe("Breadcrumb", () => {
  it("marks the last item as the current page and lets the app intercept navigation", async () => {
    const onNavigate = vi.fn((_item, event: { preventDefault: () => void }) =>
      event.preventDefault(),
    );
    render(
      <Breadcrumb
        items={[
          { label: "홈", href: "/" },
          { label: "가전", href: "/electronics" },
        ]}
        onNavigate={onNavigate}
      />,
    );
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByText("가전")).toHaveAttribute("aria-current", "page");
    await userEvent.click(screen.getByRole("link", { name: "홈" }));
    expect(onNavigate).toHaveBeenCalledWith({ label: "홈", href: "/" }, expect.anything());
  });
});
