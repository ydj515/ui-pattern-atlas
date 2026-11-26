import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const heatmapPattern: Pattern = {
  slug: "heatmap",

  name: "Heatmap",
  nameKo: "히트맵",
  aliases: ["열지도", "색 농도 표", "시간대별 분포", "heatmap", "calendar heatmap"],
  category: "data-viz",
  summary: "격자의 색 농도로 값의 분포 표시",
  description:
    "요일과 시간처럼 두 기준이 만나는 칸을 한 가지 색의 진하기로 칠해 값이 몰린 곳을 보여 줍니다. 칸을 가리키거나 화살표로 옮기면 테두리와 함께 정확한 값을 읽어 주고, 아래에 색 단계 범례를 둡니다.",
  tags: [...BASE_TAGS, "CSS grid", "aria-live", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/heatmap/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/heatmap/HeatmapDemo").then((m) => m.HeatmapDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/heatmap/HeatmapThumbnail").then((m) => m.HeatmapThumbnail),
  sources: [
    {
      fileName: "Heatmap.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/heatmap/Heatmap.tsx?raw"),
    },
    {
      fileName: "HeatmapDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/heatmap/HeatmapDemo.tsx?raw"),
    },
  ],
};
