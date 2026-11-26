import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "저장 완료 같은 짧은 안내",
    "위치는 그대로이고 내용만 바뀔 때",
    "동작 줄이기에서 다른 움직임 대신",
  ],
  whenNotToUse: [
    "어디서 왔는지 보여 줘야 할 때(슬라이드 사용)",
    "긴 페이드로 내용을 늦게 보여 줄 때",
    "깜빡이듯 반복되는 페이드",
  ],
  alternatives: [
    { name: "슬라이드", slug: "slide", reason: "나타나는 방향이 의미 있을 때" },
    { name: "토스트", slug: "toast", reason: "결과 알림 전체 패턴" },
  ],
  accessibility: [
    "안내는 role=status 영역 안에 있어 화면 읽기에서도 들립니다.",
    "사라지는 동안에는 aria-hidden으로 표시합니다.",
    "동작 줄이기에서는 전환 없이 바로 넣고 뺍니다.",
    "자동으로 사라지는 안내는 2초 이상 보여 줍니다.",
  ],
};
