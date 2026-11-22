import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SidebarNavigationThumbnail } from "@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationThumbnail";

export const sidebarNavigationPattern: Pattern = {
  slug: "sidebar-navigation",
  name: "Sidebar Navigation",
  nameKo: "사이드바",
  aliases: ["왼쪽 메뉴", "LNB", "사이드 메뉴", "side nav", "app sidebar"],
  category: "navigation",
  summary: "왼쪽에 고정된 메뉴",
  description:
    "화면 왼쪽에 세로로 고정해 두는 메뉴입니다. 항목이 많아도 한눈에 보이고, 관련 항목은 그룹으로 접었다 펼 수 있습니다. 관리 도구나 업무용 앱에서 자주 씁니다.",
  whenToUse: [
    "메뉴 항목이 많은 앱이나 관리 도구",
    "섹션 사이를 자주 오가야 할 때",
    "하위 메뉴를 그룹으로 묶어야 할 때",
  ],
  whenNotToUse: [
    "메뉴가 몇 개뿐인 웹사이트(상단 내비게이션 사용)",
    "작은 화면(햄버거 메뉴나 하단 탭 바 사용)",
    "읽기 중심 콘텐츠 페이지",
  ],
  alternatives: [
    { name: "상단 내비게이션", slug: "navbar", reason: "메뉴가 적을 때" },
    { name: "트리 뷰", reason: "파일처럼 깊게 중첩된 구조" },
  ],
  accessibility: [
    "그룹 제목은 aria-expanded를 가진 버튼이라 하위 메뉴를 펼치고 접을 수 있습니다.",
    "현재 페이지가 들어 있는 그룹은 처음부터 펼쳐 둡니다.",
    '현재 페이지는 aria-current="page"와 채워진 배경으로 표시합니다.',
    "nav에 이름을 붙여 다른 내비게이션과 구분합니다.",
  ],
  tags: [...BASE_TAGS, "aria-current", "Disclosure"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationDemo").then(
      (m) => m.SidebarNavigationDemo,
    ),
  Thumbnail: SidebarNavigationThumbnail,
  sources: [
    {
      fileName: "SidebarNavigation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sidebar-navigation/SidebarNavigation.tsx?raw"),
    },
    {
      fileName: "SidebarNavigationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationDemo.tsx?raw"),
    },
  ],
};
