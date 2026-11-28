import { useId, useRef, useState, type KeyboardEvent } from "react";
import { useLocation } from "react-router";

import type { Pattern } from "@/entities/pattern/model/pattern";
import { useMessages } from "@/shared/i18n/messages";
import { PatternPreview, ResetDemoButton } from "@/widgets/pattern-detail/ui/PatternPreview";
import { SourceViewer } from "@/widgets/pattern-detail/ui/SourceViewer";

type Tab = "preview" | "code";

/** Older links point at the implementation section, which now lives in the code tab. */
export const IMPLEMENTATION_ID = "implementation";

/**
 * The live demo and its source, as two tabs over one area. The preview stays mounted while
 * the code is shown, so the demo keeps its state; the source loads the first time its tab
 * opens. Concept entries have no component files, so they show the demo alone.
 */
export function DemoPanel({ pattern }: { readonly pattern: Pattern }) {
  const messages = useMessages();
  const { hash } = useLocation();
  const baseId = useId();
  const tabRefs = useRef<Partial<Record<Tab, HTMLButtonElement | null>>>({});
  const sources = pattern.kind === "concept" ? undefined : pattern.sources;
  const linkedToCode = sources !== undefined && hash === `#${IMPLEMENTATION_ID}`;
  const [tab, setTab] = useState<Tab>(linkedToCode ? "code" : "preview");
  const [codeOpened, setCodeOpened] = useState(linkedToCode);
  const [resetKey, setResetKey] = useState(0);
  // A link to the implementation section opens the code tab, also after the page has loaded.
  const [seenHash, setSeenHash] = useState(hash);
  if (hash !== seenHash) {
    setSeenHash(hash);
    if (linkedToCode) {
      setTab("code");
      setCodeOpened(true);
    }
  }

  function select(next: Tab) {
    setTab(next);
    if (next === "code") setCodeOpened(true);
  }

  const tabs: readonly { id: Tab; label: string }[] = [
    { id: "preview", label: messages.detail.preview },
    { id: "code", label: messages.detail.code },
  ];

  function moveFocus(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next = tab === "preview" ? "code" : "preview";
    select(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div className="mb-3 flex min-h-10 items-end justify-between gap-4">
        {sources ? (
          <div role="tablist" aria-label={messages.detail.preview} className="flex gap-6">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                ref={(element) => {
                  tabRefs.current[id] = element;
                }}
                type="button"
                role="tab"
                id={`${baseId}-${id}-tab`}
                aria-selected={tab === id}
                aria-controls={id === "code" ? IMPLEMENTATION_ID : `${baseId}-preview`}
                tabIndex={tab === id ? 0 : -1}
                onClick={() => select(id)}
                onKeyDown={moveFocus}
                className="-mb-px min-h-10 border-b-2 border-transparent text-body-sm text-graphite hover:text-ink aria-selected:border-ink aria-selected:font-semibold aria-selected:text-ink"
              >
                {label}
              </button>
            ))}
          </div>
        ) : (
          <span />
        )}
        {tab === "preview" ? (
          <ResetDemoButton onReset={() => setResetKey((key) => key + 1)} />
        ) : null}
      </div>

      <div
        id={`${baseId}-preview`}
        role={sources ? "tabpanel" : undefined}
        aria-labelledby={sources ? `${baseId}-preview-tab` : undefined}
        hidden={tab !== "preview"}
      >
        <PatternPreview loadPreview={pattern.loadPreview} resetKey={resetKey} />
      </div>
      {sources ? (
        <div
          id={IMPLEMENTATION_ID}
          role="tabpanel"
          aria-labelledby={`${baseId}-code-tab`}
          hidden={tab !== "code"}
          className="scroll-mt-20"
        >
          {codeOpened ? (
            <>
              <SourceViewer sources={sources} />
              <p className="mt-3 text-caption text-graphite">
                {messages.detail.implementationNote}
              </p>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
