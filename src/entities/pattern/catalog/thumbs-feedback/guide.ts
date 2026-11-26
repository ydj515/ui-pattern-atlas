import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "도움말, 자주 묻는 질문, AI 답변 아래",
    "글이 문제를 풀었는지 알고 싶을 때",
    "개선할 글을 찾을 때",
  ],
  whenNotToUse: [
    "점수가 필요한 만족도 조사(별점, NPS 사용)",
    "모든 화면 끝마다",
    "이유를 반드시 받아야 할 때",
  ],
  alternatives: [
    { name: "NPS 점수", slug: "nps-scale", reason: "추천 의향을 점수로 받을 때" },
    { name: "평가 태그", slug: "rating-tags", reason: "이유를 칩으로 고르게 할 때" },
  ],
  accessibility: [
    "질문은 제목으로 두고 영역 이름으로 연결합니다.",
    "이유 칩은 aria-pressed 토글입니다.",
    "감사 문구는 role=status로 알립니다.",
    "아이콘 옆에 네, 아니요 글자를 둡니다.",
  ],
};
