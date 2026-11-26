import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fullBleedPattern: Pattern = {
  slug: "full-bleed",

  name: "Full Bleed",
  nameKo: "풀블리드",
  aliases: ["가장자리까지", "와이드 이미지", "edge to edge", "breakout"],
  category: "layout",
  summary: "이미지나 배경을 화면 가장자리까지 확장",
  description:
    "글은 읽기 좋은 폭에 두고, 사진이나 배경만 화면 가장자리까지 넓게 펼치는 패턴입니다. 이름 붙인 그리드 줄을 써서 음수 여백 없이 만듭니다.",
  tags: [...BASE_TAGS, "CSS grid", "Typography"],
  loadGuide: () => import("@/entities/pattern/catalog/full-bleed/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/full-bleed/FullBleedDemo").then((m) => m.FullBleedDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/full-bleed/FullBleedThumbnail").then(
      (m) => m.FullBleedThumbnail,
    ),
  sources: [
    {
      fileName: "FullBleed.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/full-bleed/FullBleed.tsx?raw"),
    },
    {
      fileName: "FullBleedDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/full-bleed/FullBleedDemo.tsx?raw"),
    },
  ],
};
