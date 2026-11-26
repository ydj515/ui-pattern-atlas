import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const colorPickerPattern: Pattern = {
  slug: "color-picker",

  name: "Color Picker",
  nameKo: "색상 선택",
  aliases: ["색 고르기", "팔레트", "swatches", "color input"],
  category: "special-input",
  summary: "팔레트나 스펙트럼에서 색 고르기",
  description:
    "미리 정한 색 몇 개를 동그란 견본으로 보여 주고, 필요하면 브라우저의 색 선택기로 다른 색도 고르게 하는 패턴입니다. 고른 색은 미리 보기와 색 코드로 확인합니다.",
  tags: [...BASE_TAGS, "Native radio", "input type=color"],
  loadGuide: () => import("@/entities/pattern/catalog/color-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/color-picker/ColorPickerDemo").then(
      (m) => m.ColorPickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/color-picker/ColorPickerThumbnail").then(
      (m) => m.ColorPickerThumbnail,
    ),
  sources: [
    {
      fileName: "ColorPicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/color-picker/ColorPicker.tsx?raw"),
    },
    {
      fileName: "ColorPickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/color-picker/ColorPickerDemo.tsx?raw"),
    },
  ],
};
