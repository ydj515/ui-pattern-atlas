import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CommandPaletteThumbnail } from "@/entities/pattern/catalog/command-palette/CommandPaletteThumbnail";

export const commandPalettePattern: Pattern = {
  slug: "command-palette",
  name: "Command Palette",
  nameKo: "커맨드 팔레트",
  aliases: ["명령 팔레트", "커맨드 메뉴", "⌘K", "Cmd K", "빠른 실행", "command menu"],
  category: "overlay",
  summary: "⌘K로 열어 검색해서 실행하는 명령 창",
  description:
    "키보드 단축키로 창을 열고 하고 싶은 일을 입력하면, 맞는 명령을 찾아 바로 실행하는 패턴입니다. 메뉴 깊숙이 있는 기능도 몇 글자로 찾을 수 있어 숙련된 사용자의 작업 속도를 높입니다.",
  whenToUse: [
    "기능과 화면이 많아 메뉴만으로는 찾기 어려울 때",
    "키보드를 주로 쓰는 숙련된 사용자를 위한 지름길이 필요할 때",
    "문서, 설정, 팀 관리처럼 여러 영역의 동작을 한곳에서 찾게 할 때",
  ],
  whenNotToUse: [
    "기능이 몇 개뿐이라 화면에 바로 보여 줄 수 있을 때",
    "주요 동작을 팔레트 안에만 숨겨 처음 쓰는 사용자가 못 찾게 될 때",
    "모바일이 주 사용 환경일 때",
  ],
  alternatives: [
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "한 대상에 대한 몇 개의 동작" },
    { name: "검색창", reason: "명령이 아니라 콘텐츠를 찾을 때" },
  ],
  accessibility: [
    '입력창은 role="combobox", 목록은 role="listbox"와 그룹(role="group")으로 두고 aria-activedescendant로 선택 항목을 알립니다.',
    "포커스는 입력창에 둔 채 ↑↓로 이동하고 Enter로 실행하며, Esc나 배경 클릭으로 닫습니다.",
    "한글 입력 중의 Enter는 조합 확정으로만 쓰고 명령을 실행하지 않습니다.",
    "단축키와 함께 화면에 여는 버튼도 두어, 단축키를 모르는 사용자도 열 수 있게 합니다.",
  ],
  tags: [...BASE_TAGS, "Combobox", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/command-palette/CommandPaletteDemo").then(
      (m) => m.CommandPaletteDemo,
    ),
  Thumbnail: CommandPaletteThumbnail,
  sources: [
    {
      fileName: "CommandPalette.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/command-palette/CommandPalette.tsx?raw"),
    },
    {
      fileName: "CommandPaletteDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/command-palette/CommandPaletteDemo.tsx?raw"),
    },
  ],
};
