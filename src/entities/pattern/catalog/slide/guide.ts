import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "아래에서 올라오는 알림, 옆에서 나오는 패널",
    "나타나는 위치가 화면 가장자리와 연결될 때",
    "닫으면 다시 그 방향으로 숨길 때",
  ],
  whenNotToUse: [
    "화면 가운데의 작은 요소(페이드 사용)",
    "들어오는 방향과 나가는 방향이 다를 때",
    "긴 거리를 천천히 이동할 때",
  ],
  alternatives: [
    { name: "페이드", slug: "fade", reason: "위치는 그대로 두고 나타날 때" },
    { name: "드로어", slug: "drawer", reason: "옆에서 나오는 메뉴 전체 패턴" },
  ],
  accessibility: [
    "숨기기 버튼은 aria-pressed로 표시 상태를 알립니다.",
    "사라지는 동안에는 aria-hidden으로 표시합니다.",
    "동작 줄이기에서는 이동 없이 바로 넣고 뺍니다.",
    "카드는 들어오는 가장자리에 붙여 처음부터 일부가 보이지 않게 합니다.",
  ],
};
