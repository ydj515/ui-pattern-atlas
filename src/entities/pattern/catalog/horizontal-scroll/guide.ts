import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "추천 상품, 최근 본 항목처럼 미리 보기 목록",
    "세로 공간을 아껴야 할 때",
    "모든 항목을 다 볼 필요가 없을 때",
  ],
  whenNotToUse: [
    "모든 항목을 비교해야 할 때(그리드 사용)",
    "중요한 내용이 잘려 보이지 않을 때",
    "자동으로 넘어가게 할 때(캐러셀의 접근성 문제)",
  ],
  alternatives: [{ name: "스크롤 탭", slug: "scrollable-tabs", reason: "탭이 넘칠 때" }],
  accessibility: [
    "줄은 이름이 있는 region이고 포커스를 받아 화살표 키로 스크롤됩니다.",
    "이전, 다음 버튼은 이름이 있고 양 끝에서 꺼집니다.",
    "scroll-snap으로 카드가 칸에 맞춰 멈춥니다.",
    "동작 줄이기 설정에서는 부드러운 스크롤을 끕니다.",
  ],
};
