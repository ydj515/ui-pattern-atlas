import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const typewriterPattern: Pattern = {
  slug: "typewriter",

  name: "Typewriter",
  nameKo: "타이핑 효과",
  aliases: ["타자 효과", "타이핑 애니메이션", "typing effect", "typewriter text"],
  category: "text-motion",
  summary: "한 글자씩 써지는 문장",
  description:
    "문장이 한 글자씩 써지고 끝에서 커서가 깜빡이는 표현입니다. 대화형 도우미의 첫인사처럼 누군가 지금 말하는 느낌을 줄 때 씁니다.",
  tags: [...BASE_TAGS, "setInterval", "sr-only", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/typewriter/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/typewriter/TypewriterDemo").then((m) => m.TypewriterDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/typewriter/TypewriterThumbnail").then(
      (m) => m.TypewriterThumbnail,
    ),
  sources: [
    {
      fileName: "Typewriter.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/typewriter/Typewriter.tsx?raw"),
    },
    {
      fileName: "TypewriterDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/typewriter/TypewriterDemo.tsx?raw"),
    },
  ],
};
