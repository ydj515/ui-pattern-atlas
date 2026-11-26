import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const imageCropperPattern: Pattern = {
  slug: "image-cropper",

  name: "Image Cropper",
  nameKo: "이미지 자르기",
  aliases: ["프로필 사진 자르기", "사진 영역 맞추기", "crop", "avatar editor"],
  category: "special-input",
  summary: "프로필 사진 영역 맞추기",
  description:
    "사진을 끌어 위치를 옮기고 확대 막대로 크기를 맞춰, 동그란 영역에 들어갈 부분을 고르는 패턴입니다. 작은 미리 보기로 실제로 보일 모습을 바로 확인합니다.",
  tags: [...BASE_TAGS, "Pointer", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/image-cropper/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/image-cropper/ImageCropperDemo").then(
      (m) => m.ImageCropperDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/image-cropper/ImageCropperThumbnail").then(
      (m) => m.ImageCropperThumbnail,
    ),
  sources: [
    {
      fileName: "ImageCropper.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/image-cropper/ImageCropper.tsx?raw"),
    },
    {
      fileName: "ImageCropperDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/image-cropper/ImageCropperDemo.tsx?raw"),
    },
  ],
};
