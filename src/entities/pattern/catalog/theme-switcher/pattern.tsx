import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const themeSwitcherPattern: Pattern = {
  slug: "theme-switcher",

  name: "Theme Switcher",
  nameKo: "화면 모드 선택",
  aliases: ["다크 모드 설정", "테마 선택", "dark mode toggle", "appearance", "color scheme"],
  category: "settings",
  summary: "시스템 설정이 지금 무엇인지 알려 주는 세 가지 선택",
  description:
    "시스템 설정, 라이트, 다크 가운데 하나를 미리 보기 카드로 고르는 영역입니다. 시스템 설정을 골랐을 때 지금 어느 쪽으로 보이는지 함께 적어, 고른 결과를 바로 알 수 있게 합니다.",
  tags: [...BASE_TAGS, "radio", "prefers-color-scheme", "fieldset"],
  loadGuide: () => import("@/entities/pattern/catalog/theme-switcher/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/theme-switcher/ThemeSwitcherDemo").then(
      (m) => m.ThemeSwitcherDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/theme-switcher/ThemeSwitcherThumbnail").then(
      (m) => m.ThemeSwitcherThumbnail,
    ),
  sources: [
    {
      fileName: "ThemeSwitcher.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/theme-switcher/ThemeSwitcher.tsx?raw"),
    },
    {
      fileName: "ThemeSwitcherDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/theme-switcher/ThemeSwitcherDemo.tsx?raw"),
    },
  ],
};
