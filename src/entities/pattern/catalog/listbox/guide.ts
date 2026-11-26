import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "보기마다 설명이 필요해 드롭다운에 넣기 어려울 때",
    "설정 화면처럼 목록이 늘 보여도 되는 곳",
    "키보드로 빠르게 훑으며 고를 때",
  ],
  whenNotToUse: [
    "보기가 2~5개이고 폼 안에 있을 때(라디오 그룹이 더 익숙합니다)",
    "공간이 좁을 때(셀렉트 사용)",
    "목록이 아주 길어 찾아야 할 때(콤보박스 사용)",
  ],
  alternatives: [
    { name: "라디오 그룹", slug: "radio-group", reason: "폼 안의 짧은 선택지" },
    { name: "셀렉트", slug: "select", reason: "공간이 좁을 때" },
  ],
  accessibility: [
    "WAI-ARIA listbox로 목록 전체가 Tab 한 번이고, aria-activedescendant로 현재 보기를 알립니다.",
    "↑/↓, Home/End로 옮기면 선택이 함께 따라옵니다.",
    "첫 글자를 누르면 그 글자로 시작하는 보기로 이동합니다.",
    "선택한 보기는 배경색과 체크 표시로 함께 보여 줍니다.",
  ],
};
