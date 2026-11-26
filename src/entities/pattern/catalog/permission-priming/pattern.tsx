import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const permissionPrimingPattern: Pattern = {
  slug: "permission-priming",

  name: "Permission Priming",
  nameKo: "권한 요청 안내",
  aliases: ["권한 사전 안내", "프리퍼미션", "pre-permission", "soft ask"],
  category: "onboarding",
  summary: "시스템 요청 전에 권한이 필요한 이유 알리기",
  description:
    "알림, 위치, 카메라 같은 권한을 기기가 묻기 전에 앱이 먼저 왜 필요한지 알려 주는 화면입니다. 주문을 마친 직후처럼 필요한 순간에 보여 주고, 나중에를 고르면 시스템 요청을 띄우지 않아 기회를 아껴 둡니다.",
  tags: [...BASE_TAGS, "Permissions", "Notifications", "Timing"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/permission-priming/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/permission-priming/PermissionPrimingDemo").then(
      (m) => m.PermissionPrimingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/permission-priming/PermissionPrimingThumbnail").then(
      (m) => m.PermissionPrimingThumbnail,
    ),
  sources: [
    {
      fileName: "PermissionPriming.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/permission-priming/PermissionPriming.tsx?raw"),
    },
    {
      fileName: "PermissionPrimingDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/permission-priming/PermissionPrimingDemo.tsx?raw"),
    },
  ],
};
