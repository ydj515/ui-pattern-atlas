import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "삭제를 묻지 않고 바로 처리하고 싶을 때",
    "실수로 지운 것을 나중에 찾을 수 있게 할 때",
    "보관 기간이 정해진 데이터",
  ],
  whenNotToUse: [
    "개인정보처럼 바로 지워야 하는 데이터",
    "임시 파일처럼 되살릴 일이 없는 항목",
    "남은 기간을 알리지 않고 조용히 비울 때",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "지운 직전에만 되돌릴 때" },
    { name: "입력해서 확인", slug: "type-to-confirm", reason: "되돌릴 수 없는 삭제를 확인할 때" },
  ],
  accessibility: [
    "복원 버튼 이름에 항목 이름을 넣어 어느 줄인지 읽어 줍니다.",
    "남은 날은 색과 함께 글자로 적습니다.",
    '복원 결과는 role="status"로 읽어 줍니다.',
  ],
};
