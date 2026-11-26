import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "수업, 상담처럼 촘촘한 만족도",
    "대략적인 위치를 빠르게 고를 때",
    "양 끝의 뜻이 분명할 때",
  ],
  whenNotToUse: [
    "정확한 숫자를 골라야 할 때(NPS 점수처럼 버튼 사용)",
    "다섯 단계로 충분할 때(별점 사용)",
    "작은 터치 화면에서 정밀하게",
  ],
  alternatives: [
    { name: "NPS 점수", slug: "nps-scale", reason: "숫자 버튼으로 고를 때" },
    { name: "범위 슬라이더", slug: "range-slider", reason: "최소와 최대 두 값을 고를 때" },
  ],
  accessibility: [
    "기본 range 입력이라 방향키로 1점씩 움직입니다.",
    "aria-valuetext로 8점처럼 읽힙니다.",
    "점수 말풍선은 aria-hidden이고 같은 값을 읽어 줍니다.",
    "양 끝 뜻을 글자로 둡니다.",
  ],
};
