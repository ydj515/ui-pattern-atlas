import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "기사 중간의 큰 사진, 지도, 인용 배경",
    "글 폭은 좁게 유지하면서 시각적 쉼표를 줄 때",
    "랜딩 페이지의 섹션 배경",
  ],
  whenNotToUse: [
    "사진이 작아 늘리면 흐려질 때",
    "글 폭이 이미 화면 전체일 때",
    "표나 코드처럼 넓어지면 읽기 어려운 내용",
  ],
  alternatives: [{ name: "히어로 섹션", slug: "hero-section", reason: "첫 화면의 큰 비주얼" }],
  accessibility: [
    "글은 읽기 좋은 폭(약 60자)을 지켜 줄이 너무 길어지지 않습니다.",
    "100vw를 쓰지 않아 가로 스크롤바가 생기지 않습니다.",
    "장식 이미지는 aria-hidden, 정보가 있는 이미지는 대체 텍스트를 둡니다.",
    "DOM 순서는 그대로라 읽는 흐름이 끊기지 않습니다.",
  ],
};
