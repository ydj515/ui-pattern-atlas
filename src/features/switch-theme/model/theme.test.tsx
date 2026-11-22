import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeToggle } from "@/features/switch-theme/ui/ThemeToggle";
import {
  readThemePreference,
  resolveTheme,
  THEME_STORAGE_KEY,
} from "@/features/switch-theme/model/theme";
import { useTheme } from "@/features/switch-theme/model/useTheme";

/** A controllable `(prefers-color-scheme: dark)` media query. */
function mockSystemScheme(initiallyDark: boolean) {
  let matches = initiallyDark;
  const listeners = new Set<() => void>();
  vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        get matches() {
          return matches;
        },
        media: query,
        addEventListener: (_type: string, listener: () => void) => listeners.add(listener),
        removeEventListener: (_type: string, listener: () => void) => listeners.delete(listener),
      }) as unknown as MediaQueryList,
  );
  return (dark: boolean) => {
    matches = dark;
    listeners.forEach((listener) => listener());
  };
}

function Harness() {
  const theme = useTheme();
  return (
    <>
      <p data-testid="resolved">{theme.resolved}</p>
      <ThemeToggle theme={theme.resolved} onToggle={theme.toggle} />
    </>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  delete document.documentElement.dataset.theme;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("theme model", () => {
  it("resolves system to the operating system scheme", () => {
    expect(resolveTheme("system", true)).toBe("dark");
    expect(resolveTheme("system", false)).toBe("light");
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });

  it("ignores unknown stored values and blocked storage", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "sepia");
    expect(readThemePreference()).toBe("system");

    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    expect(readThemePreference()).toBe("system");
  });
});

describe("useTheme with ThemeToggle", () => {
  it("follows the system by default, including live changes", () => {
    const setSystemDark = mockSystemScheme(false);
    render(<Harness />);
    expect(screen.getByRole("button", { name: "다크 모드로 전환" })).toBeInTheDocument();
    expect(document.documentElement.dataset.theme).toBe("light");

    act(() => setSystemDark(true));
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(screen.getByRole("button", { name: "라이트 모드로 전환" })).toBeInTheDocument();
  });

  it("flips between light and dark with one button and remembers it", async () => {
    const setSystemDark = mockSystemScheme(false);
    render(<Harness />);

    await userEvent.click(screen.getByRole("button", { name: "다크 모드로 전환" }));
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    // An explicit choice wins over later system changes.
    act(() => setSystemDark(false));
    expect(screen.getByTestId("resolved")).toHaveTextContent("dark");

    await userEvent.click(screen.getByRole("button", { name: "라이트 모드로 전환" }));
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("restores the saved choice", () => {
    mockSystemScheme(true);
    window.localStorage.setItem(THEME_STORAGE_KEY, "light");
    render(<Harness />);
    expect(screen.getByRole("button", { name: "다크 모드로 전환" })).toBeInTheDocument();
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
