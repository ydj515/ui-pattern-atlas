import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["정기 결제를 끝낼 때", "남은 기간이 있을 때", "해지 대신 쉬기를 함께 제안할 때"],
  whenNotToUse: [
    "해지를 여러 화면 뒤에 숨길 때(해지 미로 참고)",
    "이유를 꼭 고르게 막을 때",
    "해지 버튼을 흐리게 두고 쉬기만 강조할 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "해지를 어렵게 만드는 다크 패턴" },
    {
      name: "몰래 자동 결제",
      slug: "forced-continuity",
      reason: "무료 체험 뒤 몰래 결제하는 다크 패턴",
    },
    { name: "회원 탈퇴", slug: "account-deletion", reason: "계정까지 지울 때" },
  ],
  accessibility: [
    "이유는 선택 사항이라고 legend에 적은 라디오 버튼입니다.",
    "해지와 쉬기 버튼을 같은 크기로 나란히 둡니다.",
    '결과는 role="status"로 읽어 줍니다.',
  ],
};
