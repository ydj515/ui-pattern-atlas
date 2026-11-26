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
  whenToUse: [
    "새 기능을 알리며 업데이트를 권할 때",
    "보안 문제로 이전 버전을 막아야 할 때",
    "서버가 바뀌어 이전 버전이 동작하지 않을 때",
  ],
  whenNotToUse: [
    "사소한 수정마다 띄울 때",
    "필수가 아닌데 닫기를 없앨 때",
    "이유 없이 앱을 막을 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "화면을 막지 않고 알릴 때" },
    { name: "얼럿 다이얼로그", slug: "alert-dialog", reason: "일반적인 경고 창" },
  ],
  accessibility: [
    '필수 업데이트는 role="alertdialog", 선택 업데이트는 role="dialog"입니다.',
    "제목을 창의 이름으로 이어 둡니다.",
    "필수일 때는 닫기 대신 이유를 글자로 적습니다.",
  ],
  tags: [...BASE_TAGS, "dialog", "alertdialog"],
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
