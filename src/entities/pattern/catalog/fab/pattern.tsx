import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fabPattern: Pattern = {
  slug: "fab",

  name: "FAB",
  nameKo: "플로팅 액션 버튼",
  aliases: ["떠 있는 버튼", "글쓰기 버튼", "floating action button", "FAB"],
  category: "button",
  summary: "화면 위에 떠 있는 주요 동작",
  description:
    "스크롤해도 화면 구석에 떠 있는 주요 행동 버튼입니다. 아래로 스크롤할 때는 아이콘만 남겨 내용을 덜 가리고, 위로 올리면 다시 이름을 보여 줍니다.",
  tags: [...BASE_TAGS, "Mobile", "Scroll"],
  loadGuide: () => import("@/entities/pattern/catalog/fab/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/fab/FabDemo").then((m) => m.FabDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/fab/FabThumbnail").then((m) => m.FabThumbnail),
  sources: [
    {
      fileName: "Fab.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/fab/Fab.tsx?raw"),
    },
    {
      fileName: "FabDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/fab/FabDemo.tsx?raw"),
    },
  ],
};
