import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { CardGridDemo } from "@/entities/pattern/catalog/card-grid/CardGridDemo";
import { DashboardLayoutDemo } from "@/entities/pattern/catalog/dashboard-layout/DashboardLayoutDemo";
import { FullBleedDemo } from "@/entities/pattern/catalog/full-bleed/FullBleedDemo";
import { HeroSectionDemo } from "@/entities/pattern/catalog/hero-section/HeroSectionDemo";
import { MagazineLayoutDemo } from "@/entities/pattern/catalog/magazine-layout/MagazineLayoutDemo";
import { SafeAreaDemo } from "@/entities/pattern/catalog/safe-area/SafeAreaDemo";
import { SidebarLayoutDemo } from "@/entities/pattern/catalog/sidebar-layout/SidebarLayoutDemo";
import { SplitViewDemo } from "@/entities/pattern/catalog/split-view/SplitViewDemo";
import { StickyActionBarDemo } from "@/entities/pattern/catalog/sticky-action-bar/StickyActionBarDemo";
import { StickyHeaderDemo } from "@/entities/pattern/catalog/sticky-header/StickyHeaderDemo";
import { ZPatternDemo } from "@/entities/pattern/catalog/z-pattern/ZPatternDemo";
import { ResponsiveGrid } from "@/shared/ui/patterns/responsive-grid/ResponsiveGrid";

describe("StickyHeader", () => {
  it("adds its divider once the list scrolls", () => {
    render(<StickyHeaderDemo />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("border-transparent");
    const scroller = header.parentElement!;
    scroller.scrollTop = 40;
    fireEvent.scroll(scroller);
    expect(header).toHaveClass("shadow-sm");
  });
});

describe("StickyActionBar", () => {
  it("keeps the action and confirms it", async () => {
    const user = userEvent.setup();
    render(<StickyActionBarDemo />);
    await user.click(screen.getByRole("button", { name: "장바구니 담기" }));
    expect(screen.getByRole("button", { name: "담았어요" })).toBeInTheDocument();
  });
});

describe("SplitView", () => {
  it("offers a way back to the list in the detail pane", async () => {
    const user = userEvent.setup();
    render(<SplitViewDemo />);
    await user.click(screen.getByRole("button", { name: "회의록 공유해요" }));
    expect(screen.getByRole("heading", { name: "회의록 공유해요" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /목록/ }));
    expect(screen.getByRole("button", { name: "회의록 공유해요" })).not.toHaveAttribute(
      "aria-current",
    );
  });
});

describe("SidebarLayout", () => {
  it("names the nav and main landmarks", async () => {
    const user = userEvent.setup();
    render(<SidebarLayoutDemo />);
    const nav = screen.getByRole("navigation", { name: "워크스페이스 메뉴" });
    await user.click(within(nav).getByRole("button", { name: "결제" }));
    expect(
      within(screen.getByRole("main")).getByRole("heading", { name: "결제" }),
    ).toBeInTheDocument();
  });
});

describe("ResponsiveGrid", () => {
  it("uses an auto-fill template with the minimum column", () => {
    render(
      <ResponsiveGrid label="메뉴" minColumn={120}>
        {<li>커피</li>}
      </ResponsiveGrid>,
    );
    expect(screen.getByRole("list", { name: "메뉴" })).toHaveStyle({
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    });
  });
});

describe("SafeArea", () => {
  it("pads the edges with env() and a minimum", () => {
    render(<SafeAreaDemo />);
    expect(screen.getByText("메시지").style.paddingTop).toContain("env(safe-area-inset-top)");
  });
});

describe("HeroSection", () => {
  it("has one h1 and a primary action", async () => {
    const user = userEvent.setup();
    render(<HeroSectionDemo />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "회의록은 회의가 끝나기 전에",
    );
    await user.click(screen.getByRole("button", { name: "무료로 시작하기" }));
    expect(screen.getByRole("status")).toHaveTextContent("무료로 시작했어요");
  });
});

describe("CardGrid", () => {
  it("lists the cards", () => {
    render(<CardGridDemo />);
    expect(
      within(screen.getByRole("list", { name: "추천 상품" })).getAllByRole("listitem"),
    ).toHaveLength(3);
  });
});

describe("DashboardLayout", () => {
  it("says the change in words and switches period", async () => {
    const user = userEvent.setup();
    render(<DashboardLayoutDemo />);
    expect(screen.getByText("+8% 증가")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "이번 달" }));
    expect(screen.getByText("18,940")).toBeInTheDocument();
  });
});

describe("MagazineLayout", () => {
  it("puts the lead first and opens it", async () => {
    const user = userEvent.setup();
    render(<MagazineLayoutDemo />);
    expect(screen.getAllByRole("article")[0]).toHaveTextContent("작은 동네 책방이 살아남는 법");
    await user.click(screen.getByRole("link", { name: "작은 동네 책방이 살아남는 법" }));
    expect(screen.getByRole("status")).toHaveTextContent("기사를 열었어요");
  });
});

describe("ZPattern", () => {
  it("keeps the main action last in reading order", () => {
    render(<ZPatternDemo />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.at(-1)).toHaveTextContent("시작하기");
  });
});

describe("FullBleed", () => {
  it("marks the bleeding child and can turn it off", async () => {
    const user = userEvent.setup();
    const { container } = render(<FullBleedDemo />);
    expect(container.querySelector("[data-bleed]")).not.toBeNull();
    await user.click(screen.getByRole("checkbox", { name: "사진 끝까지 펼치기" }));
    expect(container.querySelector("[data-bleed]")).toBeNull();
  });
});
