import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const responseFeedbackPattern: Pattern = {
  slug: "response-feedback",

  name: "Response Feedback",
  nameKo: "답변 평가",
  aliases: ["답변 도구", "좋아요 싫어요", "answer actions", "rate response"],
  category: "ai",
  summary: "복사·좋아요·싫어요·다시 생성",
  description:
    "답변 아래에 복사, 좋은 답변, 아쉬운 답변, 다시 생성 아이콘을 나란히 두는 도구 줄입니다. 좋음과 아쉬움은 서로 배타적인 토글이라 다시 누르면 취소됩니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Clipboard API", "Icon buttons"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/response-feedback/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/response-feedback/ResponseFeedbackDemo").then(
      (m) => m.ResponseFeedbackDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/response-feedback/ResponseFeedbackThumbnail").then(
      (m) => m.ResponseFeedbackThumbnail,
    ),
  sources: [
    {
      fileName: "ResponseFeedback.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/response-feedback/ResponseFeedback.tsx?raw"),
    },
    {
      fileName: "ResponseFeedbackDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/response-feedback/ResponseFeedbackDemo.tsx?raw"),
    },
  ],
};
