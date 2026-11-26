import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "소개, 상품 목록처럼 내려가며 훑는 긴 페이지",
    "섹션이 바뀌는 것을 가볍게 알릴 때",
    "한 번 재생되고 끝나는 효과",
  ],
  whenNotToUse: [
    "자주 쓰는 앱 화면(볼 때마다 기다리게 됨)",
    "검색 결과처럼 바로 읽어야 하는 내용",
    "스크롤 위치마다 계속 바뀌는 큰 효과",
  ],
  alternatives: [
    { name: "순차 등장", slug: "stagger", reason: "여러 항목을 한 번에 차례로 보여 줄 때" },
    { name: "패럴랙스", slug: "parallax", reason: "스크롤에 따라 깊이를 줄 때" },
  ],
  accessibility: [
    "관찰 기능이 없으면 처음부터 보여 내용이 숨겨진 채 남지 않습니다.",
    "한 번 나타나면 다시 숨기지 않습니다.",
    "동작 줄이기에서는 이동, 확대 없이 투명도만 바꿉니다.",
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 내릴 수 있습니다.",
  ],
};
