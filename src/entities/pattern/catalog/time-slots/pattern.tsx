import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const timeSlotsPattern: Pattern = {
  slug: "time-slots",

  name: "Time Slots",
  nameKo: "시간 슬롯",
  aliases: ["예약 시간 선택", "타임 슬롯", "booking slots", "appointment times"],
  category: "special-input",
  summary: "예약 가능한 시간대 중 하나를 선택",
  description:
    "예약할 수 있는 시간을 버튼 격자로 보여 주고, 이미 찬 시간은 마감으로 표시하는 패턴입니다. 고르면 예약 버튼이 고른 시간을 이름에 담아 실수를 줄입니다.",
  tags: [...BASE_TAGS, "Native radio", "Booking"],
  loadGuide: () => import("@/entities/pattern/catalog/time-slots/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/time-slots/TimeSlotsDemo").then((m) => m.TimeSlotsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/time-slots/TimeSlotsThumbnail").then(
      (m) => m.TimeSlotsThumbnail,
    ),
  sources: [
    {
      fileName: "TimeSlots.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/time-slots/TimeSlots.tsx?raw"),
    },
    {
      fileName: "TimeSlotsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/time-slots/TimeSlotsDemo.tsx?raw"),
    },
  ],
};
