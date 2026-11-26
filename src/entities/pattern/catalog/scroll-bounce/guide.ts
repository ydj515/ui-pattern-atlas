import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "모바일 앱처럼 보이는 스크롤 영역의 끝을 알릴 때",
    "모달이나 패널 안의 스크롤이 페이지로 새지 않게 할 때",
    "당겨서 새로고침과 함께 쓸 때",
  ],
  whenNotToUse: [
    "브라우저가 이미 바운스를 주는 iOS 기본 스크롤",
    "긴 문서 페이지 전체",
    "동작 줄이기를 켠 사용자",
  ],
  alternatives: [
    { name: "당겨서 새로고침", slug: "pull-to-refresh", reason: "끝에서 당겨 새 내용을 불러올 때" },
    { name: "관성 스크롤", slug: "momentum-scrolling", reason: "손을 뗀 뒤에도 이어지는 스크롤" },
  ],
  accessibility: [
    "overscroll-behavior: contain으로 스크롤 체이닝을 막습니다.",
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 스크롤할 수 있습니다.",
    "늘어나는 효과는 장식이라 정보 전달에 쓰지 않습니다.",
    "동작 줄이기 설정에서는 튕기는 애니메이션을 끕니다.",
  ],
};
