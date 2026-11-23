import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AutosaveIndicatorThumbnail } from "@/entities/pattern/catalog/autosave-indicator/AutosaveIndicatorThumbnail";

export const autosaveIndicatorPattern: Pattern = {
  slug: "autosave-indicator",
  name: "Autosave Indicator",
  nameKo: "자동 저장 표시",
  aliases: ["저장 상태 표시", "저장됨 표시", "autosave status", "saving indicator"],
  category: "risky-actions",
  summary: "저장 버튼 대신 저장 상태를 한 줄로 알려 주기",
  description:
    "편집기 옆에 지금 내용이 저장됐는지 한 줄로 보여 주는 표시입니다. 입력하면 저장 중, 끝나면 방금 저장됨으로 바뀌고, 연결이 끊기면 이 기기에만 저장했다고 알려 나가도 되는지 고민하지 않게 합니다.",
  whenToUse: [
    "입력하는 대로 저장하는 편집기",
    "저장 버튼을 없애고 싶을 때",
    "연결이 자주 끊길 수 있을 때",
  ],
  whenNotToUse: [
    "제출해야 반영되는 폼",
    "저장이 오래 걸려 진행률이 필요할 때(진행 바 사용)",
    "저장 실패를 이 한 줄로만 알릴 때",
  ],
  alternatives: [
    {
      name: "저장하지 않은 변경 경고",
      slug: "unsaved-changes",
      reason: "자동 저장이 없어 나가기 전에 물어야 할 때",
    },
    { name: "토스트", slug: "toast", reason: "저장 결과를 잠깐 알릴 때" },
  ],
  accessibility: [
    'role="status"라 상태가 바뀔 때 조용히 읽어 줍니다.',
    "점의 색과 함께 글자로 상태를 적습니다.",
    "움직임 줄이기 설정에서는 깜빡임을 멈춥니다.",
  ],
  tags: [...BASE_TAGS, "role=status", "debounce", "offline"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/autosave-indicator/AutosaveIndicatorDemo").then(
      (m) => m.AutosaveIndicatorDemo,
    ),
  Thumbnail: AutosaveIndicatorThumbnail,
  sources: [
    {
      fileName: "AutosaveIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/autosave-indicator/AutosaveIndicator.tsx?raw"),
    },
    {
      fileName: "AutosaveIndicatorDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/autosave-indicator/AutosaveIndicatorDemo.tsx?raw"),
    },
  ],
};
