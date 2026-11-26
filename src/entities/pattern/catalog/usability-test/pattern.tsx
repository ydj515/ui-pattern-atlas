import { type Pattern } from "@/entities/pattern/model/pattern";

export const usabilityTestPattern: Pattern = {
  slug: "usability-test",

  kind: "concept",
  name: "Usability Test",
  nameKo: "사용성 테스트",
  aliases: ["사용성 평가", "유저 테스트", "과제 기반 테스트", "usability testing", "user testing"],
  category: "ux-research",
  summary: "과제를 하는 모습을 보고 막히는 곳을 찾기",
  description:
    "참가자에게 실제 과제를 주고 화면을 쓰는 모습을 관찰하는 방법입니다. 무엇을 눌렀는지, 어디서 멈췄는지를 시간과 함께 적어 두면 고쳐야 할 지점이 분명해집니다. 다섯 명 정도만 봐도 큰 문제는 대부분 보입니다.",
  tags: ["UX 리서치", "정성 조사"],
  loadGuide: () => import("@/entities/pattern/catalog/usability-test/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/usability-test/UsabilityTestDemo").then(
      (m) => m.UsabilityTestDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/usability-test/UsabilityTestThumbnail").then(
      (m) => m.UsabilityTestThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/usability-test/UsabilityTestDemo.tsx?raw"),
};
