import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { RecentSearchesDemo } from "@/entities/pattern/catalog/recent-searches/RecentSearchesDemo";
import { SearchFiltersDemo } from "@/entities/pattern/catalog/search-filters/SearchFiltersDemo";
import { SearchScopeTabsDemo } from "@/entities/pattern/catalog/search-scope-tabs/SearchScopeTabsDemo";
import { SearchSortDemo } from "@/entities/pattern/catalog/search-sort/SearchSortDemo";
import { SearchSuggestionsDemo } from "@/entities/pattern/catalog/search-suggestions/SearchSuggestionsDemo";
import { SearchTermHighlightDemo } from "@/entities/pattern/catalog/search-term-highlight/SearchTermHighlightDemo";
import { TrendingSearchesDemo } from "@/entities/pattern/catalog/trending-searches/TrendingSearchesDemo";
import { HighlightText } from "@/shared/ui/patterns/search-term-highlight/HighlightText";

describe("SearchSuggestions", () => {
  it("completes the typed text and picks a suggestion", async () => {
    const user = userEvent.setup();
    render(<SearchSuggestionsDemo />);
    const input = screen.getByRole("combobox", { name: "상품 검색" });
    await user.type(input, "린넨");
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("option")).toHaveLength(4);
    await user.click(screen.getByRole("option", { name: "린넨 바지" }));
    expect(input).toHaveValue("린넨 바지");
    expect(screen.getByRole("status")).toHaveTextContent("린넨 바지 검색 결과");
  });

  it("searches the typed text on Enter and runs the highlighted one after ↓", async () => {
    const user = userEvent.setup();
    render(<SearchSuggestionsDemo />);
    const input = screen.getByRole("combobox", { name: "상품 검색" });
    await user.type(input, "린넨{Enter}");
    expect(screen.getByRole("status")).toHaveTextContent("린넨 검색 결과");
    await user.clear(input);
    await user.type(input, "무선{ArrowDown}");
    expect(input).toHaveAttribute("aria-activedescendant");
    await user.keyboard("{Enter}");
    expect(screen.getByRole("status")).toHaveTextContent("무선 이어폰 검색 결과");
    await user.type(input, "{Escape}");
    expect(input).toHaveAttribute("aria-expanded", "false");
  });
});

describe("RecentSearches", () => {
  it("runs a past term again, deletes one, and clears all", async () => {
    const user = userEvent.setup();
    render(<RecentSearchesDemo />);
    await user.click(screen.getByRole("button", { name: "캔버스 백 삭제" }));
    expect(screen.queryByRole("button", { name: "캔버스 백" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "무선 이어폰" }));
    expect(screen.getByRole("textbox", { name: "상품 검색" })).toHaveValue("무선 이어폰");
    const list = screen.getByRole("region", { name: "최근 검색어" });
    expect(within(list).getAllByRole("listitem")[0]).toHaveTextContent("무선 이어폰");
    await user.click(screen.getByRole("button", { name: "전체 삭제" }));
    expect(screen.getByText("최근 검색어가 없어요")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "처음부터" }));
    expect(screen.getByRole("button", { name: "캔버스 백" })).toBeInTheDocument();
  });
});

describe("TrendingSearches", () => {
  it("changes the ranking and its counting period together", async () => {
    const user = userEvent.setup();
    render(<TrendingSearchesDemo />);
    expect(screen.getByText("오늘 14:00 기준, 최근 1시간")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(/겨울 패딩.*상승/);
    await user.click(screen.getByRole("radio", { name: "이번 주" }));
    expect(screen.getByText("11월 17일~23일 기준")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(/니트.*변동 없음/);
    await user.click(screen.getByRole("button", { name: /가습기/ }));
    expect(screen.getByRole("status")).toHaveTextContent("가습기 검색 결과");
  });
});

describe("SearchFilters", () => {
  it("narrows the results and sums up the applied filters", async () => {
    const user = userEvent.setup();
    render(<SearchFiltersDemo />);
    expect(screen.getByText("결과 8개")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "흰색" }));
    expect(screen.getByText("결과 4개")).toBeInTheDocument();
    await user.click(screen.getByRole("checkbox", { name: "3만 원 이하" }));
    expect(screen.getByText("결과 2개")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "흰색 필터 해제" }));
    expect(screen.getByRole("checkbox", { name: "흰색" })).not.toBeChecked();
    expect(screen.getByText("결과 4개")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "모두 지우기" }));
    expect(screen.getByText("결과 8개")).toBeInTheDocument();
  });
});

describe("SearchSort", () => {
  it("opens a menu of orders and reorders the results", async () => {
    const user = userEvent.setup();
    render(<SearchSortDemo />);
    const button = screen.getByRole("button", { name: "정렬: 추천순" });
    await user.click(button);
    expect(screen.getByRole("menuitemradio", { name: "추천순" })).toHaveFocus();
    expect(screen.getByRole("menuitemradio", { name: "추천순" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    await user.keyboard("{ArrowDown}{Enter}");
    expect(screen.queryByRole("menu")).toBeNull();
    expect(screen.getByRole("button", { name: "정렬: 낮은 가격순" })).toHaveFocus();
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("린넨 셔츠 반팔");
    await user.click(screen.getByRole("button", { name: "정렬: 낮은 가격순" }));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).toBeNull();
  });
});

describe("SearchTermHighlight", () => {
  it("marks every word of the query without changing the text", async () => {
    const user = userEvent.setup();
    render(<SearchTermHighlightDemo />);
    expect(screen.getByText("결과 3개")).toBeInTheDocument();
    await user.type(screen.getByRole("textbox", { name: "상품 검색" }), " 셔츠");
    expect(screen.getByText("결과 5개")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("린넨 셔츠 반팔");
    expect(screen.getAllByText("셔츠").every((node) => node.tagName === "MARK")).toBe(true);
  });

  it("escapes special characters and ignores case", () => {
    const { container } = render(<HighlightText text="C++ Guide, c++ tips" query="c++" />);
    expect(container.querySelectorAll("mark")).toHaveLength(2);
    expect(container).toHaveTextContent("C++ Guide, c++ tips");
  });
});

describe("SearchScopeTabs", () => {
  it("switches what the same search looks in", async () => {
    const user = userEvent.setup();
    render(<SearchScopeTabsDemo />);
    expect(screen.getByRole("tab", { name: "전체 5" })).toHaveAttribute("aria-selected", "true");
    await user.click(screen.getByRole("tab", { name: "브랜드 1" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("린넨 공방");
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "기획전 1" })).toHaveFocus();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("여름 린넨 모음");
    await user.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "전체 5" })).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{End}{ArrowLeft}");
    expect(screen.getByRole("tab", { name: "브랜드 1" })).toHaveFocus();
  });
});
