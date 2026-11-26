import { type Pattern } from "@/entities/pattern/model/pattern";

export const brutalistTypographyPattern: Pattern = {
  slug: "brutalist-typography",
  kind: "concept",
  name: "Brutalist Typography",
  nameKo: "브루털리즘 타이포그래피",
  aliases: ["브루탈 타이포", "거친 타이포", "brutalist type"],
  category: "typography-style",
  summary: "크고 거친 글자와 강한 절단·겹침",
  description:
    "글자를 지나치게 크게 키우고 행간을 줄여 겹치거나, 색 띠로 잘라 강한 인상을 주는 스타일입니다. 규칙을 일부러 깨 긴장감을 만듭니다.",
  whenToUse: ["전시, 음악, 실험적인 브랜드", "강한 한마디가 필요한 표지", "포스터"],
  whenNotToUse: ["읽는 순서가 중요한 안내", "글자가 겹쳐 뜻이 바뀔 때", "작은 화면"],
  alternatives: [
    {
      name: "네오 브루털리즘 타이포그래피",
      slug: "neo-brutalist-typography",
      reason: "정돈된 두꺼운 테두리",
    },
    { name: "청키", slug: "chunky", reason: "묵직한 획" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Brutalist Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyDemo").then(
      (m) => m.BrutalistTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyThumbnail").then(
      (m) => m.BrutalistTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyDemo.tsx?raw"),
};
