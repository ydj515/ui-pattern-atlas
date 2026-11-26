import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pushNotificationPattern: Pattern = {
  slug: "push-notification",

  name: "Push Notification",
  nameKo: "푸시 알림",
  aliases: ["시스템 알림", "웹 푸시", "브라우저 알림", "web push", "Notification API"],
  category: "feedback",
  summary: "앱 밖에서도 소식을 전하는 시스템 알림",
  description:
    "브라우저나 운영체제의 알림으로 앱을 보고 있지 않을 때도 새 소식을 전하는 패턴입니다. 어떤 알림을 받게 되는지 먼저 보여 주고, 사용자가 원할 때만 권한을 요청합니다.",
  tags: [...BASE_TAGS, "Notification API", "Permissions"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/push-notification/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/push-notification/PushNotificationDemo").then(
      (m) => m.PushNotificationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/push-notification/PushNotificationThumbnail").then(
      (m) => m.PushNotificationThumbnail,
    ),
  sources: [
    {
      fileName: "PushNotification.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/push-notification/PushNotification.tsx?raw"),
    },
    {
      fileName: "PushNotificationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/push-notification/PushNotificationDemo.tsx?raw"),
    },
  ],
};
