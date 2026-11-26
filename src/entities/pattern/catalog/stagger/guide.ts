import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "새로 불러온 목록, 검색 결과의 첫 표시",
    "카드 몇 장을 한 번에 보여 줄 때",
    "읽는 순서를 가볍게 안내할 때",
  ],
  whenNotToUse: [
    "항목이 많아 마지막 항목이 늦게 나타날 때",
    "같은 목록을 다시 그릴 때마다(처음 한 번만)",
    "긴 간격으로 내용을 일부러 늦게 보여 줄 때",
  ],
  alternatives: [
    { name: "스크롤 등장", slug: "scroll-reveal", reason: "스크롤해 보일 때 나타날 때" },
    { name: "스켈레톤", slug: "skeleton", reason: "불러오는 동안 자리를 보여 줄 때" },
  ],
  accessibility: [
    "모든 항목은 처음부터 문서에 있어 화면 읽기는 기다리지 않습니다.",
    "동작 줄이기에서는 한꺼번에 나타납니다.",
    "간격 선택은 라디오 버튼이라 키보드로 바꿀 수 있습니다.",
    "목록에는 aria-label로 이름을 붙입니다.",
  ],
};
