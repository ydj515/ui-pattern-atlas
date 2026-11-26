import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const signaturePadPattern: Pattern = {
  slug: "signature-pad",
  name: "Signature Pad",
  nameKo: "서명 패드",
  aliases: ["전자 서명", "손글씨 서명", "signature", "e-signature"],
  category: "special-input",
  summary: "손으로 그리는 서명",
  description:
    "손가락이나 마우스로 칸 안에 서명을 그려 이미지로 받는 패턴입니다. 지우고 다시 그릴 수 있고, 그리기 어려운 사람을 위해 이름 입력으로 대신할 수 있게 합니다.",
  whenToUse: [
    "계약, 동의서, 배송 수령처럼 서명이 필요한 곳",
    "태블릿이나 휴대폰에서 직접 서명받을 때",
    "서명 이미지를 문서에 붙여야 할 때",
  ],
  whenNotToUse: [
    "법적 효력이 필요한 서명(공인 전자서명이나 본인 인증 사용)",
    "체크박스 동의로 충분할 때",
    "대체 입력 없이 서명만 받을 때",
  ],
  alternatives: [
    { name: "체크박스", slug: "checkbox", reason: "동의만 받으면 될 때" },
    { name: "텍스트 필드", slug: "text-field", reason: "이름 입력으로 대신할 때" },
  ],
  accessibility: [
    '캔버스는 role="img"로 "서명, 비어 있음/서명함" 상태를 알립니다.',
    "그릴 수 없는 사람을 위해 이름 입력으로 대신하는 길을 같은 화면에 둡니다.",
    "포인터 캡처로 칸 밖으로 나가도 선이 끊기지 않고, 터치 스크롤과 충돌하지 않게 touch-action을 끕니다.",
    "서명하기 전에는 완료 버튼을 꺼 둡니다.",
  ],
  tags: [...BASE_TAGS, "Canvas", "Pointer"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/signature-pad/SignaturePadDemo").then(
      (m) => m.SignaturePadDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/signature-pad/SignaturePadThumbnail").then(
      (m) => m.SignaturePadThumbnail,
    ),
  sources: [
    {
      fileName: "SignaturePad.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/signature-pad/SignaturePad.tsx?raw"),
    },
    {
      fileName: "SignaturePadDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/signature-pad/SignaturePadDemo.tsx?raw"),
    },
  ],
};
