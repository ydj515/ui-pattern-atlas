import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메신저, 협업 도구 안에서 항목을 옮겨 보낼 때",
    "여러 명에게 한 번에 보낼 때",
    "받는 사람이 앱 안에 있을 때",
  ],
  whenNotToUse: [
    "앱 밖으로 보낼 때(공유 시트 사용)",
    "내 피드에 다시 올릴 때(리포스트 사용)",
    "받는 사람이 수백 명일 때",
  ],
  alternatives: [
    { name: "공유 시트", slug: "share-sheet", reason: "기기 앱으로 보낼 때" },
    { name: "리포스트", slug: "repost", reason: "내 피드에 다시 올릴 때" },
  ],
  accessibility: [
    "받는 사람 목록은 fieldset과 체크박스로 만듭니다.",
    "검색과 메시지 칸에 이름을 붙입니다.",
    "보낼 사람이 없으면 버튼을 비활성으로 둡니다.",
    "결과는 role=status로 알립니다.",
  ],
};
