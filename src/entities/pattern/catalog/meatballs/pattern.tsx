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
  tags: ["아이콘 이름", "더보기"],
  loadGuide: () => import("@/entities/pattern/catalog/meatballs/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/meatballs/MeatballsDemo").then((m) => m.MeatballsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/meatballs/MeatballsThumbnail").then(
      (m) => m.MeatballsThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/meatballs/MeatballsDemo.tsx?raw"),
};
