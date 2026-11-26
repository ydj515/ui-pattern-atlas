import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const alertDialogPattern: Pattern = {
  slug: "alert-dialog",

  name: "Alert Dialog",
  nameKo: "얼럿 다이얼로그",
  aliases: ["경고창", "얼럿", "alert", "긴급 알림", "세션 만료 경고", "alertdialog"],
  category: "overlay",
  summary: "응답이 필요한 긴급한 알림 창",
  description:
    "세션 만료나 결제 실패처럼 사용자가 지금 알고 응답해야 하는 상황을 알리는 대화창입니다. 보통 사용자의 클릭이 아니라 시스템이 먼저 띄우며, 배경을 눌러서는 닫히지 않습니다.",
  tags: [...BASE_TAGS, "role=alertdialog", "dialog element"],
  loadGuide: () => import("@/entities/pattern/catalog/alert-dialog/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/alert-dialog/AlertDialogDemo").then(
      (m) => m.AlertDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/alert-dialog/AlertDialogThumbnail").then(
      (m) => m.AlertDialogThumbnail,
    ),
  sources: [
    {
      fileName: "AlertDialog.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/alert-dialog/AlertDialog.tsx?raw"),
    },
    {
      fileName: "AlertDialogDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/alert-dialog/AlertDialogDemo.tsx?raw"),
    },
  ],
};
