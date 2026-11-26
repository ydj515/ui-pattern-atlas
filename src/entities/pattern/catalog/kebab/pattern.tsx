import { type Pattern } from "@/entities/pattern/model/pattern";

export const kebabPattern: Pattern = {
  slug: "kebab",

  kind: "concept",
  name: "Kebab ⋮",
  nameKo: "케밥",
  aliases: ["세로 점 세 개", "더보기 아이콘", "kebab menu", "vertical ellipsis"],
  category: "icon-names",
  summary: "세로 점 세 개, 항목별 더보기",
  description:
    "점 세 개를 세로로 놓은 아이콘으로, 꼬치에 꿴 케밥처럼 보여 붙은 이름입니다. 목록의 각 행 끝에 두고 그 항목에만 해당하는 이름 바꾸기, 삭제 같은 동작을 모아 둡니다.",
  tags: ["아이콘 이름", "더보기"],
  loadGuide: () => import("@/entities/pattern/catalog/kebab/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/kebab/KebabDemo").then((m) => m.KebabDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/kebab/KebabThumbnail").then((m) => m.KebabThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/kebab/KebabDemo.tsx?raw"),
};
