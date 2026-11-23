import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PrivacySettingsThumbnail } from "@/entities/pattern/catalog/privacy-settings/PrivacySettingsThumbnail";

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
  whenToUse: [
    "프로필이나 게시물을 다른 사람이 볼 수 있을 때",
    "개인정보 처리 선택권을 줘야 할 때",
    "내 데이터를 내려받게 해야 할 때",
  ],
  whenNotToUse: [
    "공개 여부가 없는 개인용 서비스",
    "선택지 이름만 두고 뜻을 적지 않을 때",
    "공개 쪽 선택지를 미리 체크해 둘 때(미리 체크된 동의 참고)",
  ],
  alternatives: [
    {
      name: "미리 체크된 동의",
      slug: "pre-checked-opt-in",
      reason: "동의를 미리 체크해 두는 다크 패턴",
    },
    { name: "설정 목록", slug: "settings-list", reason: "스위치 몇 개로 충분할 때" },
  ],
  accessibility: [
    "공개 범위는 라디오 버튼이고 설명을 aria-describedby로 이어 읽습니다.",
    '세부 설정은 role="switch"입니다.',
    '요청 결과는 role="status"로 읽어 줍니다.',
  ],
  tags: [...BASE_TAGS, "radio", "role=switch", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/privacy-settings/PrivacySettingsDemo").then(
      (m) => m.PrivacySettingsDemo,
    ),
  Thumbnail: PrivacySettingsThumbnail,
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
