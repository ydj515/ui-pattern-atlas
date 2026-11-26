import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["고급 브랜드, 갤러리, 포트폴리오", "한 문장에 집중시킬 때", "사진과 함께 쓰는 표지"],
  whenNotToUse: ["가는 글자 대비가 부족할 때", "정보가 많은 화면", "작은 화면에서 여백만 남을 때"],
  alternatives: [
    { name: "에디토리얼", slug: "editorial-typography", reason: "제목과 본문의 위계" },
    { name: "스위스 스타일", slug: "swiss-style", reason: "정돈된 그리드" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
