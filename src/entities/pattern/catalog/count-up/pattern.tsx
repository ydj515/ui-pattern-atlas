import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const countUpPattern: Pattern = {
  slug: "count-up",

  name: "Count Up",
  nameKo: "숫자 카운트업",
  aliases: ["숫자 애니메이션", "카운터", "number ticker", "animated counter"],
  category: "text-motion",
  summary: "숫자가 올라가며 멈추기",
  description:
    "성과 숫자가 0부터 빠르게 올라가다 끝에서 천천히 멈추는 표현입니다. 큰 숫자에 눈길을 모으고, 화면 읽기에는 처음부터 최종 숫자만 들려줍니다.",
  tags: [...BASE_TAGS, "requestAnimationFrame", "tabular-nums", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/count-up/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/count-up/CountUpDemo").then((m) => m.CountUpDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/count-up/CountUpThumbnail").then((m) => m.CountUpThumbnail),
  sources: [
    {
      fileName: "CountUp.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/count-up/CountUp.tsx?raw"),
    },
    {
      fileName: "CountUpDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/count-up/CountUpDemo.tsx?raw"),
    },
  ],
};
