import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["사용 방법이 달라지는 기능 추가", "사용자가 반길 만한 개선", "버전마다 한 번만"],
  whenNotToUse: [
    "버그 수정 목록처럼 사용자에게 의미 없는 변경",
    "기능 하나만 알리면 될 때(코치마크 사용)",
    "앱을 열 때마다",
  ],
  alternatives: [
    { name: "코치마크", slug: "coach-mark", reason: "바뀐 버튼 하나를 짚을 때" },
    { name: "배너 알림", slug: "alert-banner", reason: "화면 위에 짧게 알릴 때" },
  ],
  accessibility: [
    "role=dialog와 제목으로 이름을 붙입니다.",
    "열리면 확인 버튼에 포커스가 갑니다.",
    "항목은 목록으로 묶어 몇 개인지 함께 전달합니다.",
    "버전은 글자로 함께 보여 줍니다.",
  ],
};
