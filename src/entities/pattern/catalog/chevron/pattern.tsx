import { type Pattern } from "@/entities/pattern/model/pattern";

export const chevronPattern: Pattern = {
  slug: "chevron",

  kind: "concept",
  name: "Chevron ›",
  nameKo: "쉐브론",
  aliases: ["꺾쇠", "화살촉", "chevron right", "disclosure indicator"],
  category: "icon-names",
  summary: "꺾쇠, 다음·펼침",
  description:
    "브이(V)자를 옆으로 눕힌 꺾쇠 아이콘으로, 군복 계급장 모양에서 온 이름입니다. 오른쪽을 보면 다음 화면으로 들어감, 왼쪽은 돌아감, 아래쪽은 펼침을 뜻합니다.",
  tags: ["아이콘 이름", "이동"],
  loadGuide: () => import("@/entities/pattern/catalog/chevron/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/chevron/ChevronDemo").then((m) => m.ChevronDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/chevron/ChevronThumbnail").then((m) => m.ChevronThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/chevron/ChevronDemo.tsx?raw"),
};
