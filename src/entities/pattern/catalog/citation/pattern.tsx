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
  whenToUse: ["검색한 자료로 답하는 AI", "사실 확인이 중요한 주제", "여러 출처를 섞어 답할 때"],
  whenNotToUse: [
    "출처가 없는 창작, 요약",
    "번호가 너무 많아 문장을 끊을 때",
    "링크가 열리지 않는 내부 자료만 있을 때",
  ],
  alternatives: [
    { name: "툴팁", slug: "tooltip", reason: "짧은 설명을 띄울 때" },
    { name: "팝오버", slug: "popover", reason: "누르면 여는 작은 카드" },
  ],
  accessibility: [
    "번호 버튼 이름은 출처 1: 제목처럼 읽힙니다.",
    "카드는 aria-expanded와 aria-controls로 연결되고 Esc로 닫힙니다.",
    "출처 목록은 ol로 번호와 순서를 전달합니다.",
    "외부 링크는 새 탭에서 열립니다.",
  ],
  tags: [...BASE_TAGS, "aria-expanded", "ol", "Sources"],
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
