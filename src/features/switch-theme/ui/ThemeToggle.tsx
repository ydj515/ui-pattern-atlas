import { useMessages } from "@/shared/i18n/messages";
import { Button } from "@/shared/ui/primitives/Button";

import type { ResolvedTheme } from "@/features/switch-theme/model/theme";

export interface ThemeToggleProps {
  readonly theme: ResolvedTheme;
  readonly onToggle: () => void;
}

/**
 * One button that flips between light and dark. The icon shows the current theme
 * (sun or moon); the label says what pressing it will do.
 */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const messages = useMessages();
  const label = theme === "dark" ? messages.theme.toLight : messages.theme.toDark;

  return (
    <Button variant="icon" onClick={onToggle} aria-label={label} title={label}>
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
        {theme === "dark" ? (
          <path d="M8.5 2.6a1 1 0 0 1 .2 1.1A6 6 0 0 0 16.3 11a1 1 0 0 1 1.3 1.3A8 8 0 1 1 7.4 2.4a1 1 0 0 1 1.1.2Z" />
        ) : (
          <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-7 2a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3Zm13 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Zm-6 6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4.6 4.6a1 1 0 0 1 1.4 0l.7.7a1 1 0 0 1-1.4 1.4l-.7-.7a1 1 0 0 1 0-1.4Zm9.4 9.4a1 1 0 0 1 1.4 0l.7.7a1 1 0 0 1-1.4 1.4l-.7-.7a1 1 0 0 1 0-1.4Zm1.4-9.4a1 1 0 0 1 0 1.4l-.7.7a1 1 0 1 1-1.4-1.4l.7-.7a1 1 0 0 1 1.4 0ZM6 14a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.4-1.4l.7-.7A1 1 0 0 1 6 14Z" />
        )}
      </svg>
    </Button>
  );
}
