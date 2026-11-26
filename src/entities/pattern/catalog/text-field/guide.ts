import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "이름, 닉네임, 주소처럼 짧은 글을 입력받을 때",
    "입력 형식을 미리 알려 줘야 할 때",
    "제출할 때 검증하고 필드 옆에 오류를 보여 줄 때",
  ],
  whenNotToUse: [
    "여러 줄 글(텍스트 영역 사용)",
    "정해진 보기 중에 고를 때(선택 컨트롤 사용)",
    "형식이 고정된 번호(입력 마스크 사용)",
  ],
  alternatives: [
    { name: "텍스트 영역", slug: "textarea", reason: "여러 줄 글" },
    {
      name: "플로팅 라벨",
      slug: "floating-label",
      reason: "공간이 좁아 라벨을 필드 안에 넣어야 할 때",
    },
    { name: "인라인 오류", slug: "inline-validation", reason: "입력하는 동안 바로 검증할 때" },
  ],
  accessibility: [
    "라벨은 placeholder가 아니라 label 요소로 항상 보입니다.",
    "안내와 오류는 aria-describedby로 입력에 연결되고, 오류가 있으면 aria-invalid를 켭니다.",
    '필수 여부를 별표만이 아니라 "(필수)" 글자로 알립니다.',
    "오류가 생긴 뒤에는 입력하는 동안 다시 검사해, 고치자마자 오류가 사라집니다.",
  ],
};
