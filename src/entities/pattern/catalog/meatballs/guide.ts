import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "게시물, 카드 머리의 부가 동작",
    "iOS나 웹에서 더보기를 표시할 때",
    "가로 공간이 세로보다 넉넉한 자리",
  ],
  whenNotToUse: [
    "주요 동작을 숨길 때",
    "세로 점 세 개와 섞어 쓸 때",
    "글이 잘렸다는 말줄임(…)과 헷갈릴 자리",
  ],
  alternatives: [
    { name: "케밥", slug: "kebab", reason: "세로 점 세 개로 된 더보기" },
    { name: "길게 누르기", slug: "long-press", reason: "부가 동작을 제스처로 열 때" },
  ],
  accessibility: [
    "아이콘 버튼에 게시물 더 보기처럼 이름을 붙입니다.",
    "aria-haspopup=menu와 aria-expanded를 둡니다.",
    "결과는 role=status로 알립니다.",
    "점 세 개는 장식이라 aria-hidden입니다.",
  ],
};
