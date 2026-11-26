import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const editPromptPattern: Pattern = {
  slug: "edit-prompt",

  name: "Edit Prompt",
  nameKo: "고쳐 묻기",
  aliases: ["질문 수정", "메시지 편집", "edit message", "rewrite prompt"],
  category: "ai",
  summary: "보낸 질문을 고쳐 그 지점부터 다시 묻기",
  description:
    "이미 보낸 질문을 그 자리에서 고쳐 다시 묻는 패턴입니다. 수정을 누르면 말풍선이 입력칸으로 바뀌고, 보내면 그 질문 다음부터 새로 답하며 그 사실을 한 줄로 알립니다.",
  tags: [...BASE_TAGS, "Inline edit", "Focus management", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/edit-prompt/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/edit-prompt/EditPromptDemo").then((m) => m.EditPromptDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/edit-prompt/EditPromptThumbnail").then(
      (m) => m.EditPromptThumbnail,
    ),
  sources: [
    {
      fileName: "EditPrompt.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/edit-prompt/EditPrompt.tsx?raw"),
    },
    {
      fileName: "EditPromptDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/edit-prompt/EditPromptDemo.tsx?raw"),
    },
  ],
};
