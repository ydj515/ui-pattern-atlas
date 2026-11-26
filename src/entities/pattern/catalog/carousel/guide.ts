import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "놀이공원의 회전목마(carousel)처럼 항목이 돌아가며 차례로 앞에 나온다는 데서 온 이름이에요.",
  whenToUse: [
    "행사 배너처럼 같은 자리에 번갈아 보여 줄 내용",
    "사진 몇 장을 차례로 보여 줄 때",
    "공간이 좁아 한 번에 하나만 보여야 할 때",
  ],
  whenNotToUse: [
    "꼭 봐야 하는 정보(뒤 슬라이드는 잘 안 봅니다)",
    "여러 개를 비교할 때(가로 스크롤이나 그리드 사용)",
    "슬라이드가 아주 많을 때",
  ],
  alternatives: [
    { name: "가로 스크롤", slug: "horizontal-scroll", reason: "여러 장을 함께 보이게 할 때" },
    { name: "이미지 갤러리", slug: "image-gallery", reason: "사진을 골라 크게 볼 때" },
  ],
  accessibility: [
    'WAI-ARIA carousel로 aria-roledescription과 "1 / 3, 겨울 세일" 같은 슬라이드 이름을 씁니다.',
    "자동 넘김은 멈춤 버튼이 있고 hover와 포커스 중에는 멈춥니다(WCAG 2.2.2).",
    "동작 줄이기 설정에서는 자동 넘김을 하지 않습니다.",
    "지금 슬라이드만 접근성 트리에 남기고, 점 버튼은 aria-current로 위치를 알립니다.",
  ],
};
