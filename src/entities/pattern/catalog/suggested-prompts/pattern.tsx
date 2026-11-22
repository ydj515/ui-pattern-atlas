import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SuggestedPromptsThumbnail } from "@/entities/pattern/catalog/suggested-prompts/SuggestedPromptsThumbnail";

export const suggestedPromptsPattern: Pattern = {
  slug: "suggested-prompts",
  name: "Suggested Prompts",
  nameKo: "추천 질문",
  aliases: ["예시 질문", "시작 질문", "prompt starters", "conversation starters"],
  category: "ai",
  summary: "눌러서 바로 묻는 예시",
  description:
    "대화가 비어 있을 때 도우미가 잘하는 일을 예시 질문 몇 개로 보여 주는 패턴입니다. 누르면 그 질문을 바로 보내, 무엇을 물어야 할지 모르는 사람도 써 보며 익힐 수 있습니다.",
  whenToUse: [
    "새 대화의 빈 화면",
    "도우미가 잘하는 일이 정해져 있을 때",
    "처음 쓰는 사람이 많을 때",
  ],
  whenNotToUse: [
    "대화가 이미 진행 중일 때 늘 띄우기",
    "광고나 판매를 질문처럼 꾸밀 때",
    "예시가 너무 많아 고르기 어려울 때",
  ],
  alternatives: [
    { name: "빈 화면", slug: "empty-state", reason: "다음 행동을 안내하는 빈 상태" },
    { name: "프롬프트 입력", slug: "prompt-input", reason: "직접 질문을 쓰게 할 때" },
  ],
  accessibility: [
    "예시는 실제 버튼이라 키보드로 고를 수 있습니다.",
    "묶음에 추천 질문이라는 이름을 붙입니다.",
    "질문 글이 버튼 이름이 됩니다.",
    "누르면 결과가 role=status로 알려집니다.",
  ],
  tags: [...BASE_TAGS, "Empty state", "button", "Onboarding"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/suggested-prompts/SuggestedPromptsDemo").then(
      (m) => m.SuggestedPromptsDemo,
    ),
  Thumbnail: SuggestedPromptsThumbnail,
  sources: [
    {
      fileName: "SuggestedPrompts.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/suggested-prompts/SuggestedPrompts.tsx?raw"),
    },
    {
      fileName: "SuggestedPromptsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/suggested-prompts/SuggestedPromptsDemo.tsx?raw"),
    },
  ],
};
