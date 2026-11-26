import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const notificationSettingsPattern: Pattern = {
  slug: "notification-settings",

  name: "Notification Settings",
  nameKo: "알림 설정",
  aliases: ["알림 채널 설정", "알림 수신 설정", "notification preferences", "channel matrix"],
  category: "settings",
  summary: "받을 알림을 주제와 채널별로 고르는 표",
  description:
    "주문, 이벤트, 댓글 같은 주제를 줄로, 앱 푸시, 이메일, 문자를 칸으로 두고 받을 조합만 고르는 표입니다. 끌 수 없는 필수 알림은 체크된 채 잠가 이유를 적고, 방해 금지 시간을 함께 둡니다.",
  tags: [...BASE_TAGS, "table", "checkbox", "disabled"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/notification-settings/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/notification-settings/NotificationSettingsDemo").then(
      (m) => m.NotificationSettingsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/notification-settings/NotificationSettingsThumbnail").then(
      (m) => m.NotificationSettingsThumbnail,
    ),
  sources: [
    {
      fileName: "NotificationSettings.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/notification-settings/NotificationSettings.tsx?raw"),
    },
    {
      fileName: "NotificationSettingsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/notification-settings/NotificationSettingsDemo.tsx?raw"),
    },
  ],
};
