import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { VersionHistoryThumbnail } from "@/entities/pattern/catalog/version-history/VersionHistoryThumbnail";

export const versionHistoryPattern: Pattern = {
  slug: "version-history",
  name: "Version History",
  nameKo: "버전 기록",
  aliases: ["이전 버전", "변경 기록", "revision history", "restore version"],
  category: "risky-actions",
  summary: "예전 버전을 미리 보고 새 버전으로 되돌리기",
  description:
    "저장된 버전을 최신순으로 누가 무엇을 바꿨는지와 함께 보여 주는 목록입니다. 예전 버전을 고르면 내용을 미리 보고, 되돌리면 그 내용을 새 버전으로 맨 위에 쌓아 지금 내용도 기록에 남깁니다.",
  whenToUse: [
    "여러 사람이 함께 고치는 문서",
    "실수로 지운 내용을 되찾아야 할 때",
    "누가 언제 바꿨는지 알아야 할 때",
  ],
  whenNotToUse: [
    "직전 동작 하나만 되돌리면 될 때(되돌리기 사용)",
    "되돌리면 이후 버전을 지워 버릴 때",
    "버전마다 무엇이 바뀌었는지 적지 않을 때",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "직전 동작만 되돌릴 때" },
    { name: "타임라인", slug: "timeline", reason: "시간 순서의 기록을 보여 줄 때" },
  ],
  accessibility: [
    "버전 목록은 fieldset과 legend로 묶은 라디오 버튼입니다.",
    "지금 버전은 배지 글자로 표시합니다.",
    '되돌린 결과는 role="status"로 읽어 줍니다.',
  ],
  tags: [...BASE_TAGS, "radio", "fieldset", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/version-history/VersionHistoryDemo").then(
      (m) => m.VersionHistoryDemo,
    ),
  Thumbnail: VersionHistoryThumbnail,
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
