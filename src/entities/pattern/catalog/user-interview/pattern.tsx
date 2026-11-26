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
  whenToUse: [
    "문제를 아직 잘 모를 때",
    "숫자로 보이는 행동의 이유를 알고 싶을 때",
    "새 기능을 만들기 전에 실제 상황을 들을 때",
  ],
  whenNotToUse: [
    "얼마나 많은 사람이 그런지 알아야 할 때(설문 사용)",
    "화면에서 어디가 막히는지 볼 때(사용성 테스트 사용)",
    "미래에 쓸지 물어 결정하려 할 때",
  ],
  alternatives: [
    { name: "사용성 테스트", slug: "usability-test", reason: "말보다 실제 행동을 볼 때" },
    { name: "다이어리 스터디", slug: "diary-study", reason: "며칠에 걸친 경험을 볼 때" },
  ],
  accessibility: [
    "화면 낭독기, 확대 기능을 쓰는 참가자도 모집합니다.",
    "원격으로 할 때는 참가자가 익숙한 도구와 기기를 쓰게 합니다.",
    "질문을 미리 글로도 보내 준비할 수 있게 합니다.",
  ],
  tags: ["UX 리서치", "정성 조사"],
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
