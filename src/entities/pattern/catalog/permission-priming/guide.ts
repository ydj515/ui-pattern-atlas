import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "배송 알림처럼 이유가 분명한 권한을 요청하기 직전",
    "한 번 거절하면 다시 묻기 어려운 권한",
    "권한이 없어도 쓸 수 있는 기능",
  ],
  whenNotToUse: [
    "앱을 열자마자 여러 권한을 한꺼번에 물을 때",
    "이유를 설명할 수 없는 권한",
    "나중에를 고를 수 없게 만들 때",
  ],
  alternatives: [
    {
      name: "시스템 권한 요청",
      slug: "system-permission-dialog",
      reason: "안내 다음에 기기가 묻는 단계",
    },
    { name: "권한 거절 후 복구", slug: "permission-recovery", reason: "이미 거절한 뒤의 안내" },
  ],
  accessibility: [
    "화면 전체에 제목으로 이름을 붙입니다.",
    "이유는 목록으로 나눠 한 줄씩 읽힙니다.",
    "허용과 나중에 두 버튼의 무게를 구분하되 둘 다 쉽게 누를 수 있습니다.",
    "아이콘은 장식이라 aria-hidden입니다.",
  ],
};
