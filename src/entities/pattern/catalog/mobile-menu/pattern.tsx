import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const mobileMenuPattern: Pattern = {
  slug: "mobile-menu",
  name: "Mobile Menu",
  nameKo: "햄버거 메뉴",
  aliases: ["햄버거 버튼", "모바일 메뉴", "hamburger menu", "nav drawer"],
  category: "navigation",
  summary: "작은 화면에서 접어 둔 메뉴",
  description:
    "작은 화면에서 사이트 메뉴를 버튼 하나에 접어 두고, 누르면 펼치는 패턴입니다. 화면을 넓게 쓰면서도 모든 메뉴에 닿을 수 있습니다.",
  whenToUse: [
    "작은 화면에서 상단 메뉴가 넘칠 때",
    "자주 쓰지 않는 보조 페이지가 많을 때",
    "웹사이트의 모바일 버전",
  ],
  whenNotToUse: [
    "자주 오가는 주요 화면(하단 탭 바로 늘 보이게)",
    "메뉴가 두세 개뿐일 때(그냥 보여 주기)",
    "넓은 화면",
  ],
  alternatives: [
    { name: "하단 탭 바", slug: "bottom-tab-bar", reason: "주요 화면을 늘 보여 줄 때" },
    { name: "드로어", slug: "drawer", reason: "메뉴를 옆에서 밀어 넣을 때" },
  ],
  accessibility: [
    '버튼 이름이 "메뉴 열기"/"메뉴 닫기"로 바뀌고 aria-expanded와 aria-controls를 가집니다.',
    "열면 첫 링크로 포커스가 가고, Esc나 링크 선택으로 닫으면 버튼으로 돌아옵니다.",
    "메뉴는 이름이 있는 nav 랜드마크입니다.",
    '현재 페이지는 aria-current="page"로 알립니다.',
  ],
  tags: [...BASE_TAGS, "aria-expanded", "Focus management"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/mobile-menu/MobileMenuDemo").then((m) => m.MobileMenuDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/mobile-menu/MobileMenuThumbnail").then(
      (m) => m.MobileMenuThumbnail,
    ),
  sources: [
    {
      fileName: "MobileMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/mobile-menu/MobileMenu.tsx?raw"),
    },
    {
      fileName: "MobileMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/mobile-menu/MobileMenuDemo.tsx?raw"),
    },
  ],
};
