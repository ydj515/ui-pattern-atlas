import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NotificationSettingsThumbnail } from "@/entities/pattern/catalog/notification-settings/NotificationSettingsThumbnail";

export const notificationSettingsPattern: Pattern = {
  slug: "notification-settings",
  name: "Notification Settings",
  nameKo: "알림 설정",
  aliases: ["알림 채널 설정", "알림 수신 설정", "notification preferences", "channel matrix"],
  category: "settings",
  summary: "받을 알림을 주제와 채널별로 고르는 표",
  description:
    "주문, 이벤트, 댓글 같은 주제를 줄로, 앱 푸시, 이메일, 문자를 칸으로 두고 받을 조합만 고르는 표입니다. 끌 수 없는 필수 알림은 체크된 채 잠가 이유를 적고, 방해 금지 시간을 함께 둡니다.",
  whenToUse: [
    "알림 주제와 채널이 여러 개일 때",
    "광고성 알림 동의를 채널별로 받을 때",
    "꼭 보내야 하는 알림이 섞여 있을 때",
  ],
  whenNotToUse: [
    "알림이 하나뿐일 때(스위치 사용)",
    "모든 알림을 한 번에 끄는 것만 필요할 때",
    "필수가 아닌 알림을 끌 수 없게 막을 때",
  ],
  alternatives: [
    { name: "설정 목록", slug: "settings-list", reason: "주제별 스위치 몇 개로 충분할 때" },
    { name: "체크박스", slug: "checkbox", reason: "체크박스 하나의 기본 형태" },
  ],
  accessibility: [
    "table과 caption으로 주제와 채널 제목을 칸마다 읽어 줍니다.",
    "체크박스마다 주제와 채널을 합친 이름을 붙입니다.",
    "필수 알림은 disabled이고 이유를 aria-describedby로 이어 둡니다.",
  ],
  tags: [...BASE_TAGS, "table", "checkbox", "disabled"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/notification-settings/NotificationSettingsDemo").then(
      (m) => m.NotificationSettingsDemo,
    ),
  Thumbnail: NotificationSettingsThumbnail,
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
