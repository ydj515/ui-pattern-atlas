import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it, vi } from "vitest";

import { PATTERNS } from "@/entities/pattern/catalog";

import { routes } from "./routes";

/** Catalog entries are the links into pattern detail pages. */
function getCardLinks() {
  return screen
    .getAllByRole("link")
    .filter((link) => link.getAttribute("href")?.startsWith("/patterns/"));
}

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

describe("catalog page", () => {
  it("counts each roadmap item once and distinguishes ready demos", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("UI 패턴 사전");
    expect(screen.getByRole("region", { name: /오버레이/ })).toBeInTheDocument();
    expect(getCardLinks()).toHaveLength(PATTERNS.length);
    expect(screen.getByRole("button", { name: "전체 397" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("status")).toHaveTextContent("397개 항목 · 데모 32개");
    const itemLinks = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href") ?? "")
      .filter((href) => /^\/(patterns\/|roadmap\?|compare\/)/.test(href));
    expect(itemLinks).toHaveLength(397);
    expect(new Set(itemLinks).size).toBe(397);
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

  it("filters by category chip", async () => {
    renderAt("/");
    await userEvent.click(screen.getByRole("button", { name: /이동/ }));
    expect(screen.getByRole("button", { name: /이동/ })).toHaveAttribute("aria-pressed", "true");
    const links = getCardLinks();
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/patterns/breadcrumb",
      "/patterns/pagination",
    ]);
    expect(screen.getByRole("status")).toHaveTextContent("14개 항목 · 데모 2개");
    expect(screen.getByRole("link", { name: /뒤로 가기 Back Navigation/ })).toHaveTextContent(
      "준비 중",
    );
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
    expect(within(navigation).getByRole("link", { name: "UI 패턴 사전" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    await user.tab();
    expect(within(navigation).getByRole("link", { name: "UI 패턴 사전" })).toHaveFocus();
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
    expect(router.state.location.pathname).toBe("/compare");
    expect(screen.getByRole("button", { name: "메뉴" })).toHaveAttribute("aria-expanded", "false");
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
  it("shows planned hits beside catalog search and opens the matching roadmap topic", async () => {
    const router = renderAt("/?q=File%20Upload");
    const result = screen.getByRole("link", { name: /파일 업로드 File Upload/ });
    expect(result).toHaveTextContent("준비 중");
    await userEvent.click(result);
    expect(router.state.location.pathname).toBe("/roadmap");
    expect(router.state.location.hash).toBe("#special-input-file-upload");
    expect(screen.getByRole("searchbox", { name: "로드맵 검색" })).toHaveValue("File Upload");
    const topic = screen.getByRole("region", { name: "특수 입력" });
    expect(within(topic).getByText("파일 업로드")).toBeInTheDocument();
    expect(within(topic).getByText("준비 중 · P1")).toBeInTheDocument();
  });

  it("filters the full comparison topic from the catalog and opens a ready comparison", async () => {
    const router = renderAt("/");
    await userEvent.click(screen.getByRole("button", { name: "헷갈리는 UI 51" }));
    expect(router.state.location.search).toBe("?category=ui-comparison");
    expect(screen.getByRole("status")).toHaveTextContent("51개 항목 · 데모 6개");
    await userEvent.click(screen.getByRole("link", { name: /토스트 \/ 스낵바 Toast \/ Snackbar/ }));
    expect(router.state.location.pathname).toBe("/compare/toast-snackbar");
    expect(screen.getByRole("region", { name: "비교 미리보기" })).toBeInTheDocument();
  });

  it("filters topics and links completed roadmap entries to their demos", async () => {
    const router = renderAt("/roadmap");
    const breadcrumb = within(screen.getByRole("navigation", { name: "현재 위치" }));
    expect(breadcrumb.getAllByRole("link")).toHaveLength(1);
    expect(breadcrumb.getByRole("link", { name: "모든 패턴" })).toHaveAttribute("href", "/");
    expect(breadcrumb.getByText("전체 주제")).toHaveAttribute("aria-current", "page");
    await userEvent.selectOptions(screen.getByRole("combobox", { name: "주제" }), "gesture");
    expect(router.state.location.search).toBe("?category=gesture");
    await userEvent.click(screen.getByRole("link", { name: "당겨서 새로고침" }));
    expect(router.state.location.pathname).toBe("/patterns/pull-to-refresh");
    expect(screen.getByRole("region", { name: "미리보기" })).toBeInTheDocument();
  });

  it("finds a comparison by both terms and opens its paired demos", async () => {
    const router = renderAt("/");
    await userEvent.click(screen.getByRole("link", { name: "헷갈리는 UI" }));
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
    expect(router.state.location.pathname).toBe("/compare");
    expect(
      within(screen.getByRole("navigation", { name: "현재 위치" })).getByText("헷갈리는 UI"),
    ).toHaveAttribute("aria-current", "page");
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
    expect(screen.getByRole("button", { name: /^선택 컨트롤/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await act(() => router.navigate("/patterns/compromise-effect"));
    expect(screen.getByRole("region", { name: "미리보기" })).toBeInTheDocument();
    expect(screen.queryByText("Implementation")).not.toBeInTheDocument();
  });
});

describe("pattern detail page", () => {
  it("opens from a card and returns to the same search", async () => {
    const router = renderAt("/?q=toast");
    await userEvent.click(screen.getAllByRole("link", { name: /토스트/ })[0] as HTMLElement);
    expect(router.state.location.pathname).toBe("/patterns/toast");
    expect(screen.getByRole("heading", { level: 1, name: "토스트 Toast" })).toBeInTheDocument();

    const breadcrumb = within(screen.getByRole("navigation", { name: "현재 위치" }));
    expect(breadcrumb.getByRole("link", { name: "알림과 피드백" })).toHaveAttribute(
      "href",
      "/?category=feedback",
    );
    expect(breadcrumb.getByText("토스트")).toHaveAttribute("aria-current", "page");
    await userEvent.click(breadcrumb.getByRole("link", { name: "모든 패턴" }));
    expect(router.state.location.search).toBe("?q=toast");
  });

  it("opens with the description, then the live preview, then other names", () => {
    renderAt("/patterns/modal-dialog");
    const description = screen.getByText(/사용자의 주의를 집중시키고/);
    const preview = screen.getByRole("region", { name: "미리보기" });
    const aliases = screen.getByText(/^다른 이름:/);
    const follows = (a: Node, b: Node) =>
      Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
    expect(follows(description, preview)).toBe(true);
    expect(follows(preview, aliases)).toBe(true);
    expect(screen.queryByRole("heading", { name: "Interactive Preview" })).not.toBeInTheDocument();
  });

  it("renders the sections in the documented order", () => {
    renderAt("/patterns/modal-dialog");
    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);
    expect(headings).toEqual([
      "When to use",
      "When not to use",
      "Alternatives",
      "Implementation",
      "Accessibility",
    ]);
    expect(screen.getByRole("link", { name: /Toast/ })).toHaveAttribute("href", "/patterns/toast");
  });

  it("switches between implementation files", async () => {
    renderAt("/patterns/modal-dialog");
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
