import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PermissionRecoveryThumbnail } from "@/entities/pattern/catalog/permission-recovery/PermissionRecoveryThumbnail";

export const permissionRecoveryPattern: Pattern = {
  slug: "permission-recovery",
  name: "Permission Recovery",
  nameKo: "권한 거절 후 복구",
  aliases: ["권한 다시 요청", "설정으로 안내", "permission denied recovery", "open settings"],
  category: "onboarding",
  summary: "거절 뒤 다시 켜는 길과 대체 행동",
  description:
    "권한을 거절한 뒤 무엇이 안 되는지 알리고, 기기가 아직 다시 물을 수 있으면 다시 허용하기를, 더는 묻지 않으면 설정 열기를 보여 주는 패턴입니다. 주소 직접 입력처럼 권한 없이 계속하는 길도 함께 둡니다.",
  whenToUse: [
    "위치, 카메라처럼 거절해도 다른 방법이 있는 기능",
    "사용자가 다시 그 기능을 누른 순간",
    "기기 설정으로 보내야 할 때",
  ],
  whenNotToUse: [
    "거절했는데 계속 다시 물을 때",
    "대체 방법 없이 막기만 할 때",
    "앱 전체를 막는 전면 화면",
  ],
  alternatives: [
    {
      name: "권한 거부 화면",
      slug: "permission-denied",
      reason: "화면 전체가 권한에 묶여 있을 때",
    },
    { name: "권한 요청 안내", slug: "permission-priming", reason: "처음 요청하기 전" },
  ],
  accessibility: [
    "안내 영역은 role=status로 나타날 때 읽힙니다.",
    "버튼 이름이 다시 허용하기와 설정 열기로 실제 동작을 말합니다.",
    "대체 행동 버튼은 aria-expanded로 입력칸이 열렸는지 알립니다.",
    "주소 입력칸에는 aria-label로 이름을 붙입니다.",
  ],
  tags: [...BASE_TAGS, "Permissions", "role=status", "Fallback"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/permission-recovery/PermissionRecoveryDemo").then(
      (m) => m.PermissionRecoveryDemo,
    ),
  Thumbnail: PermissionRecoveryThumbnail,
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
