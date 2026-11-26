import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "정렬, 필터처럼 하나를 고르는 드롭다운 버튼",
    "선택한 값을 버튼 글자로 보여 줄 때",
    "표 머리의 정렬 방향",
  ],
  whenNotToUse: [
    "다음 화면으로 들어가는 행(쉐브론 사용)",
    "아코디언 펼침(쉐브론 회전이 흔함)",
    "아이콘만 있고 현재 값이 없을 때",
  ],
  alternatives: [
    { name: "쉐브론", slug: "chevron", reason: "다음 화면이나 펼침을 표시할 때" },
    { name: "셀렉트", slug: "select", reason: "고르기 입력 전체 패턴" },
  ],
  accessibility: [
    "버튼에 aria-haspopup과 aria-expanded를 둡니다.",
    "캐럿은 장식이라 aria-hidden입니다.",
    "선택한 값을 버튼 글자로 보여 줍니다.",
    "결과는 role=status로 알립니다.",
  ],
};
