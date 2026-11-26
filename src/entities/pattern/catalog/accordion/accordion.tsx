import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const accordionPattern: Pattern = {
  slug: "accordion",

  name: "Accordion",
  nameKo: "아코디언",
  aliases: ["접이식 목록", "펼치기", "FAQ", "collapse", "disclosure", "expander"],
  category: "disclosure",
  summary: "제목을 눌러 내용을 펼치고 접는 세로 목록",
  description:
    "여러 섹션의 제목만 먼저 보여주고, 사용자가 원하는 섹션을 눌러 내용을 펼쳐 보는 패턴입니다. 긴 정보를 짧은 화면 안에 정리할 수 있습니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG"],
  loadGuide: () => import("@/entities/pattern/catalog/accordion/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/accordion/AccordionDemo").then((m) => m.AccordionDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/accordion/AccordionThumbnail").then(
      (m) => m.AccordionThumbnail,
    ),
  sources: [
    {
      fileName: "Accordion.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/accordion/Accordion.tsx?raw"),
    },
    {
      fileName: "AccordionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/accordion/AccordionDemo.tsx?raw"),
    },
  ],
};
