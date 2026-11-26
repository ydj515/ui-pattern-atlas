import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const cardPattern: Pattern = {
  slug: "card",

  name: "Card",
  nameKo: "카드",
  aliases: ["콘텐츠 카드", "아티클 카드", "card", "tile"],
  category: "card-gallery",
  summary: "이미지, 제목, 요약을 묶은 한 칸",
  description:
    "이미지와 제목, 짧은 요약을 한 상자로 묶어 여러 콘텐츠를 나란히 보여 주는 패턴입니다. 카드 어디를 눌러도 열리지만, 링크는 제목 하나라 화면 읽기도 간결합니다.",
  tags: [...BASE_TAGS, "Stretched link", "article"],
  loadGuide: () => import("@/entities/pattern/catalog/card/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/card/CardDemo").then((m) => m.CardDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/card/CardThumbnail").then((m) => m.CardThumbnail),
  sources: [
    {
      fileName: "Card.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/card/Card.tsx?raw"),
    },
    {
      fileName: "CardDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/card/CardDemo.tsx?raw"),
    },
  ],
};
