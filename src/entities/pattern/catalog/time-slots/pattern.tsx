import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TimeSlotsThumbnail } from "@/entities/pattern/catalog/time-slots/TimeSlotsThumbnail";

export const timeSlotsPattern: Pattern = {
  slug: "time-slots",
  name: "Time Slots",
  nameKo: "시간 슬롯",
  aliases: ["예약 시간 선택", "타임 슬롯", "booking slots", "appointment times"],
  category: "special-input",
  summary: "예약 가능한 시간대 중 하나를 선택",
  description:
    "예약할 수 있는 시간을 버튼 격자로 보여 주고, 이미 찬 시간은 마감으로 표시하는 패턴입니다. 고르면 예약 버튼이 고른 시간을 이름에 담아 실수를 줄입니다.",
  whenToUse: [
    "미용실, 병원, 상담처럼 시간 단위로 예약받을 때",
    "시간마다 예약 가능 여부가 다를 때",
    "하루 시간대가 열 개 남짓일 때",
  ],
  whenNotToUse: [
    "아무 시간이나 정할 수 있을 때(시간 선택 사용)",
    "시간대가 아주 많을 때(오전, 오후로 나눠 보여 주기)",
    "여러 시간을 이어서 골라야 할 때",
  ],
  alternatives: [
    { name: "시간 선택", slug: "time-picker", reason: "가능 여부와 상관없이 시간을 정할 때" },
  ],
  accessibility: [
    "각 시간은 기본 radio라 화살표 키로 이동하고, fieldset legend가 날짜를 알려 줍니다.",
    '찬 시간은 disabled이며 "마감"을 글로 보여 줍니다.',
    '예약 버튼 이름에 고른 시간을 넣습니다("11:00 예약하기").',
    '예약 결과는 role="status"로 알립니다.',
  ],
  tags: [...BASE_TAGS, "Native radio", "Booking"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/time-slots/TimeSlotsDemo").then((m) => m.TimeSlotsDemo),
  Thumbnail: TimeSlotsThumbnail,
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
