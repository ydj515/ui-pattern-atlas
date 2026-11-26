import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
