import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "재생 목록처럼 긴 목록을 빠르게 훑을 때",
    "마우스로 끌어 넘기는 키오스크나 미리 보기 화면",
    "브라우저 기본 스크롤과 같은 감각을 맞춰야 할 때",
  ],
  whenNotToUse: [
    "브라우저 기본 스크롤로 충분할 때(직접 만들지 않기)",
    "정확한 위치에 멈춰야 하는 목록(scroll snap 사용)",
    "동작 줄이기를 켠 사용자",
  ],
  alternatives: [
    { name: "무한 스크롤", slug: "infinite-scroll", reason: "끝에 닿으면 더 불러올 때" },
    { name: "스크롤 바운스백", slug: "scroll-bounce", reason: "끝에 닿았음을 알릴 때" },
  ],
  accessibility: [
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 스크롤할 수 있습니다.",
    "동작 줄이기 설정이면 손을 뗀 뒤 미끄러지지 않습니다.",
    "터치와 휠은 브라우저 기본 동작을 그대로 씁니다.",
    "overscroll-behavior: contain으로 끝에서 페이지가 함께 밀리지 않습니다.",
  ],
};
