import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const multiStepFormPattern: Pattern = {
  slug: "multi-step-form",

  name: "Multi-step Form",
  nameKo: "단계형 폼",
  aliases: ["마법사", "스텝 폼", "wizard", "stepper form", "checkout steps"],
  category: "text-input",
  summary: "긴 폼을 여러 단계로 나누기",
  description:
    "입력 항목이 많은 폼을 주제별 단계로 나누고, 진행 표시와 이전, 다음 버튼으로 오가게 하는 패턴입니다. 한 번에 보는 양이 줄어 부담이 적고, 마지막에 입력한 내용을 확인한 뒤 제출합니다.",
  tags: [...BASE_TAGS, "Forms", "Focus management"],
  loadGuide: () => import("@/entities/pattern/catalog/multi-step-form/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/multi-step-form/MultiStepFormDemo").then(
      (m) => m.MultiStepFormDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/multi-step-form/MultiStepFormThumbnail").then(
      (m) => m.MultiStepFormThumbnail,
    ),
  sources: [
    {
      fileName: "MultiStepForm.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/multi-step-form/MultiStepForm.tsx?raw"),
    },
    {
      fileName: "MultiStepFormDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/multi-step-form/MultiStepFormDemo.tsx?raw"),
    },
  ],
};
