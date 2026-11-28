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

/** "Start over" for a demo stage, for pages that place it outside the stage. */
export function ResetDemoButton({ onReset }: { readonly onReset: () => void }) {
  const messages = useMessages();
  return (
    <Button onClick={onReset}>
      {/* A circular arrow: a 315° arc ending at the top right, with its head at the end. */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-4"
      >
        <path d="M16.25 10a6.25 6.25 0 1 1-1.83-4.42" />
        <path d="M14.42 2.33v3.25h-3.25" />
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
