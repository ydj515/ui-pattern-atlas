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
  tags: [...BASE_TAGS, "CSS grid", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/calendar-heatmap/guide").then((m) => m.guide),
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
