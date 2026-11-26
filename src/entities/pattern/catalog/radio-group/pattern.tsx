import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const radioGroupPattern: Pattern = {
  slug: "radio-group",

  name: "Radio Group",
  nameKo: "라디오 그룹",
  aliases: ["라디오 버튼", "단일 선택", "radio buttons", "option cards"],
  category: "selection",
  summary: "여러 개 중 하나 고르기",
  description:
    "몇 개의 보기를 모두 펼쳐 두고 그중 하나만 고르게 하는 패턴입니다. 보기를 한눈에 비교할 수 있어, 가격이나 조건이 다른 선택지를 고를 때 특히 좋습니다.",
  tags: [...BASE_TAGS, "Native radio", "fieldset"],
  loadGuide: () => import("@/entities/pattern/catalog/radio-group/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/radio-group/RadioGroupDemo").then((m) => m.RadioGroupDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/radio-group/RadioGroupThumbnail").then(
      (m) => m.RadioGroupThumbnail,
    ),
  sources: [
    {
      fileName: "RadioGroup.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/radio-group/RadioGroup.tsx?raw"),
    },
    {
      fileName: "RadioGroupDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/radio-group/RadioGroupDemo.tsx?raw"),
    },
  ],
};
