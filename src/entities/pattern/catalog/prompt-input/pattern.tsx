import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const promptInputPattern: Pattern = {
  slug: "prompt-input",

  name: "Prompt Input",
  nameKo: "프롬프트 입력",
  aliases: ["질문 입력창", "메시지 입력", "composer", "chat input"],
  category: "ai",
  summary: "첨부와 전송·중지가 있는 입력창",
  description:
    "질문을 쓰는 입력창으로, 글이 길어지면 몇 줄까지 늘어납니다. Enter로 보내고 Shift+Enter로 줄을 바꾸며, 답을 만드는 동안 보내기 버튼이 같은 자리에서 멈추기 버튼으로 바뀝니다.",
  tags: [...BASE_TAGS, "textarea", "IME", "aria-label"],
  loadGuide: () => import("@/entities/pattern/catalog/prompt-input/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/prompt-input/PromptInputDemo").then(
      (m) => m.PromptInputDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/prompt-input/PromptInputThumbnail").then(
      (m) => m.PromptInputThumbnail,
    ),
  sources: [
    {
      fileName: "PromptInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/prompt-input/PromptInput.tsx?raw"),
    },
    {
      fileName: "PromptInputDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/prompt-input/PromptInputDemo.tsx?raw"),
    },
  ],
};
