import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BottomTabBarThumbnail } from "@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarThumbnail";

export const bottomTabBarPattern: Pattern = {
  slug: "bottom-tab-bar",
  name: "Bottom Tab Bar",
  nameKo: "하단 탭 바",
  aliases: ["탭 바", "하단 내비게이션", "tab bar", "bottom navigation"],
  category: "navigation",
  summary: "모바일 주요 화면 전환",
  description:
    "모바일 화면 아래에 3~5개의 주요 화면을 아이콘과 이름으로 늘어놓는 패턴입니다. 엄지가 닿는 곳에 있어 한 손으로도 화면을 오갈 수 있습니다.",
  whenToUse: [
    "모바일 앱의 최상위 화면이 3~5개일 때",
    "화면 사이를 자주 오갈 때",
    "새 소식 개수를 함께 보여 줘야 할 때",
  ],
  whenNotToUse: [
    "화면이 6개 이상일 때(나머지는 더 보기로)",
    "데스크톱 화면(상단 내비게이션이나 사이드바 사용)",
    "화면 안의 보기 전환(탭이나 세그먼트 컨트롤 사용)",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "한 화면 안의 보기 전환" },
    { name: "햄버거 메뉴", slug: "mobile-menu", reason: "메뉴가 많을 때" },
  ],
  accessibility: [
    "아이콘 아래에 항상 이름을 보여 줍니다.",
    '현재 화면은 aria-current="page"이고 색과 굵기로 함께 표시합니다.',
    '배지 숫자는 aria-label에 "새 알림 3개"처럼 넣어 읽어 줍니다.',
    "홈 표시줄을 피하도록 safe-area 여백을 둡니다.",
  ],
  tags: [...BASE_TAGS, "Mobile", "aria-current"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarDemo").then(
      (m) => m.BottomTabBarDemo,
    ),
  Thumbnail: BottomTabBarThumbnail,
  sources: [
    {
      fileName: "BottomTabBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bottom-tab-bar/BottomTabBar.tsx?raw"),
    },
    {
      fileName: "BottomTabBarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarDemo.tsx?raw"),
    },
  ],
};
