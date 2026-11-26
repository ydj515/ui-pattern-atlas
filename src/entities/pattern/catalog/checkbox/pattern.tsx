import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const checkboxPattern: Pattern = {
  slug: "checkbox",

  name: "Checkbox",
  nameKo: "체크박스",
  aliases: ["중간 선택", "Indeterminate"],
  category: "selection",
  summary: "여러 항목을 독립적으로 선택하고 부분 선택도 표시",
  description:
    "체크된 값은 폼을 제출하거나 여러 항목을 한 번에 처리할 때 사용합니다. 일부 항목만 고르면 전체 선택이 중간 상태가 됩니다.",
  tags: BASE_TAGS,
  loadGuide: () => import("@/entities/pattern/catalog/checkbox/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/checkbox/CheckboxDemo").then((m) => m.CheckboxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/checkbox/CheckboxThumbnail").then(
      (m) => m.CheckboxThumbnail,
    ),
  sources: [
    {
      fileName: "Checkbox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/checkbox/Checkbox.tsx?raw"),
    },
    {
      fileName: "CheckboxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/checkbox/CheckboxDemo.tsx?raw"),
    },
  ],
};
