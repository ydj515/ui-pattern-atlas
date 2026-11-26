import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const calendarPattern: Pattern = {
  slug: "calendar",

  name: "Calendar",
  nameKo: "캘린더",
  aliases: ["월간 달력", "일정 달력", "month view", "schedule calendar"],
  category: "special-input",
  summary: "월 단위 일정 보기",
  description:
    "한 달을 달력으로 보여 주고 일정이 있는 날에 점을 찍어, 날짜를 누르면 그날 일정을 보여 주는 패턴입니다. 한 달의 흐름과 하루의 세부를 함께 봅니다.",
  tags: [...BASE_TAGS, "aria-current", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/calendar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/calendar/CalendarDemo").then((m) => m.CalendarDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/calendar/CalendarThumbnail").then(
      (m) => m.CalendarThumbnail,
    ),
  sources: [
    {
      fileName: "MonthCalendar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/calendar/MonthCalendar.tsx?raw"),
    },
    {
      fileName: "CalendarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/calendar/CalendarDemo.tsx?raw"),
    },
  ],
};
