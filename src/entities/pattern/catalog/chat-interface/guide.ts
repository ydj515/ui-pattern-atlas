import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "AI 도우미, 상담처럼 질문과 답이 이어지는 화면",
    "앞의 대화를 다시 읽으며 이어 물을 때",
    "답변이 짧은 문단 위주일 때",
  ],
  whenNotToUse: [
    "한 번 묻고 끝나는 검색(검색 결과 화면 사용)",
    "긴 문서를 만드는 작업(편집기 화면 사용)",
    "여러 사람이 동시에 쓰는 메신저의 모든 기능을 대신할 때",
  ],
  alternatives: [
    { name: "프롬프트 입력", slug: "prompt-input", reason: "대화 아래 입력창" },
    { name: "댓글 스레드", slug: "comment-thread", reason: "답글이 달리는 비동기 대화" },
  ],
  accessibility: [
    "대화 목록은 role=log와 aria-live로 새 메시지를 알립니다.",
    "말풍선마다 나, 답변 중 누구의 말인지 화면 읽기용 글을 붙입니다.",
    "위로 올려 읽는 동안에는 스크롤을 빼앗지 않습니다.",
    "대화 영역은 tabIndex로 키보드 스크롤이 됩니다.",
  ],
};
