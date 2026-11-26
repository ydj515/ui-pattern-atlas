import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "구매나 이용을 마친 뒤의 후기",
    "다른 사람에게 도움이 될 경험을 모을 때",
    "별점만으로는 이유를 알 수 없을 때",
  ],
  whenNotToUse: [
    "빠른 만족도 조사(이모지 평가 사용)",
    "쓰기 전에 버튼을 막아 두는 설계",
    "후기를 써야만 다음으로 넘어가게 할 때",
  ],
  alternatives: [
    { name: "평가 태그", slug: "rating-tags", reason: "글 대신 칩으로 이유를 받을 때" },
    { name: "별점", slug: "star-rating", reason: "점수만 받을 때" },
  ],
  accessibility: [
    "별점은 라디오 버튼 묶음이고 빠뜨리면 오류를 fieldset에 연결합니다.",
    "글 칸은 규칙과 글자 수를 aria-describedby로 묶습니다.",
    "제출 때 첫 문제로 포커스를 옮깁니다.",
    "버튼은 늘 누를 수 있어 무엇이 빠졌는지 알려 줍니다.",
  ],
};
