import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const resumePromptPattern: Pattern = {
  slug: "resume-prompt",

  name: "Resume Prompt",
  nameKo: "이어서 하기 안내",
  aliases: [
    "이어 보기",
    "다시 오셨네요",
    "continue watching",
    "pick up where you left off",
    "welcome back",
  ],
  category: "leave-return",
  summary: "멈춘 곳과 진행률을 보여 주고 바로 이어 가게 하기",
  description:
    "다시 돌아온 사람에게 무엇을 어디까지 했는지 알려 주고 버튼 하나로 이어 가게 하는 카드입니다. 진행률을 함께 보여 주고, 처음부터 하거나 닫는 선택도 남깁니다.",
  tags: [...BASE_TAGS, "progress", "section"],
  loadGuide: () => import("@/entities/pattern/catalog/resume-prompt/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/resume-prompt/ResumePromptDemo").then(
      (m) => m.ResumePromptDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/resume-prompt/ResumePromptThumbnail").then(
      (m) => m.ResumePromptThumbnail,
    ),
  sources: [
    {
      fileName: "ResumePrompt.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/resume-prompt/ResumePrompt.tsx?raw"),
    },
    {
      fileName: "ResumePromptDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/resume-prompt/ResumePromptDemo.tsx?raw"),
    },
  ],
};
