import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ResponseFeedbackThumbnail } from "@/entities/pattern/catalog/response-feedback/ResponseFeedbackThumbnail";

export const responseFeedbackPattern: Pattern = {
  slug: "response-feedback",
  name: "Response Feedback",
  nameKo: "답변 평가",
  aliases: ["답변 도구", "좋아요 싫어요", "answer actions", "rate response"],
  category: "ai",
  summary: "복사·좋아요·싫어요·다시 생성",
  description:
    "답변 아래에 복사, 좋은 답변, 아쉬운 답변, 다시 생성 아이콘을 나란히 두는 도구 줄입니다. 좋음과 아쉬움은 서로 배타적인 토글이라 다시 누르면 취소됩니다.",
  whenToUse: ["AI 답변마다", "답변 품질을 모아 개선할 때", "답을 다른 곳에 옮겨 쓸 일이 많을 때"],
  whenNotToUse: [
    "사람이 쓴 메시지(이모지 반응 사용)",
    "도구가 많아 줄이 넘칠 때(더 보기 메뉴로 묶기)",
    "평가를 강요하는 팝업",
  ],
  alternatives: [
    { name: "도움이 됐나요", slug: "thumbs-feedback", reason: "글 끝에서 도움 여부를 물을 때" },
    {
      name: "답변 다시 생성",
      slug: "regenerate-response",
      reason: "새 답변과 이전 답변을 비교할 때",
    },
  ],
  accessibility: [
    "아이콘 버튼마다 이름과 title이 있습니다.",
    "좋음, 아쉬움은 aria-pressed 토글입니다.",
    "복사 결과는 숨겨진 role=status로 알립니다.",
    "묶음에 답변 도구라는 이름을 붙입니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Clipboard API", "Icon buttons"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/response-feedback/ResponseFeedbackDemo").then(
      (m) => m.ResponseFeedbackDemo,
    ),
  Thumbnail: ResponseFeedbackThumbnail,
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
