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
  whenToUse: [
    "연결 완료, 인증 성공처럼 처리 결과가 나오는 순간",
    "기술, 보안 느낌의 브랜드",
    "짧은 제목 한 줄",
  ],
  whenNotToUse: [
    "긴 문장이나 본문",
    "실제 처리 시간을 감추려고 길게 끌 때",
    "자주 반복되는 상태 문구",
  ],
  alternatives: [
    { name: "타이핑 효과", slug: "typewriter", reason: "한 글자씩 차분히 써 보일 때" },
    { name: "페이드", slug: "fade", reason: "결과를 조용히 바꿀 때" },
  ],
  accessibility: [
    "화면 읽기에는 sr-only로 진짜 문장만 줍니다.",
    "섞이는 기호는 aria-hidden입니다.",
    "결과 문구는 role=status 영역 안에 있어 바뀌면 알려 줍니다.",
    "동작 줄이기에서는 섞지 않고 결과를 바로 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "requestAnimationFrame", "role=status", "Reduced motion"],
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
