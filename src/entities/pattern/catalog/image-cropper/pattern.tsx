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
  whenToUse: [
    "프로필 사진, 썸네일처럼 정해진 비율로 잘라야 할 때",
    "올린 사진의 얼굴 위치가 제각각일 때",
    "결과가 작게 보여 미리 확인이 필요할 때",
  ],
  whenNotToUse: [
    "사진 편집이 주된 기능일 때(전용 편집기 사용)",
    "원본 그대로 보여 줘야 할 때",
    "자동 얼굴 인식으로 충분할 때",
  ],
  alternatives: [{ name: "파일 업로드", slug: "file-upload", reason: "사진을 고르는 앞 단계" }],
  accessibility: [
    "자르기 영역은 포커스를 받고 화살표 키로 사진을 옮길 수 있어 포인터 없이도 씁니다.",
    "확대는 이름이 있는 range 입력입니다.",
    "사진은 항상 영역을 가득 채우도록 이동 범위를 제한합니다.",
    "어두운 바깥 영역은 장식이라 aria-hidden입니다.",
  ],
  tags: [...BASE_TAGS, "Pointer", "Keyboard"],
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
