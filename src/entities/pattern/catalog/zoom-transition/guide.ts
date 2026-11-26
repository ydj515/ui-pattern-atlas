import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "아이콘, 카드에서 전체 화면이 열릴 때",
    "닫은 뒤 원래 자리로 돌아가는 것을 보여 줄 때",
    "같은 종류의 화면을 여러 입구에서 열 때",
  ],
  whenNotToUse: [
    "열린 화면과 누른 요소의 관계가 없을 때",
    "큰 확대가 멀미를 줄 수 있는 넓은 데스크톱 화면",
    "누른 요소가 그대로 커져야 할 때(공유 요소 전환 사용)",
  ],
  alternatives: [
    {
      name: "공유 요소 전환",
      slug: "shared-element-transition",
      reason: "같은 대상이 두 화면에 있을 때",
    },
    { name: "페이지 전환", slug: "page-transition", reason: "목록에서 상세로 깊이 들어갈 때" },
  ],
  accessibility: [
    "열리면 홈으로 버튼으로, 닫히면 눌렀던 아이콘으로 포커스를 돌려줍니다.",
    "열린 동안 뒤의 아이콘은 inert라 Tab이 들어가지 않습니다.",
    "동작 줄이기에서는 확대 없이 바로 열고 닫습니다.",
    "열린 화면은 aria-label로 이름을 붙입니다.",
  ],
};
