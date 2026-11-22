import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EmptyStateThumbnail } from "@/entities/pattern/catalog/empty-state/EmptyStateThumbnail";

export const emptyStatePattern: Pattern = {
  slug: "empty-state",
  name: "Empty State",
  nameKo: "빈 화면",
  aliases: ["빈 상태", "결과 없음", "데이터 없음", "zero state", "no results"],
  category: "empty-error",
  summary: "보여줄 내용이 없을 때 이유와 다음 행동을 안내하는 화면",
  description:
    "목록이나 검색 결과가 비어 있을 때 빈 공간을 그대로 두지 않고, 왜 비어 있는지와 다음에 무엇을 하면 되는지 안내하는 패턴입니다.",
  whenToUse: [
    "처음 사용하는 사용자에게 첫 행동을 유도할 때",
    "검색이나 필터 결과가 없을 때 조건을 바꾸도록 안내할 때",
    "모든 할 일을 마친 상태처럼 비어 있는 것이 긍정적인 상황일 때",
  ],
  whenNotToUse: [
    "데이터를 아직 불러오는 중일 때(스켈레톤 사용)",
    "오류 때문에 비어 있는데 이유를 숨길 때",
    "행동을 유도할 버튼이 여러 개 경쟁할 때",
  ],
  alternatives: [
    { name: "Skeleton", slug: "skeleton", reason: "로딩 중인 상태" },
    { name: "Error State", slug: "error-state", reason: "오류로 인해 내용을 표시할 수 없을 때" },
    {
      name: "Alert Banner",
      slug: "alert-banner",
      reason: "나머지 콘텐츠를 탐색할 수 있는 부분 실패",
    },
  ],
  accessibility: [
    "일러스트와 아이콘은 장식이므로 aria-hidden으로 숨깁니다.",
    "제목과 설명은 일반 텍스트로 두어 스크린 리더가 순서대로 읽게 합니다.",
    "주요 행동은 실제 <button> 또는 <a>로 제공해 키보드로 접근할 수 있게 합니다.",
  ],
  tags: [...BASE_TAGS, "UX writing"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/empty-state/EmptyStateDemo").then((m) => m.EmptyStateDemo),
  Thumbnail: EmptyStateThumbnail,
  sources: [
    {
      fileName: "EmptyState.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/empty-state/EmptyState.tsx?raw"),
    },
    {
      fileName: "EmptyStateDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/empty-state/EmptyStateDemo.tsx?raw"),
    },
  ],
};
