import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CopyButtonThumbnail } from "@/entities/pattern/catalog/copy-button/CopyButtonThumbnail";

export const copyButtonPattern: Pattern = {
  slug: "copy-button",
  name: "Copy Button",
  nameKo: "복사 버튼",
  aliases: ["클립보드 복사", "링크 복사", "copy to clipboard", "clipboard"],
  category: "button",
  summary: "눌러서 복사하고 결과 표시",
  description:
    '누르면 링크나 코드를 클립보드에 복사하고, 버튼 자리에서 잠깐 "복사됨"으로 바뀌어 결과를 알려 주는 패턴입니다. 복사가 막히면 그 사실도 알려 줍니다.',
  whenToUse: [
    "초대 링크, 쿠폰 코드, 설치 명령처럼 그대로 옮겨 쓸 글",
    "선택하기 어려운 긴 글",
    "휴대폰에서 길게 눌러 복사하기 번거로울 때",
  ],
  whenNotToUse: [
    "사용자가 고쳐 쓸 글(입력 필드로 보여 주기)",
    "공유가 목적일 때(공유 시트 사용)",
    "민감한 값(복사 후 남는 위험 고려)",
  ],
  alternatives: [
    { name: "아이콘 버튼", slug: "icon-button", reason: "자리가 좁을 때 복사 아이콘만" },
  ],
  accessibility: [
    '결과를 role="status"로 알리고, 버튼 글자도 "복사됨"으로 바꿉니다.',
    '복사가 막히면 "복사하지 못했어요"를 알려 직접 선택하게 합니다.',
    "읽기 전용 입력은 포커스하면 전체 선택돼 손으로도 복사할 수 있습니다.",
    "잠시 뒤 원래 상태로 돌아와 다시 누를 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "Clipboard API", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/copy-button/CopyButtonDemo").then((m) => m.CopyButtonDemo),
  Thumbnail: CopyButtonThumbnail,
  sources: [
    {
      fileName: "CopyButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/copy-button/CopyButton.tsx?raw"),
    },
    {
      fileName: "CopyButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/copy-button/CopyButtonDemo.tsx?raw"),
    },
  ],
};
