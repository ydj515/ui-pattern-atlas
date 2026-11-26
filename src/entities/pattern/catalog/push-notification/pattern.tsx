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
  whenToUse: [
    "배송 시작, 예약 시간처럼 사용자가 앱 밖에 있어도 알아야 할 소식",
    "사용자가 직접 받겠다고 선택한 주제가 있을 때",
    "시간이 중요해서 이메일로는 늦을 때",
  ],
  whenNotToUse: [
    "페이지에 들어오자마자 권한을 묻는 경우(대부분 거절하고 다시 묻지 못합니다)",
    "광고나 재방문 유도처럼 사용자가 원하지 않는 소식",
    "앱을 보고 있는 동안의 피드백(토스트나 알림 센터 사용)",
  ],
  alternatives: [
    {
      name: "알림 센터",
      slug: "notification-center",
      reason: "앱 안에 쌓아 두고 다음 방문 때 보여 줄 때",
    },
    { name: "토스트", slug: "toast", reason: "지금 화면을 보고 있는 사용자에게 알릴 때" },
  ],
  accessibility: [
    "권한 요청은 무엇을 받는지 설명한 버튼을 누를 때만 띄웁니다.",
    '거절했거나 지원하지 않는 브라우저에서는 role="status" 문구로 이유와 해결 방법을 알려 줍니다.',
    "화면 속 미리 보기는 실제 알림을 흉내 낸 장식이라 aria-hidden으로 둡니다.",
    "시스템 알림은 운영체제의 접근성 설정(음성, 진동, 방해 금지)을 그대로 따릅니다.",
  ],
  tags: [...BASE_TAGS, "Notification API", "Permissions"],
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
