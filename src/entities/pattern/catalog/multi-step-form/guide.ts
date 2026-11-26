import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "주문, 가입, 신청처럼 항목이 많은 폼",
    "앞 단계 답에 따라 다음 단계가 달라질 때",
    "제출 전에 모든 내용을 한 번 확인시켜야 할 때",
  ],
  whenNotToUse: [
    "항목이 몇 개뿐인 폼(한 화면이 더 빠릅니다)",
    "순서와 상관없이 고치는 설정 화면(탭이나 섹션 사용)",
    "단계를 건너뛰어야 하는 경우가 많을 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "순서 없이 오가는 설정" },
    { name: "오류 요약", slug: "error-summary", reason: "한 화면 폼에서 오류를 모아 보여 줄 때" },
  ],
  accessibility: [
    '진행 목록은 aria-current="step"으로 지금 단계를 알리고, "2/3단계"를 글로도 보여 줍니다.',
    "단계를 옮기면 새 단계 제목으로 포커스를 옮겨 어디에 있는지 바로 읽어 줍니다.",
    "이전으로 돌아가도 입력한 값이 그대로 남습니다.",
    "다음 버튼은 form 제출이라 Enter로도 넘어가고, 단계별 검증을 통과해야 넘어갑니다.",
  ],
};
