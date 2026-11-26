import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "지도, 사진, 도면처럼 세부를 봐야 하는 이미지",
    "작은 화면에서 전체와 부분을 오가야 할 때",
    "트랙패드나 Ctrl+휠 확대도 함께 지원할 때",
  ],
  whenNotToUse: [
    "페이지 전체 확대(브라우저 확대를 막지 않기)",
    "글 본문(글자 크기 설정 사용)",
    "확대해도 더 볼 것이 없는 작은 이미지",
  ],
  alternatives: [
    { name: "라이트박스", slug: "lightbox", reason: "사진을 크게 띄워 볼 때" },
    { name: "이미지 갤러리", slug: "image-gallery", reason: "여러 장을 넘겨 볼 때" },
  ],
  accessibility: [
    "확대, 축소, 원래 크기 버튼이 있어 두 손가락 없이도 쓸 수 있습니다(WCAG 2.5.1).",
    "배율은 aria-live로 알리고 그림 이름에도 넣습니다.",
    "user-scalable=no 같은 페이지 확대 차단은 하지 않습니다.",
    "touch-action: none은 그림 영역에만 둡니다.",
  ],
};
