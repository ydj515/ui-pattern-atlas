import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "초대 링크, 쿠폰 코드, 설치 명령처럼 그대로 옮겨 쓸 글",
    "선택하기 어려운 긴 글",
    "휴대폰에서 길게 눌러 복사하기 번거로울 때",
  ],
  whenNotToUse: [
    "사용자가 고쳐 쓸 글(입력 필드로 보여 주기)",
    "공유가 목적일 때(공유 시트 사용)",
    "민감한 값(복사 후 남는 위험 고려)",
  ],
  alternatives: [
    { name: "아이콘 버튼", slug: "icon-button", reason: "자리가 좁을 때 복사 아이콘만" },
  ],
  accessibility: [
    '결과를 role="status"로 알리고, 버튼 글자도 "복사됨"으로 바꿉니다.',
    '복사가 막히면 "복사하지 못했어요"를 알려 직접 선택하게 합니다.',
    "읽기 전용 입력은 포커스하면 전체 선택돼 손으로도 복사할 수 있습니다.",
    "잠시 뒤 원래 상태로 돌아와 다시 누를 수 있습니다.",
  ],
};
