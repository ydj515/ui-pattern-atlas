import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const stepperPattern: Pattern = {
  slug: "stepper",

  name: "Stepper / Step Indicator",
  nameKo: "스테퍼",
  aliases: ["단계 표시", "진행 단계", "step indicator", "progress steps"],
  category: "navigation",
  summary: "단계형 흐름에서 현재 단계와 완료한 단계 표시",
  description:
    "가입이나 결제처럼 순서가 정해진 흐름에서 전체 단계와 지금 위치, 끝낸 단계를 보여 주는 패턴입니다. 앞으로 남은 단계 수를 알면 끝까지 가는 부담이 줄어듭니다.",
  tags: [...BASE_TAGS, "aria-current", "Ordered list"],
  loadGuide: () => import("@/entities/pattern/catalog/stepper/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/stepper/StepperDemo").then((m) => m.StepperDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stepper/StepperThumbnail").then((m) => m.StepperThumbnail),
  sources: [
    {
      fileName: "Stepper.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/stepper/Stepper.tsx?raw"),
    },
    {
      fileName: "StepperDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/stepper/StepperDemo.tsx?raw"),
    },
  ],
};
