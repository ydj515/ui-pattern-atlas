import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TapTargetThumbnail } from "@/entities/pattern/catalog/tap/TapTargetThumbnail";

export const tapPattern: Pattern = {
  slug: "tap",
  name: "Tap",
  nameKo: "탭 제스처",
  aliases: ["터치", "누르기", "터치 영역", "tap target", "hit area"],
  category: "gesture",
  summary: "한 번 눌러 열거나 고르기",
  description:
    "가장 기본적인 제스처인 한 번 누르기입니다. 보이는 아이콘은 작아도 누르는 영역은 44×44px 이상으로 잡고, 누르는 순간 바로 배경이 바뀌어 눌렸다는 것을 알 수 있게 합니다.",
  whenToUse: [
    "닫기, 더 보기처럼 아이콘만 있는 작은 버튼",
    "목록의 행 전체를 눌러 열 때",
    "손가락으로 쓰는 모든 화면",
  ],
  whenNotToUse: [
    "누르는 영역끼리 겹칠 만큼 촘촘할 때(간격부터 확보)",
    "누르기만으로 되돌릴 수 없는 결과가 날 때(확인 단계 두기)",
    "마우스 오버로만 보이는 동작",
  ],
  alternatives: [
    { name: "아이콘 버튼", slug: "icon-button", reason: "아이콘만 있는 버튼의 이름과 모양" },
    { name: "길게 누르기", slug: "long-press", reason: "부가 동작을 따로 둘 때" },
  ],
  accessibility: [
    "누르는 영역은 최소 44×44px로 WCAG 2.5.8(24px)과 플랫폼 기준을 넘깁니다.",
    "아이콘만 있는 버튼에는 aria-label로 이름을 붙입니다.",
    "touch-manipulation으로 누른 뒤의 지연을 없앱니다.",
    "누른 상태는 색으로 바로 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "WCAG 2.5.8", "touch-action"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/tap/TapTargetDemo").then((m) => m.TapTargetDemo),
  Thumbnail: TapTargetThumbnail,
  sources: [
    {
      fileName: "TapTarget.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tap/TapTarget.tsx?raw"),
    },
    {
      fileName: "TapTargetDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tap/TapTargetDemo.tsx?raw"),
    },
  ],
};
