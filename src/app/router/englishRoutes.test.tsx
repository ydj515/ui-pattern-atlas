import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { beforeAll, describe, expect, it } from "vitest";

import { routes } from "@/app/router/routes";
import { loadCatalogText } from "@/entities/pattern/i18n/catalogText";
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
  beforeAll(() => loadCatalogText("en"));

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

  it("shows topics, cards and search results in English", async () => {
    renderIn("en", "/");
    expect(screen.getByRole("heading", { level: 2, name: "Overlays" })).toBeInTheDocument();
    expect(
      screen.getByText("Dialogs, panels, and hints that appear over the current screen."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A dialog that pauses the current task for a decision."),
    ).toBeInTheDocument();
    // Paste the query in one go: typing it re-filters the whole catalog on every key, which
    // took longer than the test timeout on CI runners.
    await userEvent.click(screen.getByRole("searchbox", { name: "Search UI patterns" }));
    await userEvent.paste("snackbar");
    const results = within(await screen.findByRole("list", { name: "Pattern demos" }));
    expect(results.getByRole("link", { name: /^Toast/ })).toHaveAttribute(
      "href",
      "/en/patterns/toast",
    );
    // Renders the whole catalog twice; CI runners are several times slower than a laptop.
  }, 15_000);

  it("describes a pattern in English on its page", async () => {
    renderIn("en", "/patterns/modal-dialog");
    expect(
      screen.getByText(
        "A modal dialog asks for a decision or a short input. While it's open, the rest of the page is unavailable.",
      ),
    ).toBeInTheDocument();
    const aliases = screen.getByText("Also called", { selector: "dt" }).nextElementSibling;
    expect(aliases?.textContent).toContain("confirmation dialog");
    expect(aliases?.textContent).not.toMatch(HANGUL);
    const breadcrumb = within(screen.getByRole("navigation", { name: "Breadcrumb" }));
    expect(breadcrumb.getByRole("link", { name: "Overlays" })).toBeInTheDocument();
  });

  it("lists roadmap topics and comparisons in English", () => {
    renderIn("en", "/roadmap?category=overlay");
    expect(screen.getByRole("heading", { level: 2, name: "Overlays" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Modal Dialog" })).toHaveAttribute(
      "href",
      "/en/patterns/modal-dialog",
    );
  });

  it("titles a comparison in English", () => {
    renderIn("en", "/compare/switch-checkbox");
    expect(
      screen.getByRole("heading", { level: 1, name: "Switch · Checkbox" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Selection and components")).toBeInTheDocument();
    expect(
      screen.getByText("Applying a setting at once versus collecting consent or list choices."),
    ).toBeInTheDocument();
  });

  it("gives the guidance sections in English, with English alternatives", async () => {
    renderIn("en", "/patterns/modal-dialog");
    const whenToUse = await screen.findByRole("region", { name: "When to use" });
    expect(whenToUse).toHaveTextContent(
      "You need confirmation for something hard to undo, such as deleting or paying.",
    );
    const alternatives = within(screen.getByRole("region", { name: "Alternatives" }));
    expect(alternatives.getByRole("link", { name: "Toast" })).toHaveAttribute(
      "href",
      "/en/patterns/toast",
    );
    expect(
      screen.getByText("Word origin", { selector: "dt" }).nextElementSibling,
    ).toHaveTextContent(/^From "mode"/);
    // Everything but the demo stage and the source code is English.
    const article = screen.getByRole("article").cloneNode(true) as HTMLElement;
    article.querySelector('[aria-label="Preview"]')?.remove();
    article.querySelector("#implementation")?.remove();
    expect(article.textContent).not.toMatch(HANGUL);
  });

  it("tells what to try in a comparison in English", () => {
    renderIn("en", "/compare/switch-checkbox");
    expect(
      screen.getByText("Turn on event news and check whether it needs saving."),
    ).toBeInTheDocument();
  });
});
