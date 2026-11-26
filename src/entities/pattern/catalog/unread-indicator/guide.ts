import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메일, 메시지, 알림처럼 읽음 여부가 중요한 목록",
    "새 항목을 빠르게 훑어야 할 때",
    "읽음 처리가 자동으로 될 때",
  ],
  whenNotToUse: [
    "개수만 알리면 될 때(배지 사용)",
    "새로 생긴 메뉴(새 기능 점 사용)",
    "읽음 여부가 의미 없는 목록",
  ],
  alternatives: [
    { name: "배지", slug: "badge", reason: "개수를 알릴 때" },
    { name: "알림 센터", slug: "notification-center", reason: "알림을 모아 볼 때" },
  ],
  accessibility: [
    '점은 장식이고 화면에 보이지 않는 "안 읽음" 글을 제목과 함께 읽어 줍니다.',
    "굵은 글씨와 점, 두 가지로 표시해 색에만 의존하지 않습니다.",
    "행 전체가 버튼이라 누르면 열리고 읽음으로 바뀝니다.",
    "목록에 이름을 붙여 항목 수가 함께 읽힙니다.",
  ],
};
