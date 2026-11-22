import { createElement, useEffect, useState, type ComponentType } from "react";

import type { PreviewLoader } from "@/entities/pattern/model/pattern";
import { Button } from "@/shared/ui/primitives/Button";

export type PatternPreviewProps =
  | { readonly Preview: ComponentType; readonly loadPreview?: never }
  | { readonly loadPreview: PreviewLoader; readonly Preview?: never };

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

/**
 * Stage for the live demo. "처음부터" remounts the demo to reset its state.
 * The height is fixed so a demo growing or shrinking never shifts the rest of the page;
 * content taller than the stage scrolls inside it instead.
 */
export function PatternPreview({ Preview, loadPreview }: PatternPreviewProps) {
  const [resetKey, setResetKey] = useState(0);
  const component = usePreviewComponent(Preview, loadPreview);

  return (
    <div className="relative h-preview rounded-surface bg-canvas">
      <Button
        variant="quietOnCanvas"
        className="absolute top-3 right-3"
        onClick={() => setResetKey((key) => key + 1)}
      >
        처음부터
      </Button>
      <div
        aria-busy={component === null}
        className="grid h-full place-items-center-safe overflow-auto px-4 py-12 sm:px-10"
      >
        {component ? createElement(component, { key: resetKey }) : null}
      </div>
    </div>
  );
}
