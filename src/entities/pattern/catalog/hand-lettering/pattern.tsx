import { type Pattern } from "@/entities/pattern/model/pattern";

export const handLetteringPattern: Pattern = {
  slug: "hand-lettering",

  kind: "concept",
  name: "Hand Lettering",
  nameKo: "핸드레터링",
  aliases: ["손글씨", "레터링", "hand lettering", "handwritten"],
  category: "typography-style",
  summary: "손으로 그린 획이나 글자 배치를 활용",
  description:
    "손으로 쓴 듯한 획, 기울기, 밑줄 같은 손맛으로 따뜻하고 개인적인 느낌을 주는 스타일입니다. 이 예시는 필기체 계열 글꼴, 기울임, 손으로 그은 밑줄로 표현합니다.",
  tags: ["글자 스타일", "Hand Lettering"],
  loadGuide: () => import("@/entities/pattern/catalog/hand-lettering/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hand-lettering/HandLetteringDemo").then(
      (m) => m.HandLetteringDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hand-lettering/HandLetteringThumbnail").then(
      (m) => m.HandLetteringThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/hand-lettering/HandLetteringDemo.tsx?raw"),
};
