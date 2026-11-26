import { type Pattern } from "@/entities/pattern/model/pattern";

export const threeDIconPattern: Pattern = {
  slug: "three-d-icon",
  kind: "concept",
  name: "3D Icon",
  nameKo: "3D 아이콘",
  aliases: ["입체 아이콘", "3D 일러스트 아이콘", "3D icons"],
  category: "design-style",
  summary: "부피와 빛으로 재질을 표현한 아이콘",
  description:
    "화면은 평평하게 두고 아이콘에만 부피, 빛, 반사를 넣어 손에 잡힐 듯한 재질을 표현하는 스타일입니다. 안쪽 그림자와 하이라이트, 색이 번진 바닥 그림자로 입체를 만듭니다.",
  whenToUse: [
    "앱 아이콘, 빈 화면, 기능 소개의 대표 그림",
    "평평한 화면에 눈길을 끌 한 점이 필요할 때",
    "친근한 브랜드 표현",
  ],
  whenNotToUse: [
    "작은 크기의 툴바 아이콘(디테일이 뭉개짐)",
    "아이콘이 많은 목록",
    "다른 아이콘과 스타일이 섞일 때",
  ],
  alternatives: [
    { name: "스큐어모피즘", slug: "skeuomorphism", reason: "화면 전체에 실물 질감을 줄 때" },
    { name: "플랫", slug: "flat-design", reason: "아이콘도 평면으로" },
  ],
  accessibility: [
    "장식 아이콘은 aria-hidden이고 뜻은 글자로 전달합니다.",
    "아이콘 위 기호에 그림자를 더해 대비를 높입니다.",
    "하이라이트 흐림은 장식으로만 씁니다.",
    "버튼 상태는 글자로 알립니다.",
  ],
  tags: ["디자인 스타일", "아이콘"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/three-d-icon/ThreeDIconDemo").then((m) => m.ThreeDIconDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/three-d-icon/ThreeDIconThumbnail").then(
      (m) => m.ThreeDIconThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/three-d-icon/ThreeDIconDemo.tsx?raw"),
};
