import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { findPatternBySlug } from "@/entities/pattern/catalog";
import { CopyPageButton } from "@/features/copy-page/ui/CopyPageButton";

const pattern = findPatternBySlug("tabs");
if (!pattern) throw new Error("Missing pattern: tabs");

function mockClipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("CopyPageButton", () => {
  it("copies the page as Markdown and confirms it", async () => {
    const writeText = vi.fn<(text: string) => Promise<void>>(() => Promise.resolve());
    mockClipboard(writeText);
    render(<CopyPageButton pattern={pattern} />);

    await userEvent.click(screen.getByRole("button", { name: "페이지 복사" }));

    expect(await screen.findByText("복사됨")).toBeInTheDocument();
    const copied = writeText.mock.calls[0]?.[0] ?? "";
    expect(copied).toContain("# 탭 (Tabs)");
    expect(copied).toContain("## Implementation");
  });

  it("reports a failure when the clipboard is unavailable", async () => {
    mockClipboard(() => Promise.reject(new Error("denied")));
    render(<CopyPageButton pattern={pattern} />);

    await userEvent.click(screen.getByRole("button", { name: "페이지 복사" }));

    expect(await screen.findByText("복사 실패")).toBeInTheDocument();
  });

  it("opens a menu with the copy and view actions and closes it with Escape", async () => {
    render(<CopyPageButton pattern={pattern} />);
    const trigger = screen.getByRole("button", { name: "더 보기" });

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const items = screen.getAllByRole("menuitem");
    expect(items.map((item) => item.textContent)).toEqual([
      expect.stringContaining("페이지 복사"),
      expect.stringContaining("Markdown으로 보기"),
    ]);
    expect(items[0]).toHaveFocus();

    await userEvent.keyboard("{ArrowDown}");
    expect(items[1]).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("copies from the menu item", async () => {
    const writeText = vi.fn<(text: string) => Promise<void>>(() => Promise.resolve());
    mockClipboard(writeText);
    render(<CopyPageButton pattern={pattern} />);

    await userEvent.click(screen.getByRole("button", { name: "더 보기" }));
    await userEvent.click(screen.getByRole("menuitem", { name: /페이지 복사/ }));

    expect(await screen.findByText("복사됨")).toBeInTheDocument();
    expect(writeText).toHaveBeenCalledOnce();
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens the Markdown in a new tab", async () => {
    const tab = { location: { href: "" }, close: vi.fn() };
    vi.spyOn(window, "open").mockReturnValue(tab as unknown as Window);
    URL.createObjectURL = vi.fn(() => "blob:markdown");
    URL.revokeObjectURL = vi.fn();
    render(<CopyPageButton pattern={pattern} />);

    await userEvent.click(screen.getByRole("button", { name: "더 보기" }));
    await userEvent.click(screen.getByRole("menuitem", { name: /Markdown으로 보기/ }));

    await vi.waitFor(() => expect(tab.location.href).toBe("blob:markdown"));
  });
});
