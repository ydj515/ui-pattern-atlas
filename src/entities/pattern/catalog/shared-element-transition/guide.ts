import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사진, 상품 카드처럼 같은 대상이 목록과 상세에 모두 있을 때",
    "어떤 항목을 열었는지 시각적으로 이어 줄 때",
    "돌아갈 때 원래 자리를 다시 보여 줄 때",
  ],
  whenNotToUse: [
    "두 화면에 같은 대상이 없을 때(페이지 전환 사용)",
    "한 화면에 같은 이름의 요소가 여러 개 생길 때",
    "전환이 잦은 작업 화면",
  ],
  alternatives: [
    { name: "줌 전환", slug: "zoom-transition", reason: "아이콘에서 화면 전체가 커질 때" },
    { name: "라이트박스", slug: "lightbox", reason: "사진을 크게 띄워 볼 때" },
  ],
  accessibility: [
    "상세 화면이 열리면 닫기 버튼으로, 닫으면 눌렀던 사진으로 포커스를 돌려줍니다.",
    "API가 없거나 동작 줄이기가 켜져 있으면 전환 없이 바로 바뀝니다.",
    "사진마다 이름과 글자 설명이 함께 있습니다.",
    "view-transition-name은 한 시점에 한 요소에만 둡니다.",
  ],
};
