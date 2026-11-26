import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const timePickerPattern: Pattern = {
  slug: "time-picker",
  name: "Time Picker",
  nameKo: "시간 선택",
  aliases: ["시각 선택", "시 분 선택", "time input", "time select"],
  category: "special-input",
  summary: "시와 분 고르기",
  description:
    "시와 분을 각각 골라 시간을 정하는 패턴입니다. 영업시간처럼 가능한 범위와 10분 단위처럼 정해진 간격만 보여 줘 잘못된 시간을 입력할 일을 줄입니다.",
  whenToUse: [
    "픽업, 방문처럼 정해진 간격의 시간",
    "영업시간처럼 고를 수 있는 범위가 정해져 있을 때",
    "폼 안에서 다른 입력과 같은 모양이 필요할 때",
  ],
  whenNotToUse: [
    "예약 가능 여부가 시간마다 다를 때(시간 슬롯 사용)",
    "알람처럼 휴대폰에서 굴려 고르는 화면(휠 피커 사용)",
    "분 단위까지 자유롭게 입력할 때(input type=time)",
  ],
  alternatives: [
    { name: "시간 슬롯", slug: "time-slots", reason: "예약 가능한 시간만 골라야 할 때" },
    { name: "휠 피커", slug: "wheel-picker", reason: "모바일에서 굴려 고를 때" },
  ],
  accessibility: [
    "fieldset과 legend로 묶고, 시와 분 select에 각각 숨긴 레이블을 둡니다.",
    "기본 select라 휴대폰에서는 운영체제의 선택 화면이 열립니다.",
    "고를 수 있는 값만 보여 줘 오류 문구가 필요 없습니다.",
    "선택한 시간을 문장으로 다시 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "Native select", "fieldset"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/time-picker/TimePickerDemo").then((m) => m.TimePickerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/time-picker/TimePickerThumbnail").then(
      (m) => m.TimePickerThumbnail,
    ),
  sources: [
    {
      fileName: "TimePicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/time-picker/TimePicker.tsx?raw"),
    },
    {
      fileName: "TimePickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/time-picker/TimePickerDemo.tsx?raw"),
    },
  ],
};
