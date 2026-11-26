import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const shareSheetPattern: Pattern = {
  slug: "share-sheet",

  name: "Share Sheet",
  nameKo: "공유 시트",
  aliases: ["공유하기", "공유 버튼", "Web Share", "navigator.share"],
  category: "reaction-share",
  summary: "기기의 공유 창 열기",
  description:
    "공유 버튼을 누르면 기기의 공유 창(navigator.share)을 열고, 지원하지 않는 브라우저에서는 링크 복사, 메시지, 이메일로 된 작은 시트를 보여 주는 패턴입니다. 아이콘은 사용자의 플랫폼에 맞춰 iOS의 상자와 화살표, 안드로이드의 세 점 모양을 씁니다.",
  tags: [...BASE_TAGS, "Web Share API", "role=dialog", "Fallback"],
  loadGuide: () => import("@/entities/pattern/catalog/share-sheet/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/share-sheet/ShareSheetDemo").then((m) => m.ShareSheetDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/share-sheet/ShareSheetThumbnail").then(
      (m) => m.ShareSheetThumbnail,
    ),
  sources: [
    {
      fileName: "ShareSheet.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/share-sheet/ShareSheet.tsx?raw"),
    },
    {
      fileName: "ShareSheetDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/share-sheet/ShareSheetDemo.tsx?raw"),
    },
  ],
};
