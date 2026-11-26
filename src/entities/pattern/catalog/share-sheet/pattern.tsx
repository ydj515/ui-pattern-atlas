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
  whenToUse: [
    "글, 상품, 장소처럼 다른 사람에게 보낼 만한 콘텐츠",
    "모바일 사용자가 많을 때",
    "앱 공유 대상을 기기에 맡기고 싶을 때",
  ],
  whenNotToUse: [
    "특정 사람에게 보내는 기능(보내기와 전달 사용)",
    "주소만 복사하면 될 때(링크 복사 사용)",
    "공유할 주소가 없는 화면",
  ],
  alternatives: [
    { name: "링크 복사", slug: "copy-link", reason: "주소만 복사할 때" },
    { name: "QR 공유", slug: "qr-sharing", reason: "옆 사람에게 카메라로 넘길 때" },
  ],
  accessibility: [
    "공유 버튼은 글자와 아이콘을 함께 씁니다.",
    "대체 시트는 role=dialog이고 Esc로 닫힙니다.",
    "열리면 첫 대상에 포커스가 갑니다.",
    "기기 공유를 취소하면 대체 시트를 띄우지 않습니다.",
  ],
  tags: [...BASE_TAGS, "Web Share API", "role=dialog", "Fallback"],
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
