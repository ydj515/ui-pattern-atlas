import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "입력 항목이 많아 오류가 화면 밖에 있을 수 있는 긴 폼",
    "제출 버튼을 누른 뒤 한꺼번에 검증하는 폼",
    "스크린 리더 사용자에게 오류 개수와 위치를 한 번에 알려야 할 때",
  ],
  whenNotToUse: [
    "입력 한두 개짜리 짧은 폼(필드 옆 인라인 오류로 충분)",
    "입력하는 동안 실시간으로 검증할 때",
    "폼과 상관없는 서버 오류일 때(배너 알림 사용)",
  ],
  alternatives: [
    {
      name: "인라인 오류",
      slug: "inline-validation",
      reason: "필드 바로 아래에서 하나씩 알려 줄 때. 오류 요약과 함께 쓰는 것이 기본",
    },
    { name: "배너 알림", slug: "alert-banner", reason: "특정 필드와 상관없는 페이지 단위 문제" },
  ],
  accessibility: [
    '요약이 나타나면 요약 상자로 포커스를 옮기고 role="alert"로 오류 개수를 바로 읽어 줍니다.',
    '제목에 오류 개수를 넣어("2개 항목을 확인해 주세요") 무엇을 해야 하는지 먼저 전합니다.',
    "각 항목은 필드로 가는 링크이며, 누르면 스크롤만 하지 않고 입력에 포커스를 줍니다.",
    "필드에는 aria-invalid와 aria-describedby로 인라인 오류를 연결해 요약과 같은 문구를 유지합니다.",
  ],
};
