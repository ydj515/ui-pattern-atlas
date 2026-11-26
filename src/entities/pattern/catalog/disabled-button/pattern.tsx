import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const disabledButtonPattern: Pattern = {
  slug: "disabled-button",

  name: "Disabled Button",
  nameKo: "비활성 버튼",
  aliases: ["사용 불가 버튼", "aria-disabled", "disabled state", "inactive button"],
  category: "button",
  summary: "못 누르는 이유를 알려 주는 버튼",
  description:
    "아직 누를 수 없는 버튼을 흐리게만 두지 않고, 왜 누를 수 없는지 바로 아래에 알려 주는 패턴입니다. 눌러 보면 이유를 강조해 무엇을 해야 하는지 알려 줍니다.",
  tags: [...BASE_TAGS, "aria-disabled", "aria-describedby"],
  loadGuide: () => import("@/entities/pattern/catalog/disabled-button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/disabled-button/DisabledButtonDemo").then(
      (m) => m.DisabledButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/disabled-button/DisabledButtonThumbnail").then(
      (m) => m.DisabledButtonThumbnail,
    ),
  sources: [
    {
      fileName: "ReasonButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/disabled-button/ReasonButton.tsx?raw"),
    },
    {
      fileName: "DisabledButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/disabled-button/DisabledButtonDemo.tsx?raw"),
    },
  ],
};
