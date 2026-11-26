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
  whenToUse: [
    "긴 글의 목차, 개요 열기",
    "글자 라벨을 함께 둘 수 있을 때",
    "들여쓰기 구조가 있는 목록",
  ],
  whenNotToUse: [
    "아이콘만으로 뜻을 전해야 할 때",
    "메뉴 열기(햄버거가 더 익숙)",
    "정렬, 필터(되너나 슬라이더 사용)",
  ],
  alternatives: [
    { name: "되너", slug: "doner", reason: "길이가 다른 가로줄로 된 정렬 아이콘" },
    { name: "햄버거", slug: "hamburger", reason: "메뉴 열기" },
  ],
  accessibility: [
    "아이콘 옆에 목차라는 글자를 두어 버튼 이름이 됩니다.",
    "aria-expanded로 목차가 열렸는지 알립니다.",
    "목차는 nav로 이름을 붙입니다.",
    "이동 결과는 role=status로 알립니다.",
  ],
  tags: ["아이콘 이름", "목차"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/stairs/StairsDemo").then((m) => m.StairsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stairs/StairsThumbnail").then((m) => m.StairsThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/stairs/StairsDemo.tsx?raw"),
};
