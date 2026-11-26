import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fullBleedPattern: Pattern = {
  slug: "full-bleed",
  name: "Full Bleed",
  nameKo: "풀블리드",
  aliases: ["가장자리까지", "와이드 이미지", "edge to edge", "breakout"],
  category: "layout",
  summary: "이미지나 배경을 화면 가장자리까지 확장",
  description:
    "글은 읽기 좋은 폭에 두고, 사진이나 배경만 화면 가장자리까지 넓게 펼치는 패턴입니다. 이름 붙인 그리드 줄을 써서 음수 여백 없이 만듭니다.",
  whenToUse: [
    "기사 중간의 큰 사진, 지도, 인용 배경",
    "글 폭은 좁게 유지하면서 시각적 쉼표를 줄 때",
    "랜딩 페이지의 섹션 배경",
  ],
  whenNotToUse: [
    "사진이 작아 늘리면 흐려질 때",
    "글 폭이 이미 화면 전체일 때",
    "표나 코드처럼 넓어지면 읽기 어려운 내용",
  ],
  alternatives: [{ name: "히어로 섹션", slug: "hero-section", reason: "첫 화면의 큰 비주얼" }],
  accessibility: [
    "글은 읽기 좋은 폭(약 60자)을 지켜 줄이 너무 길어지지 않습니다.",
    "100vw를 쓰지 않아 가로 스크롤바가 생기지 않습니다.",
    "장식 이미지는 aria-hidden, 정보가 있는 이미지는 대체 텍스트를 둡니다.",
    "DOM 순서는 그대로라 읽는 흐름이 끊기지 않습니다.",
  ],
  tags: [...BASE_TAGS, "CSS grid", "Typography"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/full-bleed/FullBleedDemo").then((m) => m.FullBleedDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/full-bleed/FullBleedThumbnail").then(
      (m) => m.FullBleedThumbnail,
    ),
  sources: [
    {
      fileName: "FullBleed.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/full-bleed/FullBleed.tsx?raw"),
    },
    {
      fileName: "FullBleedDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/full-bleed/FullBleedDemo.tsx?raw"),
    },
  ],
};
