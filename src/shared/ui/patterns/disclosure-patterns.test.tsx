import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CollapsiblePanelDemo } from "@/entities/pattern/catalog/collapsible-panel/CollapsiblePanelDemo";
import { DisclosureDemo } from "@/entities/pattern/catalog/disclosure/DisclosureDemo";
import { ScrollableTabsDemo } from "@/entities/pattern/catalog/scrollable-tabs/ScrollableTabsDemo";
import { TreeViewDemo } from "@/entities/pattern/catalog/tree-view/TreeViewDemo";
import { ReadMore } from "@/shared/ui/patterns/read-more/ReadMore";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("ReadMore", () => {
  it("shows the toggle only when the text overflows", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(120);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(72);
    const user = userEvent.setup();
    render(<ReadMore>긴 소개 글</ReadMore>);
    const button = screen.getByRole("button", { name: "더 보기" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(screen.getByRole("button", { name: "접기" })).toHaveAttribute("aria-expanded", "true");
  });

  it("hides the toggle for short text", () => {
    render(<ReadMore>짧은 글</ReadMore>);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

describe("Disclosure", () => {
  it("opens and closes one block", async () => {
    const user = userEvent.setup();
    render(<DisclosureDemo />);
    const button = screen.getByRole("button", { name: /환불은 언제 되나요/ });
    expect(screen.queryByText(/1~3일 안에/)).not.toBeVisible();
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/1~3일 안에/)).toBeVisible();
  });
});

describe("TreeView", () => {
  it("moves, opens and selects with the keyboard", async () => {
    const user = userEvent.setup();
    render(<TreeViewDemo />);
    const tree = screen.getByRole("tree", { name: "프로젝트 파일" });
    const logo = within(tree).getByRole("treeitem", { name: /로고.svg/ });
    expect(logo).toHaveAttribute("aria-selected", "true");
    logo.focus();
    await user.keyboard("{ArrowDown}");
    const icons = within(tree).getByRole("treeitem", { name: /아이콘/ });
    expect(icons).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(icons).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{ArrowRight}{Enter}");
    expect(within(tree).getByRole("treeitem", { name: /홈.svg/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("열린 파일: 홈.svg")).toBeInTheDocument();
    await user.keyboard("{ArrowLeft}");
    expect(icons).toHaveFocus();
  });
});

describe("CollapsiblePanel", () => {
  it("folds to a rail and opens again", async () => {
    const user = userEvent.setup();
    render(<CollapsiblePanelDemo />);
    const toggle = screen.getByRole("button", { name: "속성 패널 접기" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAccessibleName("속성 패널 펼치기");
    expect(screen.queryByText("너비")).not.toBeVisible();
  });
});

describe("ScrollableTabs", () => {
  it("follows the tabs keyboard pattern", async () => {
    const user = userEvent.setup();
    render(<ScrollableTabsDemo />);
    const first = screen.getByRole("tab", { name: "전체" });
    first.focus();
    await user.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "홈웨어" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "홈웨어" })).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(first).toHaveAttribute("aria-selected", "true");
    await user.click(screen.getByRole("tab", { name: "가방" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("가방 상품을 보여 드려요");
  });
});
