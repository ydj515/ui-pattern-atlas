import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dashboardLayoutPattern: Pattern = {
  slug: "dashboard-layout",

  name: "Dashboard Layout",
  nameKo: "대시보드 레이아웃",
  aliases: ["관리자 대시보드", "지표 화면", "dashboard", "KPI layout"],
  category: "layout",
  summary: "지표 카드와 차트를 읽는 순서대로 배치",
  description:
    "가장 중요한 숫자를 맨 위 카드로, 그 흐름을 보여 주는 차트를 가운데, 자세한 표를 아래에 두는 대시보드 구성입니다. 기간을 바꾸면 모두 함께 바뀝니다.",
  tags: [...BASE_TAGS, "Data", "Reading order"],
  loadGuide: () => import("@/entities/pattern/catalog/dashboard-layout/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/dashboard-layout/DashboardLayoutDemo").then(
      (m) => m.DashboardLayoutDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/dashboard-layout/DashboardLayoutThumbnail").then(
      (m) => m.DashboardLayoutThumbnail,
    ),
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
