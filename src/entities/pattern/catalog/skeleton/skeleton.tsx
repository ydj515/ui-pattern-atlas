import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const skeletonPattern: Pattern = {
  slug: "skeleton",

  name: "Skeleton",
  nameKo: "스켈레톤",
  aliases: ["스켈레톤 로딩", "로딩 자리", "placeholder", "shimmer", "로딩"],
  category: "loading",
  summary: "실제 콘텐츠 모양의 회색 자리로 보여주는 로딩 상태",
  description:
    "데이터를 불러오는 동안 실제 콘텐츠와 비슷한 모양의 회색 블록을 먼저 보여주는 패턴입니다. 화면 구조를 미리 알려주어 기다림이 짧게 느껴지고, 로딩 후 레이아웃이 덜 흔들립니다.",
  tags: [...BASE_TAGS, "aria-busy", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/skeleton/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/skeleton/SkeletonDemo").then((m) => m.SkeletonDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/skeleton/SkeletonThumbnail").then(
      (m) => m.SkeletonThumbnail,
    ),
  sources: [
    {
      fileName: "Skeleton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/skeleton/Skeleton.tsx?raw"),
    },
    {
      fileName: "SkeletonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/skeleton/SkeletonDemo.tsx?raw"),
    },
  ],
};
