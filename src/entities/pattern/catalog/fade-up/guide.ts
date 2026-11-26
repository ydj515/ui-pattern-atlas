import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "새 기능 소개, 빈 화면 안내 같은 짧은 글 묶음",
    "화면이 처음 열릴 때 핵심 문구",
    "다른 효과가 과해 보일 때 기본값으로",
  ],
  whenNotToUse: [
    "이미 읽고 있는 글이 바뀔 때(그 자리에서 바로 바꾸기)",
    "긴 거리를 올라오는 큰 움직임",
    "모든 요소에 일괄 적용",
  ],
  alternatives: [
    { name: "블러 인", slug: "blur-in", reason: "초점이 맞춰지는 느낌을 줄 때" },
    { name: "스크롤 등장", slug: "scroll-reveal", reason: "스크롤해 보일 때 나타날 때" },
  ],
  accessibility: [
    "글은 처음부터 문서에 있어 화면 읽기는 기다리지 않습니다.",
    "동작 줄이기에서는 이동 없이 투명도만 바꿉니다.",
    "이동 거리는 CSS 변수로 조절하며 기본 12px입니다.",
    "각 요소의 시작은 120ms 간격으로 짧게 둡니다.",
  ],
};
