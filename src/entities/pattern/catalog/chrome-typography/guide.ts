import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["패션, 음악, 이벤트 로고", "레트로 디지털 분위기", "어두운 배경의 큰 제목"],
  whenNotToUse: ["밝은 배경(금속 반사가 드러나지 않음)", "작은 글자", "긴 문장"],
  alternatives: [
    { name: "그라데이션", slug: "gradient-typography", reason: "색이 변하는 글자" },
    { name: "네온 사인", slug: "neon-sign", reason: "빛나는 글자" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
