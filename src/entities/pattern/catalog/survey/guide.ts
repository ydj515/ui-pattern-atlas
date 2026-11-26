import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "인터뷰에서 들은 내용이 얼마나 흔한지 확인할 때",
    "만족도를 같은 척도로 꾸준히 잴 때",
    "여러 집단의 응답을 비교할 때",
  ],
  whenNotToUse: [
    "이유를 깊이 알아야 할 때(사용자 인터뷰 사용)",
    "실제 행동을 알아야 할 때(행동 기록 분석)",
    "한 문항에 두 가지를 함께 물을 때",
  ],
  alternatives: [
    { name: "사용자 인터뷰", slug: "user-interview", reason: "응답의 이유를 들을 때" },
    { name: "NPS 점수", slug: "nps-scale", reason: "추천 의향 하나를 잴 때" },
  ],
  accessibility: [
    "라디오 버튼과 fieldset으로 만든 설문 도구를 씁니다.",
    "척도 양 끝의 뜻을 글자로 적습니다.",
    "필수 문항을 줄이고 남은 문항 수를 알려 줍니다.",
  ],
};
