import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "카드, 아이콘, 썸네일처럼 가로 공간이 좁은 곳",
    "백업, 동기화처럼 진행률을 정확히 알 수 있는 작업",
    "여러 항목의 진행 상태를 나란히 보여 줄 때",
  ],
  whenNotToUse: [
    "진행률을 알 수 없는 작업(스피너 사용)",
    "넓은 영역에서 정확한 비교가 필요할 때(진행 바가 더 읽기 쉽습니다)",
    "목표 대비 달성률처럼 진행이 아닌 수치(도넛 차트 사용)",
  ],
  alternatives: [
    { name: "프로그레스 바", slug: "progress-bar", reason: "가로 공간이 충분할 때" },
    { name: "스피너", slug: "spinner", reason: "얼마나 남았는지 알 수 없을 때" },
  ],
  accessibility: [
    'role="progressbar"와 aria-valuenow로 현재 값을 알리고, aria-label로 무엇의 진행인지 밝힙니다.',
    "가운데 퍼센트 숫자는 값과 중복되므로 aria-hidden으로 둡니다.",
    '완료 색(초록)만으로 끝났음을 전하지 않도록 "백업 완료" 문구를 함께 보여 줍니다.',
    "호 길이 변화는 동작 줄이기 설정에서 전환 없이 바뀝니다.",
  ],
};
