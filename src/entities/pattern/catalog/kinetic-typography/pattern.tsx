import { type Pattern } from "@/entities/pattern/model/pattern";
import { KineticTypographyThumbnail } from "@/entities/pattern/catalog/kinetic-typography/KineticTypographyThumbnail";

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
  whenToUse: ["영상, 광고, 첫 화면의 짧은 연출", "리듬이 중요한 문구", "주의를 한 번 끌 때"],
  whenNotToUse: ["계속 반복되어 다른 내용을 방해할 때", "긴 문장", "멈출 방법이 없을 때"],
  alternatives: [
    { name: "단어 바꾸기", slug: "rotating-words", reason: "한 단어를 바꿔 보여 줄 때" },
    { name: "글자·줄 순차 등장", slug: "staggered-text-reveal", reason: "한 번만 나타날 때" },
  ],
  accessibility: [
    "움직임은 motion-safe로만 재생해 동작 줄이기 설정에서 멈춥니다.",
    "글자를 하나씩 나눠도 화면 읽기에는 aria-label로 문구 전체를 줍니다.",
    "계속 반복되는 움직임은 짧은 연출에만 씁니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Kinetic Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/kinetic-typography/KineticTypographyDemo").then(
      (m) => m.KineticTypographyDemo,
    ),
  Thumbnail: KineticTypographyThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/kinetic-typography/KineticTypographyDemo.tsx?raw"),
};
