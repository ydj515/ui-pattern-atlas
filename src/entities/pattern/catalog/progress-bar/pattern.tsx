import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ProgressBarThumbnail } from "@/entities/pattern/catalog/progress-bar/ProgressBarThumbnail";

export const progressBarPattern: Pattern = {
  slug: "progress-bar",

  name: "Progress Bar",
  nameKo: "프로그레스 바",
  aliases: ["진행 바", "진행률"],
  category: "loading",
  summary: "완료할 양을 알 때 현재 진행률을 표시",
  description:
    "파일 업로드 같은 작업의 진행률을 연속적인 막대로 표시합니다. 완료되면 100%와 결과를 함께 보여 줍니다.",
  whenToUse: ["총 작업량이 알려진 업로드나 처리 상태를 표시할 때"],
  whenNotToUse: ["현재 진행률을 측정할 수 없는 요청"],
  alternatives: [{ name: "스피너", slug: "spinner", reason: "진행률을 계산할 수 없는 짧은 작업" }],
  accessibility: ["네이티브 progress에 이름을 부여하고, 완료 시 텍스트로도 알립니다."],
  tags: BASE_TAGS,
  loadPreview: () =>
    import("@/entities/pattern/catalog/progress-bar/ProgressBarDemo").then(
      (m) => m.ProgressBarDemo,
    ),
  Thumbnail: ProgressBarThumbnail,
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
