import { type Pattern } from "@/entities/pattern/model/pattern";

export const socialProofPattern: Pattern = {
  slug: "social-proof",

  kind: "concept",
  name: "Social Proof",
  nameKo: "사회적 증거",
  aliases: ["사회적 증명", "밴드왜건 효과", "social proof", "herd behavior"],
  category: "cognitive-bias",
  summary: "다른 사람의 행동이나 평가를 판단 근거로 참고",
  description:
    "확신이 없을 때 다른 사람들이 무엇을 골랐는지를 보고 판단하는 경향입니다. 구매 수, 리뷰 수처럼 실제 데이터로 보여 주면 결정을 돕지만, 꾸민 숫자는 다크 패턴이 됩니다.",
  tags: ["인지 편향", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/social-proof/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/social-proof/SocialProofDemo").then(
      (m) => m.SocialProofDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/social-proof/SocialProofThumbnail").then(
      (m) => m.SocialProofThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/social-proof/SocialProofDemo.tsx?raw"),
};
