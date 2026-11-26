import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const staggeredTextRevealPattern: Pattern = {
  slug: "staggered-text-reveal",

  name: "Staggered Text Reveal",
  nameKo: "글자·줄 순차 등장",
  aliases: ["줄 단위 등장", "단어 단위 등장", "split text", "line reveal"],
  category: "text-motion",
  summary: "줄이나 단어가 간격을 두고 나타나기",
  description:
    "제목의 줄이나 단어가 짧은 간격을 두고 아래에서 올라오며 나타나는 표현입니다. 읽는 순서대로 등장해 문장의 리듬을 살립니다.",
  tags: [...BASE_TAGS, "@starting-style", "transition-delay", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/staggered-text-reveal/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/staggered-text-reveal/StaggeredTextDemo").then(
      (m) => m.StaggeredTextDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/staggered-text-reveal/StaggeredTextThumbnail").then(
      (m) => m.StaggeredTextThumbnail,
    ),
  sources: [
    {
      fileName: "StaggeredText.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/staggered-text-reveal/StaggeredText.tsx?raw"),
    },
    {
      fileName: "StaggeredTextDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/staggered-text-reveal/StaggeredTextDemo.tsx?raw"),
    },
  ],
};
