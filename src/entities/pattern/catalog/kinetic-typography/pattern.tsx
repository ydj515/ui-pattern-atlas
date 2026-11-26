import { type Pattern } from "@/entities/pattern/model/pattern";

export const kineticTypographyPattern: Pattern = {
  slug: "kinetic-typography",

  kind: "concept",
  name: "Kinetic Typography",
  nameKo: "키네틱",
  aliases: ["키네틱 타이포", "모션 타이포", "kinetic type", "animated type"],
  category: "typography-style",
  summary: "움직임과 속도로 문장의 의미나 리듬 강조",
  description:
    "글자가 차례로 튀어 오르거나 움직이며 문장의 리듬과 뜻을 강조하는 스타일입니다. 움직임은 동작 줄이기 설정에서 멈추고, 화면 읽기에는 문구 전체를 한 번에 줍니다.",
  tags: ["글자 스타일", "Kinetic Typography"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/kinetic-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/kinetic-typography/KineticTypographyDemo").then(
      (m) => m.KineticTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/kinetic-typography/KineticTypographyThumbnail").then(
      (m) => m.KineticTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/kinetic-typography/KineticTypographyDemo.tsx?raw"),
};
