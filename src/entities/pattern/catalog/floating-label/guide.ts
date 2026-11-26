import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "로그인, 결제처럼 필드가 적고 화면이 좁은 폼",
    "라벨이 짧은 필드",
    "디자인상 필드 높이를 하나로 맞춰야 할 때",
  ],
  whenNotToUse: [
    "라벨이 길거나 안내 문구가 필요한 필드(텍스트 필드 사용)",
    "자동 채우기로 값이 미리 들어오는 경우가 많을 때(라벨이 작게만 보임)",
    "날짜처럼 브라우저 기본 표시가 있는 입력",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "라벨을 필드 위에 따로 두는 기본형" },
  ],
  accessibility: [
    "placeholder가 아닌 실제 label 요소라 값을 넣은 뒤에도 이름이 남습니다.",
    "CSS의 :placeholder-shown으로 상태를 구분해 JavaScript 없이 동작합니다.",
    "올라간 라벨도 글자 대비 4.5:1을 지킵니다.",
    "움직임은 동작 줄이기 설정에서 꺼집니다.",
  ],
};
