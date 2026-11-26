import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const updatePromptPattern: Pattern = {
  slug: "update-prompt",

  name: "Update Prompt",
  nameKo: "업데이트 안내",
  aliases: ["강제 업데이트", "선택 업데이트", "force update", "app update prompt", "new version"],
  category: "leave-return",
  summary: "미룰 수 있는 업데이트와 꼭 해야 하는 업데이트를 나눠 알리기",
  description:
    "새 버전에서 달라지는 점을 짧게 보여 주는 업데이트 안내입니다. 선택 업데이트는 나중에를 두고, 필수 업데이트는 닫기 대신 왜 꼭 해야 하는지를 적어 막힌 이유를 알게 합니다.",
  tags: [...BASE_TAGS, "dialog", "alertdialog"],
  loadGuide: () => import("@/entities/pattern/catalog/update-prompt/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/update-prompt/UpdatePromptDemo").then(
      (m) => m.UpdatePromptDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/update-prompt/UpdatePromptThumbnail").then(
      (m) => m.UpdatePromptThumbnail,
    ),
  sources: [
    {
      fileName: "UpdatePrompt.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/update-prompt/UpdatePrompt.tsx?raw"),
    },
    {
      fileName: "UpdatePromptDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/update-prompt/UpdatePromptDemo.tsx?raw"),
    },
  ],
};
