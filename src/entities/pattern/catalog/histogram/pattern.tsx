import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const histogramPattern: Pattern = {
  slug: "histogram",

  name: "Histogram",
  nameKo: "히스토그램",
  aliases: ["도수 분포", "분포 그래프", "구간 막대", "histogram", "frequency distribution"],
  category: "data-viz",
  summary: "값을 같은 구간으로 나눠 분포의 모양 표시",
  description:
    "많은 값을 같은 너비의 구간으로 나누고, 구간마다 몇 개가 들어가는지 막대로 보여 줍니다. 구간이 이어지므로 막대를 붙여 그리고, 구간 너비를 바꾸면 같은 데이터가 다른 모양으로 보인다는 점도 확인할 수 있습니다.",
  tags: [...BASE_TAGS, "CSS flex", "details"],
  loadGuide: () => import("@/entities/pattern/catalog/histogram/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/histogram/HistogramDemo").then((m) => m.HistogramDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/histogram/HistogramThumbnail").then(
      (m) => m.HistogramThumbnail,
    ),
  sources: [
    {
      fileName: "Histogram.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/histogram/Histogram.tsx?raw"),
    },
    {
      fileName: "HistogramDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/histogram/HistogramDemo.tsx?raw"),
    },
  ],
};
