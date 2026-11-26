import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const spinnerPattern: Pattern = {
  slug: "spinner",

  name: "Spinner",
  nameKo: "스피너",
  aliases: ["로딩 아이콘", "Activity Indicator"],
  category: "loading",
  summary: "완료 시점을 알 수 없는 짧은 작업의 대기 상태",
  description:
    "작은 영역에서 얼마나 남았는지 계산하기 어려운 작업이 진행 중임을 표시합니다. 화면을 다시 불러오는 예시에서 작업이 완료되면 결과 안내로 바뀝니다.",
  tags: BASE_TAGS,
  loadGuide: () => import("@/entities/pattern/catalog/spinner/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/spinner/SpinnerDemo").then((m) => m.SpinnerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/spinner/SpinnerThumbnail").then((m) => m.SpinnerThumbnail),
  sources: [
    {
      fileName: "Spinner.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/spinner/Spinner.tsx?raw"),
    },
    {
      fileName: "SpinnerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/spinner/SpinnerDemo.tsx?raw"),
    },
  ],
};
