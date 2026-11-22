import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { WrittenReviewThumbnail } from "@/entities/pattern/catalog/written-review/WrittenReviewThumbnail";

export const writtenReviewPattern: Pattern = {
  slug: "written-review",
  name: "Written Review",
  nameKo: "리뷰",
  aliases: ["후기 쓰기", "리뷰 작성", "write a review", "review form"],
  category: "reaction-share",
  summary: "별점과 함께 경험을 글로 남기기",
  description:
    "별점과 후기 글을 함께 받는 작성 폼입니다. 글자 수 규칙과 현재 글자 수를 쓰는 동안 보여 주고, 제출할 때 확인해 첫 번째 문제로 포커스를 옮깁니다.",
  whenToUse: [
    "구매나 이용을 마친 뒤의 후기",
    "다른 사람에게 도움이 될 경험을 모을 때",
    "별점만으로는 이유를 알 수 없을 때",
  ],
  whenNotToUse: [
    "빠른 만족도 조사(이모지 평가 사용)",
    "쓰기 전에 버튼을 막아 두는 설계",
    "후기를 써야만 다음으로 넘어가게 할 때",
  ],
  alternatives: [
    { name: "평가 태그", slug: "rating-tags", reason: "글 대신 칩으로 이유를 받을 때" },
    { name: "별점", slug: "star-rating", reason: "점수만 받을 때" },
  ],
  accessibility: [
    "별점은 라디오 버튼 묶음이고 빠뜨리면 오류를 fieldset에 연결합니다.",
    "글 칸은 규칙과 글자 수를 aria-describedby로 묶습니다.",
    "제출 때 첫 문제로 포커스를 옮깁니다.",
    "버튼은 늘 누를 수 있어 무엇이 빠졌는지 알려 줍니다.",
  ],
  tags: [...BASE_TAGS, "Form validation", "aria-describedby", "radio"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/written-review/WrittenReviewDemo").then(
      (m) => m.WrittenReviewDemo,
    ),
  Thumbnail: WrittenReviewThumbnail,
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
