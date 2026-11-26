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
  tags: [...BASE_TAGS, "aria-pressed", "Bar chart", "Filter"],
  loadGuide: () => import("@/entities/pattern/catalog/rating-summary/guide").then((m) => m.guide),
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
