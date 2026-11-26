import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메일, 메신저처럼 서랍 메뉴가 있는 모바일 앱",
    "메뉴 버튼과 함께 빠른 길로 제공할 때",
    "화면 가운데에 가로 제스처가 없을 때",
  ],
  whenNotToUse: [
    "운영체제의 뒤로 가기 제스처와 겹치는 곳(iOS 왼쪽 가장자리)",
    "메뉴 버튼 없이 제스처만 있을 때",
    "데스크톱",
  ],
  alternatives: [
    { name: "드로어", slug: "drawer", reason: "메뉴 버튼으로 여는 서랍" },
    { name: "스와이프 이동", slug: "swipe-navigation", reason: "같은 종류의 화면을 넘길 때" },
  ],
  accessibility: [
    "메뉴 버튼은 aria-expanded로 열림 상태를 알립니다.",
    "열린 메뉴는 Esc나 바깥을 눌러 닫을 수 있습니다.",
    "닫혀 있을 때 메뉴는 hidden이라 Tab이 들어가지 않습니다.",
    "지금 편지함은 aria-current로 표시합니다.",
  ],
};
