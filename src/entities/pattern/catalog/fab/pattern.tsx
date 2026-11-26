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
  origin:
    "Floating Action Button의 줄임말로, 2014년 구글이 머티리얼 디자인을 발표하며 붙인 이름이에요. 화면 위에 떠(floating) 있는 주요 동작 버튼이라는 뜻이에요.",
  whenToUse: [
    "메일 쓰기, 글쓰기처럼 화면의 대표 행동이 하나일 때",
    "긴 목록을 보다가도 바로 눌러야 할 때",
    "모바일 화면",
  ],
  whenNotToUse: [
    "행동이 여러 개일 때(툴바나 메뉴 사용)",
    "중요한 내용을 가릴 때",
    "데스크톱의 넓은 화면(머리글 버튼으로 충분)",
  ],
  alternatives: [{ name: "버튼", slug: "button", reason: "화면 안에 고정된 주요 버튼" }],
  accessibility: [
    "아이콘만 남을 때도 aria-label로 같은 이름을 유지합니다.",
    "목록의 마지막 항목이 버튼에 가리지 않도록 아래쪽 여백을 둡니다.",
    "키보드 포커스 링이 그림자 위에서도 보입니다.",
    "크기를 줄이는 전환은 스크롤 방향에만 반응해 깜빡이지 않습니다.",
  ],
  tags: [...BASE_TAGS, "Mobile", "Scroll"],
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
