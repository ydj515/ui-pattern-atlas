import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const copyLinkPattern: Pattern = {
  slug: "copy-link",

  name: "Copy Link",
  nameKo: "링크 복사",
  aliases: ["주소 복사", "초대 링크", "copy URL", "share link"],
  category: "reaction-share",
  summary: "주소를 복사하고 알려 주기",
  description:
    "읽기 전용 주소 칸과 복사 버튼을 나란히 두는 패턴입니다. 복사할 때 주소도 함께 선택해 클립보드가 막혀도 직접 복사할 수 있고, 결과를 2초 동안 알립니다.",
  tags: [...BASE_TAGS, "Clipboard API", "readonly", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/copy-link/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/copy-link/CopyLinkDemo").then((m) => m.CopyLinkDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/copy-link/CopyLinkThumbnail").then(
      (m) => m.CopyLinkThumbnail,
    ),
  sources: [
    {
      fileName: "CopyLink.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/copy-link/CopyLink.tsx?raw"),
    },
    {
      fileName: "CopyLinkDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/copy-link/CopyLinkDemo.tsx?raw"),
    },
  ],
};
