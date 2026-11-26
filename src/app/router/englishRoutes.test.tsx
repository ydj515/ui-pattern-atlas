import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";

import { routes } from "@/app/router/routes";
import { LocaleProvider, type Locale } from "@/shared/i18n/locale";

/** Renders the app as a language serves it: English under its own `/en` basename. */
function renderIn(locale: Locale, path: string) {
  const basename = locale === "en" ? "/en" : "/";
  const router = createMemoryRouter(routes, {
    basename,
    initialEntries: [locale === "en" ? `/en${path}` : path],
  });
  render(
    <LocaleProvider locale={locale}>
      <RouterProvider router={router} />
    </LocaleProvider>,
  );
  return router;
}

const HANGUL = /[가-힣]/;

describe("English pages", () => {
  it("shows the site chrome in English and notes that demos use Korean copy", () => {
    renderIn("en", "/");
    expect(screen.getByRole("searchbox", { name: "Search UI patterns" })).toHaveAttribute(
      "placeholder",
      "Search by name or appearance",
    );
    const tabs = within(screen.getByRole("group", { name: "Categories" }));
    expect(tabs.getAllByRole("button").map((tab) => tab.textContent)).toEqual([
      "All",
      "Components",
      "Screen patterns",
      "Design styles",
      "UX psychology",
      "UI comparisons",
    ]);
    expect(screen.getByRole("button", { name: "confirmation" })).toBeInTheDocument();
    expect(screen.getByText("Thumbnails and demos show Korean UI copy.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All topics" })).toHaveAttribute("href", "/en/roadmap");

    // The language menu names Korean in Korean; everything else in the chrome is English.
    const header = screen.getByRole("banner").cloneNode(true) as HTMLElement;
    for (const korean of header.querySelectorAll('[lang="ko"]')) korean.remove();
    expect(header.textContent).not.toMatch(HANGUL);
    expect(screen.getByRole("contentinfo").textContent).not.toMatch(HANGUL);
  });

  it("offers the same page in Korean from the language menu", async () => {
    renderIn("en", "/patterns/modal-dialog?q=modal#accessibility");
    await userEvent.click(screen.getByRole("button", { name: "Language: English" }));
    const menu = within(screen.getByRole("list", { name: "Language" }));
    const korean = menu.getByRole("link", { name: "한국어" });
    expect(korean).toHaveAttribute("href", "/patterns/modal-dialog?q=modal#accessibility");
    expect(korean).toHaveAttribute("lang", "ko");
    expect(menu.getByRole("link", { name: "English" })).toHaveAttribute("aria-current", "true");
  });

  it("titles a pattern once in English and labels the detail page in English", async () => {
    renderIn("en", "/patterns/modal-dialog");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/^Modal Dialog$/);
    expect(screen.getByRole("button", { name: "Reset demo" })).toBeInTheDocument();
    expect(screen.getByText("The demo uses Korean UI copy.")).toBeInTheDocument();
    expect(screen.getByText("Also called", { selector: "dt" })).toBeInTheDocument();
    expect(await screen.findByText("Word origin", { selector: "dt" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "On this page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copy page" })).toBeInTheDocument();
    const breadcrumb = within(screen.getByRole("navigation", { name: "Breadcrumb" }));
    expect(breadcrumb.getByRole("link", { name: "All" })).toHaveAttribute("href", "/en");
    expect(breadcrumb.getByRole("link", { name: "Components" })).toBeInTheDocument();
    expect(breadcrumb.getByText("Modal Dialog")).toHaveAttribute("aria-current", "page");
  });

  it("keeps the Korean pages as they were, with a link to English", () => {
    renderIn("ko", "/patterns/toast");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("토스트 Toast");
    expect(screen.getByRole("button", { name: "처음부터" })).toBeInTheDocument();
    expect(screen.queryByText("The demo uses Korean UI copy.")).toBeNull();
    const englishLinks = screen.getAllByRole("link", { name: "English", hidden: true });
    // One in the header language menu, one in the mobile menu.
    expect(englishLinks).toHaveLength(2);
    for (const link of englishLinks) expect(link).toHaveAttribute("href", "/en/patterns/toast");
  });

  it("finds a page that does not exist in English too", () => {
    renderIn("en", "/no-such-page");
    expect(screen.getByRole("heading", { level: 1, name: "Page not found" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to patterns" })).toHaveAttribute("href", "/en");
  });
});
