import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "결제, 가입, 신청처럼 단계가 정해진 흐름",
    "단계가 3~5개일 때",
    "남은 단계를 미리 알려 주고 싶을 때",
  ],
  whenNotToUse: [
    "단계가 많거나 바뀔 때(진행 바 사용)",
    "순서 없이 오가는 설정(탭 사용)",
    "한 화면으로 끝나는 폼",
  ],
  alternatives: [
    { name: "단계형 폼", slug: "multi-step-form", reason: "입력과 진행 표시를 함께 다룰 때" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "단계 대신 비율로 보여 줄 때" },
  ],
  accessibility: [
    'ol 목록으로 순서를 전하고 현재 단계는 aria-current="step"입니다.',
    '끝낸 단계는 체크 표시와 함께 화면에 보이지 않는 "(완료)"를 읽어 줍니다.',
    "숫자와 연결선은 장식이라 aria-hidden입니다.",
    "단계 이름을 늘 글로 보여 줍니다.",
  ],
};
