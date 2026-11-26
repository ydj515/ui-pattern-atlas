import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사진 보정, 리모델링, 필터 적용처럼 전후 차이가 핵심일 때",
    "두 이미지의 구도가 같을 때",
    "차이를 직접 확인하게 하고 싶을 때",
  ],
  whenNotToUse: [
    "두 이미지 구도가 다를 때(나란히 놓기)",
    "세 개 이상을 비교할 때",
    "차이가 아주 작아 보이지 않을 때",
  ],
  alternatives: [{ name: "이미지 갤러리", slug: "image-gallery", reason: "여러 장을 바꿔 볼 때" }],
  accessibility: [
    "손잡이는 그림 위에 겹친 기본 range 입력이라 끌기, 클릭, 화살표 키가 모두 됩니다.",
    'aria-valuetext로 "보정 전 50%, 보정 후 50%"처럼 양쪽 비율을 읽어 줍니다.',
    "두 이미지는 장식이라 aria-hidden이고, 비교 대상은 라벨로 알립니다.",
    "포커스하면 테두리로 표시합니다.",
  ],
};
