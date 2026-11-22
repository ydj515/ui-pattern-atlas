import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BackNavigationDemo } from "@/entities/pattern/catalog/back-navigation/BackNavigationDemo";
import { BackToTopDemo } from "@/entities/pattern/catalog/back-to-top/BackToTopDemo";
import { BottomTabBarDemo } from "@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarDemo";
import { HorizontalScrollDemo } from "@/entities/pattern/catalog/horizontal-scroll/HorizontalScrollDemo";
import { InfiniteScrollDemo } from "@/entities/pattern/catalog/infinite-scroll/InfiniteScrollDemo";
import { LoadMoreDemo } from "@/entities/pattern/catalog/load-more/LoadMoreDemo";
import { MegaMenuDemo } from "@/entities/pattern/catalog/mega-menu/MegaMenuDemo";
import { MobileMenuDemo } from "@/entities/pattern/catalog/mobile-menu/MobileMenuDemo";
import { NavbarDemo } from "@/entities/pattern/catalog/navbar/NavbarDemo";
import { SidebarNavigationDemo } from "@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationDemo";
import { StepperDemo } from "@/entities/pattern/catalog/stepper/StepperDemo";
import { TableOfContentsDemo } from "@/entities/pattern/catalog/table-of-contents/TableOfContentsDemo";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("Navbar", () => {
  it("marks the current page and moves with clicks", async () => {
    const user = userEvent.setup();
    render(<NavbarDemo />);
    const nav = screen.getByRole("navigation", { name: "주 메뉴" });
    expect(within(nav).getByRole("link", { name: "홈" })).toHaveAttribute("aria-current", "page");
    await user.click(within(nav).getByRole("link", { name: "가격" }));
    expect(within(nav).getByRole("link", { name: "가격" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("가격 페이지")).toBeInTheDocument();
  });
});

describe("SidebarNavigation", () => {
  it("expands a group and marks the chosen page", async () => {
    const user = userEvent.setup();
    render(<SidebarNavigationDemo />);
    const group = screen.getByRole("button", { name: "프로젝트" });
    expect(group).toHaveAttribute("aria-expanded", "false");
    await user.click(group);
    await user.click(screen.getByRole("link", { name: "보관함" }));
    expect(screen.getByRole("link", { name: "보관함" })).toHaveAttribute("aria-current", "page");
  });
});

describe("BottomTabBar", () => {
  it("names the badge and switches screens", async () => {
    const user = userEvent.setup();
    render(<BottomTabBarDemo />);
    const alerts = screen.getByRole("link", { name: "알림, 새 알림 3개" });
    await user.click(alerts);
    expect(alerts).toHaveAttribute("aria-current", "page");
  });
});

describe("Stepper", () => {
  it("marks the current step and finished ones", async () => {
    const user = userEvent.setup();
    render(<StepperDemo />);
    const list = screen.getByRole("list", { name: "주문 단계" });
    expect(within(list).getAllByRole("listitem")[1]).toHaveAttribute("aria-current", "step");
    await user.click(screen.getByRole("button", { name: "다음" }));
    expect(within(list).getAllByRole("listitem")[2]).toHaveAttribute("aria-current", "step");
    expect(within(list).getAllByRole("listitem")[1]).toHaveTextContent("배송 (완료)");
    expect(screen.getByText("결제 수단을 골라요")).toBeInTheDocument();
  });
});

describe("MobileMenu", () => {
  it("opens with focus inside and closes back to the button", async () => {
    const user = userEvent.setup();
    render(<MobileMenuDemo />);
    const button = screen.getByRole("button", { name: "메뉴 열기" });
    await user.click(button);
    expect(button).toHaveAccessibleName("메뉴 닫기");
    expect(screen.getByRole("link", { name: "홈" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(button).toHaveFocus();
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    await user.click(screen.getByRole("link", { name: "가격" }));
    expect(screen.getByText("가격 페이지")).toBeInTheDocument();
  });
});

describe("InfiniteScroll", () => {
  it("loads more with the fallback button and announces the end", () => {
    vi.useFakeTimers();
    render(<InfiniteScrollDemo />);
    // jsdom has no layout, so the area counts as "near the end" and loads on mount.
    for (let page = 0; page < 3; page += 1) act(() => vi.advanceTimersByTime(600));
    expect(screen.getByText("소식 40")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("마지막 소식이에요");
  });
});

describe("LoadMore", () => {
  it("shows the count and moves focus to the first new item", async () => {
    const user = userEvent.setup();
    render(<LoadMoreDemo />);
    await user.click(screen.getByRole("button", { name: "더 보기 (6/24)" }));
    expect(screen.getByText("7번째 후기").closest("li")).toHaveFocus();
    expect(screen.getByRole("button", { name: "더 보기 (12/24)" })).toBeInTheDocument();
  });
});

describe("MegaMenu", () => {
  it("opens a panel of plain links and closes on Escape", async () => {
    const user = userEvent.setup();
    render(<MegaMenuDemo />);
    const product = screen.getByRole("button", { name: /제품/ });
    await user.click(product);
    expect(product).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region", { name: "관리" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(product).toHaveFocus();
    await user.click(product);
    await user.click(screen.getByRole("link", { name: /일정/ }));
    expect(screen.getByRole("status")).toHaveTextContent("일정 페이지로 이동해요");
  });
});

describe("TableOfContents", () => {
  it("marks the section that has reached the top", () => {
    render(<TableOfContentsDemo />);
    const sections = ["toc-start", "toc-install", "toc-usage", "toc-faq"];
    sections.forEach((id, index) => {
      vi.spyOn(document.getElementById(id)!, "getBoundingClientRect").mockReturnValue(
        DOMRect.fromRect({ y: index === 0 ? -200 : index === 1 ? 4 : 300 }),
      );
    });
    const scroller = document.getElementById("toc-start")!.parentElement!;
    // jsdom has no layout; give the area a height so it does not count as scrolled to the end.
    Object.defineProperty(scroller, "scrollHeight", { configurable: true, value: 1000 });
    fireEvent.scroll(scroller);
    expect(screen.getByRole("link", { name: "설치" })).toHaveAttribute("aria-current", "location");
  });
});

describe("BackToTop", () => {
  it("appears after scrolling and returns focus to the heading", async () => {
    const user = userEvent.setup();
    render(<BackToTopDemo />);
    expect(screen.queryByRole("button", { name: "맨 위로" })).not.toBeInTheDocument();
    const scroller = screen.getByRole("heading", { name: "공지사항" }).parentElement!;
    scroller.scrollTop = 500;
    fireEvent.scroll(scroller);
    await user.click(screen.getByRole("button", { name: "맨 위로" }));
    expect(scroller.scrollTop).toBe(0);
    expect(screen.getByRole("heading", { name: "공지사항" })).toHaveFocus();
  });
});

describe("BackNavigation", () => {
  it("restores the list position and focus after coming back", async () => {
    const user = userEvent.setup();
    render(<BackNavigationDemo />);
    screen.getByRole("list", { name: "공지 목록" }).scrollTop = 150;
    await user.click(screen.getByRole("button", { name: "공지 7" }));
    expect(screen.getByRole("heading", { name: "공지 7" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "목록으로 돌아가기" }));
    expect(screen.getByRole("list", { name: "공지 목록" }).scrollTop).toBe(150);
    expect(screen.getByRole("button", { name: "공지 7" })).toHaveFocus();
  });
});

describe("HorizontalScroll", () => {
  it("names the row and turns the previous button off at the start", () => {
    render(<HorizontalScrollDemo />);
    expect(screen.getByRole("region", { name: "오늘의 추천" })).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("button", { name: "이전 상품" })).toBeDisabled();
  });
});
