import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const gaugePattern: Pattern = {
  slug: "gauge",
  name: "Gauge",
  nameKo: "게이지",
  aliases: ["반원 게이지", "미터", "달성률", "gauge", "meter"],
  category: "data-viz",
  summary: "범위 안의 현재 값과 목표 표시",
  description:
    "정해진 범위 안에서 현재 값이 어디쯤인지 반원 막대로 보여 줍니다. 목표가 있으면 눈금 위에 표시하고, 값과 범위를 글자로 함께 적습니다. 값이 바뀌면 막대가 부드럽게 늘어납니다.",
  whenToUse: [
    "최솟값과 최댓값이 정해진 값 하나",
    "목표나 기준과 비교할 때",
    "대시보드에서 상태를 빠르게 훑을 때",
  ],
  whenNotToUse: [
    "작업 진행률(프로그레스 바 사용)",
    "여러 값을 비교할 때(막대 그래프 사용)",
    "범위의 끝이 없을 때",
  ],
  alternatives: [
    { name: "프로그레스 바", slug: "progress-bar", reason: "작업이 얼마나 끝났는지 보여 줄 때" },
    { name: "원형 진행률", slug: "progress-ring", reason: "좁은 자리에 진행률을 둘 때" },
  ],
  accessibility: [
    'role="meter"와 aria-valuemin, max, now, valuetext로 값을 알립니다.',
    "값과 범위, 목표를 글자로 함께 보여 줍니다.",
    "움직임 줄이기 설정에서는 막대 전환을 끕니다.",
  ],
  tags: [...BASE_TAGS, "role=meter", "SVG", "pathLength"],
  loadPreview: () => import("@/entities/pattern/catalog/gauge/GaugeDemo").then((m) => m.GaugeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/gauge/GaugeThumbnail").then((m) => m.GaugeThumbnail),
  sources: [
    {
      fileName: "Gauge.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/gauge/Gauge.tsx?raw"),
    },
    {
      fileName: "GaugeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/gauge/GaugeDemo.tsx?raw"),
    },
  ],
};
