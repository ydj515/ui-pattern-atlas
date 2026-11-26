import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가입자 수, 매출처럼 크기를 강조하고 싶은 핵심 숫자",
    "소개 페이지나 결과 요약의 첫 화면",
    "한 화면에 세 개 이하의 숫자",
  ],
  whenNotToUse: [
    "사용자가 바로 읽고 비교해야 하는 표의 숫자",
    "실시간으로 계속 바뀌는 값",
    "작은 숫자(차이가 느껴지지 않음)",
  ],
  alternatives: [
    {
      name: "대시보드 레이아웃",
      slug: "dashboard-layout",
      reason: "여러 숫자를 움직임 없이 한 화면에 모을 때",
    },
    { name: "페이드 업", slug: "fade-up", reason: "숫자와 설명을 함께 차분히 보여 줄 때" },
  ],
  accessibility: [
    "움직이는 숫자는 aria-hidden이고 sr-only로 최종 숫자만 읽힙니다.",
    "동작 줄이기에서는 최종 숫자를 바로 보여 줍니다.",
    "tabular-nums로 자릿수 폭을 고정해 숫자가 흔들리지 않습니다.",
    "단위(명, 건, %)를 숫자와 함께 표시합니다.",
  ],
};
