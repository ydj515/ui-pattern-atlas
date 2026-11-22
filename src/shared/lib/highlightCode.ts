import type { HighlighterCore, ThemedToken } from "shiki/core";

export type HighlightedLines = ThemedToken[][];

const LANGUAGE = "tsx";
const THEME = "dark-plus";

let highlighterPromise: Promise<HighlighterCore> | undefined;

/**
 * Loads shiki lazily with only the TSX grammar, the VS Code Dark+ theme and the JavaScript
 * regex engine (no WebAssembly), so pages without code never download it.
 */
function loadHighlighter(): Promise<HighlighterCore> {
  highlighterPromise ??= Promise.all([
    import("shiki/core"),
    import("shiki/engine/javascript"),
    import("@shikijs/langs/tsx"),
    import("@shikijs/themes/dark-plus"),
  ])
    .then(([{ createHighlighterCore }, { createJavaScriptRegexEngine }, tsx, darkPlus]) =>
      createHighlighterCore({
        langs: [tsx.default],
        themes: [darkPlus.default],
        engine: createJavaScriptRegexEngine(),
      }),
    )
    .catch((error: unknown) => {
      // Allow a later retry (e.g. after a flaky network) instead of caching the failure.
      highlighterPromise = undefined;
      throw error;
    });
  return highlighterPromise;
}

/** Tokenizes TSX source into coloured lines with the VS Code Dark+ theme. */
export async function highlightCode(code: string): Promise<HighlightedLines> {
  const highlighter = await loadHighlighter();
  return highlighter.codeToTokens(code, { lang: LANGUAGE, theme: THEME }).tokens;
}
