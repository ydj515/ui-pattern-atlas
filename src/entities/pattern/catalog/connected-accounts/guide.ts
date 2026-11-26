import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "소셜 로그인을 여러 개 지원할 때",
    "가입한 뒤 로그인 방법을 늘리거나 줄일 때",
    "비밀번호 없이 가입한 계정이 있을 때",
  ],
  whenNotToUse: [
    "로그인 방법이 하나뿐인 서비스",
    "기기 권한을 다룰 때(권한 요청 안내 사용)",
    "해제하면 무엇이 바뀌는지 알리지 않을 때",
  ],
  alternatives: [
    { name: "간편 로그인", slug: "social-sign-in", reason: "처음 로그인할 때 외부 계정을 고를 때" },
    { name: "권한 요청 안내", slug: "permission-priming", reason: "기능에 필요한 권한을 물을 때" },
  ],
  accessibility: [
    "버튼 이름에 계정 이름을 넣어 어느 줄의 버튼인지 읽어 줍니다.",
    "잠긴 해제 버튼은 disabled이고 이유를 aria-describedby로 이어 둡니다.",
    "연결 상태는 글자로도 적어 색에 기대지 않습니다.",
  ],
};
