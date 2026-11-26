import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const progressRingPattern: Pattern = {
  slug: "progress-ring",
  name: "Progress Ring",
  nameKo: "원형 진행률",
  aliases: ["원형 프로그레스", "도넛 진행률", "circular progress", "progress circle"],
  category: "loading",
  summary: "공간이 좁을 때의 진행률",
  description:
    "진행률을 원의 둘레로 보여 주는 패턴입니다. 막대를 놓기 어려운 카드 모서리나 썸네일 위에서도 얼마나 끝났는지 한눈에 보여 줍니다.",
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
  tags: [...BASE_TAGS, "progressbar", "SVG"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/progress-ring/ProgressRingDemo").then(
      (m) => m.ProgressRingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/progress-ring/ProgressRingThumbnail").then(
      (m) => m.ProgressRingThumbnail,
    ),
  sources: [
    {
      fileName: "ProgressRing.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/progress-ring/ProgressRing.tsx?raw"),
    },
    {
      fileName: "ProgressRingDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/progress-ring/ProgressRingDemo.tsx?raw"),
    },
  ],
};
