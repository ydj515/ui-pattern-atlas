import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const autosaveIndicatorPattern: Pattern = {
  slug: "autosave-indicator",

  name: "Autosave Indicator",
  nameKo: "자동 저장 표시",
  aliases: ["저장 상태 표시", "저장됨 표시", "autosave status", "saving indicator"],
  category: "risky-actions",
  summary: "저장 버튼 대신 저장 상태를 한 줄로 알려 주기",
  description:
    "편집기 옆에 지금 내용이 저장됐는지 한 줄로 보여 주는 표시입니다. 입력하면 저장 중, 끝나면 방금 저장됨으로 바뀌고, 연결이 끊기면 이 기기에만 저장했다고 알려 나가도 되는지 고민하지 않게 합니다.",
  tags: [...BASE_TAGS, "role=status", "debounce", "offline"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/autosave-indicator/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/autosave-indicator/AutosaveIndicatorDemo").then(
      (m) => m.AutosaveIndicatorDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/autosave-indicator/AutosaveIndicatorThumbnail").then(
      (m) => m.AutosaveIndicatorThumbnail,
    ),
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
