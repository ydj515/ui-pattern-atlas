import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "오래 쓰지 않은 계정의 정보를 따로 보관하는 서비스",
    "휴면 계정으로 로그인했을 때",
    "남아 있는 적립금이나 내역을 알려야 할 때",
  ],
  whenNotToUse: [
    "휴면 없이 계정을 그대로 두는 서비스",
    "본인 확인 단계를 길게 늘어놓을 때",
    "무엇이 남았는지 알리지 않을 때",
  ],
  alternatives: [
    { name: "이어서 하기 안내", slug: "resume-prompt", reason: "휴면 없이 다시 온 사람을 맞을 때" },
    { name: "로그인 폼", slug: "login-form", reason: "앞 단계의 로그인" },
  ],
  accessibility: [
    "보관한 정보는 목록으로 읽힙니다.",
    "체크 표시는 장식이라 aria-hidden입니다.",
    '결과는 role="status"로 읽어 줍니다.',
  ],
};
