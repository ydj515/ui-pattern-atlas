import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "게시물, 문서의 댓글",
    "누가 누구에게 답했는지 알아야 할 때",
    "댓글이 많아 접어 둘 필요가 있을 때",
  ],
  whenNotToUse: [
    "실시간 대화(채팅 사용)",
    "답글의 답글이 깊어지는 토론(평평한 목록과 인용 사용)",
    "댓글이 거의 없는 화면",
  ],
  alternatives: [
    { name: "멘션", slug: "mention", reason: "답글 대신 사람을 부를 때" },
    { name: "아코디언", slug: "accordion", reason: "내용을 접고 펼칠 때" },
  ],
  accessibility: [
    "댓글마다 article이고 작성자 이름으로 이름을 붙입니다.",
    "답글 보기와 답글 버튼은 aria-expanded를 가집니다.",
    "답글 입력칸이 열리면 포커스가 갑니다.",
    "들여쓰기 외에 선으로도 답글을 구분합니다.",
  ],
};
