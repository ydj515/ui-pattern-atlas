import { type Pattern } from "@/entities/pattern/model/pattern";

export const abTestPattern: Pattern = {
  slug: "ab-test",

  kind: "concept",
  name: "A/B Test",
  nameKo: "A/B 테스트",
  aliases: ["AB 테스트", "분할 테스트", "대조 실험", "split test", "controlled experiment"],
  category: "ux-research",
  summary: "무작위로 나눠 정한 지표를 비교",
  description:
    "방문자를 무작위로 나눠 서로 다른 시안을 보여 주고, 미리 정한 지표를 비교하는 실험입니다. 기간과 표본 크기를 시작 전에 정하고 그만큼 모은 뒤 판단해야 합니다. 중간에 결과를 보고 멈추면 우연을 효과로 착각하기 쉽습니다.",
  tags: ["UX 리서치", "정량 조사"],
  loadGuide: () => import("@/entities/pattern/catalog/ab-test/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/ab-test/AbTestDemo").then((m) => m.AbTestDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/ab-test/AbTestThumbnail").then((m) => m.AbTestThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/ab-test/AbTestDemo.tsx?raw"),
};
