import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "공유, 저장, 삭제처럼 아이콘이 널리 알려진 행동",
    "카드나 툴바처럼 자리가 좁을 때",
    "같은 행동이 목록마다 반복될 때",
  ],
  whenNotToUse: [
    "아이콘만으로 뜻이 분명하지 않을 때(글자 버튼 사용)",
    "화면의 가장 중요한 행동(글자가 있는 주요 버튼 사용)",
    "상태를 켜고 끌 때(토글 버튼 사용)",
  ],
  alternatives: [
    { name: "버튼", slug: "button", reason: "뜻을 글로 분명히 전해야 할 때" },
    { name: "툴팁", slug: "tooltip", reason: "버튼이 아닌 요소의 설명" },
  ],
  accessibility: [
    'aria-label로 이름을 주고, 같은 글을 role="tooltip"으로 aria-describedby에 연결합니다.',
    "툴팁은 hover와 키보드 포커스 모두에서 나타납니다.",
    "아이콘은 aria-hidden이고, 누르는 영역은 40×40px을 유지합니다.",
    "결과는 별도의 status 문구로 알립니다.",
  ],
};
