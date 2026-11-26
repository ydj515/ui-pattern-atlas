import { type Pattern } from "@/entities/pattern/model/pattern";

export const wafflePattern: Pattern = {
  slug: "waffle",

  kind: "concept",
  name: "Waffle",
  nameKo: "와플",
  aliases: ["점 격자 아이콘", "앱 런처", "waffle menu", "app launcher"],
  category: "icon-names",
  summary: "둥근 점 아홉 개 격자, 앱 목록",
  description:
    "둥근 점 아홉 개를 3×3 격자로 놓은 아이콘으로, 와플의 오목한 칸처럼 보여 붙은 이름입니다. 벤토와 같이 여러 앱 사이를 오가는 목록을 열며, 서비스마다 둘 중 하나를 씁니다.",
  tags: ["아이콘 이름", "앱 전환"],
  loadGuide: () => import("@/entities/pattern/catalog/waffle/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/waffle/WaffleDemo").then((m) => m.WaffleDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/waffle/WaffleThumbnail").then((m) => m.WaffleThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/waffle/WaffleDemo.tsx?raw"),
};
