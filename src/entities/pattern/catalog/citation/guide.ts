import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["검색한 자료로 답하는 AI", "사실 확인이 중요한 주제", "여러 출처를 섞어 답할 때"],
  whenNotToUse: [
    "출처가 없는 창작, 요약",
    "번호가 너무 많아 문장을 끊을 때",
    "링크가 열리지 않는 내부 자료만 있을 때",
  ],
  alternatives: [
    { name: "툴팁", slug: "tooltip", reason: "짧은 설명을 띄울 때" },
    { name: "팝오버", slug: "popover", reason: "누르면 여는 작은 카드" },
  ],
  accessibility: [
    "번호 버튼 이름은 출처 1: 제목처럼 읽힙니다.",
    "카드는 aria-expanded와 aria-controls로 연결되고 Esc로 닫힙니다.",
    "출처 목록은 ol로 번호와 순서를 전달합니다.",
    "외부 링크는 새 탭에서 열립니다.",
  ],
};
