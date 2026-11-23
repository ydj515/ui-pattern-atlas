import { type Pattern } from "@/entities/pattern/model/pattern";
import { RetroGroovyThumbnail } from "@/entities/pattern/catalog/retro-groovy/RetroGroovyThumbnail";

export const retroGroovyPattern: Pattern = {
  slug: "retro-groovy",
  kind: "concept",
  name: "Retro Groovy",
  nameKo: "레트로 그루비",
  aliases: ["그루비 타이포", "70년대 글자", "retro groovy", "70s type"],
  category: "typography-style",
  summary: "두껍고 물결치는 획과 부드러운 곡선",
  description:
    "1970년대 포스터처럼 글자마다 높이와 각도를 물결치듯 달리하고, 주황, 노랑 그림자를 겹치는 스타일입니다.",
  whenToUse: ["빈티지, 음악 페스티벌", "따뜻하고 경쾌한 브랜드", "짧은 제목"],
  whenNotToUse: [
    "읽기 중심 화면",
    "글자를 하나씩 나눠 화면 읽기가 끊길 때(전체 문구를 함께 제공)",
    "진지한 정보",
  ],
  alternatives: [
    { name: "핸드레터링", slug: "hand-lettering", reason: "손글씨 느낌" },
    { name: "키네틱", slug: "kinetic-typography", reason: "움직이는 글자" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Retro Groovy"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/retro-groovy/RetroGroovyDemo").then(
      (m) => m.RetroGroovyDemo,
    ),
  Thumbnail: RetroGroovyThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/retro-groovy/RetroGroovyDemo.tsx?raw"),
};
