import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { MaintenancePageThumbnail } from "@/entities/pattern/catalog/maintenance-page/MaintenancePageThumbnail";

export const maintenancePagePattern: Pattern = {
  slug: "maintenance-page",
  name: "Maintenance Page",
  nameKo: "점검 중",
  aliases: ["서비스 점검", "점검 안내", "maintenance", "scheduled downtime"],
  category: "empty-error",
  summary: "서비스 점검 일정 안내",
  description:
    "계획된 점검으로 서비스를 쓸 수 없을 때 언제 시작해 언제 끝나는지, 얼마나 남았는지 알려 주는 패턴입니다. 끝나면 알림을 받을 수 있게 해 사용자가 계속 새로고침하지 않아도 됩니다.",
  whenToUse: [
    "미리 정해 둔 시간에 서비스를 멈출 때",
    "끝나는 시간을 알 수 있을 때",
    "점검이 끝나면 알려 줄 수단이 있을 때",
  ],
  whenNotToUse: [
    "예상하지 못한 장애(상태 페이지와 오류 상태 사용)",
    "일부 기능만 멈출 때(배너 알림으로 알리기)",
    "몇 초 안에 끝나는 배포",
  ],
  alternatives: [
    {
      name: "배너 알림",
      slug: "alert-banner",
      reason: "점검 전에 미리 알리거나 일부 기능만 멈출 때",
    },
    { name: "오류 상태", slug: "error-state", reason: "예상하지 못한 장애" },
  ],
  accessibility: [
    "시간은 time 요소와 dateTime 값으로 표시하고, 보는 사람의 시간대로 바꿔 보여 줍니다.",
    '진행 막대는 role="progressbar"와 aria-valuenow를 가지며, 남은 시간을 글로도 보여 줍니다.',
    '알림 신청 후 버튼 문구가 결과("끝나면 메일로 알려 드릴게요")로 바뀝니다.',
    "서버는 503 상태 코드와 Retry-After 헤더를 함께 보냅니다.",
  ],
  tags: [...BASE_TAGS, "HTTP 503", "Intl.DateTimeFormat"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/maintenance-page/MaintenancePageDemo").then(
      (m) => m.MaintenancePageDemo,
    ),
  Thumbnail: MaintenancePageThumbnail,
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
