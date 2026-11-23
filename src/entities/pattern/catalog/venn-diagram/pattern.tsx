import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { VennDiagramThumbnail } from "@/entities/pattern/catalog/venn-diagram/VennDiagramThumbnail";

export const vennDiagramPattern: Pattern = {
  slug: "venn-diagram",
  name: "Venn Diagram",
  nameKo: "벤 다이어그램",
  aliases: ["겹친 원", "집합 다이어그램", "교집합 차트", "venn diagram", "set overlap"],
  category: "data-viz",
  summary: "두세 집합이 겹치는 부분과 각 영역의 수",
  description:
    "두세 개의 원을 겹쳐 그리고, 겹침에 따라 나뉜 영역마다 해당하는 수를 적습니다. 원 크기는 같게 두고 숫자가 크기를 말하게 하며, 범례에서 집합을 고르면 그 원을 강조하고 전체 수를 읽어 줍니다.",
  whenToUse: [
    "두세 그룹이 얼마나 겹치는지 보여 줄 때",
    "중복 동의, 중복 구매처럼 교집합이 중요할 때",
    "영역별 정확한 수를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "집합이 네 개 이상일 때",
    "겹침 비율을 면적으로 정확히 비교해야 할 때",
    "겹치지 않는 그룹을 비교할 때(막대 그래프 사용)",
  ],
  alternatives: [
    { name: "누적 막대 그래프", slug: "stacked-bar-chart", reason: "겹침 없이 구성을 비교할 때" },
    { name: "버블 차트", slug: "bubble-chart", reason: "원 크기로 양을 비교할 때" },
  ],
  accessibility: [
    "범례 버튼은 aria-pressed로 선택 상태를 알립니다.",
    "고른 집합의 합계를 aria-live로 읽어 줍니다.",
    "모든 영역의 수를 화면 읽기용 목록으로도 둡니다.",
  ],
  tags: [...BASE_TAGS, "SVG", "aria-pressed", "aria-live"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/venn-diagram/VennDiagramDemo").then(
      (m) => m.VennDiagramDemo,
    ),
  Thumbnail: VennDiagramThumbnail,
  sources: [
    {
      fileName: "VennDiagram.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/venn-diagram/VennDiagram.tsx?raw"),
    },
    {
      fileName: "VennDiagramDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/venn-diagram/VennDiagramDemo.tsx?raw"),
    },
  ],
};
