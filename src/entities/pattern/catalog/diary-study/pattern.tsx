import { type Pattern } from "@/entities/pattern/model/pattern";

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
  tags: ["UX 리서치", "정성 조사"],
  loadGuide: () => import("@/entities/pattern/catalog/diary-study/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/diary-study/DiaryStudyDemo").then((m) => m.DiaryStudyDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/diary-study/DiaryStudyThumbnail").then(
      (m) => m.DiaryStudyThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/diary-study/DiaryStudyDemo.tsx?raw"),
};
