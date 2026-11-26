import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 숙소처럼 사진 여러 장을 비교해 봐야 할 때",
    "사진 수가 몇 장에서 열 장 정도일 때",
    "어떤 사진을 보는지 위치를 알려 줄 때",
  ],
  whenNotToUse: [
    "사진을 화면 가득 크게 봐야 할 때(라이트박스 사용)",
    "사진이 아주 많을 때(그리드와 라이트박스 사용)",
    "사진 한 장뿐일 때",
  ],
  alternatives: [
    { name: "라이트박스", slug: "lightbox", reason: "크게 띄워 넘겨 볼 때" },
    { name: "캐러셀", slug: "carousel", reason: "한 장씩 넘길 때" },
  ],
  accessibility: [
    '썸네일은 "2 / 4, 머그컵 옆면과 손잡이"처럼 이름이 있는 버튼입니다.',
    "고른 썸네일은 aria-current와 테두리로 표시합니다.",
    "큰 사진은 대체 텍스트를 가진 이미지 역할을 합니다.",
    "썸네일 버튼은 aria-controls로 큰 사진과 연결됩니다.",
  ],
};
