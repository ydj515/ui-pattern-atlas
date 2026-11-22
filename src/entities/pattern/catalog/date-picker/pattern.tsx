import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DatePickerThumbnail } from "@/entities/pattern/catalog/date-picker/DatePickerThumbnail";

export const datePickerPattern: Pattern = {
  slug: "date-picker",
  name: "Date Picker",
  nameKo: "날짜 선택",
  aliases: ["달력 입력", "데이트피커", "date picker", "calendar input"],
  category: "special-input",
  summary: "달력에서 하루 고르기",
  description:
    "버튼을 누르면 달력이 열리고, 그 달의 날짜를 보며 하루를 고르는 패턴입니다. 요일과 주 단위 흐름을 함께 볼 수 있어 가까운 날짜를 고를 때 편합니다.",
  whenToUse: [
    "방문, 예약, 배송처럼 가까운 날짜를 고를 때",
    "요일이 중요할 때",
    "고를 수 없는 날짜(지난 날, 휴일)를 보여 줘야 할 때",
  ],
  whenNotToUse: [
    "생년월일처럼 먼 날짜(날짜 직접 입력 사용)",
    "오늘, 내일처럼 몇 개로 충분할 때(빠른 날짜 선택 칩 사용)",
    "기간을 고를 때(기간 선택 사용)",
  ],
  alternatives: [
    { name: "날짜 직접 입력", slug: "date-input", reason: "먼 날짜를 빠르게 입력할 때" },
    { name: "빠른 날짜 선택 칩", slug: "quick-date-chips", reason: "자주 쓰는 날짜 몇 개" },
    { name: "기간 선택", slug: "date-range-picker", reason: "시작일과 종료일을 함께 고를 때" },
  ],
  accessibility: [
    '버튼은 aria-haspopup="dialog"로 달력을 열고, 닫으면 포커스가 버튼으로 돌아옵니다.',
    '달력은 role="grid"이며 화살표로 하루, 일주일씩, Page Up/Down으로 한 달씩 이동합니다.',
    '날짜 버튼 이름은 "11월 25일 (수)"처럼 전체 날짜이고, 오늘은 aria-current="date"입니다.',
    "고를 수 없는 날은 aria-disabled로 알리고 Esc로 달력을 닫습니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/date-picker/DatePickerDemo").then((m) => m.DatePickerDemo),
  Thumbnail: DatePickerThumbnail,
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
