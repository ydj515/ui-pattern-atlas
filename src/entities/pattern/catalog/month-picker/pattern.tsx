import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { MonthPickerThumbnail } from "@/entities/pattern/catalog/month-picker/MonthPickerThumbnail";

export const monthPickerPattern: Pattern = {
  slug: "month-picker",
  name: "Month Picker",
  nameKo: "월 선택",
  aliases: ["연월 선택", "월별 선택", "month select", "year month"],
  category: "special-input",
  summary: "일자 없이 연도와 월만 선택",
  description:
    "연도를 넘기고 열두 달 중 하나를 눌러 연도와 월만 고르는 패턴입니다. 정산, 명세서, 월간 보고서처럼 날짜가 필요 없는 곳에 씁니다.",
  whenToUse: [
    "월별 정산, 청구서, 보고서",
    "카드 유효기간처럼 연월만 필요할 때",
    "아직 오지 않은 달은 고를 수 없어야 할 때",
  ],
  whenNotToUse: [
    "날짜까지 필요할 때(날짜 선택 사용)",
    "최근 몇 달만 보면 될 때(셀렉트나 칩 사용)",
    "연도 범위가 아주 넓을 때",
  ],
  alternatives: [
    { name: "셀렉트", slug: "select", reason: "최근 몇 달 중에서만 고를 때" },
    { name: "날짜 선택", slug: "date-picker", reason: "날짜까지 고를 때" },
  ],
  accessibility: [
    '달 버튼 이름에 연도를 함께 넣고("2026년 10월") aria-pressed로 선택을 알립니다.',
    "아직 오지 않은 달과 다음 해 버튼은 disabled로 둡니다.",
    "연도 표시는 aria-live로 바뀐 연도를 읽어 줍니다.",
    "이전 해, 다음 해 버튼 이름에 이동할 연도를 넣습니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Reports"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/month-picker/MonthPickerDemo").then(
      (m) => m.MonthPickerDemo,
    ),
  Thumbnail: MonthPickerThumbnail,
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
