import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "댓글의 멘션처럼 사람 이름에 짧은 프로필을 보여 줄 때",
    "링크를 열기 전에 내용을 미리 보여 주면 도움이 될 때",
    "알면 좋지만 몰라도 되는 부가 정보일 때",
  ],
  whenNotToUse: [
    "카드 안에 버튼이나 입력 같은 조작 요소를 넣어야 할 때(팝오버 사용)",
    "터치가 주 사용 환경일 때(호버가 없습니다)",
    "작업에 꼭 필요한 정보일 때",
  ],
  alternatives: [
    { name: "툴팁", slug: "tooltip", reason: "한 줄짜리 짧은 설명" },
    { name: "팝오버", slug: "popover", reason: "클릭으로 열고 안에서 조작해야 할 때" },
  ],
  accessibility: [
    "키보드 포커스로도 바로 열리고, Esc로 닫을 수 있습니다.",
    "여는 지연(0.5초)으로 링크 위를 지나가기만 할 때 카드가 깜빡이지 않게 하고, 닫는 지연으로 카드 위까지 포인터를 옮길 수 있게 합니다.",
    "카드는 링크가 가리키는 정보를 반복할 뿐이라 aria-hidden으로 두고, 포커스할 요소를 넣지 않습니다.",
    "링크 자체가 전체 정보로 가는 길이므로, 카드를 보지 못해도 같은 정보에 도달할 수 있습니다.",
  ],
};
