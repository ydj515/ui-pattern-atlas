import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const setupChecklistPattern: Pattern = {
  slug: "setup-checklist",

  name: "Setup Checklist",
  nameKo: "설정 체크리스트",
  aliases: ["시작 체크리스트", "할 일 목록", "onboarding checklist", "getting started"],
  category: "onboarding",
  summary: "처음 할 일 목록과 진행률",
  description:
    "처음 해야 할 일을 네 개 안팎의 목록과 진행 막대로 보여 주는 패턴입니다. 할 일마다 바로 시작하는 버튼이 있고, 끝낸 일은 그 자리에서 체크되어 목록이 흔들리지 않습니다.",
  tags: [...BASE_TAGS, "progress", "role=status", "Checklist"],
  loadGuide: () => import("@/entities/pattern/catalog/setup-checklist/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/setup-checklist/SetupChecklistDemo").then(
      (m) => m.SetupChecklistDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/setup-checklist/SetupChecklistThumbnail").then(
      (m) => m.SetupChecklistThumbnail,
    ),
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
