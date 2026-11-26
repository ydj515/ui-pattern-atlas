import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메신저, 협업 도구의 팀원 목록",
    "바로 답을 받을 수 있는지 알려 줄 때",
    "내 상태를 다른 사람에게 알릴 때",
  ],
  whenNotToUse: [
    "사생활이 중요한 서비스(상태 공개를 선택하게 하기)",
    "서비스나 장비의 상태(상태 점 사용)",
    "실시간으로 갱신할 수 없을 때",
  ],
  alternatives: [
    { name: "상태 점", slug: "status-dot", reason: "사람이 아닌 대상의 상태" },
    { name: "아바타", slug: "avatar", reason: "상태 없이 사람만 보여 줄 때" },
  ],
  accessibility: [
    '상태가 아바타 이름에 함께 들어가 "김하늘, 자리 비움"처럼 읽힙니다.',
    "자리 비움은 반원, 오프라인은 빈 원으로 모양을 달리해 색에만 의존하지 않습니다.",
    "목록에는 상태 글도 함께 보여 줍니다.",
    "내 상태는 기본 select로 바꿉니다.",
  ],
};
