import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DashboardLayoutThumbnail } from "@/entities/pattern/catalog/dashboard-layout/DashboardLayoutThumbnail";

export const dashboardLayoutPattern: Pattern = {
  slug: "dashboard-layout",
  name: "Dashboard Layout",
  nameKo: "대시보드 레이아웃",
  aliases: ["관리자 대시보드", "지표 화면", "dashboard", "KPI layout"],
  category: "layout",
  summary: "지표 카드와 차트를 읽는 순서대로 배치",
  description:
    "가장 중요한 숫자를 맨 위 카드로, 그 흐름을 보여 주는 차트를 가운데, 자세한 표를 아래에 두는 대시보드 구성입니다. 기간을 바꾸면 모두 함께 바뀝니다.",
  whenToUse: [
    "매출, 방문 같은 지표를 정기적으로 확인하는 화면",
    "요약 → 추이 → 상세 순서로 읽혀야 할 때",
    "기간을 바꿔 비교할 때",
  ],
  whenNotToUse: [
    "지표가 한두 개뿐일 때(카드 하나로 충분)",
    "작업이 중심인 화면",
    "모든 차트를 같은 크기로 늘어놓을 때(중요도가 사라짐)",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "상세 숫자를 비교할 때" },
    { name: "벤토 그리드", slug: "bento-grid", reason: "중요도가 다른 칸을 묶을 때" },
  ],
  accessibility: [
    '지표 카드는 목록이라 개수가 함께 읽히고, 변화는 "증가/감소"를 글로 씁니다.',
    "화살표와 색은 보조 수단이라 aria-hidden입니다.",
    "차트에는 figcaption으로 무엇을 보여 주는지 씁니다.",
    "기간 버튼은 aria-pressed로 상태를 알립니다.",
  ],
  tags: [...BASE_TAGS, "Data", "Reading order"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/dashboard-layout/DashboardLayoutDemo").then(
      (m) => m.DashboardLayoutDemo,
    ),
  Thumbnail: DashboardLayoutThumbnail,
  sources: [
    {
      fileName: "DashboardLayout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/dashboard-layout/DashboardLayout.tsx?raw"),
    },
    {
      fileName: "DashboardLayoutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/dashboard-layout/DashboardLayoutDemo.tsx?raw"),
    },
  ],
};
