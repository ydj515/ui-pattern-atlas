import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const alertBannerPattern: Pattern = {
  slug: "alert-banner",

  name: "Alert Banner",
  nameKo: "배너 알림",
  aliases: ["배너", "알림 배너", "공지", "callout", "alert", "notice"],
  category: "feedback",
  summary: "사용자가 닫기 전까지 남아 있는 페이지 상단 안내",
  description:
    "페이지나 섹션 상단에 고정적으로 표시되어 사용자가 확인하거나 조치할 때까지 남아 있는 안내 패턴입니다. 정보, 성공, 경고, 오류처럼 심각도에 따라 톤을 구분합니다.",
  tags: [...BASE_TAGS, "role=alert"],
  loadGuide: () => import("@/entities/pattern/catalog/alert-banner/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/alert-banner/AlertBannerDemo").then(
      (m) => m.AlertBannerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/alert-banner/AlertBannerThumbnail").then(
      (m) => m.AlertBannerThumbnail,
    ),
  sources: [
    {
      fileName: "AlertBanner.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/alert-banner/AlertBanner.tsx?raw"),
    },
    {
      fileName: "AlertBannerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/alert-banner/AlertBannerDemo.tsx?raw"),
    },
  ],
};
