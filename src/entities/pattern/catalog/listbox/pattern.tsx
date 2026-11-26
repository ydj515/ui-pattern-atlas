import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const listboxPattern: Pattern = {
  slug: "listbox",

  name: "Listbox",
  nameKo: "리스트박스",
  aliases: ["선택 목록", "펼친 목록", "listbox", "option list"],
  category: "selection",
  summary: "펼쳐진 목록에서 고르기",
  description:
    "보기 목록을 항상 펼쳐 두고 그중 하나를 고르는 패턴입니다. 보기마다 설명을 붙일 수 있고, 키보드로 위아래를 오가며 바로 고를 수 있습니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/listbox/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/listbox/ListboxDemo").then((m) => m.ListboxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/listbox/ListboxThumbnail").then((m) => m.ListboxThumbnail),
  sources: [
    {
      fileName: "Listbox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/listbox/Listbox.tsx?raw"),
    },
    {
      fileName: "ListboxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/listbox/ListboxDemo.tsx?raw"),
    },
  ],
};
