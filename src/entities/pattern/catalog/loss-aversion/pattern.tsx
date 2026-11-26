import { type Pattern } from "@/entities/pattern/model/pattern";

export const lossAversionPattern: Pattern = {
  slug: "loss-aversion",

  kind: "concept",
  name: "Loss Aversion",
  nameKo: "손실 회피",
  aliases: ["손실 혐오", "손실 기피", "loss aversion", "prospect theory"],
  category: "cognitive-bias",
  summary: "같은 크기의 이득보다 손실을 더 크게 받아들인다",
  description:
    "같은 크기라도 얻는 것보다 잃는 것을 더 크게 느끼는 경향입니다. '잃는다'는 말은 강하게 작용하므로, 정보를 알리는 데는 쓰되 불안을 키워 결정을 몰아붙이는 데 쓰지 않아야 합니다.",
  tags: ["인지 편향", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/loss-aversion/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/loss-aversion/LossAversionDemo").then(
      (m) => m.LossAversionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/loss-aversion/LossAversionThumbnail").then(
      (m) => m.LossAversionThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/loss-aversion/LossAversionDemo.tsx?raw"),
};
