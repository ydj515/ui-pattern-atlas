import { findPatternBySlug } from "@/entities/pattern/catalog";
import type { Pattern } from "@/entities/pattern/model/pattern";

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

  parts.push("## When to use", bulletList(pattern.whenToUse));
  parts.push("## When not to use", bulletList(pattern.whenNotToUse));

  parts.push(
    "## Alternatives",
    bulletList(
      pattern.alternatives.map((alternative) => {
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

  parts.push("## Accessibility", bulletList(pattern.accessibility));
  parts.push(
    `${pattern.kind === "concept" ? "Related concepts" : "Tech"}: ${pattern.tags.join(", ")}`,
  );

  return `${parts.join("\n\n")}\n`;
}

/** Loads every implementation file of a pattern, then renders the page as Markdown. */
export async function loadPatternMarkdown(pattern: Pattern, pageUrl: string): Promise<string> {
  const sources =
    pattern.kind === "concept"
      ? []
      : await Promise.all(
          pattern.sources.map(async (source) => ({
            fileName: source.fileName,
            role: source.role,
            code: (await source.load()).default,
          })),
        );
  return buildPatternMarkdown(pattern, sources, pageUrl);
}
