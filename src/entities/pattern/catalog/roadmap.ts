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
