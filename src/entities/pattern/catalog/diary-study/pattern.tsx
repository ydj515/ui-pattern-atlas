import { type Pattern } from "@/entities/pattern/model/pattern";
import { DiaryStudyThumbnail } from "@/entities/pattern/catalog/diary-study/DiaryStudyThumbnail";

export const diaryStudyPattern: Pattern = {
  slug: "diary-study",
  kind: "concept",
  name: "Diary Study",
  nameKo: "다이어리 스터디",
  aliases: ["일지 연구", "경험 기록 조사", "장기 관찰", "diary study", "experience sampling"],
  category: "ux-research",
  summary: "일정 기간 실제 경험을 참가자가 기록",
  description:
    "참가자가 며칠에서 몇 주 동안 겪은 일을 그때그때 기록하는 방법입니다. 하루 한 번의 인터뷰로는 놓치는 시간대, 반복, 습관이 기록 사이에서 드러납니다.",
  whenToUse: [
    "쓰는 시점과 상황이 날마다 다를 때",
    "습관이나 반복 행동을 알고 싶을 때",
    "긴 기간에 걸친 경험(이사, 여행 준비)을 볼 때",
  ],
  whenNotToUse: [
    "바로 답이 필요할 때",
    "참가자에게 매일 기록할 여유가 없을 때",
    "화면 하나의 문제를 찾을 때(사용성 테스트 사용)",
  ],
  alternatives: [
    { name: "사용자 인터뷰", slug: "user-interview", reason: "기록을 바탕으로 이유를 물을 때" },
    { name: "행동 히트맵", slug: "behavioral-heatmap", reason: "화면 안의 행동만 볼 때" },
  ],
  accessibility: [
    "글, 사진, 음성 중 편한 방법으로 기록하게 합니다.",
    "알림 시간을 참가자가 정하게 합니다.",
    "기록 도구가 화면 낭독기와 확대 기능에서 쓰이는지 확인합니다.",
  ],
  tags: ["UX 리서치", "정성 조사"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/diary-study/DiaryStudyDemo").then((m) => m.DiaryStudyDemo),
  Thumbnail: DiaryStudyThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/diary-study/DiaryStudyDemo.tsx?raw"),
};
