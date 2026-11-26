import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "브루탈리즘을 다시(neo) 가져와 굵은 테두리, 진한 그림자, 원색으로 다듬은 흐름이라 붙은 이름이에요.",
  whenToUse: [
    "개성 있는 스타트업, 크리에이터 도구",
    "젊고 장난스러운 인상",
    "조작 요소를 또렷하게 보여 줄 때",
  ],
  whenNotToUse: [
    "차분해야 하는 의료, 공공 서비스",
    "정보가 많아 선이 너무 많아질 때",
    "원색 조합이 브랜드와 맞지 않을 때",
  ],
  alternatives: [
    { name: "브루털리즘", slug: "brutalism", reason: "꾸밈을 더 덜어 낸 원형" },
    { name: "클레이모피즘", slug: "claymorphism", reason: "부드러운 입체" },
  ],
  accessibility: [
    "외곽선과 대비가 강해 경계가 분명합니다.",
    "눌림 이동은 동작 줄이기에서 생략합니다.",
    "원색 위 검은 글자 대비를 확인합니다.",
    "상태를 글자와 aria-pressed로 함께 알립니다.",
  ],
};
