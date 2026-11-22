import { useEffect, useState, useSyncExternalStore } from "react";

import {
  DARK_SCHEME_QUERY,
  readThemePreference,
  resolveTheme,
  storeThemePreference,
  type ResolvedTheme,
  type ThemePreference,
} from "@/features/switch-theme/model/theme";

function subscribeToSystemScheme(onChange: () => void) {
  const query = window.matchMedia(DARK_SCHEME_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function systemPrefersDark() {
  return window.matchMedia(DARK_SCHEME_QUERY).matches;
}

export interface ThemeState {
  readonly preference: ThemePreference;
  readonly resolved: ResolvedTheme;
  readonly setPreference: (preference: ThemePreference) => void;
  /** Switch to the opposite of what is shown now and remember it. */
  readonly toggle: () => void;
}

/**
 * The visitor's theme. Follows the operating system until they toggle it, then remembers
 * their choice. Keeps `<html data-theme>` in sync, including live OS changes in "system".
 */
export function useTheme(): ThemeState {
  const [preference, setPreferenceState] = useState<ThemePreference>(readThemePreference);
  const prefersDark = useSyncExternalStore(subscribeToSystemScheme, systemPrefersDark, () => false);
  const resolved = resolveTheme(preference, prefersDark);

  useEffect(() => {
    document.documentElement.dataset.theme = resolved;
  }, [resolved]);

  function setPreference(next: ThemePreference) {
    setPreferenceState(next);
    storeThemePreference(next);
  }

  return {
    preference,
    resolved,
    setPreference,
    toggle: () => setPreference(resolved === "dark" ? "light" : "dark"),
  };
}
