import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TooltipThumbnail } from "@/entities/pattern/catalog/tooltip/TooltipThumbnail";

export const tooltipPattern: Pattern = {
  slug: "tooltip",
  name: "Tooltip",
  nameKo: "툴팁",
  aliases: ["말풍선", "도움말", "hint", "info icon"],
  category: "overlay",
  summary: "마우스를 올리거나 포커스하면 나타나는 짧은 설명",
  description:
    "아이콘이나 용어에 마우스를 올리거나 키보드로 포커스했을 때 짧은 보충 설명을 보여주는 패턴입니다. 툴팁 안의 내용은 클릭할 수 없는 텍스트여야 합니다.",
  whenToUse: [
    "아이콘 버튼의 의미를 짧게 보충할 때",
    "전문 용어나 계산 기준을 한 문장으로 설명할 때",
    "알면 좋지만 몰라도 작업할 수 있는 정보일 때",
  ],
  whenNotToUse: [
    "작업에 꼭 필요한 정보일 때(항상 보이게 표시)",
    "링크나 버튼처럼 상호작용 요소를 넣어야 할 때",
    "터치 환경이 주 사용 환경일 때",
  ],
  alternatives: [
    { name: "Popover", slug: "popover", reason: "링크나 버튼이 포함된 설명" },
    {
      name: "Inline Validation",
      slug: "inline-validation",
      reason: "입력 필드 아래 항상 보이는 안내",
    },
  ],
  accessibility: [
    '툴팁에 role="tooltip"을 주고 트리거에 aria-describedby로 연결합니다.',
    "키보드 포커스 시 즉시, 호버 시 짧은 지연 후 나타납니다.",
    "Esc 키로 닫을 수 있고, 포인터를 툴팁 위로 옮겨도 사라지지 않습니다(WCAG 1.4.13).",
    "아이콘 전용 트리거에는 별도의 aria-label을 제공합니다. 툴팁은 이름이 아니라 설명입니다.",
  ],
  tags: [...BASE_TAGS, "WCAG 1.4.13"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/tooltip/TooltipDemo").then((m) => m.TooltipDemo),
  Thumbnail: TooltipThumbnail,
  sources: [
    {
      fileName: "Tooltip.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tooltip/Tooltip.tsx?raw"),
    },
    {
      fileName: "TooltipDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tooltip/TooltipDemo.tsx?raw"),
    },
  ],
};
