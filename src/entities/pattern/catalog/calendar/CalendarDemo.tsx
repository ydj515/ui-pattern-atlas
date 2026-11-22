import { MonthCalendar, type CalendarEvent } from "@/shared/ui/patterns/calendar/MonthCalendar";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const TODAY = new Date(2026, 10, 23);
const EVENTS: readonly CalendarEvent[] = [
  { id: "review", date: "2026-11-03", title: "디자인 리뷰", time: "10:00" },
  { id: "lunch", date: "2026-11-11", title: "팀 점심", time: "12:00" },
  { id: "weekly", date: "2026-11-23", title: "주간 회의", time: "10:00" },
  { id: "one-on-one", date: "2026-11-23", title: "1:1 미팅", time: "15:00" },
  { id: "retro", date: "2026-11-27", title: "출시 회고", time: "16:00" },
];

export function CalendarDemo() {
  return (
    <MonthCalendar
      month={TODAY}
      today={TODAY}
      events={EVENTS}
      emptyText="일정이 없어요"
      countLabel={(count) => `일정 ${count}개`}
      weekdays={WEEKDAYS}
      formatDay={(date) =>
        `${date.getMonth() + 1}월 ${date.getDate()}일 ${WEEKDAYS[date.getDay()]}요일`
      }
      formatMonth={(month) => `${month.getFullYear()}년 ${month.getMonth() + 1}월`}
    />
  );
}
