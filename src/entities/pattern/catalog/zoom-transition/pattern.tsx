import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const zoomTransitionPattern: Pattern = {
  slug: "zoom-transition",
  name: "Zoom Transition",
  nameKo: "줌 전환",
  aliases: ["확대 전환", "스케일 전환", "zoom in transition", "app launch animation"],
  category: "motion",
  summary: "아이콘에서 화면이 커져 나오기",
  description:
    "홈 화면의 앱 아이콘을 누르면 그 아이콘 위치에서 화면이 커져 나오고, 닫으면 다시 그 아이콘으로 줄어드는 전환입니다. transform-origin을 누른 위치에 맞춰 어디서 열린 화면인지 보여 줍니다.",
  whenToUse: [
    "아이콘, 카드에서 전체 화면이 열릴 때",
    "닫은 뒤 원래 자리로 돌아가는 것을 보여 줄 때",
    "같은 종류의 화면을 여러 입구에서 열 때",
  ],
  whenNotToUse: [
    "열린 화면과 누른 요소의 관계가 없을 때",
    "큰 확대가 멀미를 줄 수 있는 넓은 데스크톱 화면",
    "누른 요소가 그대로 커져야 할 때(공유 요소 전환 사용)",
  ],
  alternatives: [
    {
      name: "공유 요소 전환",
      slug: "shared-element-transition",
      reason: "같은 대상이 두 화면에 있을 때",
    },
    { name: "페이지 전환", slug: "page-transition", reason: "목록에서 상세로 깊이 들어갈 때" },
  ],
  accessibility: [
    "열리면 홈으로 버튼으로, 닫히면 눌렀던 아이콘으로 포커스를 돌려줍니다.",
    "열린 동안 뒤의 아이콘은 inert라 Tab이 들어가지 않습니다.",
    "동작 줄이기에서는 확대 없이 바로 열고 닫습니다.",
    "열린 화면은 aria-label로 이름을 붙입니다.",
  ],
  tags: [...BASE_TAGS, "@starting-style", "transform-origin", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/zoom-transition/ZoomTransitionDemo").then(
      (m) => m.ZoomTransitionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/zoom-transition/ZoomTransitionThumbnail").then(
      (m) => m.ZoomTransitionThumbnail,
    ),
  sources: [
    {
      fileName: "ZoomTransition.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/zoom-transition/ZoomTransition.tsx?raw"),
    },
    {
      fileName: "ZoomTransitionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/zoom-transition/ZoomTransitionDemo.tsx?raw"),
    },
  ],
};
