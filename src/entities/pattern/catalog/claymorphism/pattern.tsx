import { type Pattern } from "@/entities/pattern/model/pattern";
import { ClaymorphismThumbnail } from "@/entities/pattern/catalog/claymorphism/ClaymorphismThumbnail";

export const claymorphismPattern: Pattern = {
  slug: "claymorphism",
  kind: "concept",
  name: "Claymorphism",
  nameKo: "클레이모피즘",
  aliases: ["클레이 디자인", "점토 질감", "clay UI"],
  category: "design-style",
  summary: "점토처럼 둥근 입체",
  description:
    "크게 둥근 모서리와 안쪽 밝은 빛, 바깥쪽 색 그림자로 말랑한 점토 장난감처럼 보이게 하는 스타일입니다. 뉴모피즘과 달리 면에 색을 넣어 경계가 잘 보입니다.",
  whenToUse: [
    "어린이, 게임, 가벼운 서비스",
    "친근하고 말랑한 인상을 줄 때",
    "일러스트와 함께 쓰는 카드",
  ],
  whenNotToUse: [
    "진지한 금융, 의료 화면",
    "정보가 촘촘한 표와 목록",
    "모든 요소에 입체를 줘 층위가 사라질 때",
  ],
  alternatives: [
    { name: "뉴모피즘", slug: "neumorphism", reason: "배경과 같은 색의 부드러운 입체" },
    { name: "네오 브루털리즘", slug: "neo-brutalism", reason: "두꺼운 선과 단단한 그림자" },
  ],
  accessibility: [
    "색 면 위 글자 대비를 확인합니다.",
    "눌림 상태를 글자와 aria-pressed로도 알립니다.",
    "큰 둥근 모서리로 누르는 영역을 넉넉하게 둡니다.",
    "포커스 링을 보여 줍니다.",
  ],
  tags: ["디자인 스타일", "입체"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/claymorphism/ClaymorphismDemo").then(
      (m) => m.ClaymorphismDemo,
    ),
  Thumbnail: ClaymorphismThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/claymorphism/ClaymorphismDemo.tsx?raw"),
};
