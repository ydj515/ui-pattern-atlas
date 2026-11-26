import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가벼운 느낌의 메뉴 아이콘이 필요할 때",
    "메뉴 글자를 옆에 함께 둘 수 있을 때",
    "전체 화면 메뉴를 열 때",
  ],
  whenNotToUse: [
    "아이콘만으로 메뉴를 알려야 할 때(햄버거가 더 익숙)",
    "같은 서비스에서 햄버거와 섞을 때",
    "닫기(×)로 바뀌는 애니메이션이 어색할 때",
  ],
  alternatives: [
    { name: "햄버거", slug: "hamburger", reason: "가로줄 세 개로 된 메뉴" },
    { name: "계단", slug: "stairs", reason: "엇갈린 가로줄 아이콘" },
  ],
  accessibility: [
    "아이콘 옆에 메뉴라는 글자를 두어 버튼 이름이 됩니다.",
    "aria-expanded로 열림을 알립니다.",
    "열린 메뉴는 닫기 버튼과 Esc로 닫힙니다.",
    "현재 페이지는 aria-current로 표시합니다.",
  ],
};
