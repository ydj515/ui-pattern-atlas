import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "랜딩 페이지 첫 화면처럼 요소가 적은 화면",
    "주요 행동으로 시선을 끝맺고 싶을 때",
    "광고, 배너",
  ],
  whenNotToUse: ["글이 많은 화면(F 패턴처럼 읽힘)", "목록, 표", "요소가 많아 흐름이 흐려질 때"],
  alternatives: [
    { name: "히어로 섹션", slug: "hero-section", reason: "제목과 행동 중심의 첫 화면" },
  ],
  accessibility: [
    "DOM 순서를 Z 흐름과 같게 둬 읽는 순서와 보이는 순서가 같습니다.",
    "시선 흐름 표시는 장식이라 aria-hidden입니다.",
    "주요 행동은 실제 버튼이고 마지막에 옵니다.",
    "격자 배치만 쓰고 절대 위치를 피해 확대해도 겹치지 않습니다.",
  ],
};
