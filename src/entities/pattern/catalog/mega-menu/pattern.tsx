import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const megaMenuPattern: Pattern = {
  slug: "mega-menu",

  name: "Mega Menu",
  nameKo: "메가 메뉴",
  aliases: ["확장 메뉴", "드롭다운 내비게이션", "mega dropdown", "flyout menu"],
  category: "navigation",
  summary: "펼치면 여러 열이 나오는 메뉴",
  description:
    "상단 메뉴 항목을 누르면 여러 열로 정리한 하위 링크가 넓게 펼쳐지는 패턴입니다. 제품과 솔루션처럼 하위 페이지가 많은 사이트에서 한 번에 구조를 보여 줍니다.",
  tags: [...BASE_TAGS, "Disclosure", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/mega-menu/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/mega-menu/MegaMenuDemo").then((m) => m.MegaMenuDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/mega-menu/MegaMenuThumbnail").then(
      (m) => m.MegaMenuThumbnail,
    ),
  sources: [
    {
      fileName: "MegaMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/mega-menu/MegaMenu.tsx?raw"),
    },
    {
      fileName: "MegaMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/mega-menu/MegaMenuDemo.tsx?raw"),
    },
  ],
};
