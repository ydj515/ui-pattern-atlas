import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it, vi } from "vitest";

import { PATTERNS } from "@/entities/pattern/catalog";
import { ROADMAP_PATTERN_TOPICS } from "@/entities/pattern/catalog/roadmap";
import { roadmapEntryAnchor } from "@/entities/pattern/catalog/roadmapLinks";
import { COMPARISON_GUIDES } from "@/entities/pattern/catalog/comparisons/comparisonGuides";

import { routes } from "@/app/router/routes";

/** Catalog entries are the links into pattern detail pages. */
function getCardLinks() {
  return screen
    .getAllByRole("link")
    .filter((link) => /^\/(patterns|concepts)\//.test(link.getAttribute("href") ?? ""));
}

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

/** Opens a detail page and waits for its guidance sections, which load after the header. */
async function renderDetailAt(path: string) {
  const router = renderAt(path);
  await screen.findByRole("region", { name: "Accessibility" });
  return router;
}

const PLANNED = ROADMAP_PATTERN_TOPICS.flatMap((topic) =>
  topic.entries.map((entry) => ({ topic, entry })),
).findLast(({ entry }) => entry.priority !== "완료");
const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

describe("catalog page", () => {
  it("counts each roadmap item once and distinguishes ready demos", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("UI 패턴 사전");
    expect(screen.getByRole("region", { name: /오버레이/ })).toBeInTheDocument();
    expect(getCardLinks()).toHaveLength(PATTERNS.length);
    expect(screen.getByRole("button", { name: "전체" })).toHaveAttribute("aria-pressed", "true");
    // Every catalog pattern plus every comparison guide that ships a demo.
    const demoCount = PATTERNS.length + Object.keys(COMPARISON_GUIDES).length;
    expect(screen.getByRole("status")).toHaveTextContent(`447개 항목 · 데모 ${demoCount}개`);
    const itemLinks = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href") ?? "")
      .filter((href) => /^\/(patterns\/|concepts\/|roadmap\?|compare\/)/.test(href));
    expect(itemLinks).toHaveLength(447);
    expect(new Set(itemLinks).size).toBe(447);
  });

  it("shows each category's entry count and indexes the topics on the page", async () => {
    renderAt("/");
    const tabs = within(screen.getByRole("group", { name: "카테고리" }));
    const count = (name: string) => tabs.getByRole("button", { name }).lastChild?.textContent;
    expect(count("전체")).toBe("447");
    const topicIndex = within(screen.getByRole("navigation", { name: "주제 목차" }));
    const topics = topicIndex.getAllByRole("link").slice(0, -1);
    expect(topics.map((link) => link.getAttribute("href"))).toEqual(
      screen
        .getAllByRole("heading", { level: 2 })
        .map((heading) => `#${heading.closest("section")?.id}`),
    );
    expect(topics[0]).toHaveTextContent("오버레이11");
    expect(topicIndex.getByRole("link", { name: /전체 주제 보기/ })).toHaveAttribute(
      "href",
      "/roadmap",
    );
    // The narrow-screen picker lists the same topics, then the full index.
    const picker = screen.getByRole("combobox");
    expect(within(picker).getAllByRole("option")).toHaveLength(topics.length + 1);

    await userEvent.click(tabs.getByRole("button", { name: "UX 심리" }));
    expect(count("UX 심리")).toBe(
      String(
        within(screen.getByRole("navigation", { name: "주제 목차" }))
          .getAllByRole("link")
          .slice(0, -1)
          .reduce((sum, link) => sum + Number(link.lastChild?.textContent), 0),
      ),
    );
  });

  it("serves concepts under /concepts and moves a concept opened under /patterns", () => {
    const pattern = renderAt("/patterns/hicks-law");
    expect(pattern.state.location.pathname).toBe("/concepts/hicks-law");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("힉의 법칙");
    cleanup();
    const component = renderAt("/concepts/toast");
    expect(component.state.location.pathname).toBe("/patterns/toast");
  });

  it("filters cards as the user types and keeps the query in the URL", async () => {
    const router = renderAt("/");
    await userEvent.type(screen.getByRole("searchbox", { name: "UI 패턴 검색" }), "모달");
    const results = screen.getByRole("region", { name: "검색 결과" });
    expect(within(results).getAllByRole("link")[0]).toHaveTextContent("모달 다이얼로그");
    expect(router.state.location.search).toBe("?q=%EB%AA%A8%EB%8B%AC");
  });

  it("keeps each keystroke in the search box while the URL catches up (Korean IME)", async () => {
    // Router updates run in a React transition. If the input reads its value back from the URL,
    // React restores the stale value right after the input event, which breaks IME composition
    // ("알림" turns into "ㅇㅏㄹㄹㅣㅁ"). Dispatch outside act() so the transition stays pending.
    vi.spyOn(console, "error").mockImplementation(() => {});
    const router = renderAt("/");
    const input = screen.getByRole<HTMLInputElement>("searchbox", { name: "UI 패턴 검색" });
    const setNativeValue = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set;

    for (const value of ["ㅇ", "아", "알", "알ㄹ", "알리", "알림"]) {
      setNativeValue?.call(input, value);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      expect(input.value).toBe(value);
    }

    await act(async () => {});
    expect(router.state.location.search).toBe(`?q=${encodeURIComponent("알림")}`);
    vi.restoreAllMocks();
  });

  it("syncs the search box when the URL changes from outside", async () => {
    const router = renderAt("/?q=modal");
    expect(screen.getByRole("searchbox")).toHaveValue("modal");
    await act(() => router.navigate("/?q=toast"));
    expect(screen.getByRole("searchbox")).toHaveValue("toast");
    await act(() => router.navigate(-1));
    expect(screen.getByRole("searchbox")).toHaveValue("modal");
  });

  it("focuses the search box with the / shortcut", async () => {
    renderAt("/");
    await userEvent.keyboard("/");
    expect(screen.getByRole("searchbox")).toHaveFocus();
  });

  it.each([
    { reducedMotion: false, behavior: "smooth" },
    { reducedMotion: true, behavior: "instant" },
  ])(
    "returns to the catalog top with $behavior scrolling and preserves filters",
    async ({ reducedMotion, behavior }) => {
      vi.stubGlobal("scrollY", 0);
      const matchMedia = window.matchMedia.bind(window);
      vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
        ...matchMedia(query),
        matches: query === "(prefers-reduced-motion: reduce)" && reducedMotion,
      }));
      const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {
        vi.stubGlobal("scrollY", 0);
        window.dispatchEvent(new Event("scroll"));
      });

      try {
        const search = "?category=ui-comparison&q=UI";
        const router = renderAt(`/${search}`);
        scrollTo.mockClear();
        expect(screen.queryByRole("button", { name: "맨 위로" })).not.toBeInTheDocument();

        act(() => {
          vi.stubGlobal("scrollY", window.innerHeight + 1);
          window.dispatchEvent(new Event("scroll"));
        });
        const button = screen.getByRole("button", { name: "맨 위로" });
        expect(button.textContent?.trim()).toBe("");
        expect(button.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
        button.focus();
        await userEvent.keyboard("{Enter}");

        expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior });
        expect(screen.getByRole("heading", { level: 1 })).toHaveFocus();
        expect(screen.queryByRole("button", { name: "맨 위로" })).not.toBeInTheDocument();
        expect(router.state.location.search).toBe(search);
      } finally {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
      }
    },
  );

  it("keeps the topic scope of a bookmarked navigation category", () => {
    renderAt("/?category=navigation");
    expect(screen.getByRole("button", { name: "컴포넌트" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    const links = getCardLinks();
    const navigation = PATTERNS.filter((pattern) => pattern.category === "navigation");
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      navigation.map((pattern) => `/patterns/${pattern.slug}`),
    );
    expect(screen.getByRole("status")).toHaveTextContent(`14개 항목 · 데모 ${navigation.length}개`);
  });

  it("shows six category controls and switches between their topic groups", async () => {
    const router = renderAt("/");
    const categories = within(screen.getByRole("group", { name: "카테고리" }));
    expect(
      categories.getAllByRole("button").map((button) => button.firstChild?.textContent),
    ).toEqual(["전체", "컴포넌트", "상황별 화면", "디자인 스타일", "UX 심리", "헷갈리는 UI"]);
    await userEvent.click(categories.getByRole("button", { name: "상황별 화면" }));
    expect(router.state.location.search).toBe("?category=situations");
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent),
    ).toEqual([
      "빈 화면과 오류",
      "첫 실행",
      "완료와 보상",
      "반응과 공유",
      "AI 화면",
      "가격과 할인 표시",
      "검색과 탐색",
      "가입과 로그인",
      "주문과 결제",
      "설정과 권한",
      "위험한 동작과 되돌리기",
      "떠남과 다시 옴",
    ]);
    await userEvent.click(categories.getByRole("button", { name: "디자인 스타일" }));
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent),
    ).toEqual(["디자인 스타일", "글자 스타일"]);
    await userEvent.click(categories.getByRole("button", { name: "UX 심리" }));
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent),
    ).toEqual(["다크 패턴", "UX 법칙", "인지 편향", "가격의 심리"]);
    await userEvent.click(screen.getByRole("link", { name: /타협 효과 Compromise Effect/ }));
    const crumbs = within(screen.getByRole("navigation", { name: "현재 위치" }));
    expect(crumbs.getAllByRole("link").map((link) => link.textContent)).toEqual([
      "전체",
      "UX 심리",
      "가격의 심리",
    ]);
    await userEvent.click(crumbs.getByRole("link", { name: "가격의 심리" }));
    expect(router.state.location.search).toBe("?category=pricing-psychology");
    expect(screen.getByRole("button", { name: "UX 심리" })).toHaveAttribute("aria-pressed", "true");
  });

  it("shows an empty state and resets the search", async () => {
    renderAt("/?q=zzzz");
    expect(screen.getByText("'zzzz'에 맞는 패턴이 없어요")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "전체 패턴 보기" }));
    expect(getCardLinks()).toHaveLength(PATTERNS.length);
  });

  it("ignores an unknown category in the URL", () => {
    renderAt("/?category=unknown");
    expect(screen.getByRole("button", { name: /전체/ })).toHaveAttribute("aria-pressed", "true");
  });
});

/** The site header; the detail page's own `<header>` also reads as a banner in jsdom. */
const siteHeader = () => within(screen.getAllByRole("banner")[0]!);

describe("small-screen header", () => {
  it("offers the theme and a compact language menu on the catalog", async () => {
    renderAt("/");
    const user = userEvent.setup();
    const banner = within(screen.getByRole("banner"));
    expect(banner.queryByRole("link", { name: "뒤로" })).not.toBeInTheDocument();
    const language = banner.getByRole("button", { name: "언어: 한국어 (KO)" });
    expect(language).toHaveTextContent("KO");
    await user.click(language);
    expect(language).toHaveAttribute("aria-expanded", "true");
    const menus = banner.getAllByRole("list", { name: "언어" });
    expect(within(menus.at(-1)!).getByRole("link", { name: "English" })).toHaveAttribute(
      "href",
      "/en/",
    );
    await user.keyboard("{Escape}");
    expect(language).toHaveAttribute("aria-expanded", "false");
    const headerGithubLink = banner.getByRole("link", { name: "GitHub" });
    expect(headerGithubLink).toHaveAttribute("href", "https://github.com/ydj515/ui-pattern-atlas");
    expect(
      within(screen.getByRole("contentinfo")).getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/ydj515/ui-pattern-atlas/issues");
  });

  it("puts back, search and copy in a pattern page's header", async () => {
    const router = renderAt("/patterns/compromise-effect");
    const banner = siteHeader();
    expect(banner.getByRole("button", { name: /^패턴 검색/ })).toBeInTheDocument();
    expect(banner.getByRole("button", { name: "페이지 복사" })).toBeInTheDocument();
    expect(banner.queryByRole("button", { name: "더 보기" })).not.toBeInTheDocument();
    expect(banner.queryByRole("button", { name: /^언어: .* \(KO\)$/ })).not.toBeInTheDocument();
    await userEvent.click(banner.getByRole("link", { name: "뒤로" }));
    expect(router.state.location.search).toBe("?category=pricing-psychology");
  });

  it("goes back to the results a pattern page was opened from", async () => {
    const router = renderAt("/?q=toast");
    await userEvent.click(screen.getAllByRole("link", { name: /토스트/ })[0] as HTMLElement);
    await userEvent.click(siteHeader().getByRole("link", { name: "뒤로" }));
    expect(router.state.location.pathname).toBe("/");
    expect(router.state.location.search).toBe("?q=toast");
  });
});

describe("mobile header navigation", () => {
  it("opens and closes with Escape or an outside click and navigates to the selected page", async () => {
    const router = renderAt("/");
    const user = userEvent.setup();
    const menuButton = screen.getByRole("button", { name: "메뉴" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "모바일 메뉴" })).not.toBeInTheDocument();

    await user.click(menuButton);
    const navigation = screen.getByRole("navigation", { name: "모바일 메뉴" });
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(within(navigation).getByRole("link", { name: "전체" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(
      within(navigation)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual([
      "전체",
      "컴포넌트",
      "상황별 화면",
      "디자인 스타일",
      "UX 심리",
      "헷갈리는 UI",
      "전체 주제 보기",
      "GitHub",
      "한국어",
      "English",
    ]);
    expect(
      within(navigation)
        .getByRole("link", { name: "GitHub" })
        .querySelectorAll('svg[aria-hidden="true"]'),
    ).toHaveLength(2);
    await user.tab();
    expect(within(navigation).getByRole("link", { name: "전체" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(menuButton).toHaveFocus();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);
    fireEvent.pointerDown(screen.getByRole("main"));
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);
    await user.click(
      within(screen.getByRole("navigation", { name: "모바일 메뉴" })).getByRole("link", {
        name: "헷갈리는 UI",
      }),
    );
    expect(router.state.location.search).toBe("?category=ui-comparison");
    expect(screen.getByRole("button", { name: "메뉴" })).toHaveAttribute("aria-expanded", "false");
    const headerGithubLink = siteHeader().getByRole("link", { name: "GitHub" });
    expect(headerGithubLink).toHaveAttribute("href", "https://github.com/ydj515/ui-pattern-atlas");
    expect(headerGithubLink.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    expect(
      within(screen.getByRole("contentinfo")).getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/ydj515/ui-pattern-atlas/issues");
  });
  it("marks the detail's parent section and keeps a catalog query when switching sections", async () => {
    const router = renderAt("/patterns/compromise-effect");
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "메뉴" }));
    const menu = () => within(screen.getByRole("navigation", { name: "모바일 메뉴" }));
    expect(menu().getByRole("link", { name: "UX 심리" })).toHaveAttribute(
      "aria-current",
      "location",
    );
    await act(() => router.navigate("/?category=input&q=toggle"));
    await user.click(screen.getByRole("button", { name: "메뉴" }));
    expect(menu().getByRole("link", { name: "컴포넌트" })).toHaveAttribute(
      "aria-current",
      "location",
    );
    await user.click(menu().getByRole("link", { name: "전체" }));
    expect(router.state.location.search).toBe("?q=toggle");
  });
});

describe("header search (⌘K)", () => {
  it("is hidden on the catalog, where ⌘K focuses the main search box", async () => {
    renderAt("/");
    expect(screen.queryByRole("button", { name: /패턴 검색/ })).not.toBeInTheDocument();
    await userEvent.keyboard("{Meta>}k{/Meta}");
    expect(screen.getByRole("searchbox", { name: "UI 패턴 검색" })).toHaveFocus();
  });

  it("opens from the header button, filters, and opens a pattern with the keyboard", async () => {
    const router = renderAt("/patterns/toast");
    await userEvent.click(screen.getByRole("button", { name: /패턴 검색/ }));
    const dialog = screen.getByRole("dialog", { name: "패턴 검색" });
    const input = within(dialog).getByRole("combobox");
    expect(input).toHaveFocus();
    expect(within(dialog).getAllByRole("option")).toHaveLength(PATTERNS.length);

    await userEvent.type(input, "탭");
    expect(within(dialog).getAllByRole("option")[0]).toHaveAttribute("aria-selected", "true");
    expect(input).toHaveAttribute(
      "aria-activedescendant",
      within(dialog).getAllByRole("option")[0]?.id,
    );

    await userEvent.keyboard("{Enter}");
    expect(router.state.location.pathname).toBe("/patterns/tabs");
    expect(dialog).not.toHaveAttribute("open");
  });

  it("opens with Ctrl+K, moves with arrow keys, and closes with Escape", async () => {
    renderAt("/patterns/toast");
    await userEvent.keyboard("{Control>}k{/Control}");
    const dialog = screen.getByRole("dialog", { name: "패턴 검색" });
    expect(dialog).toHaveAttribute("open");

    await userEvent.keyboard("{ArrowDown}{ArrowDown}{ArrowUp}");
    const options = within(dialog).getAllByRole("option");
    expect(options[1]).toHaveAttribute("aria-selected", "true");

    dialog.dispatchEvent(new Event("cancel", { cancelable: true }));
    await waitFor(() => expect(dialog).not.toHaveAttribute("open"));
  });

  it("says when nothing matches", async () => {
    renderAt("/patterns/toast");
    await userEvent.keyboard("{Meta>}k{/Meta}");
    await userEvent.type(screen.getByRole("combobox"), "zzzz");
    expect(screen.getByText("'zzzz'에 맞는 패턴이 없어요")).toBeInTheDocument();
  });
});

describe("roadmap and comparison", () => {
  // Uses a roadmap entry that is still planned; once every entry ships there is nothing to show.
  it.skipIf(!PLANNED)(
    "shows planned hits beside catalog search and opens the matching roadmap topic",
    async () => {
      const { topic, entry } = PLANNED!;
      const router = renderAt(`/?q=${encodeURIComponent(entry.name)}`);
      const result = screen.getAllByRole("link", {
        name: new RegExp(`${entry.nameKo} ${escapeRegExp(entry.name)}`),
      })[0]!;
      expect(result).toHaveTextContent("준비 중");
      await userEvent.click(result);
      expect(router.state.location.pathname).toBe("/roadmap");
      expect(router.state.location.hash).toBe(`#${roadmapEntryAnchor(topic, entry)}`);
      expect(screen.getByRole("searchbox", { name: "로드맵 검색" })).toHaveValue(entry.name);
      const region = screen.getByRole("region", { name: topic.nameKo });
      const row = region.querySelector<HTMLElement>(`[id="${roadmapEntryAnchor(topic, entry)}"]`)!;
      expect(within(row).getByText(entry.nameKo)).toBeInTheDocument();
      expect(within(row).getByText(`준비 중 · ${entry.priority}`)).toBeInTheDocument();
    },
  );

  it("filters the full comparison topic from the catalog and opens a ready comparison", async () => {
    const router = renderAt("/");
    await userEvent.click(screen.getByRole("button", { name: "헷갈리는 UI" }));
    expect(router.state.location.search).toBe("?category=ui-comparison");
    expect(screen.getByRole("status")).toHaveTextContent("51개 항목 · 데모 51개");
    await userEvent.click(screen.getByRole("link", { name: /토스트 \/ 스낵바 Toast \/ Snackbar/ }));
    expect(router.state.location.pathname).toBe("/compare/toast-snackbar");
    expect(screen.getByRole("region", { name: "비교 미리보기" })).toBeInTheDocument();
  });

  it("filters topics and links completed roadmap entries to their demos", async () => {
    const router = renderAt("/roadmap");
    const breadcrumb = within(screen.getByRole("navigation", { name: "현재 위치" }));
    expect(breadcrumb.getAllByRole("link")).toHaveLength(1);
    expect(breadcrumb.getByRole("link", { name: "전체" })).toHaveAttribute("href", "/");
    expect(breadcrumb.getByText("전체 주제")).toHaveAttribute("aria-current", "page");
    await userEvent.selectOptions(screen.getByRole("combobox", { name: "주제" }), "gesture");
    expect(router.state.location.search).toBe("?category=gesture");
    await userEvent.click(screen.getByRole("link", { name: "당겨서 새로고침" }));
    expect(router.state.location.pathname).toBe("/patterns/pull-to-refresh");
    expect(screen.getByRole("region", { name: "미리보기" })).toBeInTheDocument();
  });

  it("includes comparison guides and index-only topics in the full index", async () => {
    renderAt("/roadmap");
    const topics = screen.getByRole("combobox", { name: "주제" });
    expect(within(topics).getByRole("option", { name: "UX 리서치" })).toBeInTheDocument();
    await userEvent.selectOptions(topics, "ui-comparison");
    expect(screen.getByRole("link", { name: "토스트 / 스낵바" })).toHaveAttribute(
      "href",
      "/compare/toast-snackbar",
    );
  });

  it("finds a comparison by both terms and opens its paired demos", async () => {
    const router = renderAt("/");
    await userEvent.click(screen.getByRole("button", { name: "헷갈리는 UI" }));
    await userEvent.click(screen.getByRole("link", { name: "비교 가이드 목차" }));
    await userEvent.type(screen.getByRole("searchbox", { name: "비교쌍 검색" }), "toast snackbar");
    await userEvent.click(screen.getByRole("link", { name: /토스트 · 스낵바/ }));
    expect(router.state.location.pathname).toBe("/compare/toast-snackbar");
    expect(screen.getByRole("region", { name: "비교 미리보기" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "선택 기준" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "토스트 패턴" })).toHaveAttribute(
      "href",
      "/patterns/toast",
    );
    const breadcrumb = within(screen.getByRole("navigation", { name: "현재 위치" }));
    expect(breadcrumb.getByText("토스트 · 스낵바")).toHaveAttribute("aria-current", "page");
    await userEvent.click(breadcrumb.getByRole("link", { name: "헷갈리는 UI" }));
    expect(router.state.location.search).toBe("?category=ui-comparison");
    expect(screen.getByRole("button", { name: "헷갈리는 UI" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("opens a comparison guide without an interactive demo and handles unknown slugs", async () => {
    const router = renderAt("/compare/pagination-infinite-scroll");
    expect(
      screen.getByRole("heading", { level: 1, name: "페이지네이션 · 무한 스크롤" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "선택 기준" })).toBeInTheDocument();
    await act(() => router.navigate("/compare/unknown"));
    expect(screen.getByRole("heading", { name: "페이지를 찾을 수 없어요" })).toBeInTheDocument();
  });

  it("keeps legacy category links working and hides the code navigator for concepts", async () => {
    const router = renderAt("/?category=status");
    const links = getCardLinks().map((link) => link.getAttribute("href"));
    expect(links).toEqual(expect.arrayContaining(["/patterns/skeleton", "/patterns/empty-state"]));
    await act(() => router.navigate("/?category=input"));
    expect(screen.getByRole("button", { name: "컴포넌트" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("region", { name: "선택 컨트롤" })).toBeInTheDocument();
    await act(() => router.navigate("/patterns/compromise-effect"));
    expect(screen.getByRole("region", { name: "미리보기" })).toBeInTheDocument();
    expect(screen.queryByRole("tab", { name: "코드" })).not.toBeInTheDocument();
  });
});

describe("pattern detail page", () => {
  it("opens from a card and returns to the same search", async () => {
    const router = renderAt("/?category=components&q=toast");
    await userEvent.click(screen.getAllByRole("link", { name: /토스트/ })[0] as HTMLElement);
    expect(router.state.location.pathname).toBe("/patterns/toast");
    expect(screen.getByRole("heading", { level: 1, name: "토스트 Toast" })).toBeInTheDocument();

    const breadcrumb = within(screen.getByRole("navigation", { name: "현재 위치" }));
    expect(breadcrumb.getByRole("link", { name: "알림과 피드백" })).toHaveAttribute(
      "href",
      "/?category=feedback",
    );
    expect(breadcrumb.getByText("토스트")).toHaveAttribute("aria-current", "page");
    expect(breadcrumb.getByRole("link", { name: "컴포넌트" })).toHaveAttribute(
      "href",
      "/?category=components",
    );
    expect(breadcrumb.getByRole("link", { name: "전체" })).toHaveAttribute("href", "/");
    await userEvent.click(screen.getByRole("link", { name: "탐색 결과로 돌아가기" }));
    expect(router.state.location.search).toBe("?category=components&q=toast");
  });

  it("opens with the description, then the live preview, then other names", () => {
    renderAt("/patterns/modal-dialog");
    const description = screen.getByText(/사용자의 주의를 집중시키고/);
    const preview = screen.getByRole("region", { name: "미리보기" });
    const aliases = screen.getByText("다른 이름", { selector: "dt" });
    const follows = (a: Node, b: Node) =>
      Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
    expect(follows(description, preview)).toBe(true);
    expect(follows(preview, aliases)).toBe(true);
    expect(screen.queryByRole("heading", { name: "Interactive Preview" })).not.toBeInTheDocument();
  });

  it("tells where the name comes from only when there is a story", async () => {
    await renderDetailAt("/patterns/toast");
    const origin = screen.getByText("이름의 유래", { selector: "dt" });
    expect(origin.nextElementSibling).toHaveTextContent("토스터에서");
    cleanup();
    await renderDetailAt("/patterns/switch");
    expect(screen.queryByText("이름의 유래", { selector: "dt" })).toBeNull();
  });

  it("renders the sections in the documented order", async () => {
    await renderDetailAt("/patterns/modal-dialog");
    const headings = screen.getAllByRole("heading", { level: 2 });
    const toc = within(screen.getByRole("navigation", { name: "이 페이지의 섹션" }));
    const labels = ["When to use", "When not to use", "Alternatives", "Accessibility"];
    expect(headings).toHaveLength(labels.length);
    headings.forEach((heading, index) => {
      const name = labels[index];
      expect(heading).toHaveAccessibleName(name);
      const href = toc.getByRole("link", { name }).getAttribute("href");
      expect(within(heading).getByRole("link", { name })).toHaveAttribute("href", href);
      expect(href).toBe(`/patterns/modal-dialog#${heading.closest("section")?.id}`);
    });
    // The demo area heads the list; its code tab took the place of an implementation section.
    expect(toc.getAllByRole("link")[0]).toHaveAttribute("href", "/patterns/modal-dialog#preview");
    expect(toc.queryByRole("link", { name: "Implementation" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /토스트/ })).toHaveAttribute("href", "/patterns/toast");
  });

  it("marks only the current section as the reader scrolls in either direction", async () => {
    await renderDetailAt("/patterns/modal-dialog");
    const toc = within(screen.getByRole("navigation", { name: "이 페이지의 섹션" }));
    const links = toc.getAllByRole("link");
    links.forEach((link, index) => {
      const section = screen.getByRole("region", { name: link.textContent ?? "" });
      vi.spyOn(section, "getBoundingClientRect").mockImplementation(() =>
        DOMRect.fromRect({ y: 500 + index * 250 - window.scrollY }),
      );
    });
    vi.spyOn(document.documentElement, "scrollHeight", "get").mockReturnValue(2000);
    vi.stubGlobal("innerHeight", 700);
    try {
      for (const [top, current] of [
        [0, null],
        [510, "미리보기"],
        [1010, "When not to use"],
        [1300, "Accessibility"],
        [760, "When to use"],
        [0, null],
      ] as const) {
        vi.stubGlobal("scrollY", top);
        fireEvent.scroll(window);
        expect(
          toc.queryAllByRole("link", { current: "location" }).map((link) => link.textContent),
        ).toEqual(current ? [current] : []);
      }
    } finally {
      vi.unstubAllGlobals();
      vi.restoreAllMocks();
    }
  });

  it("keeps the selected anchor active when both guidance sections share a row", async () => {
    const router = await renderDetailAt("/patterns/popover");
    const toc = within(screen.getByRole("navigation", { name: "이 페이지의 섹션" }));
    const links = toc.getAllByRole("link");
    try {
      links.forEach((link, index) => {
        const section = screen.getByRole("region", { name: link.textContent ?? "" });
        // The preview sits above; the two guidance sections share a row at the top.
        vi.spyOn(section, "getBoundingClientRect").mockReturnValue(
          DOMRect.fromRect({ y: index === 0 ? -300 : index < 3 ? 0 : index * 200 }),
        );
      });
      fireEvent.scroll(window);
      expect(toc.getByRole("link", { current: "location" })).toHaveTextContent("When to use");
      for (const hash of ["#when-not-to-use", "#when-to-use"]) {
        await act(() => router.navigate(hash));
        expect(toc.getByRole("link", { current: "location" })).toHaveAttribute(
          "href",
          `/patterns/popover${hash}`,
        );
      }
    } finally {
      vi.restoreAllMocks();
    }
  });

  it("lands on a linked section once the guidance has loaded", async () => {
    const scrollIntoView = vi.fn();
    const original = Object.getOwnPropertyDescriptor(Element.prototype, "scrollIntoView");
    Element.prototype.scrollIntoView = scrollIntoView;
    try {
      await renderDetailAt("/patterns/pagination#accessibility");
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(
        screen.getByRole("region", { name: "Accessibility" }),
      );
    } finally {
      if (original) Object.defineProperty(Element.prototype, "scrollIntoView", original);
      else delete (Element.prototype as Partial<Element>).scrollIntoView;
    }
  });

  it("links up to three similar patterns from the same topic", async () => {
    const router = renderAt("/patterns/modal-dialog");
    const topic = PATTERNS.filter((pattern) => pattern.category === "overlay");
    const index = topic.findIndex((pattern) => pattern.slug === "modal-dialog");
    const expected = [...topic.slice(index + 1), ...topic.slice(0, index)]
      .slice(0, 3)
      .map((pattern) => `/patterns/${pattern.slug}`);
    // The desktop rail and the line at the end of the page for narrow screens.
    const lists = screen.getAllByRole("navigation", { name: "비슷한 패턴" });
    expect(lists).toHaveLength(2);
    for (const list of lists) {
      expect(
        within(list)
          .getAllByRole("link")
          .map((link) => link.getAttribute("href")),
      ).toEqual(expected);
    }
    await userEvent.click(within(lists[0]!).getAllByRole("link")[0]!);
    expect(router.state.location.pathname).toBe(expected[0]);
  });

  it("shows the source in the code tab and keeps the demo state", async () => {
    const user = userEvent.setup();
    renderAt("/patterns/modal-dialog");
    const preview = screen.getByRole("tab", { name: "미리보기" });
    const code = screen.getByRole("tab", { name: "코드" });
    expect(preview).toHaveAttribute("aria-selected", "true");
    expect(screen.queryByRole("tablist", { name: "구현 파일" })).not.toBeInTheDocument();
    await user.click(code);
    expect(code).toHaveAttribute("aria-selected", "true");
    expect(screen.queryByRole("button", { name: "처음부터" })).not.toBeInTheDocument();
    await user.keyboard("{ArrowLeft}");
    expect(preview).toHaveFocus();
    expect(preview).toHaveAttribute("aria-selected", "true");
  });

  it("opens the code tab from a link to the implementation", () => {
    renderAt("/patterns/modal-dialog#implementation");
    expect(screen.getByRole("tab", { name: "코드" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tablist", { name: "구현 파일" })).toBeInTheDocument();
  });

  it("switches between implementation files", async () => {
    renderAt("/patterns/modal-dialog");
    await userEvent.click(screen.getByRole("tab", { name: "코드" }));
    const fileTabs = screen.getByRole("tablist", { name: "구현 파일" });
    await userEvent.click(within(fileTabs).getByRole("tab", { name: /Usage/ }));
    await waitFor(() =>
      expect(screen.getByLabelText("ModalDialogDemo.tsx 소스 코드")).toHaveTextContent(
        "export function ModalDialogDemo",
      ),
    );
  });

  it.each(PATTERNS.map((pattern) => [pattern.slug]))(
    "renders %s with its live preview",
    async (slug) => {
      renderAt(`/patterns/${slug}`);
      const preview = screen.getByRole("region", { name: "미리보기" });
      expect(within(preview).getByRole("button", { name: "처음부터" })).toBeInTheDocument();
      await waitFor(() =>
        expect(preview.querySelector('[aria-busy="false"]')).not.toBeEmptyDOMElement(),
      );
    },
  );

  it("shows a not-found view for an unknown slug", () => {
    renderAt("/patterns/unknown");
    expect(screen.getByRole("heading", { name: "페이지를 찾을 수 없어요" })).toBeInTheDocument();
  });
});
