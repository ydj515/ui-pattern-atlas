import { type Pattern } from "@/entities/pattern/model/pattern";

export const hicksLawPattern: Pattern = {
  slug: "hicks-law",

  kind: "concept",
  name: "Hick's Law",
  nameKo: "힉의 법칙",
  aliases: ["힉-하이먼 법칙", "선택 시간", "Hick-Hyman law", "choice reaction time"],
  category: "ux-laws",
  summary: "선택지가 많을수록 결정이 느려진다",
  description:
    "고를 수 있는 선택지가 늘어날수록 하나를 고르는 데 걸리는 시간이 길어진다는 원리입니다. 자주 찾는 항목부터 묶어 한 번에 보이는 선택지를 줄이면 빨리 고를 수 있습니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/hicks-law/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hicks-law/HicksLawDemo").then((m) => m.HicksLawDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hicks-law/HicksLawThumbnail").then(
      (m) => m.HicksLawThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/hicks-law/HicksLawDemo.tsx?raw"),
};
