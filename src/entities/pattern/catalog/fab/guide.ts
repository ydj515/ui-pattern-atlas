import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "Floating Action Button의 줄임말로, 2014년 구글이 머티리얼 디자인을 발표하며 붙인 이름이에요. 화면 위에 떠(floating) 있는 주요 동작 버튼이라는 뜻이에요.",
  whenToUse: [
    "메일 쓰기, 글쓰기처럼 화면의 대표 행동이 하나일 때",
    "긴 목록을 보다가도 바로 눌러야 할 때",
    "모바일 화면",
  ],
  whenNotToUse: [
    "행동이 여러 개일 때(툴바나 메뉴 사용)",
    "중요한 내용을 가릴 때",
    "데스크톱의 넓은 화면(머리글 버튼으로 충분)",
  ],
  alternatives: [{ name: "버튼", slug: "button", reason: "화면 안에 고정된 주요 버튼" }],
  accessibility: [
    "아이콘만 남을 때도 aria-label로 같은 이름을 유지합니다.",
    "목록의 마지막 항목이 버튼에 가리지 않도록 아래쪽 여백을 둡니다.",
    "키보드 포커스 링이 그림자 위에서도 보입니다.",
    "크기를 줄이는 전환은 스크롤 방향에만 반응해 깜빡이지 않습니다.",
  ],
};
