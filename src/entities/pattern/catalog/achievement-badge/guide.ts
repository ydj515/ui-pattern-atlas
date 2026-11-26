import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "후기, 주문처럼 쌓이는 활동에 목표를 줄 때",
    "내 정보 화면의 배지 진열",
    "달성 조건을 숫자로 말할 수 있을 때",
  ],
  whenNotToUse: [
    "의미 없는 행동을 부추길 때",
    "조건을 숨긴 깜짝 배지만 있을 때",
    "배지가 너무 많아 진열이 복잡할 때",
  ],
  alternatives: [
    { name: "연속 기록", slug: "streak", reason: "매일 이어 가는 습관" },
    { name: "축하 효과", slug: "confetti", reason: "획득 순간을 크게 축하할 때" },
  ],
  accessibility: [
    "진행은 4/5처럼 글자로 보여 주고 잠김을 화면 읽기에 알립니다.",
    "아이콘과 둥근 막대는 장식이라 aria-hidden입니다.",
    "획득 소식은 role=status 문구로 알립니다.",
    "각 배지는 figure와 figcaption으로 이름을 붙입니다.",
  ],
};
