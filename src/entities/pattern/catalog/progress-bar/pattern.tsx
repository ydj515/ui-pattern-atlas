import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const progressBarPattern: Pattern = {
  slug: "progress-bar",

  name: "Progress Bar",
  nameKo: "프로그레스 바",
  aliases: ["진행 바", "진행률"],
  category: "loading",
  summary: "완료할 양을 알 때 현재 진행률을 표시",
  description:
    "파일 업로드 같은 작업의 진행률을 연속적인 막대로 표시합니다. 완료되면 100%와 결과를 함께 보여 줍니다.",
  tags: BASE_TAGS,
  loadGuide: () => import("@/entities/pattern/catalog/progress-bar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/progress-bar/ProgressBarDemo").then(
      (m) => m.ProgressBarDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/progress-bar/ProgressBarThumbnail").then(
      (m) => m.ProgressBarThumbnail,
    ),
  sources: [
    {
      fileName: "ProgressBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/progress-bar/ProgressBar.tsx?raw"),
    },
    {
      fileName: "ProgressBarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/progress-bar/ProgressBarDemo.tsx?raw"),
    },
  ],
};
