import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const hoverCardPattern: Pattern = {
  slug: "hover-card",

  name: "Hover Card",
  nameKo: "호버 카드",
  aliases: ["미리보기 카드", "프로필 카드", "링크 미리보기", "hover preview", "preview card"],
  category: "overlay",
  summary: "링크에 올리면 뜨는 미리보기 카드",
  description:
    "사람 이름이나 링크 위에 포인터를 잠시 올리면 그 대상의 요약을 카드로 보여 주는 패턴입니다. 페이지를 옮기지 않고도 누구인지, 무엇인지 미리 확인할 수 있습니다.",
  tags: [...BASE_TAGS, "Pointer", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/hover-card/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hover-card/HoverCardDemo").then((m) => m.HoverCardDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hover-card/HoverCardThumbnail").then(
      (m) => m.HoverCardThumbnail,
    ),
  sources: [
    {
      fileName: "HoverCard.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/hover-card/HoverCard.tsx?raw"),
    },
    {
      fileName: "HoverCardDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/hover-card/HoverCardDemo.tsx?raw"),
    },
  ],
};
