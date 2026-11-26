import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "아이콘 자체는 1981년 제록스 스타(Xerox Star) 컴퓨터를 위해 노먼 콕스(Norm Cox)가 그린 것으로 알려져 있어요. 햄버거라는 별명은 2010년대 모바일 앱에서 이 아이콘이 메뉴 버튼으로 널리 퍼지면서 붙었어요.",
  whenToUse: [
    "화면이 좁아 주요 메뉴를 숨겨야 할 때",
    "메뉴 항목이 다섯 개를 넘을 때",
    "사용자가 메뉴 위치를 알고 있는 앱",
  ],
  whenNotToUse: [
    "자주 오가는 메뉴가 네다섯 개뿐일 때(하단 탭 바 사용)",
    "데스크톱에서 공간이 넉넉할 때",
    "아이콘만으로 뜻이 전해지지 않는 사용자층(메뉴 글자 함께 쓰기)",
  ],
  alternatives: [
    { name: "베지 버거", slug: "veggie-burger", reason: "가로줄 두 개로 된 메뉴 아이콘" },
    { name: "케밥", slug: "kebab", reason: "항목 하나의 추가 동작" },
  ],
  accessibility: [
    "아이콘 버튼에 메뉴 열기라는 이름을 붙입니다.",
    "aria-expanded로 메뉴가 열렸는지 알립니다.",
    "열린 메뉴는 Esc나 바깥을 눌러 닫습니다.",
    "현재 페이지는 aria-current로 표시합니다.",
  ],
};
