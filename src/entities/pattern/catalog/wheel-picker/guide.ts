import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "알람, 타이머처럼 모바일에서 시간을 맞출 때",
    "열 두세 개를 함께 고를 때",
    "값이 순서대로 이어질 때",
  ],
  whenNotToUse: [
    "데스크톱 폼(셀렉트나 시간 선택이 더 빠릅니다)",
    "보기가 아주 많을 때(굴리기 오래 걸림)",
    "값에 순서가 없을 때",
  ],
  alternatives: [
    { name: "시간 선택", slug: "time-picker", reason: "데스크톱이나 폼 안에서" },
    { name: "셀렉트", slug: "select", reason: "열이 하나뿐일 때" },
  ],
  accessibility: [
    "각 열은 이름이 있는 listbox이고 ↑/↓로 값을 바꿀 수 있습니다.",
    "가운데 값은 aria-selected와 aria-activedescendant로 알립니다.",
    "CSS scroll snap으로 손을 떼면 칸에 맞춰 멈춥니다.",
    '고른 결과를 문장으로 보여 줍니다("오전 7:30에 알람이 울려요").',
  ],
};
