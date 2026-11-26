import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "여러 앱을 묶은 서비스의 앱 전환",
    "왼쪽 위처럼 정해진 자리",
    "앱 이름과 아이콘을 함께 보여 줄 때",
  ],
  whenNotToUse: ["한 앱 안의 메뉴", "벤토와 함께 섞어 쓸 때", "앱이 두세 개뿐일 때"],
  alternatives: [
    { name: "벤토", slug: "bento", reason: "사각형 아홉 개로 된 앱 목록" },
    { name: "햄버거", slug: "hamburger", reason: "한 앱 안의 메뉴" },
  ],
  accessibility: [
    "아이콘 버튼에 앱 전환이라는 이름을 붙입니다.",
    "목록은 role=dialog이고 Esc로 닫힙니다.",
    "앱마다 글자 이름을 함께 씁니다.",
    "열리면 첫 앱에 포커스가 갑니다.",
  ],
};
