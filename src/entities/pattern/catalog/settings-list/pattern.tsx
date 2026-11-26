import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const settingsListPattern: Pattern = {
  slug: "settings-list",
  name: "Settings List",
  nameKo: "설정 목록",
  aliases: ["설정 화면", "환경설정", "preferences", "settings page", "grouped list"],
  category: "settings",
  summary: "바로 바뀌는 스위치와 다음 화면으로 가는 줄을 묶은 설정",
  description:
    "알림, 화면, 계정처럼 주제별로 묶은 설정 목록입니다. 스위치는 누르는 즉시 적용되고, 값이 있는 줄은 지금 값을 보여 준 채 고르는 화면으로 이어지며, 회원 탈퇴 같은 위험한 줄은 맨 아래에 다른 색으로 둡니다.",
  whenToUse: [
    "설정 항목이 여러 주제에 걸쳐 있을 때",
    "켜고 끄는 설정과 고르는 설정이 섞여 있을 때",
    "모바일 앱의 설정 탭",
  ],
  whenNotToUse: [
    "저장 버튼을 눌러야 반영되는 긴 입력 폼",
    "항목이 두세 개뿐일 때",
    "자주 바꾸는 설정을 깊숙이 숨길 때",
  ],
  alternatives: [
    { name: "스위치", slug: "switch", reason: "켜고 끄는 한 줄만 둘 때" },
    { name: "리스트", slug: "list", reason: "설정이 아닌 일반 목록" },
    { name: "알림 설정", slug: "notification-settings", reason: "알림만 채널별로 자세히 고를 때" },
  ],
  accessibility: [
    '스위치는 role="switch"인 체크박스라 켜짐 상태를 읽어 줍니다.',
    "값이 있는 줄은 버튼이고 지금 값을 이름에 포함합니다.",
    "주제마다 제목으로 묶어 제목 단위로 이동할 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "role=switch", "section", "grouped list"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/settings-list/SettingsListDemo").then(
      (m) => m.SettingsListDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/settings-list/SettingsListThumbnail").then(
      (m) => m.SettingsListThumbnail,
    ),
  sources: [
    {
      fileName: "SettingsList.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/settings-list/SettingsList.tsx?raw"),
    },
    {
      fileName: "SettingsListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/settings-list/SettingsListDemo.tsx?raw"),
    },
  ],
};
