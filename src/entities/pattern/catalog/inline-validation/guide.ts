import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "이메일, 전화번호처럼 형식이 정해진 값을 입력받을 때",
    "제출 전에 필수 항목 누락을 알려줄 때",
    "비밀번호 규칙처럼 입력 조건을 미리 안내할 때",
  ],
  whenNotToUse: [
    "사용자가 입력을 마치기 전, 글자마다 오류를 띄울 때",
    "서버 장애처럼 특정 필드와 관련 없는 오류일 때",
    "오류 문구가 '잘못된 입력' 같이 해결 방법을 주지 못할 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "폼 전체 또는 시스템 오류" },
    { name: "토스트", slug: "toast", reason: "제출 성공 같은 결과 안내" },
  ],
  accessibility: [
    "<label>을 입력 필드와 연결하고 placeholder를 라벨 대신 쓰지 않습니다.",
    "오류 시 aria-invalid를 설정하고 aria-describedby로 안내 문구와 오류 문구를 연결합니다.",
    "오류 문구 영역을 aria-live로 두어 새 오류가 생기면 읽어줍니다.",
    "색상 외에 아이콘과 문장으로 오류를 표시하고, 고치는 방법을 함께 안내합니다.",
  ],
};
