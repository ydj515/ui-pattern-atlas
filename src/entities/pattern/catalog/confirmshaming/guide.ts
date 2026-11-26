import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "확인(confirm)과 망신 주기(shaming)를 합친 말이에요. 거절 버튼 문구로 사용자를 부끄럽게 만드는 사례를 모은 블로그에서 이름이 퍼진 것으로 알려져 있어요.",
  whenToUse: [
    "팝업과 배너의 거절 문구를 검토할 때",
    "다크 패턴을 피하는 기준을 팀에 설명할 때",
    "같은 화면의 바른 문구와 비교할 때",
  ],
  whenNotToUse: [
    "실제 거절 버튼에 감정적인 말을 쓰고 싶을 때(그대로 쓰지 않기)",
    "사용자의 선택을 존중하지 않는 지표 목표를 정당화할 때",
    "거절 선택지를 숨기거나 작게 만들 때",
  ],
  alternatives: [
    { name: "미리 체크된 동의", slug: "pre-checked-opt-in", reason: "기본값으로 동의를 유도할 때" },
    { name: "반복 요청", slug: "nagging", reason: "거절해도 계속 물을 때" },
  ],
  accessibility: [
    "거절 선택지도 실제 button으로 만들어 키보드로 닿게 합니다.",
    "두 선택지의 글자 크기와 대비를 비슷하게 둡니다.",
    "밑줄 글자만으로 거절을 숨기지 않습니다.",
    "결과는 화면 읽기에도 같은 말로 들립니다.",
  ],
};
