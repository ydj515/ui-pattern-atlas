import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "편집기의 속성 패널, 목록의 필터 패널",
    "본문을 넓게 봐야 할 때가 자주 있을 때",
    "보조 영역을 자주 열고 닫을 때",
  ],
  whenNotToUse: [
    "작은 화면(드로어나 바텀시트로 띄우기)",
    "주 내비게이션(사이드바 사용)",
    "잠깐 보고 닫는 정보(팝오버 사용)",
  ],
  alternatives: [
    { name: "드로어", slug: "drawer", reason: "화면 위에 겹쳐 여는 패널" },
    { name: "사이드바", slug: "sidebar-navigation", reason: "주 메뉴" },
  ],
  accessibility: [
    '접고 펴는 버튼은 aria-expanded와 aria-controls를 가지고, 이름이 "속성 패널 접기/펼치기"로 바뀝니다.',
    "접힌 내용은 hidden이라 Tab과 스크린 리더에서 빠집니다.",
    "패널은 이름이 있는 aside 랜드마크입니다.",
    "너비 전환은 동작 줄이기 설정에서 꺼집니다.",
  ],
};
