import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const safeAreaPattern: Pattern = {
  slug: "safe-area",

  name: "Safe Area",
  nameKo: "안전 영역",
  aliases: ["노치 여백", "홈 바 여백", "safe area insets", "viewport-fit"],
  category: "layout",
  summary: "노치와 홈 바를 피하는 여백",
  description:
    "휴대폰의 노치, 둥근 모서리, 홈 표시줄에 내용이 가리지 않도록 env(safe-area-inset-*)만큼 여백을 주는 패턴입니다.",
  tags: [...BASE_TAGS, "env()", "Mobile"],
  loadGuide: () => import("@/entities/pattern/catalog/safe-area/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/safe-area/SafeAreaDemo").then((m) => m.SafeAreaDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/safe-area/SafeAreaThumbnail").then(
      (m) => m.SafeAreaThumbnail,
    ),
  sources: [
    {
      fileName: "SafeArea.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/safe-area/SafeArea.tsx?raw"),
    },
    {
      fileName: "SafeAreaDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/safe-area/SafeAreaDemo.tsx?raw"),
    },
  ],
};
