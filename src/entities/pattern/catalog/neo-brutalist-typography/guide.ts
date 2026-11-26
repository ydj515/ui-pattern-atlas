import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["스타트업 랜딩, 제품 라벨", "태그나 짧은 제목", "장난스러운 브랜드"],
  whenNotToUse: ["긴 문장", "차분한 서비스", "모든 글을 상자에 넣을 때"],
  alternatives: [
    { name: "브루털리즘 타이포그래피", slug: "brutalist-typography", reason: "더 거친 원형" },
    { name: "콜라주", slug: "cutout-collage", reason: "조각을 붙인 글자" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
