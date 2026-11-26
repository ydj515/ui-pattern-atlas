import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "처음 쓰는 업무 도구의 핵심 흐름",
    "기능 서너 개가 함께 쓰일 때",
    "사용자가 직접 시작하는 둘러보기",
  ],
  whenNotToUse: [
    "버튼 하나만 알리면 될 때(코치마크 사용)",
    "다섯 단계가 넘는 긴 설명",
    "처음 들어오자마자 강제로 시작할 때",
  ],
  alternatives: [
    { name: "코치마크", slug: "coach-mark", reason: "버튼 하나만 짚을 때" },
    { name: "설정 체크리스트", slug: "setup-checklist", reason: "직접 해 보며 익히게 할 때" },
  ],
  accessibility: [
    "각 단계는 role=dialog이고 제목으로 이름을 붙입니다.",
    "단계가 바뀌면 다음 버튼으로 포커스가 옮겨 갑니다.",
    "Esc나 건너뛰기로 바로 끝낼 수 있습니다.",
    "1 / 3처럼 진행 단계를 글자로 보여 줍니다.",
  ],
};
