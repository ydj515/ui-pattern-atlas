import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const thumbsFeedbackPattern: Pattern = {
  slug: "thumbs-feedback",

  name: "Thumbs Feedback",
  nameKo: "도움이 됐나요",
  aliases: ["도움 됐나요", "좋아요 싫어요", "was this helpful", "thumbs up down"],
  category: "reaction-share",
  summary: "도움 여부를 네·아니요로 평가",
  description:
    "도움말 끝에서 도움이 됐는지 네, 아니요로 묻는 패턴입니다. 네는 바로 감사로 끝내고, 아니요일 때만 이유 칩을 보여 줘 대부분은 한 번에 답할 수 있습니다.",
  tags: [...BASE_TAGS, "aria-pressed", "role=status", "Feedback"],
  loadGuide: () => import("@/entities/pattern/catalog/thumbs-feedback/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/thumbs-feedback/ThumbsFeedbackDemo").then(
      (m) => m.ThumbsFeedbackDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/thumbs-feedback/ThumbsFeedbackThumbnail").then(
      (m) => m.ThumbsFeedbackThumbnail,
    ),
  sources: [
    {
      fileName: "ThumbsFeedback.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/thumbs-feedback/ThumbsFeedback.tsx?raw"),
    },
    {
      fileName: "ThumbsFeedbackDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/thumbs-feedback/ThumbsFeedbackDemo.tsx?raw"),
    },
  ],
};
