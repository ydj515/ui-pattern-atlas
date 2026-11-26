import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const comboboxPattern: Pattern = {
  slug: "combobox",

  name: "Combobox",
  nameKo: "콤보박스",
  aliases: ["자동완성", "검색 선택", "autocomplete", "typeahead"],
  category: "selection",
  summary: "입력하며 좁혀 고르는 자동완성",
  description:
    "글자를 입력하면 맞는 보기만 남겨 보여 주고, 그중 하나를 고르는 패턴입니다. 긴 목록을 스크롤하지 않고 몇 글자로 찾을 수 있습니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/combobox/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/combobox/ComboboxDemo").then((m) => m.ComboboxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/combobox/ComboboxThumbnail").then(
      (m) => m.ComboboxThumbnail,
    ),
  sources: [
    {
      fileName: "Combobox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/combobox/Combobox.tsx?raw"),
    },
    {
      fileName: "ComboboxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/combobox/ComboboxDemo.tsx?raw"),
    },
  ],
};
