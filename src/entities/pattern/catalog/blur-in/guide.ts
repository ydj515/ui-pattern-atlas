import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "오늘의 문장, 인용처럼 짧고 분위기가 중요한 글",
    "사진 위 큰 제목",
    "화면을 처음 열 때 한 번",
  ],
  whenNotToUse: [
    "넓은 영역이나 긴 본문(성능 부담)",
    "저사양 기기가 많은 서비스",
    "빠르게 읽어야 하는 안내",
  ],
  alternatives: [
    { name: "페이드 업", slug: "fade-up", reason: "더 가볍게 나타나게 할 때" },
    { name: "마스크 리빌", slug: "mask-reveal", reason: "줄이 가림에서 올라올 때" },
  ],
  accessibility: [
    "글은 처음부터 문서에 있어 화면 읽기는 기다리지 않습니다.",
    "동작 줄이기에서는 흐림 없이 바로 보여 줍니다.",
    "흐림은 700ms 안에 끝나 읽기를 오래 막지 않습니다.",
    "배경과 글자 대비는 최종 상태 기준 4.5:1 이상입니다.",
  ],
};
