import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "바퀴벌레 덫 상품 'Roach Motel'의 광고 문구 '들어가긴 해도 나오지는 못한다'에서 온 이름이에요. 2010년 해리 브리그널(Harry Brignull)이 다크 패턴이라는 말을 만들며 정리한 유형 중 하나예요.",
  whenToUse: [
    "구독 해지, 회원 탈퇴 흐름을 검토할 때",
    "가입과 해지의 단계 수를 비교할 때",
    "해지 방지 화면의 선을 정할 때",
  ],
  whenNotToUse: [
    "해지를 전화나 상담으로만 받을 때",
    "해지 버튼을 여러 단계 뒤에 숨길 때",
    "해지 전에 혜택을 반복해서 내밀 때",
  ],
  alternatives: [
    { name: "몰래 자동 결제", slug: "forced-continuity", reason: "체험이 유료로 넘어가는 흐름" },
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "해지 전에 한 번 확인할 때" },
  ],
  accessibility: [
    "해지 버튼을 다른 버튼과 같은 방식으로 찾을 수 있게 둡니다.",
    "옅은 회색 작은 글로 안내를 숨기지 않습니다.",
    "남은 이용 기간을 글로 알려 줍니다.",
    "해지 결과를 바로 알립니다.",
  ],
};
