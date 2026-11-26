import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const lockedContentPattern: Pattern = {
  slug: "locked-content",

  name: "Locked Content",
  nameKo: "잠긴 콘텐츠",
  aliases: ["페이월", "유료 콘텐츠", "멤버십 잠금", "paywall", "gated content"],
  category: "empty-error",
  summary: "이용 조건과 해제 방법 안내",
  description:
    "멤버십이나 결제가 필요한 내용의 앞부분만 보여 주고, 나머지를 보려면 무엇이 필요한지 알려 주는 패턴입니다. 무엇을 얻는지 미리 보여 줘 결정을 돕습니다.",
  tags: [...BASE_TAGS, "Paywall", "UX writing"],
  loadGuide: () => import("@/entities/pattern/catalog/locked-content/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/locked-content/LockedContentDemo").then(
      (m) => m.LockedContentDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/locked-content/LockedContentThumbnail").then(
      (m) => m.LockedContentThumbnail,
    ),
  sources: [
    {
      fileName: "LockedContent.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/locked-content/LockedContent.tsx?raw"),
    },
    {
      fileName: "LockedContentDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/locked-content/LockedContentDemo.tsx?raw"),
    },
  ],
};
