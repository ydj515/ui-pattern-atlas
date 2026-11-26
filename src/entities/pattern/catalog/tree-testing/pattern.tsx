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
  tags: ["UX 리서치", "정보 구조"],
  loadGuide: () => import("@/entities/pattern/catalog/tree-testing/guide").then((m) => m.guide),
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
