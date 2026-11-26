import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["매거진, 뉴스, 블로그 첫 화면", "대표 콘텐츠가 분명할 때", "이미지가 있는 콘텐츠"],
  whenNotToUse: [
    "모든 글이 같은 중요도일 때(카드 그리드 사용)",
    "시간순 목록이 중요한 경우(리스트 사용)",
    "이미지가 없는 글",
  ],
  alternatives: [
    { name: "카드 그리드", slug: "card-grid", reason: "같은 중요도의 글" },
    { name: "벤토 그리드", slug: "bento-grid", reason: "기능 소개" },
  ],
  accessibility: [
    "DOM 순서가 대표 기사 → 보조 기사라 보이는 순서와 같습니다.",
    "제목이 링크이고 각 기사는 article로 묶습니다.",
    "이미지는 장식이라 aria-hidden이고 제목으로 내용을 전합니다.",
    "좁은 화면에서는 한 열로 쌓아 확대해도 읽기 쉽습니다.",
  ],
};
