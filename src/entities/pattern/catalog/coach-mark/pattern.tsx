import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const coachMarkPattern: Pattern = {
  slug: "coach-mark",

  name: "Coach Mark",
  nameKo: "코치마크",
  aliases: ["스포트라이트", "기능 안내 말풍선", "spotlight", "feature tip"],
  category: "onboarding",
  summary: "버튼을 가리키는 한 번짜리 안내",
  description:
    "화면의 나머지를 어둡게 하고 버튼 하나만 밝혀 짧은 말풍선으로 쓰임을 알려 주는 패턴입니다. 처음 한 번만 보여 주고, 확인을 누르면 사라집니다.",
  tags: [...BASE_TAGS, "role=dialog", "Focus management", "box-shadow"],
  loadGuide: () => import("@/entities/pattern/catalog/coach-mark/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/coach-mark/CoachMarkDemo").then((m) => m.CoachMarkDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/coach-mark/CoachMarkThumbnail").then(
      (m) => m.CoachMarkThumbnail,
    ),
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
