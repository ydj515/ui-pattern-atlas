import { ROADMAP_DATA } from "@/entities/pattern/catalog/roadmapData";

export type RoadmapPriority = "완료" | "P1" | "P2" | "P3";
export type RoadmapKind = "컴포넌트" | "개념" | "비교";

export interface RoadmapEntry {
  readonly nameKo: string;
  readonly name: string;
  readonly description: string;
  readonly priority: RoadmapPriority;
  readonly group: string;
}

export interface RoadmapTopic {
  readonly id: string;
  readonly nameKo: string;
  readonly kind: RoadmapKind;
  readonly description: string;
  readonly entries: readonly RoadmapEntry[];
}

export const ROADMAP_TOPICS = ROADMAP_DATA;

export const ROADMAP_PATTERN_TOPICS = ROADMAP_TOPICS.filter((topic) => topic.kind !== "비교");

export const COMPARISON_TOPIC = ROADMAP_TOPICS.find((topic) => topic.kind === "비교");

export function comparisonSlug(entry: RoadmapEntry): string {
  return entry.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Icon names and UX research stay available through All and the full topic index.
// Components are named by what they are (a button, a list); situations by when they appear
// (the first run, finishing a task). A new topic goes to whichever question its name answers.
const SITUATION_TOPICS: readonly string[] = [
  "onboarding",
  "completion",
  "empty-error",
  "reaction-share",
  "ai",
  "pricing-display",
  "search-discovery",
  "auth",
  "checkout",
  "settings",
  "risky-actions",
];

export const CATALOG_SECTIONS = [
  {
    id: "components",
    label: "컴포넌트",
    includes: (topic) => topic.kind === "컴포넌트" && !SITUATION_TOPICS.includes(topic.id),
  },
  {
    id: "situations",
    label: "상황별 화면",
    includes: (topic) => SITUATION_TOPICS.includes(topic.id),
  },
  {
    id: "styles",
    label: "디자인 스타일",
    includes: (topic) => topic.id === "design-style" || topic.id === "typography-style",
  },
  {
    id: "ux-psychology",
    label: "UX 심리",
    includes: (topic) =>
      ["dark-patterns", "ux-laws", "cognitive-bias", "pricing-psychology"].includes(topic.id),
  },
  { id: "ui-comparison", label: "헷갈리는 UI", includes: (topic) => topic.kind === "비교" },
] as const satisfies readonly {
  id: string;
  label: string;
  includes: (topic: RoadmapTopic) => boolean;
}[];

export function catalogSectionFor(topic: RoadmapTopic) {
  return CATALOG_SECTIONS.find((section) => section.includes(topic));
}

export const CATALOG_TABS = [{ id: "all", label: "전체" }, ...CATALOG_SECTIONS] as const;

export function resolveCatalogCategory(requested: string | null) {
  // Old category ids that were split or renamed keep working as links.
  const id =
    requested === "input"
      ? "selection"
      : requested === "dark-pattern-ux"
        ? "dark-patterns"
        : requested;
  const topic = ROADMAP_TOPICS.find((candidate) => candidate.id === id);
  const section = CATALOG_SECTIONS.find((candidate) => candidate.id === id);
  const category = section?.id ?? topic?.id ?? (id === "status" ? "status" : "all");
  const activeTab =
    section?.id ??
    (topic && catalogSectionFor(topic)?.id) ??
    (category === "status" ? "components" : "all");
  return { category, section, activeTab };
}

export function catalogCategoryHref(category: string, search = "") {
  const params = new URLSearchParams(search);
  if (category === "all") params.delete("category");
  else params.set("category", category);
  return params.size ? `/?${params}` : "/";
}
