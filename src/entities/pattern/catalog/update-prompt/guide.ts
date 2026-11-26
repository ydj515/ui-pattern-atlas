import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "새 기능을 알리며 업데이트를 권할 때",
    "보안 문제로 이전 버전을 막아야 할 때",
    "서버가 바뀌어 이전 버전이 동작하지 않을 때",
  ],
  whenNotToUse: [
    "사소한 수정마다 띄울 때",
    "필수가 아닌데 닫기를 없앨 때",
    "이유 없이 앱을 막을 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "화면을 막지 않고 알릴 때" },
    { name: "얼럿 다이얼로그", slug: "alert-dialog", reason: "일반적인 경고 창" },
  ],
  accessibility: [
    '필수 업데이트는 role="alertdialog", 선택 업데이트는 role="dialog"입니다.',
    "제목을 창의 이름으로 이어 둡니다.",
    "필수일 때는 닫기 대신 이유를 글자로 적습니다.",
  ],
};
