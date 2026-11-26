import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const presencePattern: Pattern = {
  slug: "presence",

  name: "Presence",
  nameKo: "접속 상태",
  aliases: ["온라인 표시", "자리 비움", "online status", "availability"],
  category: "indicator",
  summary: "온라인, 자리 비움 표시",
  description:
    "아바타 모서리에 작은 점을 붙여 그 사람이 지금 온라인인지, 자리를 비웠는지 보여 주는 패턴입니다. 내 상태는 직접 바꿀 수 있습니다.",
  tags: [...BASE_TAGS, "role=img", "Color independence"],
  loadGuide: () => import("@/entities/pattern/catalog/presence/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/presence/PresenceDemo").then((m) => m.PresenceDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/presence/PresenceThumbnail").then(
      (m) => m.PresenceThumbnail,
    ),
  sources: [
    {
      fileName: "Presence.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/presence/Presence.tsx?raw"),
    },
    {
      fileName: "PresenceDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/presence/PresenceDemo.tsx?raw"),
    },
  ],
};
