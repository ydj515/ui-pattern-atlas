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
  origin:
    "1979년 대니얼 카너먼과 아모스 트버스키가 발표한 전망 이론(prospect theory)에서 나온 개념이에요.",
  whenToUse: [
    "혜택 문구의 말투를 정할 때",
    "저장하지 않은 작업이 사라진다는 경고처럼 실제 손실을 알릴 때",
    "같은 정보를 두 방식으로 비교할 때",
  ],
  whenNotToUse: [
    "사라지지 않는 혜택을 사라진다고 말할 때",
    "거절하면 손해라는 압박으로 가입을 유도할 때",
    "실제 손실이 없는데 경고 색을 쓸 때",
  ],
  alternatives: [
    { name: "프레이밍 효과", slug: "framing-effect", reason: "표현 방식에 따른 판단 차이" },
    { name: "컨펌셰이밍", slug: "confirmshaming", reason: "거절에 죄책감을 씌울 때" },
  ],
  accessibility: [
    "경고처럼 보이는 색과 아이콘은 실제 위험이 있을 때만 씁니다.",
    "혜택 조건(기간, 금액)을 글로 분명히 적습니다.",
    "같은 크기와 무게로 선택지를 보여 줍니다.",
    "시간 제한은 날짜로 알립니다.",
  ],
  tags: ["인지 편향", "UX 심리"],
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
