import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sparklinePattern: Pattern = {
  slug: "sparkline",

  name: "Sparkline",
  nameKo: "스파크라인",
  aliases: ["미니 차트", "작은 추세선", "인라인 차트", "sparkline", "micro chart"],
  category: "data-viz",
  summary: "카드나 표 안의 작은 추세선",
  description:
    "축과 눈금 없이 글자 크기만 한 선으로 추세를 보여 줍니다. 표나 카드의 한 칸에 들어가 숫자 옆에서 흐름을 보여 주고, 마지막 값에 점을 찍습니다. 정확한 값은 옆에 글자로 둡니다.",
  tags: [...BASE_TAGS, "SVG", "role=img", "polyline"],
  loadGuide: () => import("@/entities/pattern/catalog/sparkline/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sparkline/SparklineDemo").then((m) => m.SparklineDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sparkline/SparklineThumbnail").then(
      (m) => m.SparklineThumbnail,
    ),
  sources: [
    {
      fileName: "Sparkline.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sparkline/Sparkline.tsx?raw"),
    },
    {
      fileName: "SparklineDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/sparkline/SparklineDemo.tsx?raw"),
    },
  ],
};
