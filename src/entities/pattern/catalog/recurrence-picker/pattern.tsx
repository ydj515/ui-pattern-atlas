import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const recurrencePickerPattern: Pattern = {
  slug: "recurrence-picker",

  name: "Recurrence Picker",
  nameKo: "반복 설정",
  aliases: ["반복 일정", "주기 설정", "recurring event", "repeat rule"],
  category: "special-input",
  summary: "반복 주기와 요일, 종료 조건을 설정",
  description:
    "얼마나 자주, 어느 요일에, 언제까지 반복할지를 나눠 고르고, 설정한 규칙을 한 문장으로 보여 주는 패턴입니다. 복잡한 규칙도 읽고 확인할 수 있습니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Scheduling"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/recurrence-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/recurrence-picker/RecurrencePickerDemo").then(
      (m) => m.RecurrencePickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/recurrence-picker/RecurrencePickerThumbnail").then(
      (m) => m.RecurrencePickerThumbnail,
    ),
  sources: [
    {
      fileName: "RecurrencePicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/recurrence-picker/RecurrencePicker.tsx?raw"),
    },
    {
      fileName: "RecurrencePickerDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/recurrence-picker/RecurrencePickerDemo.tsx?raw"),
    },
  ],
};
