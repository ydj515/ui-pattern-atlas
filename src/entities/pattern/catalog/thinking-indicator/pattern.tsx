import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ThinkingIndicatorThumbnail } from "@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorThumbnail";

export const thinkingIndicatorPattern: Pattern = {
  slug: "thinking-indicator",
  name: "Thinking Indicator",
  nameKo: "생각 중 표시",
  aliases: ["답변 준비 중", "타이핑 표시", "typing indicator", "loading dots"],
  category: "ai",
  summary: "답을 만드는 중 표시",
  description:
    "답이 나오기 전 말풍선 자리에 점 세 개가 오르내리며 생각하는 중이라고 알리는 표시입니다. 3초가 넘으면 지난 시간을 함께 보여 멈춘 것처럼 보이지 않게 합니다.",
  whenToUse: [
    "첫 글자가 나오기까지 기다림이 있을 때",
    "말풍선 자리를 미리 잡아 두고 싶을 때",
    "도구 실행처럼 시간이 걸리는 단계",
  ],
  whenNotToUse: [
    "바로 나오는 답",
    "단계가 여러 개인 작업(에이전트 단계 사용)",
    "진행률을 알 수 있는 작업(진행 바 사용)",
  ],
  alternatives: [
    { name: "스트리밍 응답", slug: "streaming-text", reason: "답이 나오기 시작한 뒤" },
    { name: "에이전트 단계", slug: "agent-steps", reason: "무엇을 하는지 단계별로 알릴 때" },
  ],
  accessibility: [
    "role=status로 생각하는 중이라는 글을 알립니다.",
    "점은 장식이라 aria-hidden이고 동작 줄이기에서 멈춥니다.",
    "오래 걸리면 지난 시간을 글로 덧붙입니다.",
    "기다리는 동안 질문 버튼을 비활성으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "role=status", "Loading", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorDemo").then(
      (m) => m.ThinkingIndicatorDemo,
    ),
  Thumbnail: ThinkingIndicatorThumbnail,
  sources: [
    {
      fileName: "ThinkingIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/thinking-indicator/ThinkingIndicator.tsx?raw"),
    },
    {
      fileName: "ThinkingIndicatorDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/thinking-indicator/ThinkingIndicatorDemo.tsx?raw"),
    },
  ],
};
