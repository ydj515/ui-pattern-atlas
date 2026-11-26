import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sidebarLayoutPattern: Pattern = {
  slug: "sidebar-layout",
  name: "Sidebar Layout",
  nameKo: "사이드바 레이아웃",
  aliases: ["두 단 레이아웃", "메뉴 본문", "two column", "app shell"],
  category: "layout",
  summary: "메뉴와 본문 두 단",
  description:
    "왼쪽에 메뉴, 오른쪽에 본문을 두는 두 단 구성입니다. 좁아지면 메뉴가 본문 위의 가로 줄로 옮겨 갑니다.",
  whenToUse: [
    "설정, 관리 도구, 문서처럼 메뉴가 여러 개인 화면",
    "메뉴를 늘 보여 줘야 할 때",
    "넓은 화면 중심의 서비스",
  ],
  whenNotToUse: [
    "메뉴가 몇 개뿐일 때(상단 내비게이션 사용)",
    "읽기 중심의 콘텐츠",
    "모바일 중심(하단 탭 바 사용)",
  ],
  alternatives: [
    { name: "사이드바", slug: "sidebar-navigation", reason: "메뉴 자체의 구성" },
    { name: "분할 보기", slug: "split-view", reason: "목록과 상세를 나눌 때" },
  ],
  accessibility: [
    "메뉴는 이름이 있는 nav, 본문은 main 랜드마크입니다.",
    "좁아져도 DOM 순서는 메뉴 → 본문 그대로라 읽는 순서가 같습니다.",
    '현재 메뉴는 aria-current="page"로 표시합니다.',
    "컨테이너 쿼리로 놓인 영역 폭에 맞춰 바뀝니다.",
  ],
  tags: [...BASE_TAGS, "Landmark", "Container queries"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/sidebar-layout/SidebarLayoutDemo").then(
      (m) => m.SidebarLayoutDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sidebar-layout/SidebarLayoutThumbnail").then(
      (m) => m.SidebarLayoutThumbnail,
    ),
  sources: [
    {
      fileName: "SidebarLayout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sidebar-layout/SidebarLayout.tsx?raw"),
    },
    {
      fileName: "SidebarLayoutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/sidebar-layout/SidebarLayoutDemo.tsx?raw"),
    },
  ],
};
