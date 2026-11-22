import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TimelineThumbnail } from "@/entities/pattern/catalog/timeline/TimelineThumbnail";

export const timelinePattern: Pattern = {
  slug: "timeline",
  name: "Timeline",
  nameKo: "타임라인",
  aliases: ["배송 조회", "진행 기록", "activity log", "history"],
  category: "list-table",
  summary: "시간순 기록",
  description:
    "일어난 일을 시간 순서대로 세로선 위에 늘어놓는 패턴입니다. 지난 일과 지금 상태, 앞으로 남은 단계를 한 줄로 보여 줍니다.",
  whenToUse: ["배송 조회, 주문 상태", "변경 이력, 활동 기록", "앞으로 남은 단계도 함께 보여 줄 때"],
  whenNotToUse: [
    "순서보다 내용이 중요한 목록(리스트 사용)",
    "단계를 사용자가 직접 진행할 때(스테퍼 사용)",
    "기록이 아주 많을 때(날짜별 그룹 목록 사용)",
  ],
  alternatives: [
    { name: "스테퍼", slug: "stepper", reason: "사용자가 직접 단계를 넘어갈 때" },
    { name: "그룹 목록", slug: "grouped-list", reason: "날짜별로 묶어 보여 줄 때" },
  ],
  accessibility: [
    'ol 목록으로 순서를 전하고 최신 단계는 aria-current="step"입니다.',
    '아직 일어나지 않은 단계는 "예정"을 글로 보여 줍니다.',
    "점과 선은 장식이라 aria-hidden입니다.",
    "시간은 글로 함께 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "Ordered list", "aria-current"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/timeline/TimelineDemo").then((m) => m.TimelineDemo),
  Thumbnail: TimelineThumbnail,
  sources: [
    {
      fileName: "Timeline.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/timeline/Timeline.tsx?raw"),
    },
    {
      fileName: "TimelineDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/timeline/TimelineDemo.tsx?raw"),
    },
  ],
};
