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
  origin:
    "놀이공원의 회전목마(carousel)처럼 항목이 돌아가며 차례로 앞에 나온다는 데서 온 이름이에요.",
  whenToUse: [
    "행사 배너처럼 같은 자리에 번갈아 보여 줄 내용",
    "사진 몇 장을 차례로 보여 줄 때",
    "공간이 좁아 한 번에 하나만 보여야 할 때",
  ],
  whenNotToUse: [
    "꼭 봐야 하는 정보(뒤 슬라이드는 잘 안 봅니다)",
    "여러 개를 비교할 때(가로 스크롤이나 그리드 사용)",
    "슬라이드가 아주 많을 때",
  ],
  alternatives: [
    { name: "가로 스크롤", slug: "horizontal-scroll", reason: "여러 장을 함께 보이게 할 때" },
    { name: "이미지 갤러리", slug: "image-gallery", reason: "사진을 골라 크게 볼 때" },
  ],
  accessibility: [
    'WAI-ARIA carousel로 aria-roledescription과 "1 / 3, 겨울 세일" 같은 슬라이드 이름을 씁니다.',
    "자동 넘김은 멈춤 버튼이 있고 hover와 포커스 중에는 멈춥니다(WCAG 2.2.2).",
    "동작 줄이기 설정에서는 자동 넘김을 하지 않습니다.",
    "지금 슬라이드만 접근성 트리에 남기고, 점 버튼은 aria-current로 위치를 알립니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "WCAG 2.2.2"],
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
