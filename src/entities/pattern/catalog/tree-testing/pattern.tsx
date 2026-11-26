import { type Pattern } from "@/entities/pattern/model/pattern";

export const treeTestingPattern: Pattern = {
  slug: "tree-testing",
  kind: "concept",
  name: "Tree Testing",
  nameKo: "트리 테스트",
  aliases: [
    "메뉴 구조 테스트",
    "역 카드 소팅",
    "내비게이션 테스트",
    "tree test",
    "reverse card sorting",
  ],
  category: "ux-research",
  summary: "글자로 된 구조에서 항목을 찾을 수 있는지 확인",
  description:
    "화면 디자인 없이 글자로 된 메뉴 구조만 보여 주고 과제의 답을 찾게 하는 방법입니다. 성공률과 함께 참가자가 처음 들어간 경로를 보면 이름이나 위치가 헷갈리는 곳을 알 수 있습니다.",
  whenToUse: [
    "카드 소팅으로 짠 구조를 검증할 때",
    "메뉴 이름을 바꾸기 전후를 비교할 때",
    "디자인 전에 구조만 따로 확인할 때",
  ],
  whenNotToUse: [
    "화면의 시각적 문제를 찾을 때(사용성 테스트 사용)",
    "분류 기준을 처음 정할 때(카드 소팅 사용)",
    "검색으로 찾는 경우가 대부분일 때",
  ],
  alternatives: [
    { name: "카드 소팅", slug: "card-sorting", reason: "구조를 처음 짤 때" },
    { name: "사용성 테스트", slug: "usability-test", reason: "실제 화면에서 확인할 때" },
  ],
  accessibility: [
    "글자 목록만 쓰므로 화면 낭독기 사용자도 같은 과제를 할 수 있습니다.",
    "과제 문장에 메뉴 이름을 그대로 쓰지 않습니다.",
    "실패한 경로도 기록해 어디서 헷갈렸는지 봅니다.",
  ],
  tags: ["UX 리서치", "정보 구조"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/tree-testing/TreeTestingDemo").then(
      (m) => m.TreeTestingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tree-testing/TreeTestingThumbnail").then(
      (m) => m.TreeTestingThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/tree-testing/TreeTestingDemo.tsx?raw"),
};
