import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "새로 추가된 메뉴나 기능을 알릴 때",
    "설명 없이 가볍게 눈길만 끌 때",
    "한 번 보면 충분할 때",
  ],
  whenNotToUse: [
    "여러 메뉴에 동시에 붙일 때(어디부터 봐야 할지 모름)",
    "개수를 알려야 할 때(배지 사용)",
    "자세한 안내가 필요할 때(기능 소개나 코치마크 사용)",
  ],
  alternatives: [
    { name: "배지", slug: "badge", reason: "개수를 알릴 때" },
    { name: "안 읽음 표시", slug: "unread-indicator", reason: "목록의 새 항목" },
  ],
  accessibility: [
    '점은 장식이고 화면에 보이지 않는 "새 기능" 글을 메뉴 이름 뒤에 읽어 줍니다.',
    "메뉴를 열면 사라지고, 그 사실을 저장해 다시 나타나지 않게 합니다.",
    "점 크기가 작아도 메뉴 전체가 누르는 영역입니다.",
    "현재 메뉴는 aria-current로 따로 표시합니다.",
  ],
};
