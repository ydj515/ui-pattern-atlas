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
  whenToUse: [
    "광고 지면과 기능 버튼이 한 화면에 있을 때",
    "광고 표시 기준을 정할 때",
    "주요 버튼이 광고에 묻히는지 확인할 때",
  ],
  whenNotToUse: [
    "광고를 진짜 버튼과 같은 모양으로 만들 때",
    "광고 표시를 아주 작게 숨길 때",
    "광고를 콘텐츠 목록에 섞어 구분하지 않을 때",
  ],
  alternatives: [
    { name: "버튼", slug: "button", reason: "주요 행동을 분명히 하는 버튼 위계" },
    { name: "카드 그리드", slug: "card-grid", reason: "콘텐츠와 광고를 구분해 배치할 때" },
  ],
  accessibility: [
    "광고 영역에 광고라는 글자를 둡니다.",
    "진짜 기능 버튼 이름에 파일 크기처럼 구체적인 정보를 넣습니다.",
    "광고 링크와 기능 버튼을 화면 읽기에서도 구분되게 합니다.",
    "광고는 기능 버튼과 떨어뜨려 둡니다.",
  ],
  tags: ["다크 패턴"],
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
