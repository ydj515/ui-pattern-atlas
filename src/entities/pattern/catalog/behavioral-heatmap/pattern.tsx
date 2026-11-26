import { type Pattern } from "@/entities/pattern/model/pattern";

export const behavioralHeatmapPattern: Pattern = {
  slug: "behavioral-heatmap",

  kind: "concept",
  name: "Behavioral Heatmap",
  nameKo: "행동 히트맵",
  aliases: ["클릭 히트맵", "스크롤 맵", "클릭 맵", "click heatmap", "scroll map"],
  category: "ux-research",
  summary: "클릭과 스크롤 위치의 분포 비교",
  description:
    "많은 방문자가 페이지의 어디를 누르고 어디까지 내려 봤는지 색으로 겹쳐 보는 방법입니다. 누를 수 없는 곳에 몰린 클릭이나, 중요한 내용 앞에서 끊기는 스크롤을 찾을 수 있습니다.",
  tags: ["UX 리서치", "정량 조사"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/behavioral-heatmap/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapDemo").then(
      (m) => m.BehavioralHeatmapDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapThumbnail").then(
      (m) => m.BehavioralHeatmapThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapDemo.tsx?raw"),
};
