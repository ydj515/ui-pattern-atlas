import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const calendarHeatmapPattern: Pattern = {
  slug: "calendar-heatmap",
  name: "Calendar Heatmap",
  nameKo: "달력 히트맵",
  aliases: ["잔디 그래프", "활동 달력", "기여 그래프", "calendar heatmap", "contribution graph"],
  category: "data-viz",
  summary: "날짜별 값을 달력 칸의 농도로 표시",
  description:
    "한 달이나 한 해를 요일과 주로 나눈 달력 칸에 놓고, 날짜별 값을 한 가지 색의 진하기로 칠합니다. 운동, 기록처럼 꾸준함과 요일 리듬이 보이고, 칸을 가리키거나 화살표로 옮기면 그날의 값을 읽어 줍니다.",
  whenToUse: [
    "습관, 활동 기록의 꾸준함을 보여 줄 때",
    "요일별 리듬을 찾을 때",
    "하루 단위 값이 한 달 이상 있을 때",
  ],
  whenNotToUse: [
    "정확한 값을 비교할 때(막대 그래프 사용)",
    "날짜가 아닌 두 기준의 분포(히트맵 사용)",
    "값이 며칠뿐일 때",
  ],
  alternatives: [
    { name: "히트맵", slug: "heatmap", reason: "요일과 시간처럼 두 기준의 분포를 볼 때" },
    { name: "세로 막대 그래프", slug: "column-chart", reason: "날짜별 값을 정확히 비교할 때" },
  ],
  accessibility: [
    "달력에 포커스를 두고 화살표로 날짜를 옮기면 값을 aria-live로 읽어 줍니다.",
    "값이 없는 날도 쉰 날처럼 글자로 알려 줍니다.",
    "한 가지 색의 밝기로만 크기를 나타내 색약에도 순서가 보입니다.",
  ],
  tags: [...BASE_TAGS, "CSS grid", "aria-live"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/calendar-heatmap/CalendarHeatmapDemo").then(
      (m) => m.CalendarHeatmapDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/calendar-heatmap/CalendarHeatmapThumbnail").then(
      (m) => m.CalendarHeatmapThumbnail,
    ),
  sources: [
    {
      fileName: "CalendarHeatmap.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/calendar-heatmap/CalendarHeatmap.tsx?raw"),
    },
    {
      fileName: "CalendarHeatmapDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/calendar-heatmap/CalendarHeatmapDemo.tsx?raw"),
    },
  ],
};
