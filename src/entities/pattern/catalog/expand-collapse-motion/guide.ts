import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "주문, 알림처럼 요약 아래 세부 정보가 있는 카드",
    "목록 안에서 화면 이동 없이 더 보여 줄 때",
    "펼친 내용의 높이가 항목마다 다를 때",
  ],
  whenNotToUse: [
    "세부 내용이 길어 화면을 다 덮을 때(상세 화면으로 이동)",
    "여러 개를 동시에 비교해야 할 때(표 사용)",
    "펼치는 동안 주변 레이아웃이 크게 흔들릴 때",
  ],
  alternatives: [
    { name: "아코디언", slug: "accordion", reason: "여러 섹션을 접고 펼칠 때" },
    { name: "페이지 전환", slug: "page-transition", reason: "내용이 길어 새 화면이 필요할 때" },
  ],
  accessibility: [
    "버튼에 aria-expanded와 aria-controls를 둬 펼침 상태를 알립니다.",
    "접힌 내용은 inert라 Tab과 화면 읽기에서 빠집니다.",
    "펼침 표시 화살표는 장식이라 aria-hidden입니다.",
    "동작 줄이기에서는 높이 변화를 즉시 적용합니다.",
  ],
};
