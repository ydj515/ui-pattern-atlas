import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const versionHistoryPattern: Pattern = {
  slug: "version-history",

  name: "Version History",
  nameKo: "버전 기록",
  aliases: ["이전 버전", "변경 기록", "revision history", "restore version"],
  category: "risky-actions",
  summary: "예전 버전을 미리 보고 새 버전으로 되돌리기",
  description:
    "저장된 버전을 최신순으로 누가 무엇을 바꿨는지와 함께 보여 주는 목록입니다. 예전 버전을 고르면 내용을 미리 보고, 되돌리면 그 내용을 새 버전으로 맨 위에 쌓아 지금 내용도 기록에 남깁니다.",
  tags: [...BASE_TAGS, "radio", "fieldset", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/version-history/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/version-history/VersionHistoryDemo").then(
      (m) => m.VersionHistoryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/version-history/VersionHistoryThumbnail").then(
      (m) => m.VersionHistoryThumbnail,
    ),
  sources: [
    {
      fileName: "VersionHistory.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/version-history/VersionHistory.tsx?raw"),
    },
    {
      fileName: "VersionHistoryDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/version-history/VersionHistoryDemo.tsx?raw"),
    },
  ],
};
