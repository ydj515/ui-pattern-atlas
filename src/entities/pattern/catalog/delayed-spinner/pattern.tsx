import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const delayedSpinnerPattern: Pattern = {
  slug: "delayed-spinner",

  name: "Delayed Spinner",
  nameKo: "지연 표시 로더",
  aliases: ["지연 스피너", "깜빡임 없는 로더", "spinner delay", "deferred loading"],
  category: "loading",
  summary: "짧은 대기에는 아예 안 뜨는 로더",
  description:
    "기다림이 일정 시간을 넘을 때만 스피너를 보여 주는 패턴입니다. 빨리 끝나는 요청에서는 스피너가 깜빡이지 않고, 한번 나타난 스피너는 최소 시간 동안 유지해 번쩍이지 않습니다.",
  tags: [...BASE_TAGS, "role=status", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/delayed-spinner/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/delayed-spinner/DelayedSpinnerDemo").then(
      (m) => m.DelayedSpinnerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/delayed-spinner/DelayedSpinnerThumbnail").then(
      (m) => m.DelayedSpinnerThumbnail,
    ),
  sources: [
    {
      fileName: "DelayedSpinner.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/delayed-spinner/DelayedSpinner.tsx?raw"),
    },
    {
      fileName: "DelayedSpinnerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/delayed-spinner/DelayedSpinnerDemo.tsx?raw"),
    },
  ],
};
