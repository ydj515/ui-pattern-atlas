import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const magazineLayoutPattern: Pattern = {
  slug: "magazine-layout",
  name: "Magazine Layout",
  nameKo: "매거진 레이아웃",
  aliases: ["에디토리얼 레이아웃", "뉴스 레이아웃", "editorial layout", "lead story"],
  category: "layout",
  summary: "대표 콘텐츠와 보조 콘텐츠를 크기와 위치로 구분",
  description:
    "대표 기사 하나를 크게, 나머지를 작게 옆에 쌓아 크기와 위치로 중요도를 보여 주는 편집형 레이아웃입니다. 좁아지면 대표 기사부터 한 줄로 쌓입니다.",
  whenToUse: ["매거진, 뉴스, 블로그 첫 화면", "대표 콘텐츠가 분명할 때", "이미지가 있는 콘텐츠"],
  whenNotToUse: [
    "모든 글이 같은 중요도일 때(카드 그리드 사용)",
    "시간순 목록이 중요한 경우(리스트 사용)",
    "이미지가 없는 글",
  ],
  alternatives: [
    { name: "카드 그리드", slug: "card-grid", reason: "같은 중요도의 글" },
    { name: "벤토 그리드", slug: "bento-grid", reason: "기능 소개" },
  ],
  accessibility: [
    "DOM 순서가 대표 기사 → 보조 기사라 보이는 순서와 같습니다.",
    "제목이 링크이고 각 기사는 article로 묶습니다.",
    "이미지는 장식이라 aria-hidden이고 제목으로 내용을 전합니다.",
    "좁은 화면에서는 한 열로 쌓아 확대해도 읽기 쉽습니다.",
  ],
  tags: [...BASE_TAGS, "Editorial", "Container queries"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/magazine-layout/MagazineLayoutDemo").then(
      (m) => m.MagazineLayoutDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/magazine-layout/MagazineLayoutThumbnail").then(
      (m) => m.MagazineLayoutThumbnail,
    ),
  sources: [
    {
      fileName: "MagazineLayout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/magazine-layout/MagazineLayout.tsx?raw"),
    },
    {
      fileName: "MagazineLayoutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/magazine-layout/MagazineLayoutDemo.tsx?raw"),
    },
  ],
};
