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
  whenToUse: [
    "도우미, 챗봇의 첫 문장",
    "짧은 한 문장의 소개 문구",
    "다시 보기로 한 번 더 재생할 수 있을 때",
  ],
  whenNotToUse: [
    "긴 문단이나 여러 문장(읽기를 기다리게 함)",
    "버튼, 안내처럼 바로 읽어야 하는 글",
    "계속 지웠다 다시 쓰는 반복",
  ],
  alternatives: [
    {
      name: "글자·줄 순차 등장",
      slug: "staggered-text-reveal",
      reason: "여러 줄을 차례로 보여 줄 때",
    },
    { name: "단어 바꾸기", slug: "rotating-words", reason: "한 단어만 바꿔 가며 보여 줄 때" },
  ],
  accessibility: [
    "화면 읽기에는 sr-only로 문장 전체를 처음부터 줍니다.",
    "써지는 글자와 커서는 aria-hidden입니다.",
    "동작 줄이기에서는 문장 전체를 바로 보여 주고 커서도 깜빡이지 않습니다.",
    "글자당 70ms로 짧은 문장이 1초 남짓에 끝납니다.",
  ],
  tags: [...BASE_TAGS, "setInterval", "sr-only", "Reduced motion"],
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
