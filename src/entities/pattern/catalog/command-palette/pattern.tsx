import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const commandPalettePattern: Pattern = {
  slug: "command-palette",

  name: "Command Palette",
  nameKo: "커맨드 팔레트",
  aliases: ["명령 팔레트", "커맨드 메뉴", "⌘K", "Cmd K", "빠른 실행", "command menu"],
  category: "overlay",
  summary: "⌘K로 열어 검색해서 실행하는 명령 창",
  description:
    "키보드 단축키로 창을 열고 하고 싶은 일을 입력하면, 맞는 명령을 찾아 바로 실행하는 패턴입니다. 메뉴 깊숙이 있는 기능도 몇 글자로 찾을 수 있어 숙련된 사용자의 작업 속도를 높입니다.",
  tags: [...BASE_TAGS, "Combobox", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/command-palette/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/command-palette/CommandPaletteDemo").then(
      (m) => m.CommandPaletteDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/command-palette/CommandPaletteThumbnail").then(
      (m) => m.CommandPaletteThumbnail,
    ),
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
