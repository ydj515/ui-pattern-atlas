import { type Pattern } from "@/entities/pattern/model/pattern";

export const donerPattern: Pattern = {
  slug: "doner",

  kind: "concept",
  name: "Döner",
  nameKo: "되너",
  aliases: ["필터 아이콘", "정렬 아이콘", "doner menu", "filter lines"],
  category: "icon-names",
  summary: "길이가 다른 가로줄, 필터·정렬",
  description:
    "위에서 아래로 짧아지는 가로줄 세 개로, 꼬치에 구운 고기를 깎아 내는 되너 케밥 모양에서 온 이름입니다. 목록을 줄이거나 순서를 바꾸는 정렬, 필터를 엽니다.",
  tags: ["아이콘 이름", "정렬"],
  loadGuide: () => import("@/entities/pattern/catalog/doner/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/doner/DonerDemo").then((m) => m.DonerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/doner/DonerThumbnail").then((m) => m.DonerThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/doner/DonerDemo.tsx?raw"),
};
