import { type Pattern } from "@/entities/pattern/model/pattern";
import { BrutalismThumbnail } from "@/entities/pattern/catalog/brutalism/BrutalismThumbnail";

export const brutalismPattern: Pattern = {
  slug: "brutalism",
  kind: "concept",
  name: "Brutalism",
  nameKo: "브루털리즘",
  aliases: ["브루탈리즘", "날것 디자인", "brutalist web design"],
  category: "design-style",
  summary: "거칠고 날것인 레이아웃",
  description:
    "꾸밈을 덜어 내고 기본 글꼴, 얇은 선, 날카로운 모서리, 밑줄 그대로의 글자처럼 웹의 날것 상태를 드러내는 스타일입니다. 일부러 어색한 배치와 원색으로 강한 인상을 줍니다.",
  whenToUse: [
    "개성을 드러내는 포트폴리오, 문화 행사 사이트",
    "콘텐츠 자체가 주인공인 아카이브",
    "관습을 깨는 인상이 필요할 때",
  ],
  whenNotToUse: [
    "처음 쓰는 사람이 많은 쇼핑, 금융 서비스",
    "누를 수 있는 것과 아닌 것이 구분되지 않을 때",
    "거친 배치가 읽기 순서를 해칠 때",
  ],
  alternatives: [
    {
      name: "네오 브루털리즘",
      slug: "neo-brutalism",
      reason: "정돈된 그리드에 두꺼운 선을 더한 버전",
    },
    { name: "미니멀리즘", slug: "minimalism", reason: "덜어 내되 정돈된 화면" },
  ],
  accessibility: [
    "기본 요소를 그대로 쓰는 만큼 의미 있는 HTML 구조가 장점이 됩니다.",
    "원색 조합의 글자 대비를 확인합니다.",
    "밑줄 글자가 링크처럼 보이지 않게 쓰임을 구분합니다.",
    "포커스 링을 지우지 않습니다.",
  ],
  tags: ["디자인 스타일", "날것"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/brutalism/BrutalismDemo").then((m) => m.BrutalismDemo),
  Thumbnail: BrutalismThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/brutalism/BrutalismDemo.tsx?raw"),
};
