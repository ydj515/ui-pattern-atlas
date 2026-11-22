import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ThumbsFeedbackThumbnail } from "@/entities/pattern/catalog/thumbs-feedback/ThumbsFeedbackThumbnail";

export const thumbsFeedbackPattern: Pattern = {
  slug: "thumbs-feedback",
  name: "Thumbs Feedback",
  nameKo: "도움이 됐나요",
  aliases: ["도움 됐나요", "좋아요 싫어요", "was this helpful", "thumbs up down"],
  category: "reaction-share",
  summary: "도움 여부를 네·아니요로 평가",
  description:
    "도움말 끝에서 도움이 됐는지 네, 아니요로 묻는 패턴입니다. 네는 바로 감사로 끝내고, 아니요일 때만 이유 칩을 보여 줘 대부분은 한 번에 답할 수 있습니다.",
  whenToUse: [
    "도움말, 자주 묻는 질문, AI 답변 아래",
    "글이 문제를 풀었는지 알고 싶을 때",
    "개선할 글을 찾을 때",
  ],
  whenNotToUse: [
    "점수가 필요한 만족도 조사(별점, NPS 사용)",
    "모든 화면 끝마다",
    "이유를 반드시 받아야 할 때",
  ],
  alternatives: [
    { name: "NPS 점수", slug: "nps-scale", reason: "추천 의향을 점수로 받을 때" },
    { name: "평가 태그", slug: "rating-tags", reason: "이유를 칩으로 고르게 할 때" },
  ],
  accessibility: [
    "질문은 제목으로 두고 영역 이름으로 연결합니다.",
    "이유 칩은 aria-pressed 토글입니다.",
    "감사 문구는 role=status로 알립니다.",
    "아이콘 옆에 네, 아니요 글자를 둡니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "role=status", "Feedback"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/thumbs-feedback/ThumbsFeedbackDemo").then(
      (m) => m.ThumbsFeedbackDemo,
    ),
  Thumbnail: ThumbsFeedbackThumbnail,
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
