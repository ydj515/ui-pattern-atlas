import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "여러 앱을 함께 쓰는 업무 도구, 계정 서비스",
    "앱 사이를 오가는 전용 메뉴",
    "상단 오른쪽처럼 정해진 자리",
  ],
  whenNotToUse: [
    "한 앱 안의 메뉴(햄버거나 탭 사용)",
    "격자 보기 전환 버튼(뜻이 겹쳐 헷갈림)",
    "앱이 두세 개뿐일 때",
  ],
  alternatives: [
    { name: "와플", slug: "waffle", reason: "둥근 점 아홉 개로 된 앱 목록" },
    { name: "햄버거", slug: "hamburger", reason: "한 앱 안의 메뉴" },
  ],
  accessibility: [
    "아이콘 버튼에 앱 목록이라는 이름을 붙입니다.",
    "열린 목록은 role=dialog이고 Esc로 닫힙니다.",
    "앱마다 글자 이름을 함께 씁니다.",
    "열리면 첫 앱에 포커스가 갑니다.",
  ],
};
