import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "디자인, 문서, 발표처럼 같은 문장에 들어갈 쓰임이 여러 개일 때",
    "소개 페이지의 큰 제목",
    "단어 길이가 비슷할 때",
  ],
  whenNotToUse: [
    "바뀌는 단어를 꼭 읽어야 하는 정보",
    "버튼이나 링크 안의 글",
    "멈출 방법 없이 5초 넘게 움직일 때",
  ],
  alternatives: [
    { name: "타이핑 효과", slug: "typewriter", reason: "한 문장을 한 번만 써 보일 때" },
    { name: "흐르는 글자", slug: "marquee", reason: "여러 항목을 계속 흘려 보낼 때" },
  ],
  accessibility: [
    "화면 읽기에는 모든 단어를 한 번에 읽어 주고 바뀔 때마다 알리지 않습니다.",
    "멈추기 버튼으로 움직임을 멈출 수 있습니다(WCAG 2.2.2).",
    "동작 줄이기에서는 첫 단어에서 멈추고 버튼도 숨깁니다.",
    "멈추기 버튼은 aria-pressed로 상태를 알립니다.",
  ],
};
