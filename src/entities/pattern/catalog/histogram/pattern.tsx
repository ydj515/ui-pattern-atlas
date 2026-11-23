import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { HistogramThumbnail } from "@/entities/pattern/catalog/histogram/HistogramThumbnail";

export const histogramPattern: Pattern = {
  slug: "histogram",
  name: "Histogram",
  nameKo: "히스토그램",
  aliases: ["도수 분포", "분포 그래프", "구간 막대", "histogram", "frequency distribution"],
  category: "data-viz",
  summary: "값을 같은 구간으로 나눠 분포의 모양 표시",
  description:
    "많은 값을 같은 너비의 구간으로 나누고, 구간마다 몇 개가 들어가는지 막대로 보여 줍니다. 구간이 이어지므로 막대를 붙여 그리고, 구간 너비를 바꾸면 같은 데이터가 다른 모양으로 보인다는 점도 확인할 수 있습니다.",
  whenToUse: [
    "주문 금액, 응답 시간처럼 값이 어떻게 퍼져 있는지 볼 때",
    "값이 수십 개 이상일 때",
    "한쪽으로 치우쳤는지, 봉우리가 몇 개인지 볼 때",
  ],
  whenNotToUse: [
    "범주별 비교(세로 막대 그래프 사용)",
    "값이 몇 개뿐일 때",
    "두 값의 관계(산점도 사용)",
  ],
  alternatives: [
    { name: "세로 막대 그래프", slug: "column-chart", reason: "정해진 범주를 비교할 때" },
    { name: "산점도", slug: "scatter-plot", reason: "두 값의 관계를 볼 때" },
  ],
  accessibility: [
    "막대를 가리키면 구간과 개수를 글자로 보여 줍니다.",
    "표로 보기에 모든 구간과 개수를 적습니다.",
    "축 양 끝 값을 글자로 적습니다.",
  ],
  tags: [...BASE_TAGS, "CSS flex", "details"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/histogram/HistogramDemo").then((m) => m.HistogramDemo),
  Thumbnail: HistogramThumbnail,
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
