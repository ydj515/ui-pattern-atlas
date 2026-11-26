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
  whenToUse: [
    "댓글의 멘션처럼 사람 이름에 짧은 프로필을 보여 줄 때",
    "링크를 열기 전에 내용을 미리 보여 주면 도움이 될 때",
    "알면 좋지만 몰라도 되는 부가 정보일 때",
  ],
  whenNotToUse: [
    "카드 안에 버튼이나 입력 같은 조작 요소를 넣어야 할 때(팝오버 사용)",
    "터치가 주 사용 환경일 때(호버가 없습니다)",
    "작업에 꼭 필요한 정보일 때",
  ],
  alternatives: [
    { name: "툴팁", slug: "tooltip", reason: "한 줄짜리 짧은 설명" },
    { name: "팝오버", slug: "popover", reason: "클릭으로 열고 안에서 조작해야 할 때" },
  ],
  accessibility: [
    "키보드 포커스로도 바로 열리고, Esc로 닫을 수 있습니다.",
    "여는 지연(0.5초)으로 링크 위를 지나가기만 할 때 카드가 깜빡이지 않게 하고, 닫는 지연으로 카드 위까지 포인터를 옮길 수 있게 합니다.",
    "카드는 링크가 가리키는 정보를 반복할 뿐이라 aria-hidden으로 두고, 포커스할 요소를 넣지 않습니다.",
    "링크 자체가 전체 정보로 가는 길이므로, 카드를 보지 못해도 같은 정보에 도달할 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "Pointer", "Keyboard"],
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
