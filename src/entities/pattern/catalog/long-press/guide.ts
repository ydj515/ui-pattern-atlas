import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메시지, 사진처럼 탭은 열기이고 부가 동작이 따로 있을 때",
    "자주 쓰지 않는 동작을 화면에서 숨길 때",
    "데스크톱의 오른쪽 클릭 메뉴에 해당하는 것이 필요할 때",
  ],
  whenNotToUse: [
    "주요 동작(눈에 보이는 버튼으로 두기)",
    "길게 누를 수 있다는 걸 알릴 방법이 없을 때",
    "누르고 끄는 다른 제스처와 같은 곳에 둘 때",
  ],
  alternatives: [
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "숨은 동작을 버튼으로 열 때" },
    { name: "컨텍스트 메뉴", slug: "context-menu", reason: "오른쪽 클릭과 함께 쓸 때" },
  ],
  accessibility: [
    "오른쪽 클릭, Shift+F10, 메뉴 키로도 같은 메뉴가 열립니다.",
    "버튼 이름에 길게 눌러 더 보기를 넣어 숨은 동작이 있음을 알립니다.",
    "메뉴가 열리면 첫 항목으로 포커스가 가고 Esc로 닫힙니다.",
    "8px 넘게 움직이면 취소되어 스크롤 중에 잘못 열리지 않습니다.",
  ],
};
