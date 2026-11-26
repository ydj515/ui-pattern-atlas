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
  tags: [...BASE_TAGS, "Canvas", "Pointer"],
  loadGuide: () => import("@/entities/pattern/catalog/signature-pad/guide").then((m) => m.guide),
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
