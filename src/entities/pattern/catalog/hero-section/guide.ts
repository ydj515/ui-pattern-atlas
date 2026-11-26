import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "랜딩 페이지, 제품 소개 페이지의 첫 화면",
    "한 가지 행동으로 이끌고 싶을 때",
    "핵심 메시지가 분명할 때",
  ],
  whenNotToUse: [
    "로그인한 사용자의 작업 화면(바로 할 일을 보여 주기)",
    "행동이 여러 개로 나뉠 때",
    "꾸밈 이미지만 크고 정보가 없을 때",
  ],
  alternatives: [
    { name: "Z 패턴", slug: "z-pattern", reason: "단순한 화면에서 시선 흐름을 설계할 때" },
    { name: "벤토 그리드", slug: "bento-grid", reason: "기능을 여러 칸으로 소개할 때" },
  ],
  accessibility: [
    "제목은 페이지의 h1입니다.",
    "주요 버튼은 하나만 두고 보조 행동은 덜 강조합니다.",
    "비주얼은 장식이라 aria-hidden입니다.",
    "text-balance로 제목 줄바꿈을 고르게 합니다.",
  ],
};
