import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const gaugePattern: Pattern = {
  slug: "gauge",

  name: "Gauge",
  nameKo: "게이지",
  aliases: ["반원 게이지", "미터", "달성률", "gauge", "meter"],
  category: "data-viz",
  summary: "범위 안의 현재 값과 목표 표시",
  description:
    "정해진 범위 안에서 현재 값이 어디쯤인지 반원 막대로 보여 줍니다. 목표가 있으면 눈금 위에 표시하고, 값과 범위를 글자로 함께 적습니다. 값이 바뀌면 막대가 부드럽게 늘어납니다.",
  tags: [...BASE_TAGS, "role=meter", "SVG", "pathLength"],
  loadGuide: () => import("@/entities/pattern/catalog/gauge/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/gauge/GaugeDemo").then((m) => m.GaugeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/gauge/GaugeThumbnail").then((m) => m.GaugeThumbnail),
  sources: [
    {
      fileName: "Gauge.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/gauge/Gauge.tsx?raw"),
    },
    {
      fileName: "GaugeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/gauge/GaugeDemo.tsx?raw"),
    },
  ],
};
