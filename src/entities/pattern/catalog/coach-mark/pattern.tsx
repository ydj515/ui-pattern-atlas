import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CoachMarkThumbnail } from "@/entities/pattern/catalog/coach-mark/CoachMarkThumbnail";

export const coachMarkPattern: Pattern = {
  slug: "coach-mark",
  name: "Coach Mark",
  nameKo: "코치마크",
  aliases: ["스포트라이트", "기능 안내 말풍선", "spotlight", "feature tip"],
  category: "onboarding",
  summary: "버튼을 가리키는 한 번짜리 안내",
  description:
    "화면의 나머지를 어둡게 하고 버튼 하나만 밝혀 짧은 말풍선으로 쓰임을 알려 주는 패턴입니다. 처음 한 번만 보여 주고, 확인을 누르면 사라집니다.",
  whenToUse: [
    "새 메모, 공유처럼 처음엔 눈에 잘 띄지 않는 핵심 버튼",
    "업데이트로 위치가 바뀐 버튼",
    "한 화면에 한 번, 한 가지만",
  ],
  whenNotToUse: [
    "여러 버튼을 차례로 설명할 때(프로덕트 투어 사용)",
    "버튼 이름만으로 충분히 알 수 있을 때",
    "들어올 때마다 다시 보여 줄 때",
  ],
  alternatives: [
    { name: "프로덕트 투어", slug: "product-tour", reason: "여러 곳을 순서대로 짚을 때" },
    { name: "툴팁", slug: "tooltip", reason: "마우스를 올렸을 때만 짧게 설명할 때" },
  ],
  accessibility: [
    "말풍선은 role=dialog이고 문구로 이름을 붙입니다.",
    "열리면 확인 버튼으로 포커스가 가고 Esc로 닫힙니다.",
    "어둡게 덮은 영역은 장식이라 aria-hidden이며, 가리킨 버튼은 그대로 누를 수 있습니다.",
    "말풍선 문구는 한 문장으로 짧게 씁니다.",
  ],
  tags: [...BASE_TAGS, "role=dialog", "Focus management", "box-shadow"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/coach-mark/CoachMarkDemo").then((m) => m.CoachMarkDemo),
  Thumbnail: CoachMarkThumbnail,
  sources: [
    {
      fileName: "CoachMark.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/coach-mark/CoachMark.tsx?raw"),
    },
    {
      fileName: "CoachMarkDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/coach-mark/CoachMarkDemo.tsx?raw"),
    },
  ],
};
