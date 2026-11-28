import { createElement, useEffect, useState, type ComponentType } from "react";

import type { PreviewLoader } from "@/entities/pattern/model/pattern";
import { useMessages } from "@/shared/i18n/messages";
import { Button } from "@/shared/ui/primitives/Button";

export type PatternPreviewProps = (
  | { readonly Preview: ComponentType; readonly loadPreview?: never }
  | { readonly loadPreview: PreviewLoader; readonly Preview?: never }
) & {
  /**
   * Set when the page shows its own reset button (see `ResetDemoButton`): changing it remounts
   * the demo, and the stage leaves out its built-in button.
   */
  readonly resetKey?: number;
};

function usePreviewComponent(
  Preview: ComponentType | undefined,
  loadPreview: PreviewLoader | undefined,
): ComponentType | null {
  const [loaded, setLoaded] = useState<{
    loadPreview: PreviewLoader;
    Component: ComponentType;
  } | null>(null);

  useEffect(() => {
    if (!loadPreview) return;
    let cancelled = false;
    loadPreview().then((Component) => {
      if (!cancelled) setLoaded({ loadPreview, Component });
    });
    return () => {
      cancelled = true;
    };
  }, [loadPreview]);

  if (Preview) return Preview;
  return loaded && loaded.loadPreview === loadPreview ? loaded.Component : null;
}

const ICON_RESET =
  "M10 4a6 6 0 1 0 5.7 7.9 1 1 0 1 1 1.9.6A8 8 0 1 1 15 5.1V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.6A6 6 0 0 0 10 4Z";

/** "Start over" for a demo stage, for pages that place it outside the stage. */
export function ResetDemoButton({ onReset }: { readonly onReset: () => void }) {
  const messages = useMessages();
  return (
    <Button onClick={onReset}>
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
        <path d={ICON_RESET} />
      </svg>
      {messages.detail.resetDemo}
    </Button>
  );
}

/**
 * Stage for the live demo. The reset button remounts the demo to reset its state.
 * The height is fixed so a demo growing or shrinking never shifts the rest of the page;
 * content taller than the stage scrolls inside it instead.
 */
export function PatternPreview({
  Preview,
  loadPreview,
  resetKey: outerResetKey,
}: PatternPreviewProps) {
  const messages = useMessages();
  const [innerResetKey, setResetKey] = useState(0);
  const resetKey = outerResetKey ?? innerResetKey;
  const component = usePreviewComponent(Preview, loadPreview);

  return (
    <div className="relative h-preview rounded-surface bg-canvas">
      {messages.detail.demoLanguageNote ? (
        <p className="absolute top-4 left-4 text-caption text-canvas-muted">
          {messages.detail.demoLanguageNote}
        </p>
      ) : null}
      {outerResetKey === undefined ? (
        <Button
          variant="quietOnCanvas"
          className="absolute top-3 right-3"
          onClick={() => setResetKey((key) => key + 1)}
        >
          {messages.detail.resetDemo}
        </Button>
      ) : null}
      <div
        aria-busy={component === null}
        className="grid h-full place-items-center-safe overflow-auto px-4 py-12 sm:px-10"
      >
        {component ? createElement(component, { key: resetKey }) : null}
      </div>
    </div>
  );
}
