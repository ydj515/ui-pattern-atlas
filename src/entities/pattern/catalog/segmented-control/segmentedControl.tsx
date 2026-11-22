import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SegmentedControlThumbnail } from "@/entities/pattern/catalog/segmented-control/SegmentedControlThumbnail";

export const segmentedControlPattern: Pattern = {
  slug: "segmented-control",
  name: "Segmented Control",
  nameKo: "세그먼트 컨트롤",
  aliases: ["세그먼트 버튼", "버튼 그룹", "보기 전환", "segmented button", "toggle group"],
  category: "selection",
  summary: "2~5개의 선택지 중 하나를 고르는 붙어 있는 버튼 묶음",
  description:
    "서로 배타적인 몇 개의 선택지를 한 줄로 붙여 보여주고 하나만 선택하게 하는 패턴입니다. 같은 데이터를 다른 기준이나 보기 방식으로 전환할 때 주로 사용합니다.",
  whenToUse: [
    "일간/주간/월간처럼 같은 데이터의 기준을 바꿀 때",
    "목록 보기/카드 보기 같은 표시 방식을 전환할 때",
    "선택지가 2~5개이고 라벨이 짧을 때",
  ],
  whenNotToUse: [
    "선택지가 많거나 라벨이 길 때(드롭다운 검토)",
    "완전히 다른 콘텐츠 영역으로 이동할 때",
    "여러 개를 동시에 선택해야 할 때",
  ],
  alternatives: [
    { name: "Tabs", slug: "tabs", reason: "서로 다른 콘텐츠 패널 전환" },
    { name: "Switch", slug: "switch", reason: "켜고 끄는 두 가지 상태" },
    { name: "Select", reason: "선택지가 6개 이상" },
  ],
  accessibility: [
    "네이티브 라디오 입력을 사용해 방향키 이동과 선택을 브라우저가 처리합니다.",
    "<fieldset>과 <legend>로 그룹 이름을 제공합니다(시각적으로 숨길 수 있음).",
    "선택 상태는 배경색과 그림자, 글자 굵기를 함께 바꿔 색상에만 의존하지 않습니다.",
    "포커스 링은 숨긴 입력 대신 보이는 라벨에 peer-focus-visible로 그립니다.",
  ],
  tags: [...BASE_TAGS, "Native radio", "Generics"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/segmented-control/SegmentedControlDemo").then(
      (m) => m.SegmentedControlDemo,
    ),
  Thumbnail: SegmentedControlThumbnail,
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
