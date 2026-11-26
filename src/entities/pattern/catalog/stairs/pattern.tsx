import { type Pattern } from "@/entities/pattern/model/pattern";

export const stairsPattern: Pattern = {
  slug: "stairs",

  kind: "concept",
  name: "Stairs",
  nameKo: "계단",
  aliases: ["엇갈린 줄 아이콘", "목차 아이콘", "staggered lines", "outline icon"],
  category: "icon-names",
  summary: "엇갈린 가로줄이 계단처럼 보이는 아이콘",
  description:
    "가로줄 세 개를 오른쪽으로 조금씩 밀어 계단처럼 놓은 아이콘입니다. 들여쓰기된 목차나 메뉴를 표시하는 데 쓰이지만 뜻이 덜 알려져 있어 목차처럼 글자를 함께 둡니다.",
  tags: ["아이콘 이름", "목차"],
  loadGuide: () => import("@/entities/pattern/catalog/stairs/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/stairs/StairsDemo").then((m) => m.StairsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stairs/StairsThumbnail").then((m) => m.StairsThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/stairs/StairsDemo.tsx?raw"),
};
