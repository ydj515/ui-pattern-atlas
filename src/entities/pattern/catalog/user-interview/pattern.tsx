import { type Pattern } from "@/entities/pattern/model/pattern";

export const userInterviewPattern: Pattern = {
  slug: "user-interview",

  kind: "concept",
  name: "User Interview",
  nameKo: "사용자 인터뷰",
  aliases: ["심층 인터뷰", "1:1 인터뷰", "사용자 면담", "user interview", "in-depth interview"],
  category: "ux-research",
  summary: "행동의 이유를 물어 맥락을 파악",
  description:
    "참가자 한 명과 대화하며 겪은 일과 그 이유를 듣는 방법입니다. 원하는 답을 담은 질문 대신 지난 행동을 처음부터 이야기하게 하면 막힌 곳과 실제 이유가 드러납니다.",
  tags: ["UX 리서치", "정성 조사"],
  loadGuide: () => import("@/entities/pattern/catalog/user-interview/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/user-interview/UserInterviewDemo").then(
      (m) => m.UserInterviewDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/user-interview/UserInterviewThumbnail").then(
      (m) => m.UserInterviewThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/user-interview/UserInterviewDemo.tsx?raw"),
};
