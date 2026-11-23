import { type Pattern } from "@/entities/pattern/model/pattern";
import { FramingEffectThumbnail } from "@/entities/pattern/catalog/framing-effect/FramingEffectThumbnail";

export const framingEffectPattern: Pattern = {
  slug: "framing-effect",
  kind: "concept",
  name: "Framing Effect",
  nameKo: "프레이밍 효과",
  aliases: ["프레이밍", "틀 효과", "framing effect", "positive vs negative framing"],
  category: "cognitive-bias",
  summary: "같은 정보도 표현 방식에 따라 판단이 달라진다",
  description:
    "같은 사실이라도 긍정적인 틀(무지방 80%)과 부정적인 틀(지방 20%)로 말하면 다르게 받아들인다는 원리입니다. 중요한 결정에는 두 틀을 함께 보여 주거나 숫자 자체를 분명히 써야 합니다.",
  origin:
    "같은 내용을 어떤 틀(frame)에 담느냐에 따라 선택이 달라진다는 뜻으로, 1981년 아모스 트버스키와 대니얼 카너먼의 연구로 알려졌어요.",
  whenToUse: [
    "수치, 확률, 성분을 알릴 때",
    "같은 정보를 어떻게 말할지 정할 때",
    "의료, 금융처럼 판단이 중요한 안내",
  ],
  whenNotToUse: [
    "불리한 사실을 좋은 틀로만 감출 때",
    "비교 기준을 바꿔 가며 유리하게 보이게 할 때",
    "숫자 없이 인상만 남길 때",
  ],
  alternatives: [
    { name: "손실 회피", slug: "loss-aversion", reason: "잃는다는 말의 무게" },
    { name: "앵커링", slug: "anchoring", reason: "먼저 본 숫자의 영향" },
  ],
  accessibility: [
    "숫자와 단위를 글로 분명히 적습니다.",
    "색과 배지 모양만으로 좋고 나쁨을 전하지 않습니다.",
    "필요하면 두 표현을 함께 보여 줍니다.",
    "성분표처럼 전체 정보로 연결합니다.",
  ],
  tags: ["인지 편향", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/framing-effect/FramingEffectDemo").then(
      (m) => m.FramingEffectDemo,
    ),
  Thumbnail: FramingEffectThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/framing-effect/FramingEffectDemo.tsx?raw"),
};
