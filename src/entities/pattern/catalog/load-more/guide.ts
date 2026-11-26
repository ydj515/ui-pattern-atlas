import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 후기처럼 전체 개수를 알 수 있는 목록",
    "목록 아래에 바닥글이나 다른 내용이 있을 때",
    "사용자가 직접 더 볼지 정하게 할 때",
  ],
  whenNotToUse: [
    "끝없이 훑어보는 피드(무한 스크롤 사용)",
    "특정 쪽으로 바로 가야 할 때(페이지네이션 사용)",
    "항목이 몇 개뿐일 때(모두 보여 주기)",
  ],
  alternatives: [
    { name: "무한 스크롤", slug: "infinite-scroll", reason: "계속 훑어보는 피드" },
    { name: "페이지네이션", slug: "pagination", reason: "쪽 번호로 위치를 기억할 때" },
  ],
  accessibility: [
    '버튼 이름에 "(6/24)"처럼 본 개수와 전체 개수를 넣습니다.',
    "불러온 뒤 첫 새 항목으로 포커스를 옮겨 키보드 사용자가 처음부터 다시 오지 않게 합니다.",
    '불러오는 동안 버튼은 "불러오는 중"으로 바뀌고 꺼집니다.',
    "모두 보이면 버튼을 없앱니다.",
  ],
};
