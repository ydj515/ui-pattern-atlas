import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tapPattern: Pattern = {
  slug: "tap",

  name: "Tap",
  nameKo: "탭 제스처",
  aliases: ["터치", "누르기", "터치 영역", "tap target", "hit area"],
  category: "gesture",
  summary: "한 번 눌러 열거나 고르기",
  description:
    "가장 기본적인 제스처인 한 번 누르기입니다. 보이는 아이콘은 작아도 누르는 영역은 44×44px 이상으로 잡고, 누르는 순간 바로 배경이 바뀌어 눌렸다는 것을 알 수 있게 합니다.",
  tags: [...BASE_TAGS, "WCAG 2.5.8", "touch-action"],
  loadGuide: () => import("@/entities/pattern/catalog/tap/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/tap/TapTargetDemo").then((m) => m.TapTargetDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tap/TapTargetThumbnail").then((m) => m.TapTargetThumbnail),
  sources: [
    {
      fileName: "TapTarget.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tap/TapTarget.tsx?raw"),
    },
    {
      fileName: "TapTargetDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tap/TapTargetDemo.tsx?raw"),
    },
  ],
};
