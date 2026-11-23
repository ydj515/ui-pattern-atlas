import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ColumnChartThumbnail } from "@/entities/pattern/catalog/column-chart/ColumnChartThumbnail";

export const columnChartPattern: Pattern = {
  slug: "column-chart",
  name: "Column Chart",
  nameKo: "세로 막대 그래프",
  aliases: ["세로 막대", "컬럼 차트", "월별 막대 그래프", "column chart", "vertical bar chart"],
  category: "data-viz",
  summary: "순서 있는 범주를 세로 막대 높이로 비교",
  description:
    "월, 분기처럼 순서가 있는 범주의 크기를 0에서 시작하는 세로 막대 높이로 비교합니다. 기간을 바꿔도 같은 눈금을 유지해 높이를 그대로 비교할 수 있고, 막대를 가리키면 값이 나옵니다.",
  whenToUse: [
    "월별, 분기별처럼 순서가 있는 항목 비교",
    "항목 이름이 짧을 때",
    "기간을 바꿔 가며 같은 눈금으로 비교할 때",
  ],
  whenNotToUse: [
    "항목 이름이 길 때(막대 그래프 사용)",
    "점이 많은 추세(선 그래프 사용)",
    "구성비를 보여 줄 때(누적 막대 그래프 사용)",
  ],
  alternatives: [
    { name: "막대 그래프", slug: "bar-chart", reason: "항목 이름이 길거나 많을 때" },
    { name: "히스토그램", slug: "histogram", reason: "값의 분포를 구간으로 볼 때" },
  ],
  accessibility: [
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
    "눈금 값을 글자로 적어 높이를 짐작하지 않아도 됩니다.",
    "움직임 줄이기 설정에서는 높이 전환을 끕니다.",
  ],
  tags: [...BASE_TAGS, "CSS flex", "details", "transition"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/column-chart/ColumnChartDemo").then(
      (m) => m.ColumnChartDemo,
    ),
  Thumbnail: ColumnChartThumbnail,
  sources: [
    {
      fileName: "ColumnChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/column-chart/ColumnChart.tsx?raw"),
    },
    {
      fileName: "ColumnChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/column-chart/ColumnChartDemo.tsx?raw"),
    },
  ],
};
