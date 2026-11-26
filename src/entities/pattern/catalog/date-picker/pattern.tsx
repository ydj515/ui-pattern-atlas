import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const datePickerPattern: Pattern = {
  slug: "date-picker",

  name: "Date Picker",
  nameKo: "날짜 선택",
  aliases: ["달력 입력", "데이트피커", "date picker", "calendar input"],
  category: "special-input",
  summary: "달력에서 하루 고르기",
  description:
    "버튼을 누르면 달력이 열리고, 그 달의 날짜를 보며 하루를 고르는 패턴입니다. 요일과 주 단위 흐름을 함께 볼 수 있어 가까운 날짜를 고를 때 편합니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/date-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/date-picker/DatePickerDemo").then((m) => m.DatePickerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/date-picker/DatePickerThumbnail").then(
      (m) => m.DatePickerThumbnail,
    ),
  sources: [
    {
      fileName: "DatePicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/date-picker/DatePicker.tsx?raw"),
    },
    {
      fileName: "DatePickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/date-picker/DatePickerDemo.tsx?raw"),
    },
  ],
};
