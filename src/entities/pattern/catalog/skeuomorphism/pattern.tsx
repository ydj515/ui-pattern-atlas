import { type Pattern } from "@/entities/pattern/model/pattern";
import { SkeuomorphismThumbnail } from "@/entities/pattern/catalog/skeuomorphism/SkeuomorphismThumbnail";

export const skeuomorphismPattern: Pattern = {
  slug: "skeuomorphism",
  kind: "concept",
  name: "Skeuomorphism",
  nameKo: "스큐어모피즘",
  aliases: ["실물 흉내", "사실적 디자인", "skeuomorphic"],
  category: "design-style",
  summary: "실제 물건을 흉내 낸 질감",
  description:
    "가죽, 금속, 레코드판처럼 실제 물건의 재질과 빛을 그대로 흉내 내는 스타일입니다. 볼록한 광택 버튼과 눌리면 안으로 들어가는 그림자로 물건을 다루는 느낌을 줍니다.",
  whenToUse: [
    "실제 물건의 쓰임을 그대로 옮긴 화면(계산기, 녹음기)",
    "새로운 디지털 개념을 익숙한 물건으로 설명할 때",
    "향수를 주는 브랜드 표현",
  ],
  whenNotToUse: [
    "정보가 많은 업무 화면(장식이 내용을 가림)",
    "화면 크기가 다양한 반응형 서비스",
    "질감 이미지 때문에 로딩이 무거워질 때",
  ],
  alternatives: [
    { name: "플랫", slug: "flat-design", reason: "질감을 모두 뺀 면" },
    { name: "3D 아이콘", slug: "three-d-icon", reason: "아이콘에만 입체를 줄 때" },
  ],
  accessibility: [
    "질감 위 글자에는 그림자를 더해도 대비를 따로 확인합니다.",
    "광택과 눌림 외에 글자로 상태를 알립니다.",
    "장식 이미지는 aria-hidden입니다.",
    "포커스 링을 보여 줍니다.",
  ],
  tags: ["디자인 스타일", "질감"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/skeuomorphism/SkeuomorphismDemo").then(
      (m) => m.SkeuomorphismDemo,
    ),
  Thumbnail: SkeuomorphismThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/skeuomorphism/SkeuomorphismDemo.tsx?raw"),
};
