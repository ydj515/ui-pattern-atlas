import { type Pattern } from "@/entities/pattern/model/pattern";

export const slidersPattern: Pattern = {
  slug: "sliders",
  kind: "concept",
  name: "Sliders",
  nameKo: "슬라이더",
  aliases: ["필터 아이콘", "조절 아이콘", "filter sliders", "adjust icon"],
  category: "icon-names",
  summary: "조절 손잡이를 그린 설정·필터",
  description:
    "가로줄 위에 동그란 조절 손잡이를 엇갈리게 그린 아이콘으로, 음향 장비의 페이더에서 온 모양입니다. 값을 조절하는 필터나 세부 설정을 엽니다.",
  whenToUse: [
    "가격, 거리처럼 범위를 조절하는 필터",
    "검색 결과 머리글의 필터 버튼",
    "세부 설정 열기",
  ],
  whenNotToUse: [
    "정렬만 바꿀 때(되너나 캐럿 사용)",
    "앱 전체 설정(톱니바퀴 아이콘 사용)",
    "적용된 필터를 숨길 때",
  ],
  alternatives: [
    { name: "되너", slug: "doner", reason: "정렬 아이콘" },
    { name: "필터 칩", slug: "filter-chip", reason: "필터를 칩으로 바로 고를 때" },
  ],
  accessibility: [
    "아이콘 버튼에 필터라는 이름을 붙입니다.",
    "적용된 필터를 글자로 보여 줍니다.",
    "시트 안 범위 입력에는 현재 값이 담긴 라벨이 있습니다.",
    "적용 결과는 role=status로 알립니다.",
  ],
  tags: ["아이콘 이름", "필터"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/sliders/SlidersDemo").then((m) => m.SlidersDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sliders/SlidersThumbnail").then((m) => m.SlidersThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/sliders/SlidersDemo.tsx?raw"),
};
