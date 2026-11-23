import { type Pattern } from "@/entities/pattern/model/pattern";
import { Inflated3DThumbnail } from "@/entities/pattern/catalog/inflated-three-d/Inflated3DThumbnail";

export const inflatedThreeDPattern: Pattern = {
  slug: "inflated-three-d",
  kind: "concept",
  name: "Inflated 3D",
  nameKo: "인플레이트 3D",
  aliases: ["풍선 글자", "부푼 3D", "inflated type", "puffy letters"],
  category: "typography-style",
  summary: "공기를 넣은 듯 부풀고 둥근 입체 글자",
  description:
    "글자에 공기를 넣은 듯 둥글고 통통한 입체감을 주는 스타일입니다. 흰 외곽선과 아래로 쌓은 그림자로 부푼 두께를 표현합니다.",
  whenToUse: ["귀엽고 친근한 브랜드 로고, 배너", "어린이, 간식, 장난감 관련 화면", "짧은 제목"],
  whenNotToUse: ["진지한 정보 화면", "작은 크기(두께 표현이 뭉개짐)", "글자가 많은 문단"],
  alternatives: [
    { name: "청키", slug: "chunky", reason: "두꺼운 획으로 덩어리감" },
    { name: "3D 돌출", slug: "three-d-extrude", reason: "옆면을 그린 입체" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Inflated 3D"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/inflated-three-d/Inflated3DDemo").then(
      (m) => m.Inflated3DDemo,
    ),
  Thumbnail: Inflated3DThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/inflated-three-d/Inflated3DDemo.tsx?raw"),
};
