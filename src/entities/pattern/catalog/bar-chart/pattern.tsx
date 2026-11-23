import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BarChartThumbnail } from "@/entities/pattern/catalog/bar-chart/BarChartThumbnail";

export const barChartPattern: Pattern = {
  slug: "bar-chart",
  name: "Bar Chart",
  nameKo: "막대 그래프",
  aliases: ["막대 차트", "가로 막대", "바 차트", "bar graph", "horizontal bar"],
  category: "data-viz",
  summary: "범주별 크기를 길이로 비교",
  description:
    "요일, 지역처럼 나뉜 항목의 크기를 0에서 시작하는 막대 길이로 비교합니다. 항목 이름과 값을 글자로 함께 적어 막대 없이도 읽히고, 데이터가 바뀌면 막대가 새 길이로 부드럽게 바뀝니다.",
  whenToUse: [
    "항목끼리 크기를 비교할 때",
    "항목이 3~12개 정도일 때",
    "기간을 바꿔도 같은 눈금으로 비교할 때",
  ],
  whenNotToUse: [
    "시간에 따른 변화(선 그래프 사용)",
    "전체에서 차지하는 비중(도넛 차트나 누적 막대 그래프 사용)",
    "숫자 하나만 강조할 때(KPI 카드 사용)",
  ],
  alternatives: [
    {
      name: "누적 막대 그래프",
      slug: "stacked-bar-chart",
      reason: "막대 안의 구성까지 보여 줄 때",
    },
    { name: "선 그래프", slug: "line-chart", reason: "순서 있는 축에서 변화를 볼 때" },
  ],
  accessibility: [
    "각 항목은 이름과 값이 있는 목록이라 숫자를 그대로 읽어 줍니다.",
    "막대는 aria-hidden 장식이고 색에 의미를 두지 않습니다.",
    "움직임 줄이기 설정에서는 길이 전환을 끕니다.",
  ],
  tags: [...BASE_TAGS, "figure", "figcaption", "transition"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/bar-chart/BarChartDemo").then((m) => m.BarChartDemo),
  Thumbnail: BarChartThumbnail,
  sources: [
    {
      fileName: "BarChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bar-chart/BarChart.tsx?raw"),
    },
    {
      fileName: "BarChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bar-chart/BarChartDemo.tsx?raw"),
    },
  ],
};
