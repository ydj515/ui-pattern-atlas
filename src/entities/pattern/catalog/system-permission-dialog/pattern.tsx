import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SystemPermissionDialogThumbnail } from "@/entities/pattern/catalog/system-permission-dialog/SystemPermissionDialogThumbnail";

export const systemPermissionDialogPattern: Pattern = {
  slug: "system-permission-dialog",
  name: "System Permission Dialog",
  nameKo: "시스템 권한 요청",
  aliases: ["권한 팝업", "OS 권한 창", "permission prompt", "runtime permission"],
  category: "onboarding",
  summary: "기기에서 권한 결정을 받는 단계",
  description:
    "앱이 이유를 설명한 다음 기기가 직접 띄우는 권한 창입니다. 앱은 창의 모양을 바꿀 수 없고 설명 문구만 넣을 수 있으므로, 무엇에 쓰는지 한 문장으로 정확히 씁니다. 결과마다 다음 화면을 준비해 둡니다.",
  whenToUse: [
    "권한이 필요한 기능을 사용자가 직접 눌렀을 때",
    "앱의 권한 안내를 본 다음",
    "허용, 일부 허용, 거절의 결과를 모두 처리할 수 있을 때",
  ],
  whenNotToUse: [
    "앱을 열자마자 이유 없이",
    "권한 없이도 되는 기능에서",
    "거절하면 앱을 못 쓰게 막을 때",
  ],
  alternatives: [
    {
      name: "권한 요청 안내",
      slug: "permission-priming",
      reason: "기기가 묻기 전에 이유를 알릴 때",
    },
    { name: "일부만 허용", slug: "limited-access", reason: "고른 사진만 허용했을 때" },
  ],
  accessibility: [
    "예시는 role=alertdialog와 제목, 설명을 연결합니다.",
    "실제 기기 창은 운영체제가 접근성을 처리합니다.",
    "결과는 role=status로 화면에 알립니다.",
    "설명 문구는 무엇에 쓰는지 구체적으로 적습니다.",
  ],
  tags: [...BASE_TAGS, "Permissions", "role=alertdialog", "Purpose string"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/system-permission-dialog/SystemPermissionDialogDemo").then(
      (m) => m.SystemPermissionDialogDemo,
    ),
  Thumbnail: SystemPermissionDialogThumbnail,
  sources: [
    {
      fileName: "SystemPermissionDialog.tsx",
      role: "Component",
      load: () =>
        import("@/shared/ui/patterns/system-permission-dialog/SystemPermissionDialog.tsx?raw"),
    },
    {
      fileName: "SystemPermissionDialogDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/system-permission-dialog/SystemPermissionDialogDemo.tsx?raw"),
    },
  ],
};
