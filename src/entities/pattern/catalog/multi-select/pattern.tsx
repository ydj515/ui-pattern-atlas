import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const multiSelectPattern: Pattern = {
  slug: "multi-select",

  name: "Multi-select",
  nameKo: "멀티 셀렉트",
  aliases: ["다중 선택", "체크 드롭다운", "multiselect", "multiple select"],
  category: "selection",
  summary: "여러 개를 골라 칩으로 보여 주기",
  description:
    "버튼을 눌러 펼친 목록에서 체크로 여러 개를 고르고, 고른 항목을 칩으로 보여 주는 패턴입니다. 자리를 적게 차지하면서 여러 값을 받을 수 있습니다.",
  tags: [...BASE_TAGS, "listbox", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/multi-select/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/multi-select/MultiSelectDemo").then(
      (m) => m.MultiSelectDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/multi-select/MultiSelectThumbnail").then(
      (m) => m.MultiSelectThumbnail,
    ),
  sources: [
    {
      fileName: "MultiSelect.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/multi-select/MultiSelect.tsx?raw"),
    },
    {
      fileName: "MultiSelectDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/multi-select/MultiSelectDemo.tsx?raw"),
    },
  ],
};
