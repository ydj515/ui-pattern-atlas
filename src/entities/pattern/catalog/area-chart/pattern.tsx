import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AreaChartThumbnail } from "@/entities/pattern/catalog/area-chart/AreaChartThumbnail";

export const areaChartPattern: Pattern = {
  slug: "area-chart",
  name: "Area Chart",
  nameKo: "영역 그래프",
  aliases: ["면적 그래프", "영역 차트", "누적 영역", "area chart", "area graph"],
  category: "data-viz",
  summary: "시간에 따른 양을 선 아래 면적으로 표시",
  description:
    "선 그래프 아래를 옅게 채워 시간에 따른 양의 크기를 강조합니다. 0에서 시작하는 축 위에 그리고, 포인터나 좌우 화살표로 기준선을 옮기면 그날의 값을 읽어 줍니다.",
  whenToUse: [
    "방문자, 매출처럼 양의 흐름을 강조할 때",
    "계열이 하나일 때",
    "0부터의 크기가 의미 있을 때",
  ],
  whenNotToUse: [
    "여러 계열을 비교할 때(선 그래프 사용)",
    "0과 먼 범위의 작은 변화를 볼 때(선 그래프 사용)",
    "카드 안의 작은 추세(스파크라인 사용)",
  ],
  alternatives: [
    { name: "선 그래프", slug: "line-chart", reason: "여러 계열을 비교할 때" },
    { name: "스파크라인", slug: "sparkline", reason: "작은 자리에 추세만 보여 줄 때" },
  ],
  accessibility: [
    "차트 영역에 포커스를 두고 ←/→로 날짜를 옮기면 값을 aria-live로 읽어 줍니다.",
    "면은 옅게 칠하고 선을 함께 그려 경계를 분명히 합니다.",
    "표로 보기를 펼치면 모든 값을 표로 볼 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "aria-live", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/area-chart/AreaChartDemo").then((m) => m.AreaChartDemo),
  Thumbnail: AreaChartThumbnail,
  sources: [
    {
      fileName: "AreaChart.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/area-chart/AreaChart.tsx?raw"),
    },
    {
      fileName: "AreaChartDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/area-chart/AreaChartDemo.tsx?raw"),
    },
  ],
};
