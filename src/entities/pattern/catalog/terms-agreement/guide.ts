import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가입할 때 법적으로 동의를 받아야 할 때",
    "필수와 선택 약관이 섞여 있을 때",
    "약관 전문을 바로 열어 볼 수 있을 때",
  ],
  whenNotToUse: [
    "선택 약관을 미리 체크해 둘 때",
    "약관이 하나뿐일 때(한 줄 동의 문구)",
    "필수와 선택을 같은 모양으로 섞을 때",
  ],
  alternatives: [
    { name: "체크박스", slug: "checkbox", reason: "동의 항목 하나" },
    { name: "간편 로그인", slug: "social-sign-in", reason: "동의 전 가입 방법 선택" },
  ],
  accessibility: [
    "전체 동의는 일부만 체크하면 indeterminate로 혼합 상태를 알립니다.",
    "필수와 선택을 글자로 표시해 색에만 기대지 않습니다.",
    "보기 버튼 이름에 약관 이름을 넣습니다.",
    "필수를 다 고르기 전에는 다음 버튼이 비활성입니다.",
  ],
};
