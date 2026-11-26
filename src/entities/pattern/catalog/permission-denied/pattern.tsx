import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const permissionDeniedPattern: Pattern = {
  slug: "permission-denied",

  name: "Permission Denied",
  nameKo: "권한 없음",
  aliases: ["접근 거부", "403", "권한 요청", "access denied", "forbidden"],
  category: "empty-error",
  summary: "볼 수 없는 이유와 요청 방법",
  description:
    "볼 권한이 없는 내용을 열었을 때 이유와 권한을 받는 방법을 알려 주는 패턴입니다. 누가 권한을 줄 수 있는지, 지금 어떤 계정으로 로그인했는지 보여 주고 요청까지 이어 줍니다.",
  tags: [...BASE_TAGS, "HTTP 403", "role=status"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/permission-denied/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/permission-denied/PermissionDeniedDemo").then(
      (m) => m.PermissionDeniedDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/permission-denied/PermissionDeniedThumbnail").then(
      (m) => m.PermissionDeniedThumbnail,
    ),
  sources: [
    {
      fileName: "PermissionDenied.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/permission-denied/PermissionDenied.tsx?raw"),
    },
    {
      fileName: "PermissionDeniedDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/permission-denied/PermissionDeniedDemo.tsx?raw"),
    },
  ],
};
