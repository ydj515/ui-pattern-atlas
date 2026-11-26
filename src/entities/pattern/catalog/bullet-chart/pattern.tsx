import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bulletChartPattern: Pattern = {
  slug: "bullet-chart",

  name: "Bullet Chart",
  nameKo: "불릿 차트",
  aliases: ["불렛 차트", "목표 대비 막대", "KPI 막대", "bullet chart", "bullet graph"],
  category: "data-viz",
  summary: "한 지표를 목표선과 평가 구간에 견줘 표시",
  description:
    "막대 하나에 현재 값, 목표선, 나쁨·보통·좋음 구간을 겹쳐 그리는 작은 차트입니다. 게이지보다 자리를 덜 차지해 여러 지표를 쌓아 두기 좋고, 값과 목표를 글자로 함께 적습니다.",
  tags: [...BASE_TAGS, "role=meter", "CSS"],
  loadGuide: () => import("@/entities/pattern/catalog/bullet-chart/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bullet-chart/BulletChartDemo").then(
      (m) => m.BulletChartDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bullet-chart/BulletChartThumbnail").then(
      (m) => m.BulletChartThumbnail,
    ),
  sources: [
    {
      fileName: "BulletChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bullet-chart/BulletChart.tsx?raw"),
    },
    {
      fileName: "BulletChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bullet-chart/BulletChartDemo.tsx?raw"),
    },
  ],
};
