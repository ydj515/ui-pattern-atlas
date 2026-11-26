import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const textScramblePattern: Pattern = {
  slug: "text-scramble",

  name: "Text Scramble",
  nameKo: "글자 섞기",
  aliases: ["스크램블", "해독 효과", "decode effect", "glitch text"],
  category: "text-motion",
  summary: "섞였다가 맞춰지는 글자",
  description:
    "기호들이 빠르게 바뀌다가 왼쪽부터 한 글자씩 진짜 글자로 맞춰지는 표현입니다. 연결, 해독처럼 무언가 처리되어 결과가 나오는 순간을 연출합니다.",
  tags: [...BASE_TAGS, "requestAnimationFrame", "role=status", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/text-scramble/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/text-scramble/TextScrambleDemo").then(
      (m) => m.TextScrambleDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/text-scramble/TextScrambleThumbnail").then(
      (m) => m.TextScrambleThumbnail,
    ),
  sources: [
    {
      fileName: "TextScramble.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/text-scramble/TextScramble.tsx?raw"),
    },
    {
      fileName: "TextScrambleDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/text-scramble/TextScrambleDemo.tsx?raw"),
    },
  ],
};
