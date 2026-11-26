import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "잘못 누르면 곤란한 결제, 출발 같은 확인",
    "주머니 속처럼 의도치 않은 터치가 잦은 상황",
    "한 번의 탭보다 분명한 의사 표시가 필요할 때",
  ],
  whenNotToUse: [
    "자주 하는 일반 동작(번거로움만 늘어남)",
    "정밀한 끌기가 어려운 사용자를 고려해야 할 때 대안 없이",
    "데스크톱 폼 제출",
  ],
  alternatives: [
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "실행 전에 한 번 더 물을 때" },
    { name: "길게 눌러 확인", slug: "hold-to-confirm", reason: "누르고 있어야 실행될 때" },
  ],
  accessibility: [
    "밑에 기본 range 입력이 있어 방향키와 End 키로도 해제할 수 있습니다.",
    "label로 무엇을 해제하는지 이름을 붙입니다.",
    "포커스가 오면 트랙에 테두리를 보여 줍니다.",
    "되돌아가는 애니메이션은 동작 줄이기 설정에서 꺼집니다.",
  ],
};
