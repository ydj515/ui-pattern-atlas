import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AnimatedHighlightThumbnail } from "@/entities/pattern/catalog/animated-highlight/AnimatedHighlightThumbnail";

export const animatedHighlightPattern: Pattern = {
  slug: "animated-highlight",
  name: "Animated Highlight",
  nameKo: "강조 애니메이션",
  aliases: ["형광펜 효과", "밑줄 강조", "marker highlight", "text highlight"],
  category: "text-motion",
  summary: "핵심 구절에 형광펜이 칠해짐",
  description:
    "문장 속 핵심 구절 뒤로 형광펜이 왼쪽부터 칠해지는 표현입니다. 화면에 처음 보일 때 한 번만 칠하고, 진짜 mark 요소라 움직임이 없어도 강조가 남습니다.",
  whenToUse: [
    "요금, 혜택 안내에서 가장 중요한 조건 하나",
    "긴 문장 속 꼭 기억할 구절",
    "스크롤로 내려와 처음 보는 섹션",
  ],
  whenNotToUse: [
    "한 문단에 여러 곳(강조가 흐려짐)",
    "링크처럼 보일 수 있는 색",
    "불리한 조건을 숨기고 유리한 것만 강조할 때",
  ],
  alternatives: [
    { name: "페이드 업", slug: "fade-up", reason: "문장 전체를 차분히 보여 줄 때" },
    { name: "배지", slug: "badge", reason: "짧은 꼬리표로 강조할 때" },
  ],
  accessibility: [
    "mark 요소라 강조가 의미로도 전달됩니다.",
    "관찰 기능이 없거나 동작 줄이기에서는 처음부터 칠해진 상태로 보입니다.",
    "글자색은 그대로 두고 배경만 칠해 대비를 유지합니다.",
    "한 번 칠한 뒤에는 다시 지우지 않습니다.",
  ],
  tags: [...BASE_TAGS, "IntersectionObserver", "mark", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/animated-highlight/AnimatedHighlightDemo").then(
      (m) => m.AnimatedHighlightDemo,
    ),
  Thumbnail: AnimatedHighlightThumbnail,
  sources: [
    {
      fileName: "AnimatedHighlight.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/animated-highlight/AnimatedHighlight.tsx?raw"),
    },
    {
      fileName: "AnimatedHighlightDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/animated-highlight/AnimatedHighlightDemo.tsx?raw"),
    },
  ],
};
