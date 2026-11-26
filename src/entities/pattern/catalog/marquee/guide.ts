import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "극장 입구 차양 간판(marquee)에 공연 이름이 흘러가듯 표시되던 데서 온 이름이에요. 초기 웹에는 같은 이름의 HTML 태그 <marquee>도 있었어요.",
  whenToUse: [
    "배송, 혜택처럼 짧고 덜 중요한 문구 여러 개",
    "로고나 고객사 이름을 나열할 때",
    "페이지 맨 위의 얇은 띠",
  ],
  whenNotToUse: [
    "꼭 읽어야 하는 공지(배너 사용)",
    "누를 수 있는 링크가 많은 목록",
    "본문 사이에 두어 읽기를 방해할 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "꼭 읽어야 하는 공지" },
    { name: "캐러셀", slug: "carousel", reason: "사용자가 넘기며 볼 때" },
  ],
  accessibility: [
    "두 번째 목록은 aria-hidden이라 화면 읽기에서 한 번만 들립니다.",
    "마우스를 올리거나 포커스가 들어오면 멈추고, 멈추기 버튼도 있습니다(WCAG 2.2.2).",
    "동작 줄이기에서는 흐르지 않고 줄바꿈해 모두 보여 줍니다.",
    "띠 전체에 aria-label로 이름을 붙입니다.",
  ],
};
