import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const permissionRecoveryPattern: Pattern = {
  slug: "permission-recovery",

  name: "Permission Recovery",
  nameKo: "권한 거절 후 복구",
  aliases: ["권한 다시 요청", "설정으로 안내", "permission denied recovery", "open settings"],
  category: "onboarding",
  summary: "거절 뒤 다시 켜는 길과 대체 행동",
  description:
    "권한을 거절한 뒤 무엇이 안 되는지 알리고, 기기가 아직 다시 물을 수 있으면 다시 허용하기를, 더는 묻지 않으면 설정 열기를 보여 주는 패턴입니다. 주소 직접 입력처럼 권한 없이 계속하는 길도 함께 둡니다.",
  tags: [...BASE_TAGS, "Permissions", "role=status", "Fallback"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/permission-recovery/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/permission-recovery/PermissionRecoveryDemo").then(
      (m) => m.PermissionRecoveryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/permission-recovery/PermissionRecoveryThumbnail").then(
      (m) => m.PermissionRecoveryThumbnail,
    ),
  sources: [
    {
      fileName: "PermissionRecovery.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/permission-recovery/PermissionRecovery.tsx?raw"),
    },
    {
      fileName: "PermissionRecoveryDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/permission-recovery/PermissionRecoveryDemo.tsx?raw"),
    },
  ],
};
