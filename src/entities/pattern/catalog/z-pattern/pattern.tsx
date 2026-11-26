import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const zPatternPattern: Pattern = {
  slug: "z-pattern",
  name: "Z-pattern",
  nameKo: "Z 패턴",
  aliases: ["Z 레이아웃", "시선 흐름", "z layout", "scanning pattern"],
  category: "layout",
  summary: "단순한 화면에서 시선이 좌우로 이어지도록 정보 배치",
  description:
    "정보가 적은 화면에서 시선이 왼쪽 위 → 오른쪽 위 → 왼쪽 아래 → 오른쪽 아래로 흐르는 Z 모양을 따라 요소를 놓는 패턴입니다. 마지막 지점에 주요 행동을 둡니다.",
  whenToUse: [
    "랜딩 페이지 첫 화면처럼 요소가 적은 화면",
    "주요 행동으로 시선을 끝맺고 싶을 때",
    "광고, 배너",
  ],
  whenNotToUse: ["글이 많은 화면(F 패턴처럼 읽힘)", "목록, 표", "요소가 많아 흐름이 흐려질 때"],
  alternatives: [
    { name: "히어로 섹션", slug: "hero-section", reason: "제목과 행동 중심의 첫 화면" },
  ],
  accessibility: [
    "DOM 순서를 Z 흐름과 같게 둬 읽는 순서와 보이는 순서가 같습니다.",
    "시선 흐름 표시는 장식이라 aria-hidden입니다.",
    "주요 행동은 실제 버튼이고 마지막에 옵니다.",
    "격자 배치만 쓰고 절대 위치를 피해 확대해도 겹치지 않습니다.",
  ],
  tags: [...BASE_TAGS, "Visual hierarchy", "CSS grid"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/z-pattern/ZPatternDemo").then((m) => m.ZPatternDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/z-pattern/ZPatternThumbnail").then(
      (m) => m.ZPatternThumbnail,
    ),
  sources: [
    {
      fileName: "ZPattern.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/z-pattern/ZPattern.tsx?raw"),
    },
    {
      fileName: "ZPatternDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/z-pattern/ZPatternDemo.tsx?raw"),
    },
  ],
};
