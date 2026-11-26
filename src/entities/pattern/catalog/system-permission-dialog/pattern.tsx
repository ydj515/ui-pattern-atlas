import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const systemPermissionDialogPattern: Pattern = {
  slug: "system-permission-dialog",

  name: "System Permission Dialog",
  nameKo: "시스템 권한 요청",
  aliases: ["권한 팝업", "OS 권한 창", "permission prompt", "runtime permission"],
  category: "onboarding",
  summary: "기기에서 권한 결정을 받는 단계",
  description:
    "앱이 이유를 설명한 다음 기기가 직접 띄우는 권한 창입니다. 앱은 창의 모양을 바꿀 수 없고 설명 문구만 넣을 수 있으므로, 무엇에 쓰는지 한 문장으로 정확히 씁니다. 결과마다 다음 화면을 준비해 둡니다.",
  tags: [...BASE_TAGS, "Permissions", "role=alertdialog", "Purpose string"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/system-permission-dialog/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/system-permission-dialog/SystemPermissionDialogDemo").then(
      (m) => m.SystemPermissionDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/system-permission-dialog/SystemPermissionDialogThumbnail").then(
      (m) => m.SystemPermissionDialogThumbnail,
    ),
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
