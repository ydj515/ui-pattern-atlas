import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "강의, 영상, 긴 글처럼 나눠서 보는 콘텐츠",
    "작성하다 만 글이나 주문이 있을 때",
    "오랜만에 앱을 다시 열었을 때",
  ],
  whenNotToUse: ["처음 온 사람(첫 화면 사용)", "이어 할 것이 없을 때", "닫아도 매번 다시 띄울 때"],
  alternatives: [
    { name: "환영 화면", slug: "welcome-screen", reason: "처음 온 사람을 맞을 때" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "진행률만 보여 줄 때" },
  ],
  accessibility: [
    "진행률은 progress 요소에 제목과 퍼센트를 이름으로 붙입니다.",
    "닫기 버튼은 글자 이름이 있는 버튼입니다.",
    "카드 전체를 이름이 있는 section으로 둡니다.",
  ],
};
