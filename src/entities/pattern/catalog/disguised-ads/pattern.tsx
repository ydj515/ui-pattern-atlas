import { type Pattern } from "@/entities/pattern/model/pattern";

export const disguisedAdsPattern: Pattern = {
  slug: "disguised-ads",

  kind: "concept",
  name: "Disguised Ads",
  nameKo: "위장 광고",
  aliases: ["네이티브 광고 위장", "가짜 다운로드 버튼", "disguised advertising", "bait ad"],
  category: "dark-patterns",
  summary: "콘텐츠처럼 보이는 광고",
  description:
    "광고를 다운로드 버튼이나 기사처럼 꾸며 사용자가 진짜 기능으로 착각해 누르게 만드는 다크 패턴입니다. 바른 방법은 광고에 광고라고 쓰고 진짜 기능과 모양, 위치를 분명히 나누는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/disguised-ads/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/disguised-ads/DisguisedAdsDemo").then(
      (m) => m.DisguisedAdsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/disguised-ads/DisguisedAdsThumbnail").then(
      (m) => m.DisguisedAdsThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/disguised-ads/DisguisedAdsDemo.tsx?raw"),
};
