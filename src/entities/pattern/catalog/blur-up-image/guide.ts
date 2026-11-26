import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사진이 화면의 중심인 갤러리, 상품, 기사 이미지",
    "느린 네트워크에서도 레이아웃과 분위기를 먼저 잡아야 할 때",
    "서버가 작은 미리보기를 함께 내려줄 수 있을 때",
  ],
  whenNotToUse: [
    "아이콘이나 로고처럼 작은 이미지",
    "미리보기를 만들 수 없는 사용자 업로드 직후",
    "정확한 내용이 중요한 이미지(흐린 상태에서 잘못 읽을 수 있음)",
  ],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "이미지 외 내용까지 자리만 먼저 잡을 때" },
  ],
  accessibility: [
    '흐린 미리보기는 장식이라 alt=""와 aria-hidden으로 두고, 원본 이미지에만 대체 텍스트를 씁니다.',
    "처음부터 최종 비율로 자리를 잡아 이미지가 도착해도 레이아웃이 밀리지 않습니다(CLS).",
    "선명해지는 전환은 동작 줄이기 설정에서 바로 바뀝니다.",
    "캐시된 이미지는 onLoad보다 먼저 끝날 수 있어 complete 값도 확인합니다.",
  ],
};
