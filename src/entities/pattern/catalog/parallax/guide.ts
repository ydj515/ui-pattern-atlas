import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "여행, 캠페인처럼 분위기가 중요한 소개 페이지의 상단",
    "큰 그림 위에 짧은 글이 올라갈 때",
    "한 페이지에 한두 곳만",
  ],
  whenNotToUse: [
    "읽기와 작업이 중심인 화면",
    "여러 층이 서로 다른 방향으로 크게 움직일 때(멀미 유발)",
    "저사양 기기가 많은 서비스",
  ],
  alternatives: [
    { name: "스크롤 등장", slug: "scroll-reveal", reason: "내용을 보일 때 한 번만 움직일 때" },
    { name: "히어로 섹션", slug: "hero-section", reason: "움직임 없이 첫 화면을 강조할 때" },
  ],
  accessibility: [
    "배경은 장식이라 aria-hidden입니다.",
    "동작 줄이기에서는 배경을 고정 속도로 함께 스크롤합니다(WCAG 2.3.3).",
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 내릴 수 있습니다.",
    "글은 배경과 겹치지 않는 흰 영역에 있어 대비가 유지됩니다.",
  ],
};
