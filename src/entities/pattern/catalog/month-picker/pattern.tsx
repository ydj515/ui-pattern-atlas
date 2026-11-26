import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const monthPickerPattern: Pattern = {
  slug: "month-picker",

  name: "Month Picker",
  nameKo: "월 선택",
  aliases: ["연월 선택", "월별 선택", "month select", "year month"],
  category: "special-input",
  summary: "일자 없이 연도와 월만 선택",
  description:
    "연도를 넘기고 열두 달 중 하나를 눌러 연도와 월만 고르는 패턴입니다. 정산, 명세서, 월간 보고서처럼 날짜가 필요 없는 곳에 씁니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Reports"],
  loadGuide: () => import("@/entities/pattern/catalog/month-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/month-picker/MonthPickerDemo").then(
      (m) => m.MonthPickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/month-picker/MonthPickerThumbnail").then(
      (m) => m.MonthPickerThumbnail,
    ),
  sources: [
    {
      fileName: "MonthPicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/month-picker/MonthPicker.tsx?raw"),
    },
    {
      fileName: "MonthPickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/month-picker/MonthPickerDemo.tsx?raw"),
    },
  ],
};
