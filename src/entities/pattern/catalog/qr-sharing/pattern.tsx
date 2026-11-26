import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const qrSharingPattern: Pattern = {
  slug: "qr-sharing",

  name: "QR Sharing",
  nameKo: "QR 공유",
  aliases: ["QR 코드", "큐알 초대", "QR code share", "scan to join"],
  category: "reaction-share",
  summary: "카메라로 읽는 코드로 링크 전달",
  description:
    "옆에 있는 사람이 카메라로 찍으면 링크가 열리는 QR 코드를 보여 주는 패턴입니다. 짧은 링크용 인코더를 컴포넌트 안에 넣어 라이브러리 없이 만들고, 읽지 못하는 사람을 위해 주소도 글자로 함께 둡니다.",
  tags: [...BASE_TAGS, "QR code", "SVG", "role=img"],
  loadGuide: () => import("@/entities/pattern/catalog/qr-sharing/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/qr-sharing/QrShareDemo").then((m) => m.QrShareDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/qr-sharing/QrShareThumbnail").then(
      (m) => m.QrShareThumbnail,
    ),
  sources: [
    {
      fileName: "QrShare.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/qr-sharing/QrShare.tsx?raw"),
    },
    {
      fileName: "QrShareDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/qr-sharing/QrShareDemo.tsx?raw"),
    },
  ],
};
