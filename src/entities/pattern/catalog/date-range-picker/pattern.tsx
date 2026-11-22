import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DateRangePickerThumbnail } from "@/entities/pattern/catalog/date-range-picker/DateRangePickerThumbnail";

export const dateRangePickerPattern: Pattern = {
  slug: "date-range-picker",
  name: "Date Range Picker",
  nameKo: "기간 선택",
  aliases: ["체크인 체크아웃", "기간 달력", "date range", "booking calendar"],
  category: "special-input",
  summary: "시작일과 종료일 고르기",
  description:
    "달력에서 시작일과 종료일을 차례로 눌러 기간을 고르는 패턴입니다. 숙소 체크인과 체크아웃처럼 두 날짜와 그 사이 기간을 함께 보여 줍니다.",
  whenToUse: [
    "숙소, 렌터카처럼 기간을 예약할 때",
    "기간 길이(몇 박)가 중요할 때",
    "고를 수 없는 날을 함께 보여 줘야 할 때",
  ],
  whenNotToUse: [
    "하루만 고를 때(날짜 선택 사용)",
    "이번 달, 지난 7일처럼 정해진 기간(칩이나 셀렉트 사용)",
    "몇 년에 걸친 긴 기간(날짜 직접 입력 두 칸 사용)",
  ],
  alternatives: [{ name: "날짜 선택", slug: "date-picker", reason: "하루만 고를 때" }],
  accessibility: [
    '날짜 버튼 이름에 "체크인", "체크아웃", "숙박" 같은 역할을 붙여 기간을 글로 알립니다.',
    "시작일과 종료일은 aria-pressed로 선택 상태를 알립니다.",
    "아래 요약 문구가 aria-live로 다음에 고를 날짜와 결과를 알려 줍니다.",
    "지난 날짜는 disabled로 둡니다.",
  ],
  tags: [...BASE_TAGS, "Booking", "aria-live"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/date-range-picker/DateRangePickerDemo").then(
      (m) => m.DateRangePickerDemo,
    ),
  Thumbnail: DateRangePickerThumbnail,
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
