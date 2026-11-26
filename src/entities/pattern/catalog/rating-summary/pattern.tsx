import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const ratingSummaryPattern: Pattern = {
  slug: "rating-summary",
  name: "Rating Summary",
  nameKo: "평점 요약",
  aliases: ["리뷰 요약", "점수 분포", "rating histogram", "review breakdown"],
  category: "reaction-share",
  summary: "평균과 점수별 분포 막대",
  description:
    "평균 점수와 전체 리뷰 수, 점수별 분포 막대를 함께 보여 주는 요약입니다. 막대를 누르면 그 점수의 리뷰만 걸러 보고, 막대마다 개수를 글자로 적어 그림 없이도 읽을 수 있습니다.",
  whenToUse: [
    "상품, 앱처럼 리뷰가 많은 상세 화면",
    "평균만으로는 판단하기 어려울 때",
    "낮은 점수 리뷰부터 보고 싶을 때",
  ],
  whenNotToUse: [
    "리뷰가 몇 개 안 될 때(평점 배지로 충분)",
    "카드처럼 좁은 곳(평점 배지 사용)",
    "점수 대신 글이 중요한 곳",
  ],
  alternatives: [
    { name: "평점 배지", slug: "rating-badge", reason: "카드에 짧게 보여 줄 때" },
    { name: "필터 칩", slug: "filter-chip", reason: "점수 외 조건으로 거를 때" },
  ],
  accessibility: [
    "막대 버튼은 aria-pressed이고 이름에 점수와 개수가 들어 있습니다.",
    "막대 그림은 aria-hidden입니다.",
    "거른 상태는 role=status 글로 알립니다.",
    "개수는 tabular-nums로 자릿수를 맞춥니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Bar chart", "Filter"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/rating-summary/RatingSummaryDemo").then(
      (m) => m.RatingSummaryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/rating-summary/RatingSummaryThumbnail").then(
      (m) => m.RatingSummaryThumbnail,
    ),
  sources: [
    {
      fileName: "RatingSummary.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/rating-summary/RatingSummary.tsx?raw"),
    },
    {
      fileName: "RatingSummaryDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/rating-summary/RatingSummaryDemo.tsx?raw"),
    },
  ],
};
