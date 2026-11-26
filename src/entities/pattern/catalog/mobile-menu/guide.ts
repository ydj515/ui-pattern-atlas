import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "작은 화면에서 상단 메뉴가 넘칠 때",
    "자주 쓰지 않는 보조 페이지가 많을 때",
    "웹사이트의 모바일 버전",
  ],
  whenNotToUse: [
    "자주 오가는 주요 화면(하단 탭 바로 늘 보이게)",
    "메뉴가 두세 개뿐일 때(그냥 보여 주기)",
    "넓은 화면",
  ],
  alternatives: [
    { name: "하단 탭 바", slug: "bottom-tab-bar", reason: "주요 화면을 늘 보여 줄 때" },
    { name: "드로어", slug: "drawer", reason: "메뉴를 옆에서 밀어 넣을 때" },
  ],
  accessibility: [
    '버튼 이름이 "메뉴 열기"/"메뉴 닫기"로 바뀌고 aria-expanded와 aria-controls를 가집니다.',
    "열면 첫 링크로 포커스가 가고, Esc나 링크 선택으로 닫으면 버튼으로 돌아옵니다.",
    "메뉴는 이름이 있는 nav 랜드마크입니다.",
    '현재 페이지는 aria-current="page"로 알립니다.',
  ],
};
