import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const carouselPattern: Pattern = {
  slug: "carousel",

  name: "Carousel",
  nameKo: "캐러셀",
  aliases: ["슬라이더", "배너 롤링", "slideshow", "banner carousel"],
  category: "card-gallery",
  summary: "옆으로 넘기는 카드 묶음",
  description:
    "배너나 사진을 한 장씩 보여 주고 이전, 다음 버튼과 점으로 넘기는 패턴입니다. 자동으로 넘길 때는 마우스를 올리거나 포커스하면 멈추고, 멈춤 버튼을 둡니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "WCAG 2.2.2"],
  loadGuide: () => import("@/entities/pattern/catalog/carousel/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/carousel/CarouselDemo").then((m) => m.CarouselDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/carousel/CarouselThumbnail").then(
      (m) => m.CarouselThumbnail,
    ),
  sources: [
    {
      fileName: "Carousel.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/carousel/Carousel.tsx?raw"),
    },
    {
      fileName: "CarouselDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/carousel/CarouselDemo.tsx?raw"),
    },
  ],
};
