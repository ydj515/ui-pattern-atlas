import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DropdownMenuThumbnail } from "@/entities/pattern/catalog/dropdown-menu/DropdownMenuThumbnail";

export const dropdownMenuPattern: Pattern = {
  slug: "dropdown-menu",
  name: "Dropdown Menu",
  nameKo: "드롭다운 메뉴",
  aliases: ["드롭다운", "더보기 메뉴", "케밥 메뉴", "액션 메뉴", "menu button", "overflow menu"],
  category: "overlay",
  summary: "버튼을 누르면 펼쳐지는 동작 목록",
  description:
    "버튼 바로 아래에 관련 동작을 목록으로 펼쳐 보여 주는 패턴입니다. 자주 쓰지 않는 동작을 한곳에 모아 화면을 정리하고, 필요할 때만 꺼내 씁니다.",
  whenToUse: [
    "항목마다 이름 바꾸기, 복제, 삭제처럼 여러 동작을 붙여야 할 때",
    "공간이 좁아 동작 버튼을 모두 펼쳐 둘 수 없을 때",
    "자주 쓰지 않는 보조 동작을 숨겨 주요 동작을 돋보이게 할 때",
  ],
  whenNotToUse: [
    "값 하나를 고르는 입력일 때(셀렉트나 라디오 그룹 사용)",
    "가장 자주 쓰는 동작까지 메뉴 안에 숨기게 될 때",
    "동작이 두 개뿐이라 버튼으로 바로 보여 줄 수 있을 때",
  ],
  alternatives: [
    {
      name: "컨텍스트 메뉴",
      slug: "context-menu",
      reason: "항목을 우클릭하거나 길게 눌러 여는 같은 동작 목록",
    },
    {
      name: "바텀시트",
      slug: "bottom-sheet",
      reason: "모바일에서 손이 닿기 쉬운 아래쪽에 동작을 모을 때",
    },
    { name: "셀렉트", reason: "동작이 아니라 값을 하나 고를 때" },
  ],
  accessibility: [
    '트리거 버튼에 aria-haspopup="menu"와 aria-expanded를 주고, 메뉴는 role="menu", 항목은 role="menuitem"으로 둡니다.',
    "Enter·Space·↓로 열면 첫 항목, ↑로 열면 마지막 항목에 포커스가 가고 ↑↓·Home·End로 이동합니다.",
    "글자를 입력하면 그 글자로 시작하는 다음 항목으로 이동하고, 비활성 항목은 건너뜁니다.",
    "Esc로 닫으면 트리거로 포커스가 돌아가며, 아이콘만 있는 트리거에는 aria-label을 줍니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/dropdown-menu/DropdownMenuDemo").then(
      (m) => m.DropdownMenuDemo,
    ),
  Thumbnail: DropdownMenuThumbnail,
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
