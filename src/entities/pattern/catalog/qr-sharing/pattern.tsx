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
  whenToUse: [
    "모임, 행사처럼 같은 자리에 있는 사람에게 링크를 넘길 때",
    "화면을 보여 주는 쪽이 데스크톱일 때",
    "입력하기 긴 주소",
  ],
  whenNotToUse: [
    "멀리 있는 사람에게 보낼 때(공유 시트 사용)",
    "42바이트를 넘는 긴 주소(라이브러리 사용 또는 주소 줄이기)",
    "코드만 있고 주소를 숨길 때",
  ],
  alternatives: [
    { name: "공유 시트", slug: "share-sheet", reason: "기기 앱으로 보낼 때" },
    { name: "근처 공유", slug: "nearby-share", reason: "가까운 기기로 바로 보낼 때" },
  ],
  accessibility: [
    "QR 코드는 role=img와 이름(모임 초대 QR 코드)을 가집니다.",
    "같은 주소를 글자로 함께 보여 줍니다.",
    "읽기 쉽도록 흰 바탕과 여백 4칸을 둡니다.",
    "코드 크기는 144px 이상으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "QR code", "SVG", "role=img"],
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
