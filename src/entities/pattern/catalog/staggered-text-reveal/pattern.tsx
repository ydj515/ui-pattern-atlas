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
  whenToUse: ["두세 줄짜리 큰 제목", "소개 페이지의 첫 화면", "문장의 리듬이 중요한 카피"],
  whenNotToUse: [
    "긴 문단(마지막 단어가 너무 늦게 나타남)",
    "자주 보는 화면의 제목",
    "글자 단위로 쪼갠 한글(받침과 모양이 어색해짐)",
  ],
  alternatives: [
    { name: "마스크 리빌", slug: "mask-reveal", reason: "줄이 가림 아래에서 올라올 때" },
    { name: "순차 등장", slug: "stagger", reason: "카드나 목록 항목을 차례로 보여 줄 때" },
  ],
  accessibility: [
    "화면 읽기에는 sr-only로 문장 전체를 한 번에 줍니다.",
    "쪼갠 줄과 단어는 aria-hidden이라 끊어 읽히지 않습니다.",
    "동작 줄이기에서는 모두 한 번에 보여 줍니다.",
    "단위 선택은 라디오 버튼이라 키보드로 바꿀 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "@starting-style", "transition-delay", "Reduced motion"],
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
