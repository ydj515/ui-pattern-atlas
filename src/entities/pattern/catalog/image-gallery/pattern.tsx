import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const imageGalleryPattern: Pattern = {
  slug: "image-gallery",
  name: "Image Gallery",
  nameKo: "이미지 갤러리",
  aliases: ["상품 사진", "썸네일 갤러리", "product gallery", "thumbnail grid"],
  category: "card-gallery",
  summary: "썸네일 격자",
  description:
    "큰 사진 아래에 작은 썸네일을 늘어놓고, 썸네일을 눌러 큰 사진을 바꾸는 패턴입니다. 상품의 여러 각도를 차례로 살펴볼 때 씁니다.",
  whenToUse: [
    "상품, 숙소처럼 사진 여러 장을 비교해 봐야 할 때",
    "사진 수가 몇 장에서 열 장 정도일 때",
    "어떤 사진을 보는지 위치를 알려 줄 때",
  ],
  whenNotToUse: [
    "사진을 화면 가득 크게 봐야 할 때(라이트박스 사용)",
    "사진이 아주 많을 때(그리드와 라이트박스 사용)",
    "사진 한 장뿐일 때",
  ],
  alternatives: [
    { name: "라이트박스", slug: "lightbox", reason: "크게 띄워 넘겨 볼 때" },
    { name: "캐러셀", slug: "carousel", reason: "한 장씩 넘길 때" },
  ],
  accessibility: [
    '썸네일은 "2 / 4, 머그컵 옆면과 손잡이"처럼 이름이 있는 버튼입니다.',
    "고른 썸네일은 aria-current와 테두리로 표시합니다.",
    "큰 사진은 대체 텍스트를 가진 이미지 역할을 합니다.",
    "썸네일 버튼은 aria-controls로 큰 사진과 연결됩니다.",
  ],
  tags: [...BASE_TAGS, "aria-current", "Images"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/image-gallery/ImageGalleryDemo").then(
      (m) => m.ImageGalleryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/image-gallery/ImageGalleryThumbnail").then(
      (m) => m.ImageGalleryThumbnail,
    ),
  sources: [
    {
      fileName: "ImageGallery.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/image-gallery/ImageGallery.tsx?raw"),
    },
    {
      fileName: "ImageGalleryDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/image-gallery/ImageGalleryDemo.tsx?raw"),
    },
  ],
};
