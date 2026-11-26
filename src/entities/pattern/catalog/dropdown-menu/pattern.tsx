import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dropdownMenuPattern: Pattern = {
  slug: "dropdown-menu",

  name: "Dropdown Menu",
  nameKo: "드롭다운 메뉴",
  aliases: ["드롭다운", "더보기 메뉴", "케밥 메뉴", "액션 메뉴", "menu button", "overflow menu"],
  category: "overlay",
  summary: "버튼을 누르면 펼쳐지는 동작 목록",
  description:
    "버튼 바로 아래에 관련 동작을 목록으로 펼쳐 보여 주는 패턴입니다. 자주 쓰지 않는 동작을 한곳에 모아 화면을 정리하고, 필요할 때만 꺼내 씁니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/dropdown-menu/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/dropdown-menu/DropdownMenuDemo").then(
      (m) => m.DropdownMenuDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/dropdown-menu/DropdownMenuThumbnail").then(
      (m) => m.DropdownMenuThumbnail,
    ),
  sources: [
    {
      fileName: "DropdownMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/dropdown-menu/DropdownMenu.tsx?raw"),
    },
    {
      fileName: "DropdownMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/dropdown-menu/DropdownMenuDemo.tsx?raw"),
    },
  ],
};
