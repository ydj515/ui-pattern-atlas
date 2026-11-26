import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const microInteractionPattern: Pattern = {
  slug: "micro-interaction",
  name: "Micro-interaction",
  nameKo: "마이크로 인터랙션",
  aliases: ["작은 반응", "버튼 반응", "micro interaction", "tap feedback"],
  category: "motion",
  summary: "누른 순간의 작고 빠른 반응",
  description:
    "저장 버튼을 누르면 아이콘이 살짝 눌렸다가 튀어 오르며 채워지는 것처럼, 행동 하나에 바로 돌아오는 작은 반응입니다. 300ms 안에 끝나고, 결과는 아이콘과 글자로도 남겨 움직임을 놓쳐도 알 수 있게 합니다.",
  whenToUse: [
    "저장, 좋아요처럼 자주 누르는 토글",
    "누른 것이 반영됐는지 바로 알려야 할 때",
    "결과가 화면의 다른 곳에 보이지 않을 때",
  ],
  whenNotToUse: [
    "한 화면에 같은 반응이 여러 개 동시에 일어날 때",
    "결과를 기다려야 하는 요청(로딩 상태 사용)",
    "브랜드를 드러내려고 길게 끄는 장식 애니메이션",
  ],
  alternatives: [
    { name: "토글 버튼", slug: "toggle-button", reason: "눌린 상태를 유지하는 버튼 자체" },
    { name: "바운스", slug: "bounce", reason: "다른 곳의 변화로 눈길을 보낼 때" },
  ],
  accessibility: [
    "aria-pressed로 켜짐 상태를 알리고 글자도 저장에서 저장됨으로 바뀝니다.",
    "아이콘은 장식이라 aria-hidden이고 버튼 이름은 글자에서 옵니다.",
    "튀는 효과는 동작 줄이기에서 생략합니다.",
    "효과는 320ms 안에 끝나 다음 입력을 막지 않습니다.",
  ],
  tags: [...BASE_TAGS, "Web Animations API", "aria-pressed", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/micro-interaction/MicroToggleDemo").then(
      (m) => m.MicroToggleDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/micro-interaction/MicroToggleThumbnail").then(
      (m) => m.MicroToggleThumbnail,
    ),
  sources: [
    {
      fileName: "MicroToggle.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/micro-interaction/MicroToggle.tsx?raw"),
    },
    {
      fileName: "MicroToggleDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/micro-interaction/MicroToggleDemo.tsx?raw"),
    },
  ],
};
