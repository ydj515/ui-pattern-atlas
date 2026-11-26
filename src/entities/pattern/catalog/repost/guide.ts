import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "팔로워가 있는 피드형 서비스",
    "다른 사람의 글을 내 구독자에게 보여 줄 때",
    "의견을 덧붙여 다시 올릴 때",
  ],
  whenNotToUse: [
    "특정 사람에게만 보낼 때(보내기와 전달 사용)",
    "피드가 없는 서비스",
    "한 번에 바로 올려 실수하기 쉬운 설계",
  ],
  alternatives: [
    { name: "보내기와 전달", slug: "send-forward", reason: "특정 사람에게 보낼 때" },
    { name: "공유 시트", slug: "share-sheet", reason: "앱 밖으로 보낼 때" },
  ],
  accessibility: [
    "버튼은 aria-haspopup=menu와 aria-expanded를 가집니다.",
    "메뉴가 열리면 첫 항목에 포커스가 가고 Esc로 닫힙니다.",
    "버튼 이름에 리포스트와 개수가 들어 있습니다.",
    "결과는 role=status로 알립니다.",
  ],
};
