import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const switchPattern: Pattern = {
  slug: "switch",

  name: "Switch",
  nameKo: "스위치",
  aliases: ["토글", "토글 스위치", "toggle", "켜고 끄기", "on off"],
  category: "selection",
  summary: "누르는 즉시 켜지고 꺼지는 설정 버튼",
  description:
    "설정을 켜거나 끄는 두 가지 상태를 표현하고, 누르는 즉시 결과가 적용되는 패턴입니다. 현실의 전등 스위치처럼 저장 버튼 없이 바로 반영됩니다.",
  tags: [...BASE_TAGS, "role=switch"],
  loadGuide: () => import("@/entities/pattern/catalog/switch/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/switch/SwitchDemo").then((m) => m.SwitchDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/switch/SwitchThumbnail").then((m) => m.SwitchThumbnail),
  sources: [
    {
      fileName: "Switch.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/switch/Switch.tsx?raw"),
    },
    {
      fileName: "SwitchDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/switch/SwitchDemo.tsx?raw"),
    },
  ],
};
