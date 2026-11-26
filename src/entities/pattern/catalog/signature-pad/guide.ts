import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "계약, 동의서, 배송 수령처럼 서명이 필요한 곳",
    "태블릿이나 휴대폰에서 직접 서명받을 때",
    "서명 이미지를 문서에 붙여야 할 때",
  ],
  whenNotToUse: [
    "법적 효력이 필요한 서명(공인 전자서명이나 본인 인증 사용)",
    "체크박스 동의로 충분할 때",
    "대체 입력 없이 서명만 받을 때",
  ],
  alternatives: [
    { name: "체크박스", slug: "checkbox", reason: "동의만 받으면 될 때" },
    { name: "텍스트 필드", slug: "text-field", reason: "이름 입력으로 대신할 때" },
  ],
  accessibility: [
    '캔버스는 role="img"로 "서명, 비어 있음/서명함" 상태를 알립니다.',
    "그릴 수 없는 사람을 위해 이름 입력으로 대신하는 길을 같은 화면에 둡니다.",
    "포인터 캡처로 칸 밖으로 나가도 선이 끊기지 않고, 터치 스크롤과 충돌하지 않게 touch-action을 끕니다.",
    "서명하기 전에는 완료 버튼을 꺼 둡니다.",
  ],
};
