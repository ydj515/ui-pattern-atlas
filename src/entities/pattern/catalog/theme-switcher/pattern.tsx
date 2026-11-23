import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ThemeSwitcherThumbnail } from "@/entities/pattern/catalog/theme-switcher/ThemeSwitcherThumbnail";

export const themeSwitcherPattern: Pattern = {
  slug: "theme-switcher",
  name: "Theme Switcher",
  nameKo: "화면 모드 선택",
  aliases: ["다크 모드 설정", "테마 선택", "dark mode toggle", "appearance", "color scheme"],
  category: "settings",
  summary: "시스템 설정이 지금 무엇인지 알려 주는 세 가지 선택",
  description:
    "시스템 설정, 라이트, 다크 가운데 하나를 미리 보기 카드로 고르는 영역입니다. 시스템 설정을 골랐을 때 지금 어느 쪽으로 보이는지 함께 적어, 고른 결과를 바로 알 수 있게 합니다.",
  whenToUse: [
    "다크 모드를 지원하는 서비스",
    "기기 설정을 따르는 기본값을 둘 때",
    "고르기 전에 모습을 보여 주고 싶을 때",
  ],
  whenNotToUse: [
    "라이트와 다크만 오가는 아이콘 버튼 하나로 충분할 때",
    "테마가 하나뿐일 때",
    "색 말고 글자 크기 같은 다른 설정",
  ],
  alternatives: [
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "짧은 선택지를 한 줄로 고를 때" },
    { name: "라디오 그룹", slug: "radio-group", reason: "선택지 하나를 고르는 기본 형태" },
  ],
  accessibility: [
    "fieldset과 legend로 묶은 라디오 버튼이라 방향키로 옮겨 다닙니다.",
    "미리 보기는 장식이라 aria-hidden입니다.",
    "시스템 설정의 지금 상태를 글자로 함께 읽어 줍니다.",
  ],
  tags: [...BASE_TAGS, "radio", "prefers-color-scheme", "fieldset"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/theme-switcher/ThemeSwitcherDemo").then(
      (m) => m.ThemeSwitcherDemo,
    ),
  Thumbnail: ThemeSwitcherThumbnail,
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
