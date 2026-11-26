import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "권한이 필요한 기능을 사용자가 직접 눌렀을 때",
    "앱의 권한 안내를 본 다음",
    "허용, 일부 허용, 거절의 결과를 모두 처리할 수 있을 때",
  ],
  whenNotToUse: [
    "앱을 열자마자 이유 없이",
    "권한 없이도 되는 기능에서",
    "거절하면 앱을 못 쓰게 막을 때",
  ],
  alternatives: [
    {
      name: "권한 요청 안내",
      slug: "permission-priming",
      reason: "기기가 묻기 전에 이유를 알릴 때",
    },
    { name: "일부만 허용", slug: "limited-access", reason: "고른 사진만 허용했을 때" },
  ],
  accessibility: [
    "예시는 role=alertdialog와 제목, 설명을 연결합니다.",
    "실제 기기 창은 운영체제가 접근성을 처리합니다.",
    "결과는 role=status로 화면에 알립니다.",
    "설명 문구는 무엇에 쓰는지 구체적으로 적습니다.",
  ],
};
