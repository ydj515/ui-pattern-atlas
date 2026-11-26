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
  whenToUse: [
    "초대 링크, 공유 주소처럼 보여 주고 복사하게 할 때",
    "주소를 확인한 뒤 복사해야 할 때",
    "공유 시트의 대체 방법",
  ],
  whenNotToUse: [
    "코드, 번호처럼 주소가 아닌 값(복사 버튼 사용)",
    "주소를 보여 줄 자리가 없을 때",
    "복사할 필요 없이 바로 열면 될 때",
  ],
  alternatives: [
    { name: "복사 버튼", slug: "copy-button", reason: "코드나 번호를 복사할 때" },
    { name: "공유 시트", slug: "share-sheet", reason: "기기의 앱으로 보낼 때" },
  ],
  accessibility: [
    "주소 칸은 label과 연결된 읽기 전용 입력입니다.",
    "포커스가 가면 주소 전체가 선택됩니다.",
    "결과는 role=status로 알리고 실패하면 직접 복사를 안내합니다.",
    "버튼은 글자로 복사라고 씁니다.",
  ],
  tags: [...BASE_TAGS, "Clipboard API", "readonly", "role=status"],
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
