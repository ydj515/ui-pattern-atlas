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
  tags: ["아이콘 이름", "필터"],
  loadGuide: () => import("@/entities/pattern/catalog/sliders/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sliders/SlidersDemo").then((m) => m.SlidersDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sliders/SlidersThumbnail").then((m) => m.SlidersThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/sliders/SlidersDemo.tsx?raw"),
};
