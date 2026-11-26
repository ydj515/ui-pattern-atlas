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
  whenToUse: [
    "반복 일정, 정기 결제, 알림 주기",
    "요일을 여러 개 골라야 할 때",
    "끝나는 조건이 필요할 때",
  ],
  whenNotToUse: [
    "매일, 매주 같은 몇 가지면 충분할 때(셀렉트 하나로 충분)",
    "규칙이 아주 복잡할 때(고급 설정으로 따로 두기)",
    "한 번만 일어나는 일정",
  ],
  alternatives: [{ name: "셀렉트", slug: "select", reason: "정해진 주기 몇 개" }],
  accessibility: [
    "요일은 aria-pressed 버튼 묶음이고, 매주일 때만 보입니다.",
    "종료 조건은 fieldset의 radio이며 횟수 입력에 따로 이름이 있습니다.",
    "설정한 규칙을 문장으로 보여 주고 aria-live로 바뀔 때마다 알립니다.",
    "주기는 기본 select로 고릅니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Scheduling"],
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
