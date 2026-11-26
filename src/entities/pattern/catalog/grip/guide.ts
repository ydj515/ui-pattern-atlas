import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "할 일, 재생 목록처럼 순서를 바꾸는 목록",
    "카드나 위젯을 다시 배치할 때",
    "끌 수 있는 곳을 분명히 보여 줄 때",
  ],
  whenNotToUse: [
    "순서가 의미 없는 목록",
    "키보드 대안 없이 끌기만 가능할 때",
    "행 전체를 끌 때 손잡이만 장식으로 둘 때",
  ],
  alternatives: [
    { name: "드래그 앤 드롭", slug: "drag-and-drop", reason: "다른 영역으로 옮길 때" },
    { name: "순서 바꾸기 목록", slug: "sortable-list", reason: "목록 순서 바꾸기 전체 패턴" },
  ],
  accessibility: [
    "손잡이는 버튼이고 위아래 화살표로 순서를 바꿀 수 있습니다.",
    "버튼 이름에 항목과 조작 방법을 넣습니다.",
    "옮긴 결과는 role=status로 알립니다.",
    "끄는 중인 행은 테두리 색으로 구분합니다.",
  ],
};
