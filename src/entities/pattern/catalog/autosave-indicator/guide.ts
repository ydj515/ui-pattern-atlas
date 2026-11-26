import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "입력하는 대로 저장하는 편집기",
    "저장 버튼을 없애고 싶을 때",
    "연결이 자주 끊길 수 있을 때",
  ],
  whenNotToUse: [
    "제출해야 반영되는 폼",
    "저장이 오래 걸려 진행률이 필요할 때(진행 바 사용)",
    "저장 실패를 이 한 줄로만 알릴 때",
  ],
  alternatives: [
    {
      name: "저장하지 않은 변경 경고",
      slug: "unsaved-changes",
      reason: "자동 저장이 없어 나가기 전에 물어야 할 때",
    },
    { name: "토스트", slug: "toast", reason: "저장 결과를 잠깐 알릴 때" },
  ],
  accessibility: [
    'role="status"라 상태가 바뀔 때 조용히 읽어 줍니다.',
    "점의 색과 함께 글자로 상태를 적습니다.",
    "움직임 줄이기 설정에서는 깜빡임을 멈춥니다.",
  ],
};
