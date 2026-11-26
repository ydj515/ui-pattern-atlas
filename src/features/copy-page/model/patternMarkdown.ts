import { findPatternBySlug } from "@/entities/pattern/catalog";
import type { Pattern, PatternGuide } from "@/entities/pattern/model/pattern";

export interface LoadedSource {
  readonly fileName: string;
  readonly role: string;
  readonly code: string;
}

/** Markdown fence info string for a file name, e.g. `Tabs.tsx` -> `tsx`. */
function fenceLanguage(fileName: string): string {
  const extension = fileName.split(".").pop() ?? "";
  return extension === fileName ? "" : extension;
}

/** A fence long enough that backtick runs inside the code cannot close it early. */
function fence(code: string): string {
  const longestRun = Math.max(2, ...(code.match(/`+/g) ?? []).map((run) => run.length));
  return "`".repeat(longestRun + 1);
}

function bulletList(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

/** Canonical page URL: no catalog search query and no section hash. */
function canonicalUrl(pageUrl: string): string {
  const page = new URL(pageUrl);
  page.search = "";
  page.hash = "";
  return page.toString();
}

/** URL of another pattern's page, resolved next to the current page URL. */
function siblingPageUrl(pageUrl: string, slug: string): string {
  return new URL(slug, canonicalUrl(pageUrl)).toString();
}

/**
 * Renders a pattern page as Markdown for LLMs: the same sections the page shows, with the
 * implementation files inlined. The live demo has no text form, so it is left out.
 */
export function buildPatternMarkdown(
  pattern: Pattern,
  guide: PatternGuide,
  sources: readonly LoadedSource[],
  pageUrl: string,
): string {
  const parts: string[] = [
    `# ${pattern.nameKo} (${pattern.name})`,
    `Source: ${canonicalUrl(pageUrl)}`,
    `> ${pattern.description}`,
  ];

  if (pattern.aliases.length > 0) {
    parts.push(`Also known as: ${pattern.aliases.join(", ")}`);
  }

  if (guide.origin) {
    parts.push(`Name origin: ${guide.origin}`);
  }

  parts.push("## When to use", bulletList(guide.whenToUse));
  parts.push("## When not to use", bulletList(guide.whenNotToUse));

  parts.push(
    "## Alternatives",
    bulletList(
      guide.alternatives.map((alternative) => {
        const target = alternative.slug ? findPatternBySlug(alternative.slug) : undefined;
        const name = target
          ? `[${alternative.name}](${siblingPageUrl(pageUrl, target.slug)})`
          : alternative.name;
        return `${name}: ${alternative.reason}`;
      }),
    ),
  );

  if (sources.length > 0) {
    parts.push(
      "## Implementation",
      "React 19, TypeScript, Tailwind CSS v4. Works without a UI library; copying the component file alone is enough.",
    );
    for (const source of sources) {
      const code = source.code.trimEnd();
      const marks = fence(code);
      parts.push(
        `### ${source.role}: ${source.fileName}`,
        `${marks}${fenceLanguage(source.fileName)}\n${code}\n${marks}`,
      );
    }
  }

  parts.push("## Accessibility", bulletList(guide.accessibility));

  return `${parts.join("\n\n")}\n`;
}

/** Loads the guidance and every implementation file of a pattern, then renders it as Markdown. */
export async function loadPatternMarkdown(pattern: Pattern, pageUrl: string): Promise<string> {
  const [guide, sources] = await Promise.all([
    pattern.loadGuide(),
    pattern.kind === "concept"
      ? []
      : Promise.all(
          pattern.sources.map(async (source) => ({
            fileName: source.fileName,
            role: source.role,
            code: (await source.load()).default,
          })),
        ),
  ]);
  return buildPatternMarkdown(pattern, guide, sources, pageUrl);
}
