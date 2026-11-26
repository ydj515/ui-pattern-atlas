import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "설정 목록처럼 눌러서 하위 화면으로 들어가는 행",
    "뒤로 가기 버튼",
    "아코디언의 펼침 표시",
  ],
  whenNotToUse: [
    "드롭다운 표시(캐럿 사용이 흔함)",
    "외부 링크(바깥 화살표 아이콘 사용)",
    "방향 없이 장식으로만 쓸 때",
  ],
  alternatives: [
    { name: "캐럿", slug: "caret", reason: "작은 삼각형으로 드롭다운을 표시할 때" },
    { name: "뒤로 가기", slug: "back-navigation", reason: "돌아가기 버튼 전체 패턴" },
  ],
  accessibility: [
    "쉐브론은 장식이라 aria-hidden이고 행 전체가 버튼입니다.",
    "뒤로 버튼에는 돌아갈 화면 이름을 글자로 씁니다.",
    "화면이 바뀌면 새 화면의 첫 버튼으로 포커스를 옮깁니다.",
    "아이콘 회전으로 펼침을 보여 줄 때는 aria-expanded를 함께 씁니다.",
  ],
};
