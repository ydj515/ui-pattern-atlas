import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const progressToastPattern: Pattern = {
  slug: "progress-toast",

  name: "Progress Toast",
  nameKo: "진행 알림",
  aliases: [
    "업로드 진행",
    "진행률 토스트",
    "다운로드 알림",
    "upload toast",
    "progress notification",
  ],
  category: "feedback",
  summary: "오래 걸리는 작업의 진행 알림",
  description:
    "업로드나 내보내기처럼 오래 걸리는 작업을 화면 구석의 토스트로 보여 주는 패턴입니다. 진행률을 확인하면서 다른 일을 계속할 수 있고, 필요하면 취소할 수 있습니다.",
  tags: [...BASE_TAGS, "role=status", "progressbar"],
  loadGuide: () => import("@/entities/pattern/catalog/progress-toast/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/progress-toast/ProgressToastDemo").then(
      (m) => m.ProgressToastDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/progress-toast/ProgressToastThumbnail").then(
      (m) => m.ProgressToastThumbnail,
    ),
  sources: [
    {
      fileName: "ProgressToast.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/progress-toast/ProgressToast.tsx?raw"),
    },
    {
      fileName: "ProgressToastDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/progress-toast/ProgressToastDemo.tsx?raw"),
    },
  ],
};
