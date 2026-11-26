import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "서버, 연동, 배포처럼 상태가 몇 가지로 나뉠 때",
    "목록에서 상태를 한눈에 훑어야 할 때",
    "자리가 좁을 때",
  ],
  whenNotToUse: [
    "자세한 설명이 필요한 문제(배너 알림 사용)",
    "사람의 접속 상태(접속 상태 사용)",
    "색으로만 구분해야 할 때",
  ],
  alternatives: [
    { name: "태그", slug: "tag", reason: "분류를 나타낼 때" },
    { name: "배너 알림", slug: "alert-banner", reason: "문제를 자세히 알릴 때" },
  ],
  accessibility: [
    "점은 장식이라 aria-hidden이고, 상태는 낱말(정상, 지연, 장애)로 함께 보여 줍니다.",
    "장애 상태는 바깥 고리를 더해 색이 아닌 모양으로도 구분합니다.",
    "상태가 바뀌는 대시보드라면 바뀐 항목을 live region으로 알립니다.",
    "점과 글자 대비를 지킵니다.",
  ],
};
