import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const writtenReviewPattern: Pattern = {
  slug: "written-review",

  name: "Written Review",
  nameKo: "리뷰",
  aliases: ["후기 쓰기", "리뷰 작성", "write a review", "review form"],
  category: "reaction-share",
  summary: "별점과 함께 경험을 글로 남기기",
  description:
    "별점과 후기 글을 함께 받는 작성 폼입니다. 글자 수 규칙과 현재 글자 수를 쓰는 동안 보여 주고, 제출할 때 확인해 첫 번째 문제로 포커스를 옮깁니다.",
  tags: [...BASE_TAGS, "Form validation", "aria-describedby", "radio"],
  loadGuide: () => import("@/entities/pattern/catalog/written-review/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/written-review/WrittenReviewDemo").then(
      (m) => m.WrittenReviewDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/written-review/WrittenReviewThumbnail").then(
      (m) => m.WrittenReviewThumbnail,
    ),
  sources: [
    {
      fileName: "WrittenReview.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/written-review/WrittenReview.tsx?raw"),
    },
    {
      fileName: "WrittenReviewDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/written-review/WrittenReviewDemo.tsx?raw"),
    },
  ],
};
