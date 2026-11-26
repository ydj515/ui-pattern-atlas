import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const staggerPattern: Pattern = {
  slug: "stagger",
  name: "Stagger",
  nameKo: "순차 등장",
  aliases: ["순차 애니메이션", "스태거", "staggered animation", "cascade"],
  category: "motion",
  summary: "여러 요소를 짧은 간격으로 차례로 보여 주기",
  description:
    "목록의 항목들이 한꺼번에 나타나지 않고 짧은 간격을 두고 위에서부터 차례로 올라오는 패턴입니다. 간격은 항목당 수십 ms로 짧게 두고, 전체가 400ms 안에 끝나게 합니다.",
  whenToUse: [
    "새로 불러온 목록, 검색 결과의 첫 표시",
    "카드 몇 장을 한 번에 보여 줄 때",
    "읽는 순서를 가볍게 안내할 때",
  ],
  whenNotToUse: [
    "항목이 많아 마지막 항목이 늦게 나타날 때",
    "같은 목록을 다시 그릴 때마다(처음 한 번만)",
    "긴 간격으로 내용을 일부러 늦게 보여 줄 때",
  ],
  alternatives: [
    { name: "스크롤 등장", slug: "scroll-reveal", reason: "스크롤해 보일 때 나타날 때" },
    { name: "스켈레톤", slug: "skeleton", reason: "불러오는 동안 자리를 보여 줄 때" },
  ],
  accessibility: [
    "모든 항목은 처음부터 문서에 있어 화면 읽기는 기다리지 않습니다.",
    "동작 줄이기에서는 한꺼번에 나타납니다.",
    "간격 선택은 라디오 버튼이라 키보드로 바꿀 수 있습니다.",
    "목록에는 aria-label로 이름을 붙입니다.",
  ],
  tags: [...BASE_TAGS, "@starting-style", "transition-delay", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/stagger/StaggerDemo").then((m) => m.StaggerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stagger/StaggerThumbnail").then((m) => m.StaggerThumbnail),
  sources: [
    {
      fileName: "Stagger.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/stagger/Stagger.tsx?raw"),
    },
    {
      fileName: "StaggerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/stagger/StaggerDemo.tsx?raw"),
    },
  ],
};
