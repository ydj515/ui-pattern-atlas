import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NearbyShareThumbnail } from "@/entities/pattern/catalog/nearby-share/NearbyShareThumbnail";

export const nearbySharePattern: Pattern = {
  slug: "nearby-share",
  name: "Nearby Share",
  nameKo: "근처 공유",
  aliases: ["주변 기기 공유", "에어드롭", "nearby devices", "local share"],
  category: "reaction-share",
  summary: "가까운 기기로 바로 보내기",
  description:
    "주변에서 찾은 기기가 하나씩 나타나고, 고르면 상대가 수락하기를 기다렸다가 보냈어요나 거절됨을 알리는 흐름입니다. 기기 찾기는 운영체제가 하고 이 컴포넌트는 그 결과를 보여 주는 화면입니다.",
  whenToUse: [
    "사진, 파일을 옆 사람의 기기로 보낼 때",
    "인터넷 없이 가까이서 보낼 때",
    "받는 사람이 수락해야 할 때",
  ],
  whenNotToUse: [
    "멀리 있는 사람(보내기와 전달 사용)",
    "기기 목록을 앱이 알 수 없는 웹 환경에서 흉내만 낼 때",
    "수락 없이 바로 보내는 설계",
  ],
  alternatives: [
    { name: "QR 공유", slug: "qr-sharing", reason: "카메라로 링크를 넘길 때" },
    { name: "공유 시트", slug: "share-sheet", reason: "기기 공유 기능을 그대로 쓸 때" },
  ],
  accessibility: [
    "찾는 중이라는 안내는 aria-live로 알립니다.",
    "기기 버튼마다 이름이 있고 상태를 aria-describedby로 연결합니다.",
    "기다리는 동안 다른 기기 버튼을 비활성으로 둡니다.",
    "나타나는 효과는 동작 줄이기에서 생략합니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "aria-describedby", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/nearby-share/NearbyShareDemo").then(
      (m) => m.NearbyShareDemo,
    ),
  Thumbnail: NearbyShareThumbnail,
  sources: [
    {
      fileName: "NearbyShare.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/nearby-share/NearbyShare.tsx?raw"),
    },
    {
      fileName: "NearbyShareDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/nearby-share/NearbyShareDemo.tsx?raw"),
    },
  ],
};
