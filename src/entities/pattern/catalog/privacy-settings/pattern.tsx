import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const privacySettingsPattern: Pattern = {
  slug: "privacy-settings",

  name: "Privacy Settings",
  nameKo: "공개 범위 설정",
  aliases: [
    "개인정보 설정",
    "프로필 공개 설정",
    "privacy controls",
    "visibility settings",
    "data download",
  ],
  category: "settings",
  summary: "공개 범위마다 누가 보는지 적고 내 데이터를 받게 하는 설정",
  description:
    "프로필을 누구에게 보여 줄지 고르는 선택지마다 실제로 누가 볼 수 있는지 한 줄로 적는 화면입니다. 검색 노출 같은 세부 스위치와 내 데이터 사본을 요청하는 버튼을 함께 둡니다.",
  tags: [...BASE_TAGS, "radio", "role=switch", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/privacy-settings/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/privacy-settings/PrivacySettingsDemo").then(
      (m) => m.PrivacySettingsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/privacy-settings/PrivacySettingsThumbnail").then(
      (m) => m.PrivacySettingsThumbnail,
    ),
  sources: [
    {
      fileName: "PrivacySettings.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/privacy-settings/PrivacySettings.tsx?raw"),
    },
    {
      fileName: "PrivacySettingsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/privacy-settings/PrivacySettingsDemo.tsx?raw"),
    },
  ],
};
