import { type Pattern } from "@/entities/pattern/model/pattern";

export const flatDesignPattern: Pattern = {
  slug: "flat-design",
  kind: "concept",
  name: "Flat Design",
  nameKo: "플랫",
  aliases: ["플랫 디자인", "평면 디자인", "flat UI"],
  category: "design-style",
  summary: "그림자 없이 면과 색으로",
  description:
    "그림자, 질감, 입체 효과를 빼고 단색 면과 분명한 색 대비로 화면을 구성하는 스타일입니다. 2010년대 초 모바일 화면에서 널리 퍼졌고, 모든 디자인 스타일 항목이 같은 플레이리스트 카드를 그려 차이를 비교합니다.",
  origin:
    "입체감 없이 평평하게(flat) 그린다는 뜻이에요. 2010년 마이크로소프트 윈도우 폰의 Metro 디자인과 2013년 애플 iOS 7을 거치며 크게 퍼졌어요.",
  whenToUse: [
    "작은 화면에서 빠르게 읽히는 단순한 화면",
    "아이콘과 색으로 정보 위계를 줄 수 있을 때",
    "여러 기기에서 같은 모습을 유지해야 할 때",
  ],
  whenNotToUse: [
    "누를 수 있는 것과 아닌 것이 구분되지 않을 만큼 평평하게 만들 때",
    "깊이로 층위를 보여 줘야 하는 겹친 화면",
    "색에만 의존해 상태를 구분할 때",
  ],
  alternatives: [
    { name: "머티리얼", slug: "material-design", reason: "그림자로 층위를 더할 때" },
    { name: "미니멀리즘", slug: "minimalism", reason: "요소 자체를 줄일 때" },
  ],
  accessibility: [
    "버튼은 색 면만으로도 누를 수 있어 보이게 대비를 충분히 둡니다.",
    "상태 변화는 색과 글자(재생, 일시정지)로 함께 보여 줍니다.",
    "스위치는 role=switch로 켜짐 상태를 알립니다.",
    "포커스 링을 따로 보여 줍니다.",
  ],
  tags: ["디자인 스타일", "플랫"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/flat-design/FlatDesignDemo").then((m) => m.FlatDesignDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/flat-design/FlatDesignThumbnail").then(
      (m) => m.FlatDesignThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/flat-design/FlatDesignDemo.tsx?raw"),
};
