import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const notificationCenterPattern: Pattern = {
  slug: "notification-center",

  name: "Notification Center",
  nameKo: "알림 센터",
  aliases: ["알림함", "알림 목록", "벨 알림", "inbox", "activity feed"],
  category: "feedback",
  summary: "쌓인 알림을 모아 보는 패널",
  description:
    "종 아이콘에 안 읽은 알림 수를 보여 주고, 누르면 최근 알림을 모아 둔 패널이 열리는 패턴입니다. 지나간 토스트를 놓쳐도 나중에 다시 확인할 수 있습니다.",
  tags: [...BASE_TAGS, "Non-modal", "Keyboard"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/notification-center/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/notification-center/NotificationCenterDemo").then(
      (m) => m.NotificationCenterDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/notification-center/NotificationCenterThumbnail").then(
      (m) => m.NotificationCenterThumbnail,
    ),
  sources: [
    {
      fileName: "NotificationCenter.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/notification-center/NotificationCenter.tsx?raw"),
    },
    {
      fileName: "NotificationCenterDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/notification-center/NotificationCenterDemo.tsx?raw"),
    },
  ],
};
