import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SetupChecklistThumbnail } from "@/entities/pattern/catalog/setup-checklist/SetupChecklistThumbnail";

export const setupChecklistPattern: Pattern = {
  slug: "setup-checklist",
  name: "Setup Checklist",
  nameKo: "설정 체크리스트",
  aliases: ["시작 체크리스트", "할 일 목록", "onboarding checklist", "getting started"],
  category: "onboarding",
  summary: "처음 할 일 목록과 진행률",
  description:
    "처음 해야 할 일을 네 개 안팎의 목록과 진행 막대로 보여 주는 패턴입니다. 할 일마다 바로 시작하는 버튼이 있고, 끝낸 일은 그 자리에서 체크되어 목록이 흔들리지 않습니다.",
  whenToUse: [
    "프로필, 팀 초대처럼 처음 한 번 해 두면 좋은 설정",
    "직접 해 보며 익히는 것이 빠른 도구",
    "홈 화면 한쪽에 둘 수 있을 때",
  ],
  whenNotToUse: [
    "꼭 순서대로 해야 하는 가입 절차(단계 표시 사용)",
    "할 일이 열 개를 넘을 때",
    "모두 마친 뒤에도 계속 남겨 둘 때",
  ],
  alternatives: [
    { name: "단계 표시", slug: "stepper", reason: "순서가 정해진 절차" },
    { name: "진행 바", slug: "progress-bar", reason: "진행률만 보여 줄 때" },
  ],
  accessibility: [
    "진행률은 progress 요소와 숫자(2 / 4) 둘 다로 보여 줍니다.",
    "끝낸 항목은 취소선과 함께 화면 읽기에 완료라고 알립니다.",
    "체크 원은 장식이라 aria-hidden입니다.",
    "모두 마치면 role=status로 알립니다.",
  ],
  tags: [...BASE_TAGS, "progress", "role=status", "Checklist"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/setup-checklist/SetupChecklistDemo").then(
      (m) => m.SetupChecklistDemo,
    ),
  Thumbnail: SetupChecklistThumbnail,
  sources: [
    {
      fileName: "SetupChecklist.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/setup-checklist/SetupChecklist.tsx?raw"),
    },
    {
      fileName: "SetupChecklistDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/setup-checklist/SetupChecklistDemo.tsx?raw"),
    },
  ],
};
