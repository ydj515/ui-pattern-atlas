import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const languagePickerPattern: Pattern = {
  slug: "language-picker",

  name: "Language Picker",
  nameKo: "언어 선택",
  aliases: ["언어 설정", "언어 변경", "language switcher", "locale picker"],
  category: "settings",
  summary: "각 언어를 그 언어로 적고 어느 말로도 찾게 하는 목록",
  description:
    "언어 이름을 그 언어로 적고 지금 언어로 된 이름을 함께 두는 선택 목록입니다. 어느 쪽 이름으로 검색해도 찾을 수 있어, 읽지 못하는 언어로 바뀌었을 때도 돌아올 수 있습니다.",
  tags: [...BASE_TAGS, "lang", "radio", "search"],
  loadGuide: () => import("@/entities/pattern/catalog/language-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/language-picker/LanguagePickerDemo").then(
      (m) => m.LanguagePickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/language-picker/LanguagePickerThumbnail").then(
      (m) => m.LanguagePickerThumbnail,
    ),
  sources: [
    {
      fileName: "LanguagePicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/language-picker/LanguagePicker.tsx?raw"),
    },
    {
      fileName: "LanguagePickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/language-picker/LanguagePickerDemo.tsx?raw"),
    },
  ],
};
