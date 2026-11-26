import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가입, 결제 폼의 동의 항목을 검토할 때",
    "필수와 선택 동의를 구분하는 기준을 정할 때",
    "기본값이 미치는 영향을 설명할 때",
  ],
  whenNotToUse: [
    "선택 동의를 미리 켜 두고 싶을 때",
    "필수와 선택을 같은 모양으로 섞을 때",
    "동의 내용을 볼 수 없게 할 때",
  ],
  alternatives: [
    { name: "약관 동의", slug: "terms-agreement", reason: "필수와 선택을 구분한 동의 화면" },
    { name: "기본값 효과", slug: "default-effect", reason: "기본값이 선택에 주는 영향" },
  ],
  accessibility: [
    "체크박스마다 [필수], [선택]을 글자로 표시합니다.",
    "선택 동의는 체크되지 않은 상태로 시작합니다.",
    "label로 문구 전체를 눌러 고를 수 있게 합니다.",
    "동의 내용을 열어 볼 수 있게 합니다.",
  ],
};
