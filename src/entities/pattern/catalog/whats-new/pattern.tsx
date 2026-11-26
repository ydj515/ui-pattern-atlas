import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const whatsNewPattern: Pattern = {
  slug: "whats-new",

  name: "What's New",
  nameKo: "새 기능 소개",
  aliases: ["업데이트 안내", "새로워진 점", "release notes", "changelog modal"],
  category: "onboarding",
  summary: "업데이트 후 바뀐 점 안내",
  description:
    "업데이트 직후 한 번, 바뀐 점을 세 개 이내로 쉬운 말로 보여 주는 패턴입니다. 닫은 뒤에도 새 소식 버튼으로 다시 볼 수 있습니다.",
  tags: [...BASE_TAGS, "role=dialog", "Release notes", "ul"],
  loadGuide: () => import("@/entities/pattern/catalog/whats-new/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/whats-new/WhatsNewDemo").then((m) => m.WhatsNewDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/whats-new/WhatsNewThumbnail").then(
      (m) => m.WhatsNewThumbnail,
    ),
  sources: [
    {
      fileName: "WhatsNew.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/whats-new/WhatsNew.tsx?raw"),
    },
    {
      fileName: "WhatsNewDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/whats-new/WhatsNewDemo.tsx?raw"),
    },
  ],
};
