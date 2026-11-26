import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const suggestedPromptsPattern: Pattern = {
  slug: "suggested-prompts",

  name: "Suggested Prompts",
  nameKo: "추천 질문",
  aliases: ["예시 질문", "시작 질문", "prompt starters", "conversation starters"],
  category: "ai",
  summary: "눌러서 바로 묻는 예시",
  description:
    "대화가 비어 있을 때 도우미가 잘하는 일을 예시 질문 몇 개로 보여 주는 패턴입니다. 누르면 그 질문을 바로 보내, 무엇을 물어야 할지 모르는 사람도 써 보며 익힐 수 있습니다.",
  tags: [...BASE_TAGS, "Empty state", "button", "Onboarding"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/suggested-prompts/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/suggested-prompts/SuggestedPromptsDemo").then(
      (m) => m.SuggestedPromptsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/suggested-prompts/SuggestedPromptsThumbnail").then(
      (m) => m.SuggestedPromptsThumbnail,
    ),
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
