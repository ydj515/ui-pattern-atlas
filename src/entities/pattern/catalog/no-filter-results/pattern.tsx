import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NoFilterResultsThumbnail } from "@/entities/pattern/catalog/no-filter-results/NoFilterResultsThumbnail";

export const noFilterResultsPattern: Pattern = {
  slug: "no-filter-results",
  name: "No Filter Results",
  nameKo: "필터 결과 없음",
  aliases: ["필터 결과 0건", "조건 결과 없음", "empty filter", "no matches"],
  category: "empty-error",
  summary: "적용한 필터를 보여 주고 완화를 제안하는 빈 결과",
  description:
    "필터를 너무 많이 걸어 결과가 없을 때 지금 걸린 필터를 보여 주고, 그 자리에서 하나씩 빼거나 모두 지울 수 있게 하는 패턴입니다. 어느 조건 때문에 비었는지 사용자가 바로 고칠 수 있습니다.",
  whenToUse: [
    "필터 여러 개를 겹쳐 거는 목록(숙소, 상품, 채용)",
    "필터 패널이 접혀 있어 걸린 조건이 잘 보이지 않을 때",
    "조건 하나만 빼도 결과가 생길 가능성이 높을 때",
  ],
  whenNotToUse: [
    "검색어 때문에 결과가 없을 때(검색 결과 없음 사용)",
    "필터 없이도 데이터가 없을 때(빈 상태 사용)",
    "필터가 하나뿐일 때(바로 지우기 버튼으로 충분)",
  ],
  alternatives: [
    { name: "검색 결과 없음", slug: "no-results", reason: "검색어가 원인일 때" },
    { name: "빈 상태", slug: "empty-state", reason: "데이터 자체가 없을 때" },
  ],
  accessibility: [
    '필터 칩은 버튼이고 이름이 "수영장 필터 빼기"처럼 누르면 일어날 일을 말합니다.',
    "× 기호는 aria-hidden으로 두고 글로 동작을 전합니다.",
    '결과 영역을 aria-live="polite"로 두어 필터를 뺀 결과를 읽어 줍니다.',
    "필터 모두 지우기로 한 번에 처음 상태로 돌아갈 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Filters"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/no-filter-results/NoFilterResultsDemo").then(
      (m) => m.NoFilterResultsDemo,
    ),
  Thumbnail: NoFilterResultsThumbnail,
  sources: [
    {
      fileName: "NoFilterResults.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/no-filter-results/NoFilterResults.tsx?raw"),
    },
    {
      fileName: "NoFilterResultsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/no-filter-results/NoFilterResultsDemo.tsx?raw"),
    },
  ],
};
