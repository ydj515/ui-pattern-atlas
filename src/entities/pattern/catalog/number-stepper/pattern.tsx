import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const numberStepperPattern: Pattern = {
  slug: "number-stepper",

  name: "Number Stepper",
  nameKo: "숫자 입력",
  aliases: ["수량 선택", "스테퍼", "카운터", "quantity input", "spin button"],
  category: "text-input",
  summary: "+/- 버튼으로 수량 조절",
  description:
    "수량처럼 작은 정수를 −, + 버튼으로 하나씩 바꾸고, 필요하면 가운데 칸에 직접 입력하는 패턴입니다. 최솟값과 최댓값에 닿으면 버튼이 꺼지고 이유를 알려 줍니다.",
  tags: [...BASE_TAGS, "spinbutton", "inputmode"],
  loadGuide: () => import("@/entities/pattern/catalog/number-stepper/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/number-stepper/NumberStepperDemo").then(
      (m) => m.NumberStepperDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/number-stepper/NumberStepperThumbnail").then(
      (m) => m.NumberStepperThumbnail,
    ),
  sources: [
    {
      fileName: "NumberStepper.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/number-stepper/NumberStepper.tsx?raw"),
    },
    {
      fileName: "NumberStepperDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/number-stepper/NumberStepperDemo.tsx?raw"),
    },
  ],
};
