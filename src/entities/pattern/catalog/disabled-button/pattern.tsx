import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const disabledButtonPattern: Pattern = {
  slug: "disabled-button",
  name: "Disabled Button",
  nameKo: "비활성 버튼",
  aliases: ["사용 불가 버튼", "aria-disabled", "disabled state", "inactive button"],
  category: "button",
  summary: "못 누르는 이유를 알려 주는 버튼",
  description:
    "아직 누를 수 없는 버튼을 흐리게만 두지 않고, 왜 누를 수 없는지 바로 아래에 알려 주는 패턴입니다. 눌러 보면 이유를 강조해 무엇을 해야 하는지 알려 줍니다.",
  whenToUse: [
    "약관 동의, 필수 입력처럼 조건을 채워야 누를 수 있을 때",
    "왜 막혔는지 짐작하기 어려울 때",
    "키보드와 스크린 리더 사용자에게도 이유를 전해야 할 때",
  ],
  whenNotToUse: [
    "누르면 오류를 보여 주는 편이 더 나을 때(오류 요약 사용)",
    "권한이 없어 영영 못 누를 때(숨기거나 권한 안내 사용)",
    "이유가 화면에 이미 분명할 때",
  ],
  alternatives: [
    { name: "오류 요약", slug: "error-summary", reason: "눌러 본 뒤 고칠 항목을 모아 보여 줄 때" },
    { name: "버튼", slug: "button", reason: "항상 누를 수 있는 기본 버튼" },
  ],
  accessibility: [
    "disabled 대신 aria-disabled를 써서 포커스를 받을 수 있고, 이유가 aria-describedby로 함께 읽힙니다.",
    '눌러 보면 이유를 role="alert"로 다시 알리고 색과 굵기로 강조합니다.',
    "조건을 채우면 이유 문구가 사라지고 버튼이 바로 동작합니다.",
    "흐린 버튼도 글자 대비를 유지합니다.",
  ],
  tags: [...BASE_TAGS, "aria-disabled", "aria-describedby"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/disabled-button/DisabledButtonDemo").then(
      (m) => m.DisabledButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/disabled-button/DisabledButtonThumbnail").then(
      (m) => m.DisabledButtonThumbnail,
    ),
  sources: [
    {
      fileName: "ReasonButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/disabled-button/ReasonButton.tsx?raw"),
    },
    {
      fileName: "DisabledButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/disabled-button/DisabledButtonDemo.tsx?raw"),
    },
  ],
};
