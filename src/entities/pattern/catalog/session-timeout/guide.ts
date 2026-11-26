import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "금융, 공공처럼 오래 비우면 로그아웃해야 하는 서비스",
    "긴 입력 중에 로그인이 끝날 수 있을 때",
    "공용 기기에서 쓰는 화면",
  ],
  whenNotToUse: [
    "로그인을 오래 유지해도 되는 서비스",
    "남은 시간 없이 갑자기 로그아웃할 때",
    "로그아웃하면서 쓰던 내용을 버릴 때",
  ],
  alternatives: [
    { name: "마감 타이머", slug: "countdown", reason: "남은 시간만 보여 줄 때" },
    { name: "얼럿 다이얼로그", slug: "alert-dialog", reason: "일반적인 경고 창" },
  ],
  accessibility: [
    'role="alertdialog"로 제목과 남은 시간을 이어 읽어 줍니다.',
    "WCAG 2.2.1에 따라 시간 제한을 연장할 방법을 줍니다.",
    "로그아웃되면 다시 로그인 버튼으로 포커스를 옮깁니다.",
  ],
};
