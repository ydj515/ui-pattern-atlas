import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["두세 줄짜리 큰 제목", "소개 페이지의 첫 화면", "문장의 리듬이 중요한 카피"],
  whenNotToUse: [
    "긴 문단(마지막 단어가 너무 늦게 나타남)",
    "자주 보는 화면의 제목",
    "글자 단위로 쪼갠 한글(받침과 모양이 어색해짐)",
  ],
  alternatives: [
    { name: "마스크 리빌", slug: "mask-reveal", reason: "줄이 가림 아래에서 올라올 때" },
    { name: "순차 등장", slug: "stagger", reason: "카드나 목록 항목을 차례로 보여 줄 때" },
  ],
  accessibility: [
    "화면 읽기에는 sr-only로 문장 전체를 한 번에 줍니다.",
    "쪼갠 줄과 단어는 aria-hidden이라 끊어 읽히지 않습니다.",
    "동작 줄이기에서는 모두 한 번에 보여 줍니다.",
    "단위 선택은 라디오 버튼이라 키보드로 바꿀 수 있습니다.",
  ],
};
