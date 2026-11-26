import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const statusDotPattern: Pattern = {
  slug: "status-dot",
  name: "Status Dot",
  nameKo: "상태 점",
  aliases: ["상태 표시", "신호등 점", "status indicator", "health dot"],
  category: "indicator",
  summary: "성공, 경고, 오류를 색 점으로",
  description:
    "초록, 노랑, 빨강 점과 짧은 낱말로 서비스나 작업의 상태를 보여 주는 패턴입니다. 색만으로 알리지 않고 낱말을 늘 함께 씁니다.",
  whenToUse: [
    "서버, 연동, 배포처럼 상태가 몇 가지로 나뉠 때",
    "목록에서 상태를 한눈에 훑어야 할 때",
    "자리가 좁을 때",
  ],
  whenNotToUse: [
    "자세한 설명이 필요한 문제(배너 알림 사용)",
    "사람의 접속 상태(접속 상태 사용)",
    "색으로만 구분해야 할 때",
  ],
  alternatives: [
    { name: "태그", slug: "tag", reason: "분류를 나타낼 때" },
    { name: "배너 알림", slug: "alert-banner", reason: "문제를 자세히 알릴 때" },
  ],
  accessibility: [
    "점은 장식이라 aria-hidden이고, 상태는 낱말(정상, 지연, 장애)로 함께 보여 줍니다.",
    "장애 상태는 바깥 고리를 더해 색이 아닌 모양으로도 구분합니다.",
    "상태가 바뀌는 대시보드라면 바뀐 항목을 live region으로 알립니다.",
    "점과 글자 대비를 지킵니다.",
  ],
  tags: [...BASE_TAGS, "Color independence", "Dashboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/status-dot/StatusDotDemo").then((m) => m.StatusDotDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/status-dot/StatusDotThumbnail").then(
      (m) => m.StatusDotThumbnail,
    ),
  sources: [
    {
      fileName: "StatusDot.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/status-dot/StatusDot.tsx?raw"),
    },
    {
      fileName: "StatusDotDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/status-dot/StatusDotDemo.tsx?raw"),
    },
  ],
};
