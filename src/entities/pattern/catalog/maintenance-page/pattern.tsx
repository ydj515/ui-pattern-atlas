import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const maintenancePagePattern: Pattern = {
  slug: "maintenance-page",

  name: "Maintenance Page",
  nameKo: "점검 중",
  aliases: ["서비스 점검", "점검 안내", "maintenance", "scheduled downtime"],
  category: "empty-error",
  summary: "서비스 점검 일정 안내",
  description:
    "계획된 점검으로 서비스를 쓸 수 없을 때 언제 시작해 언제 끝나는지, 얼마나 남았는지 알려 주는 패턴입니다. 끝나면 알림을 받을 수 있게 해 사용자가 계속 새로고침하지 않아도 됩니다.",
  tags: [...BASE_TAGS, "HTTP 503", "Intl.DateTimeFormat"],
  loadGuide: () => import("@/entities/pattern/catalog/maintenance-page/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/maintenance-page/MaintenancePageDemo").then(
      (m) => m.MaintenancePageDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/maintenance-page/MaintenancePageThumbnail").then(
      (m) => m.MaintenancePageThumbnail,
    ),
  sources: [
    {
      fileName: "MaintenancePage.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/maintenance-page/MaintenancePage.tsx?raw"),
    },
    {
      fileName: "MaintenancePageDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/maintenance-page/MaintenancePageDemo.tsx?raw"),
    },
  ],
};
