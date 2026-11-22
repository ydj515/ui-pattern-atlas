import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NoResultsThumbnail } from "@/entities/pattern/catalog/no-results/NoResultsThumbnail";

export const noResultsPattern: Pattern = {
  slug: "no-results",
  name: "No Results",
  nameKo: "검색 결과 없음",
  aliases: ["검색 실패", "결과 0건", "zero results", "empty search"],
  category: "empty-error",
  summary: "조건을 바꾸도록 돕는 빈 결과",
  description:
    "검색 결과가 없을 때 무엇을 찾았는지 다시 보여 주고, 비슷한 검색어와 고치는 방법을 제안하는 패턴입니다. 사용자가 빈 화면 앞에서 떠나지 않고 다음 검색을 하게 돕습니다.",
  whenToUse: [
    "검색어로 찾는 목록이나 상품, 문서",
    "오타가 잦은 고유명사나 외래어를 검색할 때",
    "비슷한 결과를 제안할 수 있을 때",
  ],
  whenNotToUse: [
    "필터 때문에 결과가 없을 때(필터 결과 없음 사용)",
    "처음부터 데이터가 없는 화면(빈 상태 사용)",
    "검색 서버 오류(오류 상태 사용)",
  ],
  alternatives: [
    { name: "빈 상태", slug: "empty-state", reason: "아직 아무것도 만들지 않은 처음 화면" },
    { name: "필터 결과 없음", slug: "no-filter-results", reason: "필터 조건이 너무 좁을 때" },
  ],
  accessibility: [
    '결과 영역을 aria-live="polite"로 두어 결과가 없다는 사실을 읽어 줍니다.',
    "제목에 검색어를 그대로 넣어 무엇을 찾았는지 확인할 수 있게 합니다.",
    "제안 검색어는 버튼이라 누르면 바로 다시 검색합니다.",
    "검색어 지우기로 처음 목록으로 돌아갈 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Search"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/no-results/NoResultsDemo").then((m) => m.NoResultsDemo),
  Thumbnail: NoResultsThumbnail,
  sources: [
    {
      fileName: "NoResults.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/no-results/NoResults.tsx?raw"),
    },
    {
      fileName: "NoResultsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/no-results/NoResultsDemo.tsx?raw"),
    },
  ],
};
