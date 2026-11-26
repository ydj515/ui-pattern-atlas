import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "여러 사람이 함께 고치는 문서",
    "실수로 지운 내용을 되찾아야 할 때",
    "누가 언제 바꿨는지 알아야 할 때",
  ],
  whenNotToUse: [
    "직전 동작 하나만 되돌리면 될 때(되돌리기 사용)",
    "되돌리면 이후 버전을 지워 버릴 때",
    "버전마다 무엇이 바뀌었는지 적지 않을 때",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "직전 동작만 되돌릴 때" },
    { name: "타임라인", slug: "timeline", reason: "시간 순서의 기록을 보여 줄 때" },
  ],
  accessibility: [
    "버전 목록은 fieldset과 legend로 묶은 라디오 버튼입니다.",
    "지금 버전은 배지 글자로 표시합니다.",
    '되돌린 결과는 role="status"로 읽어 줍니다.',
  ],
};
