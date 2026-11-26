import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "와이파이, 주차처럼 짧은 조건 여러 개를 겹쳐 걸 때",
    "결과가 바로 바뀌는 목록 위",
    "자주 쓰는 조건 몇 개만 빠르게 보여 줄 때",
  ],
  whenNotToUse: [
    "조건이 많거나 범위를 정해야 할 때(필터 패널 사용)",
    "하나만 골라야 할 때(세그먼트 컨트롤 사용)",
    "폼 입력값(체크박스 사용)",
  ],
  alternatives: [
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "하나만 고르는 보기 전환" },
    { name: "체크박스", slug: "checkbox", reason: "폼 안에서 여러 개 고르기" },
    { name: "필터 결과 없음", slug: "no-filter-results", reason: "조건이 겹쳐 결과가 없을 때" },
  ],
  accessibility: [
    "칩은 aria-pressed를 가진 토글 버튼이라 켜짐 상태가 읽힙니다.",
    "켜진 칩은 색과 함께 체크 표시로도 구분됩니다.",
    '칩들을 role="group"과 이름으로 묶어 무엇을 거르는지 알립니다.',
    "결과 개수는 aria-live로 알려 줍니다.",
  ],
};
