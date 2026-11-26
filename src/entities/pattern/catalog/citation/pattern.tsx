import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const citationPattern: Pattern = {
  slug: "citation",

  name: "Citation",
  nameKo: "출처 표시",
  aliases: ["출처", "인용 번호", "sources", "footnote"],
  category: "ai",
  summary: "답변 근거 링크",
  description:
    "답변의 문장 뒤에 번호를 붙이고, 누르면 출처 제목과 사이트, 원문 링크를 보여 주는 패턴입니다. 번호는 답변 아래 출처 목록과 같아 어느 쪽에서든 근거를 확인할 수 있습니다.",
  tags: [...BASE_TAGS, "aria-expanded", "ol", "Sources"],
  loadGuide: () => import("@/entities/pattern/catalog/citation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/citation/CitationDemo").then((m) => m.CitationDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/citation/CitationThumbnail").then(
      (m) => m.CitationThumbnail,
    ),
  sources: [
    {
      fileName: "Citation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/citation/Citation.tsx?raw"),
    },
    {
      fileName: "CitationDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/citation/CitationDemo.tsx?raw"),
    },
  ],
};
