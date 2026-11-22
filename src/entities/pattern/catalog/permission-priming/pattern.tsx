import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PermissionPrimingThumbnail } from "@/entities/pattern/catalog/permission-priming/PermissionPrimingThumbnail";

export const permissionPrimingPattern: Pattern = {
  slug: "permission-priming",
  name: "Permission Priming",
  nameKo: "권한 요청 안내",
  aliases: ["권한 사전 안내", "프리퍼미션", "pre-permission", "soft ask"],
  category: "onboarding",
  summary: "시스템 요청 전에 권한이 필요한 이유 알리기",
  description:
    "알림, 위치, 카메라 같은 권한을 기기가 묻기 전에 앱이 먼저 왜 필요한지 알려 주는 화면입니다. 주문을 마친 직후처럼 필요한 순간에 보여 주고, 나중에를 고르면 시스템 요청을 띄우지 않아 기회를 아껴 둡니다.",
  whenToUse: [
    "배송 알림처럼 이유가 분명한 권한을 요청하기 직전",
    "한 번 거절하면 다시 묻기 어려운 권한",
    "권한이 없어도 쓸 수 있는 기능",
  ],
  whenNotToUse: [
    "앱을 열자마자 여러 권한을 한꺼번에 물을 때",
    "이유를 설명할 수 없는 권한",
    "나중에를 고를 수 없게 만들 때",
  ],
  alternatives: [
    {
      name: "시스템 권한 요청",
      slug: "system-permission-dialog",
      reason: "안내 다음에 기기가 묻는 단계",
    },
    { name: "권한 거절 후 복구", slug: "permission-recovery", reason: "이미 거절한 뒤의 안내" },
  ],
  accessibility: [
    "화면 전체에 제목으로 이름을 붙입니다.",
    "이유는 목록으로 나눠 한 줄씩 읽힙니다.",
    "허용과 나중에 두 버튼의 무게를 구분하되 둘 다 쉽게 누를 수 있습니다.",
    "아이콘은 장식이라 aria-hidden입니다.",
  ],
  tags: [...BASE_TAGS, "Permissions", "Notifications", "Timing"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/permission-priming/PermissionPrimingDemo").then(
      (m) => m.PermissionPrimingDemo,
    ),
  Thumbnail: PermissionPrimingThumbnail,
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
