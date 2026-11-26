import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "문의, 신청, 주문처럼 보낸 뒤 처리 과정이 이어질 때",
    "접수 번호나 예상 시간처럼 나중에 필요한 정보가 있을 때",
    "보낸 뒤 이어서 할 일을 안내해야 할 때",
  ],
  whenNotToUse: [
    "설정 저장처럼 결과만 짧게 알리면 될 때(토스트 사용)",
    "같은 화면에서 계속 작업해야 할 때",
    "실패했을 때(오류 요약이나 배너 알림 사용)",
  ],
  alternatives: [
    { name: "토스트", slug: "toast", reason: "화면을 바꾸지 않고 결과만 짧게 알릴 때" },
    { name: "오류 요약", slug: "error-summary", reason: "보내기에 실패해 고칠 항목이 있을 때" },
  ],
  accessibility: [
    "폼이 사라지면 결과 제목으로 포커스를 옮겨 키보드와 스크린 리더 사용자가 위치를 잃지 않게 합니다.",
    '제목은 지난 일을 말하는 문장으로 씁니다("문의를 보냈어요").',
    "체크 아이콘은 장식이라 aria-hidden으로 둡니다.",
    "다음 행동(새 문의 쓰기)을 누르면 다시 입력 칸으로 포커스를 돌려줍니다.",
  ],
};
