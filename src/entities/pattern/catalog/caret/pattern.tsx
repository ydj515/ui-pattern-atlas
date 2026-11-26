import { type Pattern } from "@/entities/pattern/model/pattern";

export const caretPattern: Pattern = {
  slug: "caret",

  kind: "concept",
  name: "Caret ▾",
  nameKo: "캐럿",
  aliases: ["작은 삼각형", "드롭다운 화살표", "caret down", "dropdown arrow"],
  category: "icon-names",
  summary: "작은 삼각형, 드롭다운",
  description:
    "꽉 찬 작은 삼각형으로, 글을 끼워 넣는 교정 기호 캐럿(^)에서 온 이름입니다. 버튼 글자 옆에 붙어 누르면 고를 수 있는 목록이 펼쳐진다는 것을 알려 줍니다.",
  tags: ["아이콘 이름", "드롭다운"],
  loadGuide: () => import("@/entities/pattern/catalog/caret/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/caret/CaretDemo").then((m) => m.CaretDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/caret/CaretThumbnail").then((m) => m.CaretThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/caret/CaretDemo.tsx?raw"),
};
