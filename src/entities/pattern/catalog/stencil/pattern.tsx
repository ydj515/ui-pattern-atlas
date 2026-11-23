import { type Pattern } from "@/entities/pattern/model/pattern";
import { StencilThumbnail } from "@/entities/pattern/catalog/stencil/StencilThumbnail";

export const stencilPattern: Pattern = {
  slug: "stencil",
  kind: "concept",
  name: "Stencil",
  nameKo: "스텐실",
  aliases: ["스텐실 글자", "군용 글자", "stencil type"],
  category: "typography-style",
  summary: "판으로 찍어 낸 듯 획을 일부 끊어서 표현",
  description:
    "판을 대고 페인트를 뿌린 것처럼 획 중간이 일정하게 끊겨 있는 스타일입니다. 이 예시는 가로줄 마스크로 획을 끊어 연결부를 만들었습니다.",
  whenToUse: ["군용, 산업, 아웃도어 브랜드", "상자, 표지판 느낌의 연출", "짧은 제목"],
  whenNotToUse: ["작은 크기(끊긴 부분 때문에 읽기 어려움)", "본문", "끊김이 글자 뜻을 바꿀 때"],
  alternatives: [
    { name: "그래피티", slug: "graffiti", reason: "스프레이 거리 느낌" },
    { name: "청키", slug: "chunky", reason: "두꺼운 획" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Stencil"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/stencil/StencilDemo").then((m) => m.StencilDemo),
  Thumbnail: StencilThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/stencil/StencilDemo.tsx?raw"),
};
