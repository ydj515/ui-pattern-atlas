import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const timePickerPattern: Pattern = {
  slug: "time-picker",

  name: "Time Picker",
  nameKo: "시간 선택",
  aliases: ["시각 선택", "시 분 선택", "time input", "time select"],
  category: "special-input",
  summary: "시와 분 고르기",
  description:
    "시와 분을 각각 골라 시간을 정하는 패턴입니다. 영업시간처럼 가능한 범위와 10분 단위처럼 정해진 간격만 보여 줘 잘못된 시간을 입력할 일을 줄입니다.",
  tags: [...BASE_TAGS, "Native select", "fieldset"],
  loadGuide: () => import("@/entities/pattern/catalog/time-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/time-picker/TimePickerDemo").then((m) => m.TimePickerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/time-picker/TimePickerThumbnail").then(
      (m) => m.TimePickerThumbnail,
    ),
  sources: [
    {
      fileName: "TimePicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/time-picker/TimePicker.tsx?raw"),
    },
    {
      fileName: "TimePickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/time-picker/TimePickerDemo.tsx?raw"),
    },
  ],
};
