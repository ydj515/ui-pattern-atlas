import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "곧 로그아웃되거나 작업이 사라지는 등 시간이 걸린 긴급한 상황을 알릴 때",
    "계속 진행하기 전에 반드시 응답을 받아야 할 때",
    "사용자의 클릭 없이 시스템이 먼저 알려야 하는 경고일 때",
  ],
  whenNotToUse: [
    "사용자가 방금 누른 버튼을 실행할지 물을 때(확인 다이얼로그 사용)",
    "놓쳐도 되는 가벼운 안내일 때",
    "응답 없이 계속 보여 주면 되는 상태 정보일 때(배너 알림 사용)",
  ],
  alternatives: [
    {
      name: "확인 다이얼로그",
      slug: "confirmation-dialog",
      reason: "사용자가 시작한 작업을 계속할지 물을 때",
    },
    { name: "배너 알림", slug: "alert-banner", reason: "응답 없이 계속 보여 줘야 하는 경고" },
    { name: "토스트", slug: "toast", reason: "잠깐 알리고 사라져도 되는 결과" },
  ],
  accessibility: [
    'role="alertdialog"와 aria-labelledby·aria-describedby로 열리자마자 제목과 설명을 읽어 줍니다.',
    "showModal()로 배경을 막고, 배경 클릭으로는 닫히지 않습니다. Esc는 취소 응답(로그아웃)으로 처리합니다.",
    "열리면 상황을 해결하는 버튼(로그인 유지)에 포커스를 둡니다.",
    '카운트다운은 role="timer"로 두어 매초 읽지 않게 하고, 시간이 지나면 어떻게 되는지 설명에 미리 씁니다.',
  ],
};
