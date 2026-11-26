import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const nearbySharePattern: Pattern = {
  slug: "nearby-share",

  name: "Nearby Share",
  nameKo: "근처 공유",
  aliases: ["주변 기기 공유", "에어드롭", "nearby devices", "local share"],
  category: "reaction-share",
  summary: "가까운 기기로 바로 보내기",
  description:
    "주변에서 찾은 기기가 하나씩 나타나고, 고르면 상대가 수락하기를 기다렸다가 보냈어요나 거절됨을 알리는 흐름입니다. 기기 찾기는 운영체제가 하고 이 컴포넌트는 그 결과를 보여 주는 화면입니다.",
  tags: [...BASE_TAGS, "aria-live", "aria-describedby", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/nearby-share/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/nearby-share/NearbyShareDemo").then(
      (m) => m.NearbyShareDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/nearby-share/NearbyShareThumbnail").then(
      (m) => m.NearbyShareThumbnail,
    ),
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
