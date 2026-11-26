import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "목록이나 글이 아주 긴 페이지",
    "모바일에서 맨 위 메뉴로 돌아가야 할 때",
    "무한 스크롤 목록",
  ],
  whenNotToUse: ["짧은 페이지", "맨 위에 돌아갈 이유가 없을 때", "다른 떠 있는 버튼과 겹칠 때"],
  alternatives: [{ name: "목차", slug: "table-of-contents", reason: "원하는 섹션으로 바로 갈 때" }],
  accessibility: [
    '버튼은 글로 "맨 위로"라고 말합니다.',
    "스크롤과 함께 맨 위 제목으로 포커스를 옮깁니다.",
    "동작 줄이기 설정에서는 부드러운 스크롤 없이 바로 이동합니다.",
    "충분히 내렸을 때만 나타나 화면을 가리지 않습니다.",
  ],
};
