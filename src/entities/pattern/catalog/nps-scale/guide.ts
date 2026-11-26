import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "서비스 전반의 추천 의향을 주기적으로 볼 때",
    "점수 뒤에 이유를 한 번 묻고 싶을 때",
    "같은 질문으로 추이를 비교할 때",
  ],
  whenNotToUse: [
    "한 기능의 만족도(도움이 됐나요나 별점 사용)",
    "가입 직후처럼 써 보기 전",
    "자주 반복해서 묻는 팝업",
  ],
  alternatives: [
    { name: "평점 슬라이더", slug: "rating-slider", reason: "범위를 끌어서 고를 때" },
    { name: "도움이 됐나요", slug: "thumbs-feedback", reason: "두 가지 답이면 될 때" },
  ],
  accessibility: [
    "fieldset과 라디오 버튼으로 만들어 방향키로 점수를 바꿉니다.",
    "양 끝의 뜻(전혀 아니에요, 매우 그래요)을 글자로 둡니다.",
    "선택한 점수는 색과 채움 둘 다로 보여 줍니다.",
    "후속 질문은 label로 입력칸과 연결합니다.",
  ],
};
