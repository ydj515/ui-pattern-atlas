import { type Pattern } from "@/entities/pattern/model/pattern";

export const neumorphismPattern: Pattern = {
  slug: "neumorphism",
  kind: "concept",
  name: "Neumorphism",
  nameKo: "뉴모피즘",
  aliases: ["뉴 스큐어모피즘", "소프트 UI", "soft UI"],
  category: "design-style",
  summary: "튀어나오고 들어간 부드러운 면",
  description:
    "배경과 같은 색의 면에 밝은 그림자와 어두운 그림자를 함께 주어, 표면이 부드럽게 튀어나오거나 눌린 것처럼 보이게 하는 스타일입니다. 버튼을 누르면 안쪽 그림자로 바뀌어 들어간 모습이 됩니다.",
  origin:
    "'새로운(new)'과 '스큐어모피즘(skeuomorphism)'을 합친 말이에요. 2019년 말 디자인 커뮤니티에서 퍼지기 시작한 것으로 알려져 있어요.",
  whenToUse: [
    "조작 요소가 적은 위젯, 리모컨 같은 화면",
    "누름과 뗌의 촉감을 표현하고 싶을 때",
    "시각 실험이나 포트폴리오",
  ],
  whenNotToUse: [
    "버튼과 배경을 구분해야 하는 일반 서비스(대비가 낮음)",
    "상태가 많은 폼",
    "저시력 사용자가 많은 서비스",
  ],
  alternatives: [
    { name: "클레이모피즘", slug: "claymorphism", reason: "색 있는 점토 같은 입체" },
    { name: "머티리얼", slug: "material-design", reason: "그림자로 층위를 보여 줄 때" },
  ],
  accessibility: [
    "면과 배경의 대비가 낮아 버튼 경계를 찾기 어렵습니다. 아이콘이나 글자 대비를 높입니다.",
    "눌림 상태를 그림자만으로 보여 주지 말고 aria-pressed와 글자를 함께 씁니다.",
    "포커스 링을 분명히 보여 줍니다.",
    "스위치 켜짐을 위치와 role=switch로 알립니다.",
  ],
  tags: ["디자인 스타일", "그림자"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/neumorphism/NeumorphismDemo").then((m) => m.NeumorphismDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/neumorphism/NeumorphismThumbnail").then(
      (m) => m.NeumorphismThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/neumorphism/NeumorphismDemo.tsx?raw"),
};
