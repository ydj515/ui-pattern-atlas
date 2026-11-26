import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const toggleButtonPattern: Pattern = {
  slug: "toggle-button",

  name: "Toggle Button",
  nameKo: "토글 버튼",
  aliases: ["눌림 버튼", "서식 버튼", "pressed button", "aria-pressed"],
  category: "button",
  summary: "선택 여부를 누른 뒤에도 유지",
  description:
    "누르면 켜지고 다시 누르면 꺼지는 버튼입니다. 굵게, 기울임처럼 여러 개를 함께 켤 수 있는 서식 도구에서 쓰며, 켜진 상태가 계속 보입니다.",
  tags: [...BASE_TAGS, "aria-pressed", "toolbar"],
  loadGuide: () => import("@/entities/pattern/catalog/toggle-button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/toggle-button/ToggleButtonDemo").then(
      (m) => m.ToggleButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/toggle-button/ToggleButtonThumbnail").then(
      (m) => m.ToggleButtonThumbnail,
    ),
  sources: [
    {
      fileName: "ToggleButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/toggle-button/ToggleButton.tsx?raw"),
    },
    {
      fileName: "ToggleButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/toggle-button/ToggleButtonDemo.tsx?raw"),
    },
  ],
};
