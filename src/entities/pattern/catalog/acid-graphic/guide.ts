import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "음악, 패션, 파티 행사 포스터",
    "젊고 실험적인 브랜드의 큰 제목",
    "짧은 단어 하나를 강하게 보여 줄 때",
  ],
  whenNotToUse: [
    "긴 본문이나 안내 글",
    "신뢰가 중요한 금융, 공공 화면",
    "형광색 위에 작은 글을 둘 때",
  ],
  alternatives: [
    { name: "글리치", slug: "glitch", reason: "디지털 오류 느낌" },
    { name: "네온 사인", slug: "neon-sign", reason: "빛나는 외곽" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
