import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NavbarThumbnail } from "@/entities/pattern/catalog/navbar/NavbarThumbnail";

export const navbarPattern: Pattern = {
  slug: "navbar",
  name: "Navbar",
  nameKo: "상단 내비게이션",
  aliases: ["헤더 메뉴", "GNB", "상단 메뉴", "navigation bar", "header nav"],
  category: "navigation",
  summary: "사이트 전체 메뉴",
  description:
    "모든 페이지 위에 같은 자리에 두는 사이트 메뉴입니다. 로고, 몇 개의 주요 링크, 오른쪽의 대표 행동으로 이루어지고, 지금 보고 있는 페이지를 표시합니다.",
  whenToUse: [
    "주요 페이지가 다섯 개 안팎인 웹사이트",
    "어느 페이지에서나 다른 섹션으로 바로 가야 할 때",
    "로그인, 시작하기 같은 대표 행동을 늘 보여 줄 때",
  ],
  whenNotToUse: [
    "메뉴가 많고 계층이 깊을 때(사이드바나 메가 메뉴 사용)",
    "작은 화면(햄버거 메뉴로 접기)",
    "앱의 주요 화면 전환(하단 탭 바 사용)",
  ],
  alternatives: [
    { name: "사이드바", slug: "sidebar-navigation", reason: "메뉴가 많은 앱" },
    { name: "햄버거 메뉴", slug: "mobile-menu", reason: "작은 화면" },
    { name: "메가 메뉴", slug: "mega-menu", reason: "하위 페이지가 많을 때" },
  ],
  accessibility: [
    'nav 랜드마크에 이름("주 메뉴")을 붙여 다른 내비게이션과 구분합니다.',
    '현재 페이지는 aria-current="page"와 밑줄로 표시해 색에만 의존하지 않습니다.',
    "링크는 실제 a 요소라 새 탭 열기 같은 기본 동작이 됩니다.",
    "키보드 포커스 링이 보입니다.",
  ],
  tags: [...BASE_TAGS, "aria-current", "nav landmark"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/navbar/NavbarDemo").then((m) => m.NavbarDemo),
  Thumbnail: NavbarThumbnail,
  sources: [
    {
      fileName: "Navbar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/navbar/Navbar.tsx?raw"),
    },
    {
      fileName: "NavbarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/navbar/NavbarDemo.tsx?raw"),
    },
  ],
};
