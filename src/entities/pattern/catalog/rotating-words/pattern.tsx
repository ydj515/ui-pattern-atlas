import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const rotatingWordsPattern: Pattern = {
  slug: "rotating-words",

  name: "Rotating Words",
  nameKo: "단어 바꾸기",
  aliases: ["단어 회전", "바뀌는 문구", "word rotator", "text rotate"],
  category: "text-motion",
  summary: "한 자리의 단어가 차례로 바뀌기",
  description:
    "문장의 마지막 단어가 일정한 간격으로 위로 빠지고 다음 단어가 올라오는 표현입니다. 하나의 문장으로 여러 쓰임을 보여 줄 때 쓰고, 멈추기 버튼으로 언제든 멈출 수 있습니다.",
  tags: [...BASE_TAGS, "CSS transition", "WCAG 2.2.2", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/rotating-words/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/rotating-words/RotatingWordsDemo").then(
      (m) => m.RotatingWordsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/rotating-words/RotatingWordsThumbnail").then(
      (m) => m.RotatingWordsThumbnail,
    ),
  sources: [
    {
      fileName: "RotatingWords.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/rotating-words/RotatingWords.tsx?raw"),
    },
    {
      fileName: "RotatingWordsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/rotating-words/RotatingWordsDemo.tsx?raw"),
    },
  ],
};
