import { type Pattern } from "@/entities/pattern/model/pattern";

export const bentoPattern: Pattern = {
  slug: "bento",

  kind: "concept",
  name: "Bento",
  nameKo: "벤토",
  aliases: ["앱 목록 아이콘", "격자 아이콘", "bento menu", "app grid"],
  category: "icon-names",
  summary: "사각형 아홉 개 격자, 앱 목록",
  description:
    "작은 사각형 아홉 개를 3×3 격자로 놓은 아이콘으로, 칸이 나뉜 도시락(벤토)처럼 보여 붙은 이름입니다. 같은 회사의 다른 앱이나 서비스로 넘어가는 목록을 엽니다.",
  tags: ["아이콘 이름", "앱 전환"],
  loadGuide: () => import("@/entities/pattern/catalog/bento/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/bento/BentoDemo").then((m) => m.BentoDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bento/BentoThumbnail").then((m) => m.BentoThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/bento/BentoDemo.tsx?raw"),
};
