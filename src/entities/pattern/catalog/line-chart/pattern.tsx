import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { LineChartThumbnail } from "@/entities/pattern/catalog/line-chart/LineChartThumbnail";

export const lineChartPattern: Pattern = {
  slug: "line-chart",
  name: "Line Chart",
  nameKo: "선 그래프",
  aliases: ["꺾은선 그래프", "추이 그래프", "시계열 차트", "line graph", "time series"],
  category: "data-viz",
  summary: "순서 있는 축에서 값의 변화 추적",
  description:
    "월, 주처럼 순서가 있는 축을 따라 값이 어떻게 바뀌는지 2px 선으로 보여 줍니다. 포인터나 좌우 화살표로 기준선을 옮기면 그 지점의 모든 계열 값을 한 줄로 읽어 주고, 선 끝과 범례에 계열 이름을 적습니다.",
  origin:
    "1786년 윌리엄 플레이페어(William Playfair)가 책 「상업과 정치 지도」에서 수출입 금액의 변화를 그린 것이 처음으로 알려져 있어요.",
  whenToUse: [
    "시간에 따른 추세를 볼 때",
    "올해와 작년처럼 두세 계열을 같은 축에서 비교할 때",
    "점이 많아 막대로는 빽빽할 때",
  ],
  whenNotToUse: [
    "순서 없는 항목 비교(막대 그래프 사용)",
    "단위가 다른 두 값을 한 차트에 둘 때(차트를 나누기)",
    "카드 안의 작은 추세(스파크라인 사용)",
  ],
  alternatives: [
    { name: "스파크라인", slug: "sparkline", reason: "축 없이 작은 추세만 보여 줄 때" },
    { name: "막대 그래프", slug: "bar-chart", reason: "항목끼리 크기를 비교할 때" },
  ],
  accessibility: [
    "차트 영역에 포커스를 두고 ←/→로 지점을 옮기면 값을 aria-live로 읽어 줍니다.",
    "범례와 선 끝 이름으로 계열을 구분해 색에만 기대지 않습니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "aria-live", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/line-chart/LineChartDemo").then((m) => m.LineChartDemo),
  Thumbnail: LineChartThumbnail,
  sources: [
    {
      fileName: "LineChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/line-chart/LineChart.tsx?raw"),
    },
    {
      fileName: "LineChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/line-chart/LineChartDemo.tsx?raw"),
    },
  ],
};
