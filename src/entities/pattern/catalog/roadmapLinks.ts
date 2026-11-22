import { PATTERNS } from "@/entities/pattern/catalog";
import {
  comparisonSlug,
  type RoadmapEntry,
  type RoadmapTopic,
} from "@/entities/pattern/catalog/roadmap";

const patternsByName = new Map(
  PATTERNS.flatMap((pattern) =>
    [pattern.name, pattern.nameKo].map((name) => [name, pattern] as const),
  ),
);

export function patternForRoadmapEntry(topic: RoadmapTopic, entry: RoadmapEntry) {
  return PATTERNS.find(
    (pattern) =>
      pattern.category === topic.id &&
      (pattern.nameKo === entry.nameKo || pattern.name === entry.name),
  );
}

export function roadmapEntryAnchor(topic: RoadmapTopic, entry: RoadmapEntry) {
  return `${topic.id}-${comparisonSlug(entry)}`;
}

export function roadmapEntryHref(topic: RoadmapTopic, entry: RoadmapEntry) {
  const params = new URLSearchParams({ category: topic.id, q: entry.name });
  return `/roadmap?${params}#${roadmapEntryAnchor(topic, entry)}`;
}

export function roadmapEntryDestination(topic: RoadmapTopic, entry: RoadmapEntry) {
  if (topic.kind === "비교") {
    const hasDemo = entry.priority === "완료";
    return {
      href: `/compare/${comparisonSlug(entry)}`,
      status: hasDemo ? "비교 가이드 · 데모" : "비교 가이드",
      hasDemo,
    };
  }
  const pattern = patternForRoadmapEntry(topic, entry);
  if (pattern)
    return { href: `/patterns/${pattern.slug}`, status: "데모 보기 가능", hasDemo: true };
  return { href: undefined, status: "준비 중", hasDemo: false };
}

const comparisonNames: Readonly<Record<string, string>> = {
  Checkbox: "체크박스",
  "Step Indicator": "스테퍼",
  "Number Stepper": "숫자 입력",
  Snackbar: "토스트",
  Alert: "얼럿 다이얼로그",
  "Search Suggestion": "검색어 추천",
  "Radio Group": "라디오 그룹",
  Pagination: "페이지네이션",
  Rating: "별점",
  Review: "리뷰",
  Badge: "배지",
};

export function findPatternByTerm(term: string) {
  return patternsByName.get(term) ?? patternsByName.get(comparisonNames[term] ?? "");
}
