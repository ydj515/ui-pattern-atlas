import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const segmentedControlPattern: Pattern = {
  slug: "segmented-control",

  name: "Segmented Control",
  nameKo: "세그먼트 컨트롤",
  aliases: ["세그먼트 버튼", "버튼 그룹", "보기 전환", "segmented button", "toggle group"],
  category: "selection",
  summary: "2~5개의 선택지 중 하나를 고르는 붙어 있는 버튼 묶음",
  description:
    "서로 배타적인 몇 개의 선택지를 한 줄로 붙여 보여주고 하나만 선택하게 하는 패턴입니다. 같은 데이터를 다른 기준이나 보기 방식으로 전환할 때 주로 사용합니다.",
  tags: [...BASE_TAGS, "Native radio", "Generics"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/segmented-control/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/segmented-control/SegmentedControlDemo").then(
      (m) => m.SegmentedControlDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/segmented-control/SegmentedControlThumbnail").then(
      (m) => m.SegmentedControlThumbnail,
    ),
  sources: [
    {
      fileName: "SegmentedControl.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/segmented-control/SegmentedControl.tsx?raw"),
    },
    {
      fileName: "SegmentedControlDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/segmented-control/SegmentedControlDemo.tsx?raw"),
    },
  ],
};
