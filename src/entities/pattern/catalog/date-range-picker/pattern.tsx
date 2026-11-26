import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dateRangePickerPattern: Pattern = {
  slug: "date-range-picker",

  name: "Date Range Picker",
  nameKo: "기간 선택",
  aliases: ["체크인 체크아웃", "기간 달력", "date range", "booking calendar"],
  category: "special-input",
  summary: "시작일과 종료일 고르기",
  description:
    "달력에서 시작일과 종료일을 차례로 눌러 기간을 고르는 패턴입니다. 숙소 체크인과 체크아웃처럼 두 날짜와 그 사이 기간을 함께 보여 줍니다.",
  tags: [...BASE_TAGS, "Booking", "aria-live"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/date-range-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/date-range-picker/DateRangePickerDemo").then(
      (m) => m.DateRangePickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/date-range-picker/DateRangePickerThumbnail").then(
      (m) => m.DateRangePickerThumbnail,
    ),
  sources: [
    {
      fileName: "DateRangePicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/date-range-picker/DateRangePicker.tsx?raw"),
    },
    {
      fileName: "DateRangePickerDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/date-range-picker/DateRangePickerDemo.tsx?raw"),
    },
  ],
};
