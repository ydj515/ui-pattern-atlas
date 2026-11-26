import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "기본 행동이 분명하고 변형이 몇 개 있을 때",
    "툴바나 폼 끝처럼 자리가 좁을 때",
    "대부분 기본 행동만 쓸 때",
  ],
  whenNotToUse: [
    "행동끼리 성격이 다를 때(버튼을 따로 두기)",
    "기본 행동이 없을 때(드롭다운 메뉴 사용)",
    "선택지가 많을 때",
  ],
  alternatives: [
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "기본 행동 없이 메뉴만" },
    { name: "버튼", slug: "button", reason: "선택지 없이 한 가지 행동" },
  ],
  accessibility: [
    '두 버튼은 각각 이름이 있고, 화살표 버튼은 aria-haspopup="menu"와 aria-expanded를 가집니다.',
    '메뉴는 role="menu"이고 ↑/↓로 이동, Enter로 실행합니다.',
    "Esc나 Tab으로 닫으면 포커스가 화살표 버튼으로 돌아옵니다.",
    "바깥을 누르면 메뉴가 닫힙니다.",
  ],
};
