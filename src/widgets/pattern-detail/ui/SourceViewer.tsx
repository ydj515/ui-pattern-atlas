import { useEffect, useState, type CSSProperties } from "react";

import type { PatternSource, SourceLoader } from "@/entities/pattern/model/pattern";
import { CopyCodeButton } from "@/features/copy-code/ui/CopyCodeButton";
import { highlightCode, type HighlightedLines } from "@/shared/lib/highlightCode";
import { Tabs } from "@/shared/ui/patterns/tabs/Tabs";

// TextMate font style bit flags.
const ITALIC = 1;
const BOLD = 2;
const UNDERLINE = 4;

function tokenStyle(color: string | undefined, fontStyle: number | undefined): CSSProperties {
  const flags = fontStyle ?? 0;
  return {
    color,
    fontStyle: flags & ITALIC ? "italic" : undefined,
    fontWeight: flags & BOLD ? 600 : undefined,
    textDecoration: flags & UNDERLINE ? "underline" : undefined,
  };
}

/** Coloured lines once shiki has loaded; `null` while loading or if it failed. */
function useHighlightedLines(code: string): HighlightedLines | null {
  const [result, setResult] = useState<{ code: string; lines: HighlightedLines } | null>(null);

  useEffect(() => {
    let cancelled = false;
    highlightCode(code)
      .then((lines) => {
        if (!cancelled) setResult({ code, lines });
      })
      .catch(() => {
        // Highlighting is an enhancement; the plain code stays readable without it.
      });
    return () => {
      cancelled = true;
    };
  }, [code]);

  return result?.code === code ? result.lines : null;
}

function CodeLines({ code }: { readonly code: string }) {
  const lines = useHighlightedLines(code);
  if (!lines) return <code>{code}</code>;

  return (
    <code>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block min-h-6">
          {line.map((token) => (
            <span key={token.offset} style={tokenStyle(token.color, token.fontStyle)}>
              {token.content}
            </span>
          ))}
        </span>
      ))}
    </code>
  );
}

type SourceState =
  | { readonly status: "loading" }
  | { readonly status: "loaded"; readonly code: string }
  | { readonly status: "failed" };

/** Fetches the source text on demand; `retry` starts a new attempt after a failure. */
function useSourceCode(load: SourceLoader): { state: SourceState; retry: () => void } {
  const [result, setResult] = useState<{
    load: SourceLoader;
    attempt: number;
    state: SourceState;
  }>();
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    load()
      .then((module) => {
        if (!cancelled)
          setResult({ load, attempt, state: { status: "loaded", code: module.default } });
      })
      .catch(() => {
        if (!cancelled) setResult({ load, attempt, state: { status: "failed" } });
      });
    return () => {
      cancelled = true;
    };
  }, [load, attempt]);

  const current = result?.load === load && result.attempt === attempt;
  return {
    state: current ? result.state : { status: "loading" },
    retry: () => setAttempt((count) => count + 1),
  };
}

function CodeBlock({ source }: { readonly source: PatternSource }) {
  const { state, retry } = useSourceCode(source.load);
  const code = state.status === "loaded" ? state.code.trimEnd() : "";

  return (
    <div className="overflow-hidden rounded-surface bg-code-bg">
      <div className="flex items-center justify-between border-b border-code-rule px-4 py-2">
        <span className="text-caption text-code-fg">
          {source.fileName}{" "}
          {state.status === "loaded" ? (
            <span className="ml-2 text-code-muted">{code.split("\n").length}줄</span>
          ) : null}
        </span>
        {state.status === "loaded" ? (
          <CopyCodeButton code={state.code} fileName={source.fileName} />
        ) : null}
      </div>
      <pre
        tabIndex={0}
        aria-label={`${source.fileName} 소스 코드`}
        aria-busy={state.status === "loading"}
        className="max-h-128 overflow-auto p-4 font-mono text-code text-code-fg aria-busy:h-128"
      >
        {state.status === "loaded" ? <CodeLines code={code} /> : null}
        {state.status === "loading" ? (
          <span className="text-code-muted">소스를 불러오는 중이에요</span>
        ) : null}
        {state.status === "failed" ? (
          <span className="flex items-center gap-3">
            <span role="alert">소스를 불러오지 못했어요</span>
            <button
              type="button"
              onClick={retry}
              className="rounded-control border border-code-rule px-2.5 py-1 text-micro font-medium text-code-fg hover:bg-code-rule"
            >
              다시 시도
            </button>
          </span>
        ) : null}
      </pre>
    </div>
  );
}

/** File tabs for the implementation files of a pattern. */
export function SourceViewer({ sources }: { readonly sources: readonly PatternSource[] }) {
  return (
    <Tabs
      label="구현 파일"
      items={sources.map((source) => ({
        id: source.fileName,
        label: `${source.role} · ${source.fileName}`,
        content: <CodeBlock source={source} />,
      }))}
    />
  );
}
