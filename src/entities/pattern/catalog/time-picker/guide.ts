import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
