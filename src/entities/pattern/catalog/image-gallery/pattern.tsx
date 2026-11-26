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
  tags: [...BASE_TAGS, "aria-current", "Images"],
  loadGuide: () => import("@/entities/pattern/catalog/image-gallery/guide").then((m) => m.guide),
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
