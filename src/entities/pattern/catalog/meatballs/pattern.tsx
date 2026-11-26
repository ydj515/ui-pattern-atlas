import { type Pattern } from "@/entities/pattern/model/pattern";

export const meatballsPattern: Pattern = {
  slug: "meatballs",
  kind: "concept",
  name: "Meatballs ⋯",
  nameKo: "미트볼",
  aliases: ["가로 점 세 개", "말줄임 아이콘", "meatballs menu", "horizontal ellipsis"],
  category: "icon-names",
  summary: "가로 점 세 개, 더보기",
  description:
    "점 세 개를 가로로 놓은 아이콘으로, 접시에 놓인 미트볼처럼 보여 붙은 이름입니다. 게시물이나 카드의 구석에 두고 링크 복사, 신고처럼 부가 동작을 엽니다.",
  whenToUse: [
    "게시물, 카드 머리의 부가 동작",
    "iOS나 웹에서 더보기를 표시할 때",
    "가로 공간이 세로보다 넉넉한 자리",
  ],
  whenNotToUse: [
    "주요 동작을 숨길 때",
    "세로 점 세 개와 섞어 쓸 때",
    "글이 잘렸다는 말줄임(…)과 헷갈릴 자리",
  ],
  alternatives: [
    { name: "케밥", slug: "kebab", reason: "세로 점 세 개로 된 더보기" },
    { name: "길게 누르기", slug: "long-press", reason: "부가 동작을 제스처로 열 때" },
  ],
  accessibility: [
    "아이콘 버튼에 게시물 더 보기처럼 이름을 붙입니다.",
    "aria-haspopup=menu와 aria-expanded를 둡니다.",
    "결과는 role=status로 알립니다.",
    "점 세 개는 장식이라 aria-hidden입니다.",
  ],
  tags: ["아이콘 이름", "더보기"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/meatballs/MeatballsDemo").then((m) => m.MeatballsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/meatballs/MeatballsThumbnail").then(
      (m) => m.MeatballsThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/meatballs/MeatballsDemo.tsx?raw"),
};
