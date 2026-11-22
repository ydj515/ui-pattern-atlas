import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CardThumbnail } from "@/entities/pattern/catalog/card/CardThumbnail";

export const cardPattern: Pattern = {
  slug: "card",
  name: "Card",
  nameKo: "카드",
  aliases: ["콘텐츠 카드", "아티클 카드", "card", "tile"],
  category: "card-gallery",
  summary: "이미지, 제목, 요약을 묶은 한 칸",
  description:
    "이미지와 제목, 짧은 요약을 한 상자로 묶어 여러 콘텐츠를 나란히 보여 주는 패턴입니다. 카드 어디를 눌러도 열리지만, 링크는 제목 하나라 화면 읽기도 간결합니다.",
  whenToUse: [
    "글, 상품, 장소처럼 이미지가 있는 콘텐츠 목록",
    "한눈에 여러 개를 훑고 골라야 할 때",
    "카드 안에 저장 같은 작은 동작이 하나 있을 때",
  ],
  whenNotToUse: [
    "항목을 자세히 비교할 때(표 사용)",
    "이미지 없이 제목만 있을 때(리스트 사용)",
    "카드 안에 링크와 버튼이 많을 때",
  ],
  alternatives: [
    { name: "리스트", slug: "list", reason: "이미지 없이 훑어볼 때" },
    { name: "메이슨리", slug: "masonry-grid", reason: "높이가 다른 카드를 촘촘히 놓을 때" },
  ],
  accessibility: [
    "링크는 제목 하나이고 가상 요소로 카드 전체를 덮어, 카드 어디를 눌러도 열립니다.",
    "카드 안의 저장 버튼은 링크 위에 따로 놓여 독립적으로 동작하고 aria-pressed로 상태를 알립니다.",
    "이미지 영역은 장식이라 aria-hidden입니다.",
    "키보드 포커스는 카드 전체 테두리로 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "Stretched link", "article"],
  loadPreview: () => import("@/entities/pattern/catalog/card/CardDemo").then((m) => m.CardDemo),
  Thumbnail: CardThumbnail,
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
