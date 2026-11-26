import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "위치, 카메라처럼 거절해도 다른 방법이 있는 기능",
    "사용자가 다시 그 기능을 누른 순간",
    "기기 설정으로 보내야 할 때",
  ],
  whenNotToUse: [
    "거절했는데 계속 다시 물을 때",
    "대체 방법 없이 막기만 할 때",
    "앱 전체를 막는 전면 화면",
  ],
  alternatives: [
    {
      name: "권한 없음",
      slug: "permission-denied",
      reason: "화면 전체가 권한에 묶여 있을 때",
    },
    { name: "권한 요청 안내", slug: "permission-priming", reason: "처음 요청하기 전" },
  ],
  accessibility: [
    "안내 영역은 role=status로 나타날 때 읽힙니다.",
    "버튼 이름이 다시 허용하기와 설정 열기로 실제 동작을 말합니다.",
    "대체 행동 버튼은 aria-expanded로 입력칸이 열렸는지 알립니다.",
    "주소 입력칸에는 aria-label로 이름을 붙입니다.",
  ],
};
