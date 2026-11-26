import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["일시적인 실패로 주요 콘텐츠를 표시할 수 없을 때"],
  whenNotToUse: ["요청은 성공했지만 실제 데이터가 없을 때", "특정 입력 필드만 수정하면 될 때"],
  alternatives: [
    { name: "빈 화면", slug: "empty-state", reason: "요청이 성공했고 보여 줄 데이터가 없는 경우" },
    { name: "배너 알림", slug: "alert-banner", reason: "나머지 콘텐츠를 탐색할 수 있는 부분 실패" },
  ],
  accessibility: [
    "오류 제목과 안내를 텍스트로 표시하고 다시 시도 중임을 라이브 영역으로 전달합니다.",
    "재시도 중에는 버튼의 포커스를 유지하고 중복 요청을 막습니다.",
  ],
};
