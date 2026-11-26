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
  tags: [...BASE_TAGS, "role=switch", "section", "grouped list"],
  loadGuide: () => import("@/entities/pattern/catalog/settings-list/guide").then((m) => m.guide),
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
