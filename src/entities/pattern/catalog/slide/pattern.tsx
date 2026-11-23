import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SlideThumbnail } from "@/entities/pattern/catalog/slide/SlideThumbnail";

export const slidePattern: Pattern = {
  slug: "slide",
  name: "Slide",
  nameKo: "슬라이드",
  aliases: ["슬라이드 인", "밀려 들어오기", "slide in", "slide out"],
  category: "motion",
  summary: "한쪽 가장자리에서 밀려 들어오기",
  description:
    "요소가 한쪽 가장자리에서 밀려 들어오고 같은 쪽으로 빠져나가는 전환입니다. 오고 간 방향이 같아서 어디에 숨어 있는지 알 수 있습니다.",
  whenToUse: [
    "아래에서 올라오는 알림, 옆에서 나오는 패널",
    "나타나는 위치가 화면 가장자리와 연결될 때",
    "닫으면 다시 그 방향으로 숨길 때",
  ],
  whenNotToUse: [
    "화면 가운데의 작은 요소(페이드 사용)",
    "들어오는 방향과 나가는 방향이 다를 때",
    "긴 거리를 천천히 이동할 때",
  ],
  alternatives: [
    { name: "페이드", slug: "fade", reason: "위치는 그대로 두고 나타날 때" },
    { name: "드로어", slug: "drawer", reason: "옆에서 나오는 메뉴 전체 패턴" },
  ],
  accessibility: [
    "숨기기 버튼은 aria-pressed로 표시 상태를 알립니다.",
    "사라지는 동안에는 aria-hidden으로 표시합니다.",
    "동작 줄이기에서는 이동 없이 바로 넣고 뺍니다.",
    "카드는 들어오는 가장자리에 붙여 처음부터 일부가 보이지 않게 합니다.",
  ],
  tags: [...BASE_TAGS, "@starting-style", "CSS transition", "Reduced motion"],
  loadPreview: () => import("@/entities/pattern/catalog/slide/SlideDemo").then((m) => m.SlideDemo),
  Thumbnail: SlideThumbnail,
  sources: [
    {
      fileName: "Slide.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/slide/Slide.tsx?raw"),
    },
    {
      fileName: "SlideDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/slide/SlideDemo.tsx?raw"),
    },
  ],
};
