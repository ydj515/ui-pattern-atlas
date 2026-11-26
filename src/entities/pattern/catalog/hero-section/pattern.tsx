import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const heroSectionPattern: Pattern = {
  slug: "hero-section",

  name: "Hero Section",
  nameKo: "히어로 섹션",
  aliases: ["첫 화면", "메인 비주얼", "hero", "above the fold"],
  category: "layout",
  summary: "화면 첫 영역에 핵심 제목과 주요 행동 배치",
  description:
    "방문자가 처음 보는 영역에 무엇을 하는 서비스인지 한 줄 제목과 한 문장 설명, 하나의 주요 버튼으로 보여 주는 패턴입니다.",
  tags: [...BASE_TAGS, "Landing page", "h1"],
  loadGuide: () => import("@/entities/pattern/catalog/hero-section/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hero-section/HeroSectionDemo").then(
      (m) => m.HeroSectionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hero-section/HeroSectionThumbnail").then(
      (m) => m.HeroSectionThumbnail,
    ),
  sources: [
    {
      fileName: "HeroSection.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/hero-section/HeroSection.tsx?raw"),
    },
    {
      fileName: "HeroSectionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/hero-section/HeroSectionDemo.tsx?raw"),
    },
  ],
};
